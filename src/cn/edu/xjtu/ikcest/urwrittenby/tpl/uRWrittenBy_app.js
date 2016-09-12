wellbole.URWrittenByApp = webix.proto({
	name:"URWrittenBy",
	$init:function(config){
		//交互url
		this.defaults.loadUrl = "/uRWrittenBy/list.do";
		this.defaults.createUrl = "/uRWrittenBy/create.do";
		this.defaults.updateUrl = "/uRWrittenBy/update.do";
		this.defaults.deleteUrl = "/uRWrittenBy/delete.do";
		//名称定义
		this.defaults.name = "URWrittenBy";
		this.defaults.showName = "u_r_written_by";
		this.defaults.mainTableId = "uRWrittenByMainTable";
		this.defaults.formId = "uRWrittenByForm";
		this.defaults.formWindowHeaderId = "uRWrittenByFormWindowHeader";
		this.defaults.submitButtonId = "uRWrittenBySubmitButton";
		this.defaults.formWindowId = "uRWrittenByFormWindow";
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
		this.defaults.exportToExcelFileName = "u_r_written_by";
		this.defaults.exportToExcelSelectColumns = null;
	}
},wellbole.BaseApp);

var uRWrittenByApp = new wellbole.URWrittenByApp();

//定义页面准备就绪后首先进行的处理操作
webix.ready(function(){
	uRWrittenByApp.onReady();
});
