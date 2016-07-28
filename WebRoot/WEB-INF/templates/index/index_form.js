//修改密码from
app.changPasswordForm = {
	id : "changPasswordForm",
	view : "form",
	scroll : false,
	width : 460,
	elements : [ {
		id : "oldPassword",
		name : "oldPassword",
		view : "text",
		type : "password",
		label : "原密码　:"
	}, {
		id : "newPassword",
		name : "newPassword",
		view : "text",
		type : "password",
		label : "新密码　:"
	}, {
		id : "confirmPassword",
		name : "confirmPassword",
		view : "text",
		type : "password",
		label : "确认密码:"
	}, {
		margin : 5,
		cols : [
		{}
		
		,{
			view : "button",
			width : 180,
			
			id: "btnDoChangePassword",
			label : "修改密码",
			type : "form"
		}
		, {
			view : "button",
			width : 120,
			label : "　取消　",
			click : "$$('changPasswordWindow').close();"
		}
		]
	} ],
	rules:{
		"oldPassowrd": webix.rules.isNotEmpty,
		"newPassowrd": webix.rules.isNotEmpty,
		"confirmPassowrd": webix.rules.isNotEmpty}
};
// 修改密码window窗口
app.changPasswordWindow = {
	id : "changPasswordWindow",
	view : "window",
	modal : true,
	width : 480,
	position : "center",
	head : { view:"template", template:"修改密码", type:"header",css:"wellbole_header"},
	body : app.changPasswordForm
};