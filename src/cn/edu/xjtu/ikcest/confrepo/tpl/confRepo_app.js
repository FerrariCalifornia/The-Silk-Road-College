wellbole.ConfRepoApp = webix.proto({
	name:"ConfRepo",
	$init:function(config){
		//交互url
		this.defaults.loadUrl = "/confRepo/list.do";
		this.defaults.createUrl = "/confRepo/create.do";
		this.defaults.updateUrl = "/confRepo/update.do";
		this.defaults.deleteUrl = "/confRepo/delete.do";
		//名称定义
		this.defaults.name = "ConfRepo";
		this.defaults.showName = "会议";
		this.defaults.mainTableId = "confRepoMainTable";
		this.defaults.formId = "confRepoForm";
		this.defaults.formWindowHeaderId = "confRepoFormWindowHeader";
		this.defaults.submitButtonId = "confRepoSubmitButton";
		this.defaults.formWindowId = "confRepoFormWindow";
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
		this.defaults.exportToExcelFileName = "conf_repo";
		this.defaults.exportToExcelSelectColumns = null;
	}
},wellbole.BaseApp);

var confRepoApp = new wellbole.ConfRepoApp();

//定义页面准备就绪后首先进行的处理操作
webix.ready(function(){
	confRepoApp.onReady();
});
