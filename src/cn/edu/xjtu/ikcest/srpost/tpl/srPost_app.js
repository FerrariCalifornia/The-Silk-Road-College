wellbole.SrPostApp = webix.proto({
	name:"SrPost",
	$init:function(config){
		//交互url
		this.defaults.loadUrl = "/srPost/list.do";
		this.defaults.createUrl = "/srPost/create.do";
		this.defaults.updateUrl = "/srPost/update.do";
		this.defaults.deleteUrl = "/srPost/delete.do";
		//名称定义
		this.defaults.name = "SrPost";
		this.defaults.showName = "帖子";
		this.defaults.mainTableId = "srPostMainTable";
		this.defaults.formId = "srPostForm";
		this.defaults.formWindowHeaderId = "srPostFormWindowHeader";
		this.defaults.submitButtonId = "srPostSubmitButton";
		this.defaults.formWindowId = "srPostFormWindow";
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
		this.defaults.exportToExcelFileName = "sr_post";
		this.defaults.exportToExcelSelectColumns = null;
	}
},wellbole.BaseApp);

var srPostApp = new wellbole.SrPostApp();

//定义页面准备就绪后首先进行的处理操作
webix.ready(function(){
	srPostApp.onReady();
});
