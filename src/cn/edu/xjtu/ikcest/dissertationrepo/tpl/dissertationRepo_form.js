//form定义
dissertationRepoApp.form = {
	id : "dissertationRepoForm",
	view : "form",
	scroll : false,
	width : 1060,
	elements : [ {
		"margin" : 10,
		"rows" : [ {
			"cols" : [ {
				"view" : "text",
				"id" : "title",
				"name" : "title",
				"label" : "论文题目",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}

			]
		}, {
			"cols" : [

			{
				"view" : "text",
				"id" : "title_spelling",
				"name" : "title_spelling",
				"label" : "题目拼音",
				"labelWidth" : "100",
				"labelAlign" : "right"
			} ]
		}, {
			"cols" : [ {
				"view" : "text",
				"id" : "foreign_title",
				"name" : "foreign_title",
				"label" : "外文题目",
				"labelWidth" : "100",
				"labelAlign" : "right"
			},

			]
		}, {
			"cols" : [ {
				"view" : "text",
				"id" : "name",
				"name" : "name",
				"label" : "作者姓名",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}, {
				"view" : "text",
				"id" : "name_spelling",
				"name" : "name_spelling",
				"label" : "拼音姓名",
				"labelWidth" : "100",
				"labelAlign" : "right"
			} ]
		},

		{
			"cols" : [  {
		          "view": "text",
		          "id": "nationality",
		          "name": "nationality",
		          "label": "作者国籍",
		          "labelWidth": "100",
		          "labelAlign": "right"
		        } , {
					"view" : "text",
					"id" : "student_id",
					"name" : "student_id",
					"label" : "作者学号",
					"labelWidth" : "100",
					"labelAlign" : "right"
				}]
		}, {
			"cols" : [ {
				"view" : "text",
				"id" : "university",
				"name" : "university",
				"label" : "学校名称",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}, {
				"view" : "text",
				"id" : "school",
				"name" : "school",
				"label" : "作者学院",
				"labelWidth" : "100",
				"labelAlign" : "right"
			} ]
		}, {
			"cols" : [ {
				"view" : "text",
				"id" : "discipline",
				"name" : "discipline",
				"label" : "学科名称",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}, {
				"view" : "text",
				"id" : "major",
				"name" : "major",
				"label" : "作者专业",
				"labelWidth" : "100",
				"labelAlign" : "right"
			} ]
		}, {
			"cols" : [ {
				"view" : "text",
				"id" : "degree",
				"name" : "degree",
				"label" : "作者学位",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}, {
				"view" : "text",
				"id" : "degree_type",
				"name" : "degree_type",
				"label" : "学位类型",
				"labelWidth" : "100",
				"labelAlign" : "right"
			} ]
		}, {
			"cols" : [ {
				"view" : "datepicker",
				"id" : "oral_defense_date",
				"name" : "oral_defense_date",
				"label" : "答辩日期",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}, {
				"view" : "text",
				"id" : "secret_level",
				"name" : "secret_level",
				"label" : "保密级别",
				"labelWidth" : "100",
				"labelAlign" : "right"
			} ]
		}, {
			"cols" : [ {
				"view" : "datepicker",
				"id" : "submitting_date",
				"name" : "submitting_date",
				"label" : "提交日期",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}, {
				"view" : "text",
				"id" : "mentor_name",
				"name" : "mentor_name",
				"label" : "导师姓名",
				"labelWidth" : "100",
				"labelAlign" : "right"
			} ]
		}, {
			"cols" : [ {
				"view" : "text",
				"id" : "mentor_work_unit",
				"name" : "mentor_work_unit",
				"label" : "导师单位",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}, {
				"view" : "text",
				"id" : "chinese_keywords",
				"name" : "chinese_keywords",
				"label" : "中文关键词",
				"labelWidth" : "100",
				"labelAlign" : "right"
			} ]
		}, {
			"cols" : [ {
				"view" : "text",
				"id" : "english_keywords",
				"name" : "english_keywords",
				"label" : "英文关键词",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}, {
				"view" : "text",
				"id" : "total_pages",
				"name" : "total_pages",
				"label" : "论文总页码",
				"labelWidth" : "100",
				"labelAlign" : "right"
			} ]
		}, {
			"cols" : [ {
				"view" : "text",
				"id" : "num_of_bibliography",
				"name" : "num_of_bibliography",
				"label" : "参考文献总数",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}, {
				"view" : "text",
				"id" : "call_num",
				"name" : "call_num",
				"label" : "索书号",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}

			]
		}, {
			"cols" : [ {
				"view" : "text",
				"id" : "discipline_code",
				"name" : "discipline_code",
				"label" : "学科代码",
				"labelWidth" : "100",
				"labelAlign" : "right"
			}, {
				"view" : "datepicker",
				"id" : "last_updated",
				"name" : "last_updated",
				"label" : "最近更新",
				"labelWidth" : "100",
				"labelAlign" : "right"
			} ]
		},

		{
			"cols" : [

			{
				"view" : "textarea",
				"id" : "chinese_abstract",
				"name" : "chinese_abstract",
				"label" : "中文摘要",
				"labelWidth" : "100",
				"labelAlign" : "right"
			} ]
		}, {
			"cols" : [ {
				"view" : "textarea",
				"id" : "english_abstract",
				"name" : "english_abstract",
				"label" : "英文摘要",
				"labelWidth" : "100",
				"labelAlign" : "right"
			},

			]
		}, {
			"cols" : [

			{
				"view" : "text",
				"id" : "full_text",
				"name" : "full_text",
				"label" : "全文",
				"labelWidth" : "100",
				"labelAlign" : "right"
			} ]
		} ]
	}

	],
	rules : {
	// "title": webix.rules.isNotEmpty
	// ,"title_spelling": webix.rules.isNotEmpty
	// ,"name": webix.rules.isNotEmpty
	// ,"name_spelling": webix.rules.isNotEmpty
	// ,"student_id": webix.rules.isNotEmpty
	// ,"university": webix.rules.isNotEmpty
	// ,"school": webix.rules.isNotEmpty
	// ,"discipline": webix.rules.isNotEmpty
	// ,"major": webix.rules.isNotEmpty
	// ,"degree": webix.rules.isNotEmpty
	// ,"degree_type": webix.rules.isNotEmpty
	// ,"oral_defense_date": webix.rules.isNotEmpty
	// ,"secret_level": webix.rules.isNotEmpty
	// ,"submitting_date": webix.rules.isNotEmpty
	// ,"foreign_title": webix.rules.isNotEmpty
	// ,"mentor_name": webix.rules.isNotEmpty
	// ,"mentor_work_unit": webix.rules.isNotEmpty
	// ,"chinese_keywords": webix.rules.isNotEmpty
	// ,"english_keywords": webix.rules.isNotEmpty
	// ,"total_pages": webix.rules.isNaturalNumberNullable
	// ,"num_of_bibliography": webix.rules.isNaturalNumberNullable
	// ,"chinese_abstract": webix.rules.isNotEmpty
	// ,"english_abstract": webix.rules.isNotEmpty
	// ,"nationality": webix.rules.isNotEmpty
	// ,"discipline_code": webix.rules.isNotEmpty
	// ,"last_updated": webix.rules.isNotEmpty
	// ,"call_num": webix.rules.isNotEmpty
	// ,"full_text": webix.rules.isNotEmpty
	}

};
// 标题定义
dissertationRepoApp.formWindowHeader = {
	id : "dissertationRepoFormWindowHeader",
	view : "template",
	template : "dissertation_repo",
	type : "header"
};

// 允许下拉的滚动表单
dissertationRepoApp.scrollFormLayout = {
	rows : [

	{
		view : "scrollview",
		height : 450,
		width : 1080,
		scroll : "y",
		body : dissertationRepoApp.form
	}, {
		margin : 5,
		padding : 10,
		height : 60,
		css : "clean",
		cols : [ {}, {
			view : "button",
			width : 120,
			id : "dissertationRepoSubmitButton",
			label : "保存",
			type : "form"
		}, {
			view : "button",
			width : 80,
			label : "取消",
			click : "$$('dissertationRepoFormWindow').hide();"
		}

		]
	} ]
};

// 窗口定义
dissertationRepoApp.formWindow = {
	id : "dissertationRepoFormWindow",
	view : "window",
	modal : true,
	width : 1120,
	position : "center",
	// body:dissertationRepoApp.form,
	body : dissertationRepoApp.scrollFormLayout,
	head : dissertationRepoApp.formWindowHeader
};