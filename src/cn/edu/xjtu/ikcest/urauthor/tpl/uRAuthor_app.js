wellbole.URAuthorApp = webix.proto({
	name:"URAuthor",
	$init:function(config){
		//交互url
		this.defaults.loadUrl = "/uRAuthor/list.do";
		this.defaults.createUrl = "/uRAuthor/create.do";
		this.defaults.updateUrl = "/uRAuthor/update.do";
		this.defaults.deleteUrl = "/uRAuthor/delete.do";
		//名称定义
		this.defaults.name = "URAuthor";
		this.defaults.showName = "作者";
		this.defaults.mainTableId = "uRAuthorMainTable";
		this.defaults.formId = "uRAuthorForm";
		this.defaults.formWindowHeaderId = "uRAuthorFormWindowHeader";
		this.defaults.submitButtonId = "uRAuthorSubmitButton";
		this.defaults.formWindowId = "uRAuthorFormWindow";
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
		this.defaults.exportToExcelFileName = "u_r_author";
		this.defaults.exportToExcelSelectColumns = null;
	}
},wellbole.BaseApp);

var uRAuthorApp = new wellbole.URAuthorApp();

//定义页面准备就绪后首先进行的处理操作
webix.ready(function(){
	uRAuthorApp.onReady();
});
