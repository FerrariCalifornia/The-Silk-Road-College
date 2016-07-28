//应用定义
webix.i18n.setLocale("zh-CN");

var app = {
		name:"index",
		//debug:true,	//comment for production
		userType:"${loginStrategy}",
		init:function(){
			webix.ui(app.ui);
			webix.ui(app.topPopup);
			//webix.ui(app.leftSideMenu).show();
			app.trigger("appInit");
			app.trigger("dataInit");
		},
		trigger:function(name){
			app.callEvent(name, arguments);
		},
		on:function(name, code){
			app.attachEvent(name, code);
		},
		action:function(name){
			var data = arguments;
			return function(){
				app.trigger(name, data);
			}
		},
		utils:{}
	};

webix.extend(app, webix.EventSystem);
webix.ready(app.init);

//确保主页在最顶层
if (top.location != self.location)top.location=self.location;