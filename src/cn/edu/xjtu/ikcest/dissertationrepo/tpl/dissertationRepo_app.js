wellbole.DissertationRepoApp = webix.proto({
	name:"DissertationRepo",
	$init:function(config){
		//交互url
		this.defaults.loadUrl = "/dissertationRepo/list.do";
		this.defaults.createUrl = "/dissertationRepo/create.do";
		this.defaults.updateUrl = "/dissertationRepo/update.do";
		this.defaults.deleteUrl = "/dissertationRepo/delete.do";
		//名称定义
		this.defaults.name = "DissertationRepo";
		this.defaults.showName = "论文";
		this.defaults.mainTableId = "dissertationRepoMainTable";
		this.defaults.formId = "dissertationRepoForm";
		this.defaults.formWindowHeaderId = "dissertationRepoFormWindowHeader";
		this.defaults.submitButtonId = "dissertationRepoSubmitButton";
		this.defaults.formWindowId = "dissertationRepoFormWindow";
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
		this.defaults.exportToExcelFileName = "dissertation_repo";
		this.defaults.exportToExcelSelectColumns = null;
	}
},wellbole.BaseApp);

var dissertationRepoApp = new wellbole.DissertationRepoApp();

//定义页面准备就绪后首先进行的处理操作
webix.ready(function(){
	dissertationRepoApp.onReady();
});
