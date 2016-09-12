wellbole.CrawlerRepoApp = webix.proto({
	name:"CrawlerRepo",
	$init:function(config){
		//交互url
		this.defaults.loadUrl = "/crawlerRepo/list.do";
		this.defaults.createUrl = "/crawlerRepo/create.do";
		this.defaults.updateUrl = "/crawlerRepo/update.do";
		this.defaults.deleteUrl = "/crawlerRepo/delete.do";
		//名称定义
		this.defaults.name = "CrawlerRepo";
		this.defaults.showName = "crawler_repo";
		this.defaults.mainTableId = "crawlerRepoMainTable";
		this.defaults.formId = "crawlerRepoForm";
		this.defaults.formWindowHeaderId = "crawlerRepoFormWindowHeader";
		this.defaults.submitButtonId = "crawlerRepoSubmitButton";
		this.defaults.formWindowId = "crawlerRepoFormWindow";
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
		this.defaults.exportToExcelFileName = "crawler_repo";
		this.defaults.exportToExcelSelectColumns = null;
	}
},wellbole.BaseApp);

var crawlerRepoApp = new wellbole.CrawlerRepoApp();

//定义页面准备就绪后首先进行的处理操作
webix.ready(function(){
	crawlerRepoApp.onReady();
});
