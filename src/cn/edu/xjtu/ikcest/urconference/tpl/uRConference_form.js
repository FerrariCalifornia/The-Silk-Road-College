//form定义
uRConferenceApp.form = {
	id : "uRConferenceForm",
	view : "form",
	scroll : false,
	width : 760,
	elements : [ {
		  "rows": [
		           {
		             "view": "text",
		             "id": "name",
		             "name": "name",
		             "label": "名称",
		             "labelWidth": "100",
		             "labelAlign": "right"
		           },
		           {
		             "view": "text",
		             "id": "alias",
		             "name": "alias",
		             "label": "别名",
		             "labelWidth": "100",
		             "labelAlign": "right"
		           },
		           {
		             "view": "datepicker",
		             "id": "date",
		             "name": "date",
		             "label": "日期",
		             "labelWidth": "100",
		             "labelAlign": "right"
		           },
		           {
		             "view": "text",
		             "id": "location",
		             "name": "location",
		             "label": "地点",
		             "labelWidth": "100",
		             "labelAlign": "right"
		           },
		           {
		             "view": "text",
		             "id": "code",
		             "name": "code",
		             "label": "代码",
		             "labelWidth": "100",
		             "labelAlign": "right"
		           }
		         ]
		       }
	],
	rules : {
		"name" : webix.rules.isNotEmpty,
		"alias" : webix.rules.isNotEmpty,
		"date" : webix.rules.isNotEmpty,
		"location" : webix.rules.isNotEmpty,
		"code" : webix.rules.isNotEmpty
	}

};
// 标题定义
uRConferenceApp.formWindowHeader = {
	id : "uRConferenceFormWindowHeader",
	view : "template",
	template : "u_r_conference",
	type : "header"
};

// 允许下拉的滚动表单
uRConferenceApp.scrollFormLayout = {
	rows : [

	{
		view : "scrollview",
		height : 400,
		width : 780,
		scroll : "y",
		body : uRConferenceApp.form
	}, {
		margin : 5,
		padding : 10,
		height : 60,
		css : "clean",
		cols : [ {}, {
			view : "button",
			width : 120,
			id : "uRConferenceSubmitButton",
			label : "保存",
			type : "form"
		}, {
			view : "button",
			width : 80,
			label : "取消",
			click : "$$('uRConferenceFormWindow').hide();"
		}

		]
	} ]
};

// 窗口定义
uRConferenceApp.formWindow = {
	id : "uRConferenceFormWindow",
	view : "window",
	modal : true,
	width : 820,
	position : "center",
	// body:uRConferenceApp.form,
	body : uRConferenceApp.scrollFormLayout,
	head : uRConferenceApp.formWindowHeader
};