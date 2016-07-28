//UI初始化
schoolApp.on("uiInit", function(){
	//form表单
    schoolApp.formWindowUi=webix.ui(schoolApp.formWindow);
    //导入窗口
    schoolApp.schoolImportFormWindowUi = webix.ui(schoolApp.schoolImportFormWindow);
    webix.ui(schoolApp.layout);
});

//数据初始化
schoolApp.on("dataInit", function(){
    this.trigger("doSearch");
});

//应用初始化
schoolApp.on("appInit", function(){
    //保存表单的默认值
    this.defaults.formDefault = $$("schoolForm").getValues();
    
    //挂载事件处理
    $$("schoolToolbarBtnAddNew").attachEvent("onItemClick",this.action("openNewWindow"));
    $$("schoolToolbarBtnEdit").attachEvent("onItemClick",this.action("openEditWindow"));
    $$("schoolToolbarBtnDelete").attachEvent("onItemClick",this.action("doDelete"));

    //查询
    $$("schoolToolbarBtnSearch").attachEvent("onItemClick",this.action("doSearch"));
    //导出
    $$("schoolToolbarBtnExportToExcel").attachEvent("onItemClick",this.action("doExportToExcel"));

    //导入
    $$("schoolToolbarBtnImportFromExcel").attachEvent("onItemClick",this.action("showImprotWindow"));
    $$("schoolDownloadTemplateButton").attachEvent("onItemClick",this.action("doDownloadTemplate"));
    $$("schoolImportSubmitButton").attachEvent("onItemClick",this.action("doUploadExcel"));
});

schoolApp.on("showImprotWindow",function(){
	schoolApp.schoolImportFormWindowUi.show();
});

schoolApp.on("doUploadExcel", function() {
	var that = this;
	var uploader = $$("schoolExcelUploader");
	if(uploader.files.data.count() < 1){
		webix.alert({
			type : "alert-error",
			title : "上传失败",
			ok : "我知道了",
			text : "请选择一个需要导入的Excel文件"
		});
		return false;
	}
	$$("schoolImportSubmitButton").disable();
	uploader.send(function(ret){
		if (ret.ok) {
			webix.alert({
				type : "alert-info",
				title : "上传成功",
				ok : "我知道了",
				text : "上传班级学号成功"
			});
			schoolApp.schoolImportFormWindowUi.hide();
			$$("schoolImportSubmitButton").enable();
		    that.trigger("doSearch");
		} else {
			webix.alert({
				type : "alert-error",
				title : "上传失败",
				ok : "我知道了",
				text : ret.msg
			});
			$$("schoolImportSubmitButton").enable();
		}
	});
});


schoolApp.on("doDownloadTemplate", function() {
	var url = "${base}/app/school/downloadTemplate.do"
	var opened = window.open(url, '_blank');
});


schoolApp.getExportBaseName=function(){
	var ret = "school-";
	return ret;
};

//搜索
schoolApp.on("doSearch", function() {
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
schoolApp.on("doExportToExcel", function() {
	this.defaults.exportToExcel = true;
	//导出文件名
	this.defaults.exportToExcelFileName = schoolApp.getExportBaseName() +  "导出结果";
	//所选导出列
	this.defaults.exportToExcelSelectColumns = null;
	//触发导出操作
	this.trigger("doSearch");
});

//刷新
schoolApp.on("doRefresh", function() {
	//触发导出操作
	this.trigger("doSearch");
});