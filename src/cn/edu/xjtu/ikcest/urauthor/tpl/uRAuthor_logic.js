//UI初始化
uRAuthorApp.on("uiInit", function(){
	//form表单
    uRAuthorApp.formWindowUi=webix.ui(uRAuthorApp.formWindow);
    //导入窗口
    uRAuthorApp.uRAuthorImportFormWindowUi = webix.ui(uRAuthorApp.uRAuthorImportFormWindow);
    webix.ui(uRAuthorApp.layout);
});

//数据初始化
uRAuthorApp.on("dataInit", function(){
    this.trigger("doSearch");
});

//应用初始化
uRAuthorApp.on("appInit", function(){
    //保存表单的默认值
    this.defaults.formDefault = $$("uRAuthorForm").getValues();
    
    //挂载事件处理
    $$("uRAuthorToolbarBtnAddNew").attachEvent("onItemClick",this.action("openNewWindow"));
    $$("uRAuthorToolbarBtnEdit").attachEvent("onItemClick",this.action("openEditWindow"));
    $$("uRAuthorToolbarBtnDelete").attachEvent("onItemClick",this.action("doDelete"));

    //查询
    $$("uRAuthorToolbarBtnSearch").attachEvent("onItemClick",this.action("doSearch"));
    //导出
//    $$("uRAuthorToolbarBtnExportToExcel").attachEvent("onItemClick",this.action("doExportToExcel"));

    //导入
    $$("uRAuthorToolbarBtnImportFromExcel").attachEvent("onItemClick",this.action("showImprotWindow"));
    $$("uRAuthorDownloadTemplateButton").attachEvent("onItemClick",this.action("doDownloadTemplate"));
    $$("uRAuthorImportSubmitButton").attachEvent("onItemClick",this.action("doUploadExcel"));
});

uRAuthorApp.on("showImprotWindow",function(){
	uRAuthorApp.uRAuthorImportFormWindowUi.show();
});

uRAuthorApp.on("doUploadExcel", function() {
	var that = this;
	var uploader = $$("uRAuthorExcelUploader");
	if(uploader.files.data.count() < 1){
		webix.alert({
			type : "alert-error",
			title : "上传失败",
			ok : "我知道了",
			text : "请选择一个需要导入的Excel文件"
		});
		return false;
	}
	$$("uRAuthorImportSubmitButton").disable();
	uploader.send(function(ret){
		if (ret.ok) {
			webix.alert({
				type : "alert-info",
				title : "上传成功",
				ok : "我知道了",
				text : "上传班级学号成功"
			});
			uRAuthorApp.uRAuthorImportFormWindowUi.hide();
			$$("uRAuthorImportSubmitButton").enable();
		    that.trigger("doSearch");
		} else {
			webix.alert({
				type : "alert-error",
				title : "上传失败",
				ok : "我知道了",
				text : ret.msg
			});
			$$("uRAuthorImportSubmitButton").enable();
		}
	});
});


uRAuthorApp.on("doDownloadTemplate", function() {
	var url = "/uRAuthor/downloadTemplate.do"
	var opened = window.open(url, '_blank');
});


uRAuthorApp.getExportBaseName=function(){
	var ret = "u_r_author-";
	return ret;
};

//搜索
uRAuthorApp.on("doSearch", function() {
	var that = this;
	var table = $$(this.defaults.mainTableId);
	table.clearAll();
	var url = this.defaults.loadUrl + "?key=value";
	//添加keywork搜索参数
	var keyword = $$("keyword").getValue();
	url = url + "&keyword=" + encodeURIComponent(keyword);

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
uRAuthorApp.on("doExportToExcel", function() {
	this.defaults.exportToExcel = true;
	//导出文件名
	this.defaults.exportToExcelFileName = uRAuthorApp.getExportBaseName() +  "导出结果";
	//所选导出列
	this.defaults.exportToExcelSelectColumns = null;
	//触发导出操作
	this.trigger("doSearch");
});

//刷新
uRAuthorApp.on("doRefresh", function() {
	//触发导出操作
	this.trigger("doSearch");
});