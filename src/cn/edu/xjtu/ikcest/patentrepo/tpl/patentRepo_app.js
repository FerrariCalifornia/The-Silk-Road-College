wellbole.PatentRepoApp = webix.proto({
	name:"PatentRepo",
	$init:function(config){
		//交互url
		this.defaults.loadUrl = "/patentRepo/list.do";
		this.defaults.createUrl = "/patentRepo/create.do";
		this.defaults.updateUrl = "/patentRepo/update.do";
		this.defaults.deleteUrl = "/patentRepo/delete.do";
		//名称定义
		this.defaults.name = "PatentRepo";
		this.defaults.showName = "专利";
		this.defaults.mainTableId = "patentRepoMainTable";
		this.defaults.formId = "patentRepoForm";
		this.defaults.formWindowHeaderId = "patentRepoFormWindowHeader";
		this.defaults.submitButtonId = "patentRepoSubmitButton";
		this.defaults.formWindowId = "patentRepoFormWindow";
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
		this.defaults.exportToExcelFileName = "patent_repo";
		this.defaults.exportToExcelSelectColumns = null;
	}
},wellbole.BaseApp);

var patentRepoApp = new wellbole.PatentRepoApp();

//定义页面准备就绪后首先进行的处理操作
webix.ready(function(){
	patentRepoApp.onReady();
});
