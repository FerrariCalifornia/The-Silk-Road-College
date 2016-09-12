wellbole.SrPostTopicApp = webix.proto({
	name:"SrPostTopic",
	$init:function(config){
		//交互url
		this.defaults.loadUrl = "/srPostTopic/list.do";
		this.defaults.createUrl = "/srPostTopic/create.do";
		this.defaults.updateUrl = "/srPostTopic/update.do";
		this.defaults.deleteUrl = "/srPostTopic/delete.do";
		//名称定义
		this.defaults.name = "SrPostTopic";
		this.defaults.showName = "sr_post_topic";
		this.defaults.mainTableId = "srPostTopicMainTable";
		this.defaults.formId = "srPostTopicForm";
		this.defaults.formWindowHeaderId = "srPostTopicFormWindowHeader";
		this.defaults.submitButtonId = "srPostTopicSubmitButton";
		this.defaults.formWindowId = "srPostTopicFormWindow";
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
		this.defaults.exportToExcelFileName = "sr_post_topic";
		this.defaults.exportToExcelSelectColumns = null;
	}
},wellbole.BaseApp);

var srPostTopicApp = new wellbole.SrPostTopicApp();

//定义页面准备就绪后首先进行的处理操作
webix.ready(function(){
	srPostTopicApp.onReady();
});
