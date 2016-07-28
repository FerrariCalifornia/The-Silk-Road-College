wellbole.BlogApp = webix.proto({
	name:"Blog",
	$init:function(config){
		//交互url
		this.defaults.loadUrl = "${base}/app/blog/list.do";
		this.defaults.createUrl = "${base}/app/blog/create.do";
		this.defaults.updateUrl = "${base}/app/blog/update.do";
		this.defaults.deleteUrl = "${base}/app/blog/delete.do";
		//名称定义
		this.defaults.name = "Blog";
		this.defaults.showName = "博客";
		this.defaults.mainTableId = "blogMainTable";
		this.defaults.formId = "blogForm";
		this.defaults.formWindowHeaderId = "blogFormWindowHeader";
		this.defaults.submitButtonId = "blogSubmitButton";
		this.defaults.formWindowId = "blogFormWindow";
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
		this.defaults.exportToExcelFileName = "博客";
		this.defaults.exportToExcelSelectColumns = null;
	}
},wellbole.BaseApp);

var blogApp = new wellbole.BlogApp();

//定义页面准备就绪后首先进行的处理操作
webix.ready(function(){
	blogApp.onReady();
});
