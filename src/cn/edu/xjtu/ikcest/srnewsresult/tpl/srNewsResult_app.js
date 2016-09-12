wellbole.SrNewsResultApp = webix.proto({
	name:"SrNewsResult",
	$init:function(config){
		//交互url
		this.defaults.loadUrl = "/srNewsResult/list.do";
		this.defaults.createUrl = "/srNewsResult/create.do";
		this.defaults.updateUrl = "/srNewsResult/update.do";
		this.defaults.deleteUrl = "/srNewsResult/delete.do";
		//名称定义
		this.defaults.name = "SrNewsResult";
		this.defaults.showName = "sr_news_result";
		this.defaults.mainTableId = "srNewsResultMainTable";
		this.defaults.formId = "srNewsResultForm";
		this.defaults.formWindowHeaderId = "srNewsResultFormWindowHeader";
		this.defaults.submitButtonId = "srNewsResultSubmitButton";
		this.defaults.formWindowId = "srNewsResultFormWindow";
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
		this.defaults.exportToExcelFileName = "sr_news_result";
		this.defaults.exportToExcelSelectColumns = null;
	}
},wellbole.BaseApp);

var srNewsResultApp = new wellbole.SrNewsResultApp();

//定义页面准备就绪后首先进行的处理操作
webix.ready(function(){
	srNewsResultApp.onReady();
});
