//UI初始化
srTopicApp.on("uiInit", function(){
	//form表单
    srTopicApp.formWindowUi=webix.ui(srTopicApp.formWindow);
    //导入窗口
    srTopicApp.srTopicImportFormWindowUi = webix.ui(srTopicApp.srTopicImportFormWindow);
    webix.ui(srTopicApp.layout);
});

//数据初始化
srTopicApp.on("dataInit", function(){
    this.trigger("doSearch");
});

//应用初始化
srTopicApp.on("appInit", function(){
    //保存表单的默认值
    this.defaults.formDefault = $$("srTopicForm").getValues();
    
    //挂载事件处理
    $$("srTopicToolbarBtnAddNew").attachEvent("onItemClick",this.action("openNewWindow"));
    $$("srTopicToolbarBtnEdit").attachEvent("onItemClick",this.action("openEditWindow"));
    $$("srTopicToolbarBtnDelete").attachEvent("onItemClick",this.action("doDelete"));

    //查询
    $$("srTopicToolbarBtnSearch").attachEvent("onItemClick",this.action("doSearch"));
    //导出
    $$("srTopicToolbarBtnExportToExcel").attachEvent("onItemClick",this.action("doExportToExcel"));

    //导入
    $$("srTopicToolbarBtnImportFromExcel").attachEvent("onItemClick",this.action("showImprotWindow"));
    $$("srTopicDownloadTemplateButton").attachEvent("onItemClick",this.action("doDownloadTemplate"));
    $$("srTopicImportSubmitButton").attachEvent("onItemClick",this.action("doUploadExcel"));
});

srTopicApp.on("showImprotWindow",function(){
	srTopicApp.srTopicImportFormWindowUi.show();
});

srTopicApp.on("doUploadExcel", function() {
	var that = this;
	var uploader = $$("srTopicExcelUploader");
	if(uploader.files.data.count() < 1){
		webix.alert({
			type : "alert-error",
			title : "上传失败",
			ok : "我知道了",
			text : "请选择一个需要导入的Excel文件"
		});
		return false;
	}
	$$("srTopicImportSubmitButton").disable();
	uploader.send(function(ret){
		if (ret.ok) {
			webix.alert({
				type : "alert-info",
				title : "上传成功",
				ok : "我知道了",
				text : "上传班级学号成功"
			});
			srTopicApp.srTopicImportFormWindowUi.hide();
			$$("srTopicImportSubmitButton").enable();
		    that.trigger("doSearch");
		} else {
			webix.alert({
				type : "alert-error",
				title : "上传失败",
				ok : "我知道了",
				text : ret.msg
			});
			$$("srTopicImportSubmitButton").enable();
		}
	});
});


srTopicApp.on("doDownloadTemplate", function() {
	var url = "/srTopic/downloadTemplate.do"
	var opened = window.open(url, '_blank');
});


srTopicApp.getExportBaseName=function(){
	var ret = "sr_topic-";
	return ret;
};

//搜索
srTopicApp.on("doSearch", function() {
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
srTopicApp.on("doExportToExcel", function() {
	this.defaults.exportToExcel = true;
	//导出文件名
	this.defaults.exportToExcelFileName = srTopicApp.getExportBaseName() +  "导出结果";
	//所选导出列
	this.defaults.exportToExcelSelectColumns = null;
	//触发导出操作
	this.trigger("doSearch");
});

//刷新
srTopicApp.on("doRefresh", function() {
	//触发导出操作
	this.trigger("doSearch");
});