//UI初始化
uRWrittenByApp.on("uiInit", function(){
	//form表单
    uRWrittenByApp.formWindowUi=webix.ui(uRWrittenByApp.formWindow);
    //导入窗口
    uRWrittenByApp.uRWrittenByImportFormWindowUi = webix.ui(uRWrittenByApp.uRWrittenByImportFormWindow);
    webix.ui(uRWrittenByApp.layout);
});

//数据初始化
uRWrittenByApp.on("dataInit", function(){
    this.trigger("doSearch");
});

//应用初始化
uRWrittenByApp.on("appInit", function(){
    //保存表单的默认值
    this.defaults.formDefault = $$("uRWrittenByForm").getValues();
    
    //挂载事件处理
    $$("uRWrittenByToolbarBtnAddNew").attachEvent("onItemClick",this.action("openNewWindow"));
    $$("uRWrittenByToolbarBtnEdit").attachEvent("onItemClick",this.action("openEditWindow"));
    $$("uRWrittenByToolbarBtnDelete").attachEvent("onItemClick",this.action("doDelete"));

    //查询
    $$("uRWrittenByToolbarBtnSearch").attachEvent("onItemClick",this.action("doSearch"));
    //导出
    $$("uRWrittenByToolbarBtnExportToExcel").attachEvent("onItemClick",this.action("doExportToExcel"));

    //导入
    $$("uRWrittenByToolbarBtnImportFromExcel").attachEvent("onItemClick",this.action("showImprotWindow"));
    $$("uRWrittenByDownloadTemplateButton").attachEvent("onItemClick",this.action("doDownloadTemplate"));
    $$("uRWrittenByImportSubmitButton").attachEvent("onItemClick",this.action("doUploadExcel"));
});

uRWrittenByApp.on("showImprotWindow",function(){
	uRWrittenByApp.uRWrittenByImportFormWindowUi.show();
});

uRWrittenByApp.on("doUploadExcel", function() {
	var that = this;
	var uploader = $$("uRWrittenByExcelUploader");
	if(uploader.files.data.count() < 1){
		webix.alert({
			type : "alert-error",
			title : "上传失败",
			ok : "我知道了",
			text : "请选择一个需要导入的Excel文件"
		});
		return false;
	}
	$$("uRWrittenByImportSubmitButton").disable();
	uploader.send(function(ret){
		if (ret.ok) {
			webix.alert({
				type : "alert-info",
				title : "上传成功",
				ok : "我知道了",
				text : "上传班级学号成功"
			});
			uRWrittenByApp.uRWrittenByImportFormWindowUi.hide();
			$$("uRWrittenByImportSubmitButton").enable();
		    that.trigger("doSearch");
		} else {
			webix.alert({
				type : "alert-error",
				title : "上传失败",
				ok : "我知道了",
				text : ret.msg
			});
			$$("uRWrittenByImportSubmitButton").enable();
		}
	});
});


uRWrittenByApp.on("doDownloadTemplate", function() {
	var url = "/uRWrittenBy/downloadTemplate.do"
	var opened = window.open(url, '_blank');
});


uRWrittenByApp.getExportBaseName=function(){
	var ret = "u_r_written_by-";
	return ret;
};

//搜索
uRWrittenByApp.on("doSearch", function() {
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
uRWrittenByApp.on("doExportToExcel", function() {
	this.defaults.exportToExcel = true;
	//导出文件名
	this.defaults.exportToExcelFileName = uRWrittenByApp.getExportBaseName() +  "导出结果";
	//所选导出列
	this.defaults.exportToExcelSelectColumns = null;
	//触发导出操作
	this.trigger("doSearch");
});

//刷新
uRWrittenByApp.on("doRefresh", function() {
	//触发导出操作
	this.trigger("doSearch");
});