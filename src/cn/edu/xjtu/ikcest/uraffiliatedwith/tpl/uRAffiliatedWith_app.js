wellbole.URAffiliatedWithApp = webix.proto({
	name:"URAffiliatedWith",
	$init:function(config){
		//交互url
		this.defaults.loadUrl = "/uRAffiliatedWith/list.do";
		this.defaults.createUrl = "/uRAffiliatedWith/create.do";
		this.defaults.updateUrl = "/uRAffiliatedWith/update.do";
		this.defaults.deleteUrl = "/uRAffiliatedWith/delete.do";
		//名称定义
		this.defaults.name = "URAffiliatedWith";
		this.defaults.showName = "隶属";
		this.defaults.mainTableId = "uRAffiliatedWithMainTable";
		this.defaults.formId = "uRAffiliatedWithForm";
		this.defaults.formWindowHeaderId = "uRAffiliatedWithFormWindowHeader";
		this.defaults.submitButtonId = "uRAffiliatedWithSubmitButton";
		this.defaults.formWindowId = "uRAffiliatedWithFormWindow";
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
		this.defaults.exportToExcelFileName = "u_r_affiliated_with";
		this.defaults.exportToExcelSelectColumns = null;
	}
},wellbole.BaseApp);

var uRAffiliatedWithApp = new wellbole.URAffiliatedWithApp();

//定义页面准备就绪后首先进行的处理操作
webix.ready(function(){
	uRAffiliatedWithApp.onReady();
});
