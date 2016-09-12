//UI初始化
srTopicsResultApp.on("uiInit", function(){
	//form表单
    srTopicsResultApp.formWindowUi=webix.ui(srTopicsResultApp.formWindow);
    //导入窗口
    srTopicsResultApp.srTopicsResultImportFormWindowUi = webix.ui(srTopicsResultApp.srTopicsResultImportFormWindow);
    webix.ui(srTopicsResultApp.layout);
});

//数据初始化
srTopicsResultApp.on("dataInit", function(){
    this.trigger("doSearch");
});

//应用初始化
srTopicsResultApp.on("appInit", function(){
    //保存表单的默认值
    this.defaults.formDefault = $$("srTopicsResultForm").getValues();
    
    //挂载事件处理
    $$("srTopicsResultToolbarBtnAddNew").attachEvent("onItemClick",this.action("openNewWindow"));
    $$("srTopicsResultToolbarBtnEdit").attachEvent("onItemClick",this.action("openEditWindow"));
    $$("srTopicsResultToolbarBtnDelete").attachEvent("onItemClick",this.action("doDelete"));

    //查询
    $$("srTopicsResultToolbarBtnSearch").attachEvent("onItemClick",this.action("doSearch"));
    //导出
    $$("srTopicsResultToolbarBtnExportToExcel").attachEvent("onItemClick",this.action("doExportToExcel"));

    //导入
    $$("srTopicsResultToolbarBtnImportFromExcel").attachEvent("onItemClick",this.action("showImprotWindow"));
    $$("srTopicsResultDownloadTemplateButton").attachEvent("onItemClick",this.action("doDownloadTemplate"));
    $$("srTopicsResultImportSubmitButton").attachEvent("onItemClick",this.action("doUploadExcel"));
});

srTopicsResultApp.on("showImprotWindow",function(){
	srTopicsResultApp.srTopicsResultImportFormWindowUi.show();
});

srTopicsResultApp.on("doUploadExcel", function() {
	var that = this;
	var uploader = $$("srTopicsResultExcelUploader");
	if(uploader.files.data.count() < 1){
		webix.alert({
			type : "alert-error",
			title : "上传失败",
			ok : "我知道了",
			text : "请选择一个需要导入的Excel文件"
		});
		return false;
	}
	$$("srTopicsResultImportSubmitButton").disable();
	uploader.send(function(ret){
		if (ret.ok) {
			webix.alert({
				type : "alert-info",
				title : "上传成功",
				ok : "我知道了",
				text : "上传班级学号成功"
			});
			srTopicsResultApp.srTopicsResultImportFormWindowUi.hide();
			$$("srTopicsResultImportSubmitButton").enable();
		    that.trigger("doSearch");
		} else {
			webix.alert({
				type : "alert-error",
				title : "上传失败",
				ok : "我知道了",
				text : ret.msg
			});
			$$("srTopicsResultImportSubmitButton").enable();
		}
	});
});


srTopicsResultApp.on("doDownloadTemplate", function() {
	var url = "/srTopicsResult/downloadTemplate.do"
	var opened = window.open(url, '_blank');
});


srTopicsResultApp.getExportBaseName=function(){
	var ret = "sr_topics_result-";
	return ret;
};

//搜索
srTopicsResultApp.on("doSearch", function() {
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
srTopicsResultApp.on("doExportToExcel", function() {
	this.defaults.exportToExcel = true;
	//导出文件名
	this.defaults.exportToExcelFileName = srTopicsResultApp.getExportBaseName() +  "导出结果";
	//所选导出列
	this.defaults.exportToExcelSelectColumns = null;
	//触发导出操作
	this.trigger("doSearch");
});

//刷新
srTopicsResultApp.on("doRefresh", function() {
	//触发导出操作
	this.trigger("doSearch");
});