//UI初始化
ebookRepoApp.on("uiInit", function(){
	//form表单
    ebookRepoApp.formWindowUi=webix.ui(ebookRepoApp.formWindow);
    //导入窗口
    ebookRepoApp.ebookRepoImportFormWindowUi = webix.ui(ebookRepoApp.ebookRepoImportFormWindow);
    webix.ui(ebookRepoApp.layout);
});

//数据初始化
ebookRepoApp.on("dataInit", function(){
    this.trigger("doSearch");
});

//应用初始化
ebookRepoApp.on("appInit", function(){
    //保存表单的默认值
    this.defaults.formDefault = $$("ebookRepoForm").getValues();
    
    //挂载事件处理
    $$("ebookRepoToolbarBtnAddNew").attachEvent("onItemClick",this.action("openNewWindow"));
    $$("ebookRepoToolbarBtnEdit").attachEvent("onItemClick",this.action("openEditWindow"));
    $$("ebookRepoToolbarBtnDelete").attachEvent("onItemClick",this.action("doDelete"));

    //查询
    $$("ebookRepoToolbarBtnSearch").attachEvent("onItemClick",this.action("doSearch"));
    //导出
    $$("ebookRepoToolbarBtnExportToExcel").attachEvent("onItemClick",this.action("doExportToExcel"));

    //导入
    $$("ebookRepoToolbarBtnImportFromExcel").attachEvent("onItemClick",this.action("showImprotWindow"));
    $$("ebookRepoDownloadTemplateButton").attachEvent("onItemClick",this.action("doDownloadTemplate"));
    $$("ebookRepoImportSubmitButton").attachEvent("onItemClick",this.action("doUploadExcel"));
});

ebookRepoApp.on("showImprotWindow",function(){
	ebookRepoApp.ebookRepoImportFormWindowUi.show();
});

ebookRepoApp.on("doUploadExcel", function() {
	var that = this;
	var uploader = $$("ebookRepoExcelUploader");
	if(uploader.files.data.count() < 1){
		webix.alert({
			type : "alert-error",
			title : "上传失败",
			ok : "我知道了",
			text : "请选择一个需要导入的Excel文件"
		});
		return false;
	}
	$$("ebookRepoImportSubmitButton").disable();
	uploader.send(function(ret){
		if (ret.ok) {
			webix.alert({
				type : "alert-info",
				title : "上传成功",
				ok : "我知道了",
				text : "上传班级学号成功"
			});
			ebookRepoApp.ebookRepoImportFormWindowUi.hide();
			$$("ebookRepoImportSubmitButton").enable();
		    that.trigger("doSearch");
		} else {
			webix.alert({
				type : "alert-error",
				title : "上传失败",
				ok : "我知道了",
				text : ret.msg
			});
			$$("ebookRepoImportSubmitButton").enable();
		}
	});
});


ebookRepoApp.on("doDownloadTemplate", function() {
	var url = "/ebookRepo/downloadTemplate.do"
	var opened = window.open(url, '_blank');
});


ebookRepoApp.getExportBaseName=function(){
	var ret = "ebook_repo-";
	return ret;
};

//搜索
ebookRepoApp.on("doSearch", function() {
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
ebookRepoApp.on("doExportToExcel", function() {
	this.defaults.exportToExcel = true;
	//导出文件名
	this.defaults.exportToExcelFileName = ebookRepoApp.getExportBaseName() +  "导出结果";
	//所选导出列
	this.defaults.exportToExcelSelectColumns = null;
	//触发导出操作
	this.trigger("doSearch");
});

//刷新
ebookRepoApp.on("doRefresh", function() {
	//触发导出操作
	this.trigger("doSearch");
});