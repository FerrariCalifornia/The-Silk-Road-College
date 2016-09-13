//UI初始化
uRLiteratureApp.on("uiInit", function(){
	//form表单
    uRLiteratureApp.formWindowUi=webix.ui(uRLiteratureApp.formWindow);
    //导入窗口
    uRLiteratureApp.uRLiteratureImportFormWindowUi = webix.ui(uRLiteratureApp.uRLiteratureImportFormWindow);
    webix.ui(uRLiteratureApp.layout);
});

//数据初始化
uRLiteratureApp.on("dataInit", function(){
    this.trigger("doSearch");
});

//应用初始化
uRLiteratureApp.on("appInit", function(){
    //保存表单的默认值
    this.defaults.formDefault = $$("uRLiteratureForm").getValues();
    
    //挂载事件处理
    $$("uRLiteratureToolbarBtnAddNew").attachEvent("onItemClick",this.action("openNewWindow"));
    $$("uRLiteratureToolbarBtnEdit").attachEvent("onItemClick",this.action("openEditWindow"));
    $$("uRLiteratureToolbarBtnDelete").attachEvent("onItemClick",this.action("doDelete"));

    //查询
    $$("uRLiteratureToolbarBtnSearch").attachEvent("onItemClick",this.action("doSearch"));
    //导出
//    $$("uRLiteratureToolbarBtnExportToExcel").attachEvent("onItemClick",this.action("doExportToExcel"));

    //导入
    $$("uRLiteratureToolbarBtnImportFromExcel").attachEvent("onItemClick",this.action("showImprotWindow"));
    $$("uRLiteratureDownloadTemplateButton").attachEvent("onItemClick",this.action("doDownloadTemplate"));
    $$("uRLiteratureImportSubmitButton").attachEvent("onItemClick",this.action("doUploadExcel"));
});

uRLiteratureApp.on("showImprotWindow",function(){
	uRLiteratureApp.uRLiteratureImportFormWindowUi.show();
});

uRLiteratureApp.on("doUploadExcel", function() {
	var that = this;
	var uploader = $$("uRLiteratureExcelUploader");
	if(uploader.files.data.count() < 1){
		webix.alert({
			type : "alert-error",
			title : "上传失败",
			ok : "我知道了",
			text : "请选择一个需要导入的Excel文件"
		});
		return false;
	}
	$$("uRLiteratureImportSubmitButton").disable();
	uploader.send(function(ret){
		if (ret.ok) {
			webix.alert({
				type : "alert-info",
				title : "上传成功",
				ok : "我知道了",
				text : "上传班级学号成功"
			});
			uRLiteratureApp.uRLiteratureImportFormWindowUi.hide();
			$$("uRLiteratureImportSubmitButton").enable();
		    that.trigger("doSearch");
		} else {
			webix.alert({
				type : "alert-error",
				title : "上传失败",
				ok : "我知道了",
				text : ret.msg
			});
			$$("uRLiteratureImportSubmitButton").enable();
		}
	});
});


uRLiteratureApp.on("doDownloadTemplate", function() {
	var url = "/uRLiterature/downloadTemplate.do"
	var opened = window.open(url, '_blank');
});


uRLiteratureApp.getExportBaseName=function(){
	var ret = "u_r_literature-";
	return ret;
};

//搜索
uRLiteratureApp.on("doSearch", function() {
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
uRLiteratureApp.on("doExportToExcel", function() {
	this.defaults.exportToExcel = true;
	//导出文件名
	this.defaults.exportToExcelFileName = uRLiteratureApp.getExportBaseName() +  "导出结果";
	//所选导出列
	this.defaults.exportToExcelSelectColumns = null;
	//触发导出操作
	this.trigger("doSearch");
});

//刷新
uRLiteratureApp.on("doRefresh", function() {
	//触发导出操作
	this.trigger("doSearch");
});