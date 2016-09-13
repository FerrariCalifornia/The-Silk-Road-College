//UI初始化
uRUniversityApp.on("uiInit", function(){
	//form表单
    uRUniversityApp.formWindowUi=webix.ui(uRUniversityApp.formWindow);
    //导入窗口
    uRUniversityApp.uRUniversityImportFormWindowUi = webix.ui(uRUniversityApp.uRUniversityImportFormWindow);
    webix.ui(uRUniversityApp.layout);
});

//数据初始化
uRUniversityApp.on("dataInit", function(){
    this.trigger("doSearch");
});

//应用初始化
uRUniversityApp.on("appInit", function(){
    //保存表单的默认值
    this.defaults.formDefault = $$("uRUniversityForm").getValues();
    
    //挂载事件处理
    $$("uRUniversityToolbarBtnAddNew").attachEvent("onItemClick",this.action("openNewWindow"));
    $$("uRUniversityToolbarBtnEdit").attachEvent("onItemClick",this.action("openEditWindow"));
    $$("uRUniversityToolbarBtnDelete").attachEvent("onItemClick",this.action("doDelete"));

    //查询
    $$("uRUniversityToolbarBtnSearch").attachEvent("onItemClick",this.action("doSearch"));
    //导出
//    $$("uRUniversityToolbarBtnExportToExcel").attachEvent("onItemClick",this.action("doExportToExcel"));

    //导入
    $$("uRUniversityToolbarBtnImportFromExcel").attachEvent("onItemClick",this.action("showImprotWindow"));
    $$("uRUniversityDownloadTemplateButton").attachEvent("onItemClick",this.action("doDownloadTemplate"));
    $$("uRUniversityImportSubmitButton").attachEvent("onItemClick",this.action("doUploadExcel"));
});

uRUniversityApp.on("showImprotWindow",function(){
	uRUniversityApp.uRUniversityImportFormWindowUi.show();
});

uRUniversityApp.on("doUploadExcel", function() {
	var that = this;
	var uploader = $$("uRUniversityExcelUploader");
	if(uploader.files.data.count() < 1){
		webix.alert({
			type : "alert-error",
			title : "上传失败",
			ok : "我知道了",
			text : "请选择一个需要导入的Excel文件"
		});
		return false;
	}
	$$("uRUniversityImportSubmitButton").disable();
	uploader.send(function(ret){
		if (ret.ok) {
			webix.alert({
				type : "alert-info",
				title : "上传成功",
				ok : "我知道了",
				text : "上传班级学号成功"
			});
			uRUniversityApp.uRUniversityImportFormWindowUi.hide();
			$$("uRUniversityImportSubmitButton").enable();
		    that.trigger("doSearch");
		} else {
			webix.alert({
				type : "alert-error",
				title : "上传失败",
				ok : "我知道了",
				text : ret.msg
			});
			$$("uRUniversityImportSubmitButton").enable();
		}
	});
});


uRUniversityApp.on("doDownloadTemplate", function() {
	var url = "/uRUniversity/downloadTemplate.do"
	var opened = window.open(url, '_blank');
});


uRUniversityApp.getExportBaseName=function(){
	var ret = "u_r_university-";
	return ret;
};

//搜索
uRUniversityApp.on("doSearch", function() {
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
uRUniversityApp.on("doExportToExcel", function() {
	this.defaults.exportToExcel = true;
	//导出文件名
	this.defaults.exportToExcelFileName = uRUniversityApp.getExportBaseName() +  "导出结果";
	//所选导出列
	this.defaults.exportToExcelSelectColumns = null;
	//触发导出操作
	this.trigger("doSearch");
});

//刷新
uRUniversityApp.on("doRefresh", function() {
	//触发导出操作
	this.trigger("doSearch");
});