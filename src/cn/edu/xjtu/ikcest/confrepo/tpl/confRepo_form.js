//form定义
confRepoApp.form = {
	id : "confRepoForm",
	view : "form",
	scroll : false,
	width : 1060,
	elements : [ {
		"margin" : 10,
		"rows" : [

		{
			"cols" : [ {
				"view" : "text",
				"id" : "conference_name",
				"name" : "conference_name",
				"label" : "会议名",
				"labelWidth" : "100",
				"labelAlign" : "right"
			} ]
		},  {
			"cols" : [

			{
				"view" : "text",
				"id" : "language",
				"name" : "language",
				"label" : "语言",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}

			,

			{
				"view" : "datepicker",
				"id" : "start_date",
				"name" : "start_date",
				"label" : "起始日期",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}, {
				"view" : "datepicker",
				"id" : "end_date",
				"name" : "end_date",
				"label" : "截止日期",
				"labelWidth" : "100",
				"labelAlign" : "right"
			} ]
		},
		
		 {
			"cols" : [ {
				"view" : "text",
				"id" : "country_region",
				"name" : "country_region",
				"label" : "国家地区",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}, {
				"view" : "datepicker",
				"id" : "manuscript_last_day",
				"name" : "manuscript_last_day",
				"label" : "最新手稿",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}, {
				"view" : "datepicker",
				"id" : "abstract_last_day",
				"name" : "abstract_last_day",
				"label" : "最新摘要",
				"labelWidth" : "100",
				"labelAlign" : "right"
			} ]
		},
		{
			"cols" : [ {
				"view" : "text",
				"id" : "organizer",
				"name" : "organizer",
				"label" : "组织者",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}, {
				"view" : "text",
				"id" : "eligibility",
				"name" : "eligibility",
				"label" : "资格",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}

			]
		},
		
		
		
		{
			"cols" : [

			{
				"view" : "text",
				"id" : "other_contacts",
				"name" : "other_contacts",
				"label" : "其他联系人",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}, {
				"view" : "text",
				"id" : "location",
				"name" : "location",
				"label" : "地点",
				"labelWidth" : "100",
				"labelAlign" : "right"
			} ]
		}, {
			"cols" : [ {
				"view" : "text",
				"id" : "broad_theme",
				"name" : "broad_theme",
				"label" : "大主题",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}, {
				"view" : "text",
				"id" : "classify",
				"name" : "classify",
				"label" : "分类",
				"labelWidth" : "100",
				"labelAlign" : "right"
			} ]
		}, {
			"cols" : [ {
				"view" : "text",
				"id" : "subject",
				"name" : "subject",
				"label" : "主题",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}, {
				"view" : "text",
				"id" : "range_",
				"name" : "range_",
				"label" : "范围",
				"labelWidth" : "100",
				"labelAlign" : "right"
			} ]
		}, {
			"cols" : [ {
				"view" : "text",
				"id" : "publication_name",
				"name" : "publication_name",
				"label" : "出版名",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}, {
				"view" : "text",
				"id" : "url",
				"name" : "url",
				"label" : "url地址",
				"labelWidth" : "100",
				"labelAlign" : "right"
			} ]
		}, {
			"cols" : [ {
				"view" : "datepicker",
				"id" : "update_",
				"name" : "update_",
				"label" : "更新",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}, {
				"view" : "text",
				"id" : "include_num",
				"name" : "include_num",
				"label" : "包含数量",
				"labelWidth" : "100",
				"labelAlign" : "right"
			} ]
		}, {
			"cols" : [ {
				"view" : "text",
				"id" : "DB",
				"name" : "DB",
				"label" : "DB",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}, {
				"view" : "datepicker",
				"id" : "important_date",
				"name" : "important_date",
				"label" : "重要日期",
				"labelWidth" : "100",
				"labelAlign" : "right"
			} ]
		} ]
	} ],
	rules : {
	// "conference_name": webix.rules.isNotEmpty
	// ,"organizer": webix.rules.isNotEmpty
	// ,"language": webix.rules.isNotEmpty
	// ,"eligibility": webix.rules.isNotEmpty
	// ,"start_date": webix.rules.isNotEmpty
	// ,"end_date": webix.rules.isNotEmpty
	// ,"location": webix.rules.isNotEmpty
	// ,"country_region": webix.rules.isNotEmpty
	// ,"manuscript_last_day": webix.rules.isNotEmpty
	// ,"abstract_last_day": webix.rules.isNotEmpty
	// ,"other_contacts": webix.rules.isNotEmpty
	// ,"broad_theme": webix.rules.isNotEmpty
	// ,"classify": webix.rules.isNotEmpty
	// ,"subject": webix.rules.isNotEmpty
	// ,"range_": webix.rules.isNotEmpty
	// ,"publication_name": webix.rules.isNotEmpty
	// ,"url": webix.rules.isNotEmpty
	// ,"update_": webix.rules.isNotEmpty
	// ,"include_num": webix.rules.isNotEmpty
	// ,"db": webix.rules.isNotEmpty
	// ,"important_date": webix.rules.isNotEmpty
	// ,"created_at": webix.rules.isNotEmpty
	}

};
// 标题定义
confRepoApp.formWindowHeader = {
	id : "confRepoFormWindowHeader",
	view : "template",
	template : "conf_repo",
	type : "header"
};

// 允许下拉的滚动表单
confRepoApp.scrollFormLayout = {
	rows : [

	{
		view : "scrollview",
		height : 450,
		width : 1080,
		scroll : "y",
		body : confRepoApp.form
	}, {
		margin : 5,
		padding : 10,
		height : 60,
		css : "clean",
		cols : [ {}, {
			view : "button",
			width : 120,
			id : "confRepoSubmitButton",
			label : "保存",
			type : "form"
		}, {
			view : "button",
			width : 80,
			label : "取消",
			click : "$$('confRepoFormWindow').hide();"
		}

		]
	} ]
};

// 窗口定义
confRepoApp.formWindow = {
	id : "confRepoFormWindow",
	view : "window",
	modal : true,
	width : 1120,
	position : "center",
	// body:confRepoApp.form,
	body : confRepoApp.scrollFormLayout,
	head : confRepoApp.formWindowHeader
};