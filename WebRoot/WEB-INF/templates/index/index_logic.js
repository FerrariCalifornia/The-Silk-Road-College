function fullscreenchange() {	
	if(screenfull.isFullscreen){
		$$("btnFullScreen").define({icon:"compress", tooltip:"按ESC键退出全屏显示模式"});
	}else{
		$$("btnFullScreen").define({icon:"arrows-alt", tooltip:"点击进入全屏显示模式"});
	}
	$$("btnFullScreen").refresh();
}


/**
 * 到达指定的菜单。
 * @param title
 * @param details
 * @param url
 */
function go(title,details,url){
	webix.$$("title").parse({title: title, details: details});
	$$("mainFrame").load(url);
}

function gohome(){
	var url= "${base}${welcome_path}";
	go("欢迎界面","欢迎界面，常用功能列表",url);
}

/**
 * 给控件绑定事件处理函数
 */
app.on("appInit",function(){
	var that = this;
	$$("btnShowMenu").hide();
	$$("btnLogout").attachEvent("onItemClick", app.action("doLogout"));
	if(app.userType !== 'CAS'){
		$$("btnChangePassword").attachEvent("onItemClick", app.action("showChangePasswordWindow"));
	}
	$$("btnGoHome").attachEvent("onItemClick",app.action("goHome"));
	/**
	 * 监听全屏事件
	 */
	if (screenfull.enabled) {
		document.addEventListener(screenfull.raw.fullscreenchange, fullscreenchange);
		//全屏显示
		$$("btnFullScreen").attachEvent("onItemClick",function(){
			//不支持，直接返回
			if (!screenfull.enabled) {
				return;
			}
			if(screenfull.isFullscreen){//已经是全屏状态，
				screenfull.exit();
				$$("btnFullScreen").define({icon:"arrows-alt", tooltip:"点击进入全屏显示模式"});
			}else{
				//不是全屏
				screenfull.request();
				$$("btnFullScreen").define({icon:"compress", tooltip:"按ESC键退出全屏显示模式"});
			}
			$$("btnFullScreen").refresh();
		});
	}
	//每隔10秒去服务器端取一下记录。
	webix.delay(function(){
		that.trigger("fetchNewMessage");
	}, that, null, 15000);
});

app.on("dataInit",function(){
	var that = this;
	var appMenu = $$("app:menu");
	
	appMenu.load("${base}/index/jsonMenuTree.do");
	appMenu.attachEvent("onAfterLoad", function(){
		var firstId = appMenu.getFirstId();
		appMenu.open(firstId);
		that.selectTreeBranchId = firstId;
	});
});

app.on("goHome",function(){
	//$$("mainFrame").load("${base}${welcome_path}");
	gohome();
});

app.on("fetchNewMessage",function(){
	var that = this;
	webix.ajax().get("${base}/sys/message/fetchMessage.do", {}, function(text, xml, xhr){
		//response
		var ret = JSON.parse(text);
		if(!ret.ok){
			//登录超时
			if(ret.needLogin){
				that.trigger("loginTimeout");
				return;
			}else{
				webix.alert({
		    		type:"alert-error",
		    		title: "发生错误",
		    		ok: "我知道了",
		    		text: ret.msg
		    	});
				return;
			}
		}
		//获取消息成功
	    if(ret.ok && ret.code == 200){
	    	var msgArray = webix.toArray(ret.data);
	    	msgArray.each(function(item){
	    		if(item.action == "showBox"){
	    			webix.alert({
			    		type:"alert-info",
			    		title: "您有新的消息",
			    		ok: "我知道了",
			    		text: item.msg
			    	});
	    		}else{
	    			webix.message(item.msg);
	    		}
	    	});
	    }
	});
	webix.delay(function(){
		that.trigger("fetchNewMessage");
	}, that, null, 15000);
});


/**
 * 登录超时
 */
app.on("loginTimeout",function(){
	webix.alert({
		type:"alert-error",
		title:"登录超时",
		ok: "我知道了",
		text:"登录超时，需要重新登录",
		callback:function(result){ 
			top.location.href='${base}/logout.do';
	    }
	});
});

/**
 * 退出系统
 */
app.on("doLogout",function(){
	webix.confirm({
		title:"退出确认",
		ok:"是", 
		cancel:"否",
		type : "confirm-warning",
		text:"你确定要退出系统吗？",
		callback:function(result){ //setting callback
			if(true == result){
				//更新界面
				top.location.href='${base}/logout.do';
			}
	   }
	});
});


/**
 * 打开修改密码窗口
 */
app.on("showChangePasswordWindow",function(){
	webix.ui(app.changPasswordWindow).show();
	$$("btnDoChangePassword").attachEvent("onItemClick", app.action("doChangePassword"));
});

/**
 * 执行修改密码操作
 */
app.on("doChangePassword",function(){
	var oldPassword = $$('oldPassword').getValue();
	var newPassword = $$('newPassword').getValue();
	var confirmPassword = $$('confirmPassword').getValue();
	if(!(newPassword === confirmPassword)){
		webix.alert({
    		type:"alert-error",
    		title: "密码输入错误",
    		ok: "我知道了",
    		text: "两次输入的新密码不一致，请重新输入"
    	});
		$$('newPassowrd').focus();
	}
	
	webix.ajax().post("${base}/sys/user/updatePassword.do", {oldPassword:oldPassword,newPassword:newPassword,confirmPassword:confirmPassword}, function(text, xml, xhr){
		//response
		var ret = JSON.parse(text);
	    if(ret.ok){
	    	webix.alert({
	    		type:"alert-info",
	    		title: "更新密码成功",
	    		ok: "我知道了",
	    		text: ret.msg
	    	});
	    	$$('changPasswordWindow').close();
	    }else{
	    	webix.alert({
	    		type:"alert-error",
	    		title: "更新密码失败",
	    		ok: "我知道了",
	    		text: ret.msg
	    	});
	    	$$("oldPassowrd").focus();
	    }
	});
});


