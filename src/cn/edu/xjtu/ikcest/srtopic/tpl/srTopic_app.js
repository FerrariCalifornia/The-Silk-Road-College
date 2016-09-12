wellbole.SrTopicApp = webix.proto({
	name:"SrTopic",
	$init:function(config){
		//交互url
		this.defaults.loadUrl = "/srTopic/list.do";
		this.defaults.createUrl = "/srTopic/create.do";
		this.defaults.updateUrl = "/srTopic/update.do";
		this.defaults.deleteUrl = "/srTopic/delete.do";
		//名称定义
		this.defaults.name = "SrTopic";
		this.defaults.showName = "sr_topic";
		this.defaults.mainTableId = "srTopicMainTable";
		this.defaults.formId = "srTopicForm";
		this.defaults.formWindowHeaderId = "srTopicFormWindowHeader";
		this.defaults.submitButtonId = "srTopicSubmitButton";
		this.defaults.formWindowId = "srTopicFormWindow";
		//标题控制（固定的标题，默认不使用）
		this.defaults.useTextTitle=false;
		//行为控制（新建／更新后是否需要隐藏／重新加载reload）
		this.defaults.hiddenAfterCreated=true;
		this.defaults.reloadMainTableAfterCreated=true;
		this.defaults.hiddenAfterUpdated=true;
		this.defaults.reloadMainTableAfterUpdated=true;
		this.defaults.useSearch=true;
		//导出控制
		this.defaults.exportToExcel = false;
		this.defaults.exportToExcelFileName = "sr_topic";
		this.defaults.exportToExcelSelectColumns = null;
	}
},wellbole.BaseApp);

var srTopicApp = new wellbole.SrTopicApp();

//定义页面准备就绪后首先进行的处理操作
webix.ready(function(){
	srTopicApp.onReady();
});
