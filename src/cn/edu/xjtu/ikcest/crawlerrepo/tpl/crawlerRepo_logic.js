//UI初始化
crawlerRepoApp.on("uiInit", function(){
	//form表单
    crawlerRepoApp.formWindowUi=webix.ui(crawlerRepoApp.formWindow);
    //导入窗口
    crawlerRepoApp.crawlerRepoImportFormWindowUi = webix.ui(crawlerRepoApp.crawlerRepoImportFormWindow);
    webix.ui(crawlerRepoApp.layout);
});

//数据初始化
crawlerRepoApp.on("dataInit", function(){
    this.trigger("doSearch");
});

//应用初始化
crawlerRepoApp.on("appInit", function(){
    //保存表单的默认值
    this.defaults.formDefault = $$("crawlerRepoForm").getValues();
    
    //挂载事件处理
    $$("crawlerRepoToolbarBtnAddNew").attachEvent("onItemClick",this.action("openNewWindow"));
    $$("crawlerRepoToolbarBtnEdit").attachEvent("onItemClick",this.action("openEditWindow"));
    $$("crawlerRepoToolbarBtnDelete").attachEvent("onItemClick",this.action("doDelete"));

    //查询
    $$("crawlerRepoToolbarBtnSearch").attachEvent("onItemClick",this.action("doSearch"));
    //导出
    $$("crawlerRepoToolbarBtnExportToExcel").attachEvent("onItemClick",this.action("doExportToExcel"));

    //导入
    $$("crawlerRepoToolbarBtnImportFromExcel").attachEvent("onItemClick",this.action("showImprotWindow"));
    $$("crawlerRepoDownloadTemplateButton").attachEvent("onItemClick",this.action("doDownloadTemplate"));
    $$("crawlerRepoImportSubmitButton").attachEvent("onItemClick",this.action("doUploadExcel"));
});

crawlerRepoApp.on("showImprotWindow",function(){
	crawlerRepoApp.crawlerRepoImportFormWindowUi.show();
});

crawlerRepoApp.on("doUploadExcel", function() {
	var that = this;
	var uploader = $$("crawlerRepoExcelUploader");
	if(uploader.files.data.count() < 1){
		webix.alert({
			type : "alert-error",
			title : "上传失败",
			ok : "我知道了",
			text : "请选择一个需要导入的Excel文件"
		});
		return false;
	}
	$$("crawlerRepoImportSubmitButton").disable();
	uploader.send(function(ret){
		if (ret.ok) {
			webix.alert({
				type : "alert-info",
				title : "上传成功",
				ok : "我知道了",
				text : "上传班级学号成功"
			});
			crawlerRepoApp.crawlerRepoImportFormWindowUi.hide();
			$$("crawlerRepoImportSubmitButton").enable();
		    that.trigger("doSearch");
		} else {
			webix.alert({
				type : "alert-error",
				title : "上传失败",
				ok : "我知道了",
				text : ret.msg
			});
			$$("crawlerRepoImportSubmitButton").enable();
		}
	});
});


crawlerRepoApp.on("doDownloadTemplate", function() {
	var url = "/crawlerRepo/downloadTemplate.do"
	var opened = window.open(url, '_blank');
});


crawlerRepoApp.getExportBaseName=function(){
	var ret = "crawler_repo-";
	return ret;
};

//搜索
crawlerRepoApp.on("doSearch", function() {
	var that = this;
	var table = $$(this.defaults.mainTableId);
	table.clearAll();
	var url = this.defaults.loadUrl + "?key=value";
	//添加keywork搜索参数
	//var keyword = $$("keyword").getValue();
	//url = url + "&keyword=" + encodeURIComponent(keyword);

	if (this.defaults.exportToExcel) {
		var filename = this.defaults.exportToExcelFileName;
		var selectColumns= this.defaults.exportToExcelSelectColumns;
		url = url + "&export=true";
		table.waitData.then(function() {
			if(selectColumns !== null){
				webix.toExcel(table, {
					filename: filename,
					columns:selectColumns
				});
			}else{
				webix.toExcel(table, {
					filename: filename
				});
			}
		});

		this.defaults.exportToExcel = false;
	}
	//table.setPage(0);
	table.load(url);
});

//导出到excel
crawlerRepoApp.on("doExportToExcel", function() {
	this.defaults.exportToExcel = true;
	//导出文件名
	this.defaults.exportToExcelFileName = crawlerRepoApp.getExportBaseName() +  "导出结果";
	//所选导出列
	this.defaults.exportToExcelSelectColumns = null;
	//触发导出操作
	this.trigger("doSearch");
});

//刷新
crawlerRepoApp.on("doRefresh", function() {
	//触发导出操作
	this.trigger("doSearch");
});