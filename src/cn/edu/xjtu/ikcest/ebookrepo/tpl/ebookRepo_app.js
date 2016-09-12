wellbole.EbookRepoApp = webix.proto({
	name:"EbookRepo",
	$init:function(config){
		//交互url
		this.defaults.loadUrl = "/ebookRepo/list.do";
		this.defaults.createUrl = "/ebookRepo/create.do";
		this.defaults.updateUrl = "/ebookRepo/update.do";
		this.defaults.deleteUrl = "/ebookRepo/delete.do";
		//名称定义
		this.defaults.name = "EbookRepo";
		this.defaults.showName = "电子书";
		this.defaults.mainTableId = "ebookRepoMainTable";
		this.defaults.formId = "ebookRepoForm";
		this.defaults.formWindowHeaderId = "ebookRepoFormWindowHeader";
		this.defaults.submitButtonId = "ebookRepoSubmitButton";
		this.defaults.formWindowId = "ebookRepoFormWindow";
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
		this.defaults.exportToExcelFileName = "ebook_repo";
		this.defaults.exportToExcelSelectColumns = null;
	}
},wellbole.BaseApp);

var ebookRepoApp = new wellbole.EbookRepoApp();

//定义页面准备就绪后首先进行的处理操作
webix.ready(function(){
	ebookRepoApp.onReady();
});
