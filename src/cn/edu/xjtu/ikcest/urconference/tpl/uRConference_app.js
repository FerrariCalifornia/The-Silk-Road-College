wellbole.URConferenceApp = webix.proto({
	name:"URConference",
	$init:function(config){
		//交互url
		this.defaults.loadUrl = "/uRConference/list.do";
		this.defaults.createUrl = "/uRConference/create.do";
		this.defaults.updateUrl = "/uRConference/update.do";
		this.defaults.deleteUrl = "/uRConference/delete.do";
		//名称定义
		this.defaults.name = "URConference";
		this.defaults.showName = "u_r_conference";
		this.defaults.mainTableId = "uRConferenceMainTable";
		this.defaults.formId = "uRConferenceForm";
		this.defaults.formWindowHeaderId = "uRConferenceFormWindowHeader";
		this.defaults.submitButtonId = "uRConferenceSubmitButton";
		this.defaults.formWindowId = "uRConferenceFormWindow";
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
		this.defaults.exportToExcelFileName = "u_r_conference";
		this.defaults.exportToExcelSelectColumns = null;
	}
},wellbole.BaseApp);

var uRConferenceApp = new wellbole.URConferenceApp();

//定义页面准备就绪后首先进行的处理操作
webix.ready(function(){
	uRConferenceApp.onReady();
});
