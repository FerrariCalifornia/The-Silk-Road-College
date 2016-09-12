wellbole.URUniversityApp = webix.proto({
	name:"URUniversity",
	$init:function(config){
		//交互url
		this.defaults.loadUrl = "/uRUniversity/list.do";
		this.defaults.createUrl = "/uRUniversity/create.do";
		this.defaults.updateUrl = "/uRUniversity/update.do";
		this.defaults.deleteUrl = "/uRUniversity/delete.do";
		//名称定义
		this.defaults.name = "URUniversity";
		this.defaults.showName = "大学";
		this.defaults.mainTableId = "uRUniversityMainTable";
		this.defaults.formId = "uRUniversityForm";
		this.defaults.formWindowHeaderId = "uRUniversityFormWindowHeader";
		this.defaults.submitButtonId = "uRUniversitySubmitButton";
		this.defaults.formWindowId = "uRUniversityFormWindow";
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
		this.defaults.exportToExcelFileName = "u_r_university";
		this.defaults.exportToExcelSelectColumns = null;
	}
},wellbole.BaseApp);

var uRUniversityApp = new wellbole.URUniversityApp();

//定义页面准备就绪后首先进行的处理操作
webix.ready(function(){
	uRUniversityApp.onReady();
});
