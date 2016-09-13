webix.type(webix.ui.tree, {
	name:"menuTree2",
	height: 40,

	icon:function(obj, common){
		var html = "";
		var open = "";
		for (var i=1; i<=obj.$level; i++){
			if (i==obj.$level && obj.$count){
				var dir = obj.open?"down":"right";
				html+="<span class='"+open+" webix_icon fa-angle-"+dir+"'></span>";
		    }
		}
		return html;
	},
	folder:function(obj, common){
		if(obj.icon)
			return "<span class='webix_icon icon fa-"+obj.icon+"'></span>";
		return "";
	}
});

webix.protoUI({
	name:"icon",
	$skin:function(){
		this.defaults.height = webix.skin.$active.inputHeight;
	},
	defaults:{
		template:function(obj){
			var html = "<button style='height:100%;width:100%;line-height:"+obj.aheight+"px' class='webix_icon_button'>";
			html += "<span class='webix_icon fa-"+obj.icon+"'></span>";
			if(obj.value)
				html += "<span class='webix_icon_count'>"+obj.value+"</span>";
			html += "</button>";
			return html;
		},
		width:33
	},
	_set_inner_size:function(){

	}
}, webix.ui.button);

app.topPopup={
		view: "popup",
		id: "topPopup",

		width: 160,
		body:{
			rows:[
					{ view:"button", id:"btnChangePassword", type:"icon", icon:"pencil", label:"修改密码", width:150, hidden: (app.userType === 'CAS') },
					{ view:"button", id:"btnLogout",type:"icon", icon:"sign-out", label:"退出系统 ", width:150}
				]

		}
	};
app.topToolbar = {
		id:"topToolbar",
		view:"toolbar", 
		height:56,
		css:"header",
		borderless:true,
		elements:[
		    //{view: "template", type:"clean",  template:'<img src="${base}/images/${logo}"  style="height: 46px;width:auto;" border="0">',  borderless:true,height:46,width:305},
			{view: "label", css:"header big_size",label: "${application!}", width: 460},
			{},
			//子系统切换
		    { view:"label", css:"header username",label: "当前用户：${user.username!''}", width:300, align:"right"},
		    { view:"icon", id:"btnGoHome",icon:"home", width:46, tooltip:"点击返回首页"},
		    { view:"icon", id:"btnFullScreen",icon:"arrows-alt", width:46, tooltip:"点击进入全屏显示模式", hidden:!screenfull.enabled},
		    {view: "icon", icon: "user",  width: 46, popup: "topPopup", tooltip:"修改密码／退出系统"}
		    
		]
	};
//底部区域
app.footer	= 	{
	view:"template",
	type:"clean",
	template:"<div style='text-align:center; vertical-align:top;padding:0px; background-color: #FFF !important;'>${copyright} &nbsp;&nbsp; 建设与维护： ${company}</div>",
	height:22 
};

app.selectTreeBranchId = null;
app.accordionMenu={
		view: "tree",
		id: "app:menu",
		type: "menuTree2",
		css: "menu",
		activeTitle: true,
		select: true,
		scroll:"y",
		borderless : true,
		width:156,
		tooltip: {
			template: function(obj){
				return obj.$count?"":obj.value;
			}
		},
		on:{
			onBeforeSelect:function(id){
				return !this.getItem(id).$count;
			},
			onAfterSelect:function(id){
				//this.$scope.show("./"+id);
				var item = this.getItem(id);
				if(item.description){
					webix.$$("title").parse({title: item.value, details: item.description});
				}else{
					webix.$$("title").parse({title: item.value, details: item.value});
				}
				if(item.type == "menu"){
					$$("mainFrame").load("${base}"+item.url);
				}else{
					$$("mainFrame").load("${base}/rewrite.do?url="+ encodeURIComponent(item.url));
				}
				
			},
			onItemDblClick:function(id){
				var item = this.getItem(id);
				if(item.description){
					webix.$$("title").parse({title: item.value, details: item.description});
				}else{
					webix.$$("title").parse({title: item.value, details: item.value});
				}
				$$("mainFrame").load("${base}"+item.url);
			}
			,
			//分支被打开
			onAfterOpen :function(id){
				//上次选择的分支不为空，上次选择的不是当前节点，并且上次选择的分支是打开状态
				if(app.selectTreeBranchId != null 
				   &&app.selectTreeBranchId != id
				   && this.isBranchOpen(app.selectTreeBranchId)){
					//关闭上次打开的分支。
					this.close(app.selectTreeBranchId);
				}
				//更新选择的分支id
				app.selectTreeBranchId = id;
			}
		}
	};
app.menuTitle = {
		view : "template",
		type : "clean",
		height : 40,
		width: 156,
		template : "  功能菜单",
		css: "webix_menu_title",
		borderless : true
	};
app.appMenuOpened = true;
app.menuTitleBox = {
	    margin: 0,
	    height:40,
	    css:"webix_menu_box",
	    borderless : true,
	    width:156,
	    cols:[
	        //app.menuTitle
	        {
	        	view:"button", type:"icon", icon:"angle-double-down", label:"隐藏菜单栏 ",
				//view: "icon", icon: "angle-double-left",
				css: "webix_menu_icon",
				tooltip:"隐藏菜单栏",
				width:156,
				click: function(){
					$$("menuBox").hide();
				    app.appMenuOpened=false;
				    $$("btnShowMenu").show();
				}
			}
	    ]
	};
app.menuBox = {
		id: "menuBox",
		type: "clean",
		css: "webix_ui_style",
		width:156,
		hidden:false,
		borderless : true,
		rows:[
             app.menuTitleBox
		     ,app.accordionMenu
		]
	};

//主显示区域
app.mainFrame 	=	{	
	view:"iframe", id:"mainFrame", src:"${base}${welcome_path}",borderless:false,waitMessage:true
	//view:"iframe", id:"mainFrame", css: "mainFrame", src:"${base}${welcome_path}",borderless:false,margin:20,waitMessage:true
};

app.body = {
		borderless : true,
		rows:[
		    {
		    	margin: 0,
		    	borderless : true,
		    	type:"clean",
		    	height: 40,
		    	cols:[
					  {		id: "btnShowMenu",
						    view:"button", type:"icon", icon:"angle-double-right", label:"显示菜单栏 ",
							//view: "icon", icon: "angle-double-right",
							//borderless : true,
							css: "webix_menu_icon",
							tooltip:"显示菜单栏",
							height: 49,
							width:151,
							click: function(){
								if(!app.appMenuOpened){
									$$("menuBox").show();
									app.appMenuOpened=true;
									$$("btnShowMenu").hide();
								}
							}
					  },
		    	      { height: 40, id: "title", css: "title", template: "<div class='header'>#title#</div><div class='details'>( #details# )</div>", data: {details: "${details}",title: "${title}"}}
		    	]
		    },
			app.mainFrame
		]
	};


//布局
app.ui = {
	id: "layout",
	type: "clean",
	css: "webix_ui_style",
	minWidth:1024,
	rows:[
		app.topToolbar
		,{
			borderless : true,
			cols:[
				app.menuBox,
				app.body
			]
		}
		,app.footer
	]
};