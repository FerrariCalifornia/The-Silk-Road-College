wellbole.OaRepoApp = webix.proto({
	name:"OaRepo",
	$init:function(config){
		//交互url
		this.defaults.loadUrl = "/oaRepo/list.do";
		this.defaults.createUrl = "/oaRepo/create.do";
		this.defaults.updateUrl = "/oaRepo/update.do";
		this.defaults.deleteUrl = "/oaRepo/delete.do";
		//名称定义
		this.defaults.name = "OaRepo";
		this.defaults.showName = "oa_repo";
		this.defaults.mainTableId = "oaRepoMainTable";
		this.defaults.formId = "oaRepoForm";
		this.defaults.formWindowHeaderId = "oaRepoFormWindowHeader";
		this.defaults.submitButtonId = "oaRepoSubmitButton";
		this.defaults.formWindowId = "oaRepoFormWindow";
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
		this.defaults.exportToExcelFileName = "oa_repo";
		this.defaults.exportToExcelSelectColumns = null;
	}
},wellbole.BaseApp);

var oaRepoApp = new wellbole.OaRepoApp();

//定义页面准备就绪后首先进行的处理操作
webix.ready(function(){
	oaRepoApp.onReady();
});
