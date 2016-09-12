//UI初始化
uRConferenceApp.on("uiInit", function(){
	//form表单
    uRConferenceApp.formWindowUi=webix.ui(uRConferenceApp.formWindow);
    //导入窗口
    uRConferenceApp.uRConferenceImportFormWindowUi = webix.ui(uRConferenceApp.uRConferenceImportFormWindow);
    webix.ui(uRConferenceApp.layout);
});

//数据初始化
uRConferenceApp.on("dataInit", function(){
    this.trigger("doSearch");
});

//应用初始化
uRConferenceApp.on("appInit", function(){
    //保存表单的默认值
    this.defaults.formDefault = $$("uRConferenceForm").getValues();
    
    //挂载事件处理
    $$("uRConferenceToolbarBtnAddNew").attachEvent("onItemClick",this.action("openNewWindow"));
    $$("uRConferenceToolbarBtnEdit").attachEvent("onItemClick",this.action("openEditWindow"));
    $$("uRConferenceToolbarBtnDelete").attachEvent("onItemClick",this.action("doDelete"));

    //查询
    $$("uRConferenceToolbarBtnSearch").attachEvent("onItemClick",this.action("doSearch"));
    //导出
    $$("uRConferenceToolbarBtnExportToExcel").attachEvent("onItemClick",this.action("doExportToExcel"));

    //导入
    $$("uRConferenceToolbarBtnImportFromExcel").attachEvent("onItemClick",this.action("showImprotWindow"));
    $$("uRConferenceDownloadTemplateButton").attachEvent("onItemClick",this.action("doDownloadTemplate"));
    $$("uRConferenceImportSubmitButton").attachEvent("onItemClick",this.action("doUploadExcel"));
});

uRConferenceApp.on("showImprotWindow",function(){
	uRConferenceApp.uRConferenceImportFormWindowUi.show();
});

uRConferenceApp.on("doUploadExcel", function() {
	var that = this;
	var uploader = $$("uRConferenceExcelUploader");
	if(uploader.files.data.count() < 1){
		webix.alert({
			type : "alert-error",
			title : "上传失败",
			ok : "我知道了",
			text : "请选择一个需要导入的Excel文件"
		});
		return false;
	}
	$$("uRConferenceImportSubmitButton").disable();
	uploader.send(function(ret){
		if (ret.ok) {
			webix.alert({
				type : "alert-info",
				title : "上传成功",
				ok : "我知道了",
				text : "上传班级学号成功"
			});
			uRConferenceApp.uRConferenceImportFormWindowUi.hide();
			$$("uRConferenceImportSubmitButton").enable();
		    that.trigger("doSearch");
		} else {
			webix.alert({
				type : "alert-error",
				title : "上传失败",
				ok : "我知道了",
				text : ret.msg
			});
			$$("uRConferenceImportSubmitButton").enable();
		}
	});
});


uRConferenceApp.on("doDownloadTemplate", function() {
	var url = "/uRConference/downloadTemplate.do"
	var opened = window.open(url, '_blank');
});


uRConferenceApp.getExportBaseName=function(){
	var ret = "u_r_conference-";
	return ret;
};

//搜索
uRConferenceApp.on("doSearch", function() {
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
uRConferenceApp.on("doExportToExcel", function() {
	this.defaults.exportToExcel = true;
	//导出文件名
	this.defaults.exportToExcelFileName = uRConferenceApp.getExportBaseName() +  "导出结果";
	//所选导出列
	this.defaults.exportToExcelSelectColumns = null;
	//触发导出操作
	this.trigger("doSearch");
});

//刷新
uRConferenceApp.on("doRefresh", function() {
	//触发导出操作
	this.trigger("doSearch");
});