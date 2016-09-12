//form定义
srTopicApp.form = {
	id : "srTopicForm",
	view : "form",
	scroll : false,
	width : 760,
	elements : [ {
		  "margin": 10,
		  "rows": [
		    {
		      "cols": [
		        {
		          "view": "text",
		          "id": "topic_id",
		          "name": "topic_id",
		          "label": "主题id",
		          "labelWidth": "150",
		          "labelAlign": "right"
		        },
		        {
		          "view": "text",
		          "id": "topic_name",
		          "name": "topic_name",
		          "label": "主题名",
		          "labelWidth": "150",
		          "labelAlign": "right"
		        }
		      ]
		    },
		    {
		      "cols": [
		        {
		          "view": "text",
		          "id": "topic_keywords",
		          "name": "topic_keywords",
		          "label": "主题关键字",
		          "labelWidth": "150",
		          "labelAlign": "right"
		        },
		        {
		          "view": "richselect",
		          "id": "language_type",
		          "name": "language_type",
		          "label": "语言类型",
		          "options":[
			                 {id:"1",value:"中文"},
			                 {id:"2",value:"English"}
			                 ],
		          "labelWidth": "150",
		          "labelAlign": "right"
		        }
		      ]
		    },
		    {
		      "cols": [
		        {
		          "view": "text",
		          "id": "summary",
		          "name": "summary",
		          "label": "梗概",
		          "labelWidth": "150",
		          "labelAlign": "right"
		        },
		        {
		          "view": "text",
		          "id": "doc_num",
		          "name": "doc_num",
		          "label": "号码",
		          "labelWidth": "150",
		          "labelAlign": "right"
		        }
		      ]
		    },
		    {
		      "cols": [
		        {
		          "view": "text",
		          "id": "duration_time",
		          "name": "duration_time",
		          "label": "持续时间",
		          "labelWidth": "150",
		          "labelAlign": "right"
		        },
		        {
		          "view": "text",
		          "id": "median_time",
		          "name": "median_time",
		          "label": "median time",
		          "labelWidth": "150",
		          "labelAlign": "right"
		        }
		      ]
		    },
		    {
		      "cols": [
		        {
		          "view": "text",
		          "id": "mean_time",
		          "name": "mean_time",
		          "label": "平均时间",
		          "labelWidth": "150",
		          "labelAlign": "right"
		        },
		        {
		          "view": "text",
		          "id": "sen",
		          "name": "sen",
		          "label": "sen",
		          "labelWidth": "150",
		          "labelAlign": "right"
		        }
		      ]
		    }
		  ]
		}],
	rules : {
		"topic_id" : webix.rules.isNotEmpty,
		"topic_name" : webix.rules.isNotEmpty,
		"topic_keywords" : webix.rules.isNotEmpty,
		"language_type" : webix.rules.isNaturalNumberNullable,
		"summary" : webix.rules.isNotEmpty,
		"doc_num" : webix.rules.isNaturalNumberNullable,
		"duration_time" : webix.rules.isNaturalNumberNullable,
		"median_time" : webix.rules.isNotEmpty,
		"mean_time" : webix.rules.isNotEmpty,
		"sen" : webix.rules.isNotEmpty
	}

};
// 标题定义
srTopicApp.formWindowHeader = {
	id : "srTopicFormWindowHeader",
	view : "template",
	template : "sr_topic",
	type : "header"
};

// 允许下拉的滚动表单
srTopicApp.scrollFormLayout = {
	rows : [

	{
		view : "scrollview",
		height : 400,
		width : 780,
		scroll : "y",
		body : srTopicApp.form
	}, {
		margin : 5,
		padding : 10,
		height : 60,
		css : "clean",
		cols : [ {}, {
			view : "button",
			width : 120,
			id : "srTopicSubmitButton",
			label : "保存",
			type : "form"
		}, {
			view : "button",
			width : 80,
			label : "取消",
			click : "$$('srTopicFormWindow').hide();"
		}

		]
	} ]
};

// 窗口定义
srTopicApp.formWindow = {
	id : "srTopicFormWindow",
	view : "window",
	modal : true,
	width : 820,
	position : "center",
	// body:srTopicApp.form,
	body : srTopicApp.scrollFormLayout,
	head : srTopicApp.formWindowHeader
};