//UI初始化
srNewsResultApp.on("uiInit", function(){
	//form表单
    srNewsResultApp.formWindowUi=webix.ui(srNewsResultApp.formWindow);
    //导入窗口
    srNewsResultApp.srNewsResultImportFormWindowUi = webix.ui(srNewsResultApp.srNewsResultImportFormWindow);
    webix.ui(srNewsResultApp.layout);
});

//数据初始化
srNewsResultApp.on("dataInit", function(){
    this.trigger("doSearch");
});

//应用初始化
srNewsResultApp.on("appInit", function(){
    //保存表单的默认值
    this.defaults.formDefault = $$("srNewsResultForm").getValues();
    
    //挂载事件处理
    $$("srNewsResultToolbarBtnAddNew").attachEvent("onItemClick",this.action("openNewWindow"));
    $$("srNewsResultToolbarBtnEdit").attachEvent("onItemClick",this.action("openEditWindow"));
    $$("srNewsResultToolbarBtnDelete").attachEvent("onItemClick",this.action("doDelete"));

    //查询
    $$("srNewsResultToolbarBtnSearch").attachEvent("onItemClick",this.action("doSearch"));
    //导出
    $$("srNewsResultToolbarBtnExportToExcel").attachEvent("onItemClick",this.action("doExportToExcel"));

    //导入
    $$("srNewsResultToolbarBtnImportFromExcel").attachEvent("onItemClick",this.action("showImprotWindow"));
    $$("srNewsResultDownloadTemplateButton").attachEvent("onItemClick",this.action("doDownloadTemplate"));
    $$("srNewsResultImportSubmitButton").attachEvent("onItemClick",this.action("doUploadExcel"));
});

srNewsResultApp.on("showImprotWindow",function(){
	srNewsResultApp.srNewsResultImportFormWindowUi.show();
});

srNewsResultApp.on("doUploadExcel", function() {
	var that = this;
	var uploader = $$("srNewsResultExcelUploader");
	if(uploader.files.data.count() < 1){
		webix.alert({
			type : "alert-error",
			title : "上传失败",
			ok : "我知道了",
			text : "请选择一个需要导入的Excel文件"
		});
		return false;
	}
	$$("srNewsResultImportSubmitButton").disable();
	uploader.send(function(ret){
		if (ret.ok) {
			webix.alert({
				type : "alert-info",
				title : "上传成功",
				ok : "我知道了",
				text : "上传班级学号成功"
			});
			srNewsResultApp.srNewsResultImportFormWindowUi.hide();
			$$("srNewsResultImportSubmitButton").enable();
		    that.trigger("doSearch");
		} else {
			webix.alert({
				type : "alert-error",
				title : "上传失败",
				ok : "我知道了",
				text : ret.msg
			});
			$$("srNewsResultImportSubmitButton").enable();
		}
	});
});


srNewsResultApp.on("doDownloadTemplate", function() {
	var url = "/srNewsResult/downloadTemplate.do"
	var opened = window.open(url, '_blank');
});


srNewsResultApp.getExportBaseName=function(){
	var ret = "sr_news_result-";
	return ret;
};

//搜索
srNewsResultApp.on("doSearch", function() {
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
srNewsResultApp.on("doExportToExcel", function() {
	this.defaults.exportToExcel = true;
	//导出文件名
	this.defaults.exportToExcelFileName = srNewsResultApp.getExportBaseName() +  "导出结果";
	//所选导出列
	this.defaults.exportToExcelSelectColumns = null;
	//触发导出操作
	this.trigger("doSearch");
});

//刷新
srNewsResultApp.on("doRefresh", function() {
	//触发导出操作
	this.trigger("doSearch");
});