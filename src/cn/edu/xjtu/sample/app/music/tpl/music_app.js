wellbole.MusicApp = webix.proto({
	name:"Music",
	$init:function(config){
		//交互url
		this.defaults.loadUrl = "${base}/app/music/list.do";
		this.defaults.createUrl = "${base}/app/music/create.do";
		this.defaults.updateUrl = "${base}/app/music/update.do";
		this.defaults.deleteUrl = "${base}/app/music/delete.do";
		//名称定义
		this.defaults.name = "Music";
		this.defaults.showName = "music list";
		this.defaults.mainTableId = "musicMainTable";
		this.defaults.formId = "musicForm";
		this.defaults.formWindowHeaderId = "musicFormWindowHeader";
		this.defaults.submitButtonId = "musicSubmitButton";
		this.defaults.formWindowId = "musicFormWindow";
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
		this.defaults.exportToExcelFileName = "music list";
		this.defaults.exportToExcelSelectColumns = null;
	}
},wellbole.BaseApp);

var musicApp = new wellbole.MusicApp();

//定义页面准备就绪后首先进行的处理操作
webix.ready(function(){
	musicApp.onReady();
});
