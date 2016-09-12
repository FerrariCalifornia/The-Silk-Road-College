//form定义
patentRepoApp.form = {
	id : "patentRepoForm",
	view : "form",
	scroll : false,
	width : 1060,
	elements : [

	{
		"margin" : 10,
		"rows" : [ {
			"cols" : [ {
				"view" : "textarea",
				"id" : "title",
				"name" : "title",
				"label" : "专利名称",
				"labelWidth" : "150",
				"labelAlign" : "right"
			} ]
		}, {
			"cols" : [

			{
				"view" : "text",
				"id" : "patent_number",
				"name" : "patent_number",
				"label" : "专利号",
				"labelWidth" : "150",
				"labelAlign" : "right"
			}, {
				"view" : "text",
				"id" : "inventor",
				"name" : "inventor",
				"label" : "发明人",
				"labelWidth" : "150",
				"labelAlign" : "right"
			} ]
		}, {
			"cols" : [ {
				"view" : "text",
				"id" : "assignee_name_or_code",
				"name" : "assignee_name_or_code",
				"label" : "专利权人名称或代码",
				"labelWidth" : "150",
				"labelAlign" : "right"
			}, {
				"view" : "text",
				"id" : "pan",
				"name" : "pan",
				"label" : "德温特入藏登记号",
				"labelWidth" : "150",
				"labelAlign" : "right"
			} ]
		}, {
			"cols" : [ {
				"view" : "textarea",
				"id" : "summary",
				"name" : "summary",
				"label" : "摘要",
				"labelWidth" : "150",
				"labelAlign" : "right"
			} ]
		},
		
		{
			"cols" : [ {
				"view" : "textarea",
				"id" : "extension_summary",
				"name" : "extension_summary",
				"label" : "技术焦点摘要",
				"labelWidth" : "150",
				"labelAlign" : "right"
			} ]
		},
		{
			"cols" : [ {
				"view" : "textarea",
				"id" : "euivalent_summary",
				"name" : "euivalent_summary",
				"label" : "等同摘要",
				"labelWidth" : "150",
				"labelAlign" : "right"
			}]
		},
			
		{
			"cols" : [{
				"view" : "text",
				"id" : "class_code",
				"name" : "class_code",
				"label" : "德温特分类号",
				"labelWidth" : "150",
				"labelAlign" : "right"
			} ,{
				"view" : "text",
				"id" : "derwent_registry_nums",
				"name" : "derwent_registry_nums",
				"label" : "Derwent注册号",
				"labelWidth" : "150",
				"labelAlign" : "right"
			}]
		}, {
			"cols" : [ {
				"view" : "text",
				"id" : "manual_code",
				"name" : "manual_code",
				"label" : "手工代码",
				"labelWidth" : "150",
				"labelAlign" : "right"
			}, {
				"view" : "text",
				"id" : "ipc",
				"name" : "ipc",
				"label" : "国际专利分类号",
				"labelWidth" : "150",
				"labelAlign" : "right"
			} ]
		}, {
			"cols" : [ {
				"view" : "text",
				"id" : "patent_details",
				"name" : "patent_details",
				"label" : "专利详细信息",
				"labelWidth" : "150",
				"labelAlign" : "right"
			} ]
		}, 
		 {
			"cols" : [ {
				"view" : "text",
				"id" : "app_details",
				"name" : "app_details",
				"label" : "申请详细信息和日期",
				"labelWidth" : "150",
				"labelAlign" : "right"
			} ]
		}, 
		{
			"cols" : [ {
				"view" : "text",
				"id" : "further_app_details",
				"name" : "further_app_details",
				"label" : "更多申请详细信息",
				"labelWidth" : "150",
				"labelAlign" : "right"
			}, {
				"view" : "text",
				"id" : "priority_app_info_date",
				"name" : "priority_app_info_date",
				"label" : "优先权申请信息和日期",
				"labelWidth" : "150",
				"labelAlign" : "right"
			} ]
		}, {
			"cols" : [ {
				"view" : "text",
				"id" : "designated_states",
				"name" : "designated_states",
				"label" : "指定州/国家/地区",
				"labelWidth" : "150",
				"labelAlign" : "right"
			}, {
				"view" : "text",
				"id" : "field_of_search",
				"name" : "field_of_search",
				"label" : "检索字段",
				"labelWidth" : "150",
				"labelAlign" : "right"
			} ]
		}, {
			"cols" : [ {
				"view" : "text",
				"id" : "citing_patents",
				"name" : "citing_patents",
				"label" : "被引用专利",
				"labelWidth" : "150",
				"labelAlign" : "right"
			}, {
				"view" : "text",
				"id" : "citing_reference",
				"name" : "citing_reference",
				"label" : "被引用文献",
				"labelWidth" : "150",
				"labelAlign" : "right"
			} ]
		}, {
			"cols" : [ {
				"view" : "text",
				"id" : "dn",
				"name" : "dn",
				"label" : "DCR标示号",
				"labelWidth" : "150",
				"labelAlign" : "right"
			}, {
				"view" : "text",
				"id" : "mn",
				"name" : "mn",
				"label" : "Markush号",
				"labelWidth" : "150",
				"labelAlign" : "right"
			} ]
		}, {
			"cols" : [ {
				"view" : "text",
				"id" : "ring_index_nums",
				"name" : "ring_index_nums",
				"label" : "环系索引号",
				"labelWidth" : "150",
				"labelAlign" : "right"
			}, {
				"view" : "text",
				"id" : "cited_inventor",
				"name" : "cited_inventor",
				"label" : "被引用发明人",
				"labelWidth" : "150",
				"labelAlign" : "right"
			} ]
		} ]
	}

	],
	rules : {
	// "patent_number": webix.rules.isNotEmpty
	// ,"title": webix.rules.isNotEmpty
	// ,"inventor": webix.rules.isNotEmpty
	// ,"assignee_name_or_code": webix.rules.isNotEmpty
	// ,"pan": webix.rules.isNotEmpty
	// ,"summary": webix.rules.isNotEmpty
	// ,"extension_summary": webix.rules.isNotEmpty
	// ,"euivalent_summary": webix.rules.isNotEmpty
	// ,"class_code": webix.rules.isNotEmpty
	// ,"manual_code": webix.rules.isNotEmpty
	// ,"ipc": webix.rules.isNotEmpty
	// ,"patent_details": webix.rules.isNotEmpty
	// ,"app_details": webix.rules.isNotEmpty
	// ,"further_app_details": webix.rules.isNotEmpty
	// ,"priority_app_info_date": webix.rules.isNotEmpty
	// ,"designated_states": webix.rules.isNotEmpty
	// ,"field_of_search": webix.rules.isNotEmpty
	// ,"citing_patents": webix.rules.isNotEmpty
	// ,"citing_reference": webix.rules.isNotEmpty
	// ,"dn": webix.rules.isNotEmpty
	// ,"mn": webix.rules.isNotEmpty
	// ,"ring_index_nums": webix.rules.isNotEmpty
	// ,"cited_inventor": webix.rules.isNotEmpty
	// ,"derwent_registry_nums": webix.rules.isNotEmpty
	}

};
// 标题定义
patentRepoApp.formWindowHeader = {
	id : "patentRepoFormWindowHeader",
	view : "template",
	template : "patent_repo",
	type : "header"
};

// 允许下拉的滚动表单
patentRepoApp.scrollFormLayout = {
	rows : [

	{
		view : "scrollview",
		height : 450,
		width : 1080,
		scroll : "y",
		body : patentRepoApp.form
	}, {
		margin : 5,
		padding : 10,
		height : 60,
		css : "clean",
		cols : [ {}, {
			view : "button",
			width : 120,
			id : "patentRepoSubmitButton",
			label : "保存",
			type : "form"
		}, {
			view : "button",
			width : 80,
			label : "取消",
			click : "$$('patentRepoFormWindow').hide();"
		}

		]
	} ]
};

// 窗口定义
patentRepoApp.formWindow = {
	id : "patentRepoFormWindow",
	view : "window",
	modal : true,
	width : 1120,
	position : "center",
	// body:patentRepoApp.form,
	body : patentRepoApp.scrollFormLayout,
	head : patentRepoApp.formWindowHeader
};