wellbole.SrTopicsResultApp = webix.proto({
	name:"SrTopicsResult",
	$init:function(config){
		//交互url
		this.defaults.loadUrl = "/srTopicsResult/list.do";
		this.defaults.createUrl = "/srTopicsResult/create.do";
		this.defaults.updateUrl = "/srTopicsResult/update.do";
		this.defaults.deleteUrl = "/srTopicsResult/delete.do";
		//名称定义
		this.defaults.name = "SrTopicsResult";
		this.defaults.showName = "sr_topics_result";
		this.defaults.mainTableId = "srTopicsResultMainTable";
		this.defaults.formId = "srTopicsResultForm";
		this.defaults.formWindowHeaderId = "srTopicsResultFormWindowHeader";
		this.defaults.submitButtonId = "srTopicsResultSubmitButton";
		this.defaults.formWindowId = "srTopicsResultFormWindow";
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
		this.defaults.exportToExcelFileName = "sr_topics_result";
		this.defaults.exportToExcelSelectColumns = null;
	}
},wellbole.BaseApp);

var srTopicsResultApp = new wellbole.SrTopicsResultApp();

//定义页面准备就绪后首先进行的处理操作
webix.ready(function(){
	srTopicsResultApp.onReady();
});
