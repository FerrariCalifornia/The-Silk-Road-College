wellbole.SchoolApp = webix.proto({
	name:"School",
	$init:function(config){
		//交互url
		this.defaults.loadUrl = "${base}/app/school/list.do";
		this.defaults.createUrl = "${base}/app/school/create.do";
		this.defaults.updateUrl = "${base}/app/school/update.do";
		this.defaults.deleteUrl = "${base}/app/school/delete.do";
		//名称定义
		this.defaults.name = "School";
		this.defaults.showName = "school";
		this.defaults.mainTableId = "schoolMainTable";
		this.defaults.formId = "schoolForm";
		this.defaults.formWindowHeaderId = "schoolFormWindowHeader";
		this.defaults.submitButtonId = "schoolSubmitButton";
		this.defaults.formWindowId = "schoolFormWindow";
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
		this.defaults.exportToExcelFileName = "school";
		this.defaults.exportToExcelSelectColumns = null;
	}
},wellbole.BaseApp);

var schoolApp = new wellbole.SchoolApp();

//定义页面准备就绪后首先进行的处理操作
webix.ready(function(){
	schoolApp.onReady();
});
