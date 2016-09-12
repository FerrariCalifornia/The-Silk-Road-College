wellbole.URLiteratureApp = webix.proto({
	name:"URLiterature",
	$init:function(config){
		//交互url
		this.defaults.loadUrl = "/uRLiterature/list.do";
		this.defaults.createUrl = "/uRLiterature/create.do";
		this.defaults.updateUrl = "/uRLiterature/update.do";
		this.defaults.deleteUrl = "/uRLiterature/delete.do";
		//名称定义
		this.defaults.name = "URLiterature";
		this.defaults.showName = "文献";
		this.defaults.mainTableId = "uRLiteratureMainTable";
		this.defaults.formId = "uRLiteratureForm";
		this.defaults.formWindowHeaderId = "uRLiteratureFormWindowHeader";
		this.defaults.submitButtonId = "uRLiteratureSubmitButton";
		this.defaults.formWindowId = "uRLiteratureFormWindow";
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
		this.defaults.exportToExcelFileName = "u_r_literature";
		this.defaults.exportToExcelSelectColumns = null;
	}
},wellbole.BaseApp);

var uRLiteratureApp = new wellbole.URLiteratureApp();

//定义页面准备就绪后首先进行的处理操作
webix.ready(function(){
	uRLiteratureApp.onReady();
});
