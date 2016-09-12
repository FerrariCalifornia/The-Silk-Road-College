//UI初始化
srPostTopicApp.on("uiInit", function(){
	//form表单
    srPostTopicApp.formWindowUi=webix.ui(srPostTopicApp.formWindow);
    //导入窗口
    srPostTopicApp.srPostTopicImportFormWindowUi = webix.ui(srPostTopicApp.srPostTopicImportFormWindow);
    webix.ui(srPostTopicApp.layout);
});

//数据初始化
srPostTopicApp.on("dataInit", function(){
    this.trigger("doSearch");
});

//应用初始化
srPostTopicApp.on("appInit", function(){
    //保存表单的默认值
    this.defaults.formDefault = $$("srPostTopicForm").getValues();
    
    //挂载事件处理
    $$("srPostTopicToolbarBtnAddNew").attachEvent("onItemClick",this.action("openNewWindow"));
    $$("srPostTopicToolbarBtnEdit").attachEvent("onItemClick",this.action("openEditWindow"));
    $$("srPostTopicToolbarBtnDelete").attachEvent("onItemClick",this.action("doDelete"));

    //查询
    $$("srPostTopicToolbarBtnSearch").attachEvent("onItemClick",this.action("doSearch"));
    //导出
    $$("srPostTopicToolbarBtnExportToExcel").attachEvent("onItemClick",this.action("doExportToExcel"));

    //导入
    $$("srPostTopicToolbarBtnImportFromExcel").attachEvent("onItemClick",this.action("showImprotWindow"));
    $$("srPostTopicDownloadTemplateButton").attachEvent("onItemClick",this.action("doDownloadTemplate"));
    $$("srPostTopicImportSubmitButton").attachEvent("onItemClick",this.action("doUploadExcel"));
});

srPostTopicApp.on("showImprotWindow",function(){
	srPostTopicApp.srPostTopicImportFormWindowUi.show();
});

srPostTopicApp.on("doUploadExcel", function() {
	var that = this;
	var uploader = $$("srPostTopicExcelUploader");
	if(uploader.files.data.count() < 1){
		webix.alert({
			type : "alert-error",
			title : "上传失败",
			ok : "我知道了",
			text : "请选择一个需要导入的Excel文件"
		});
		return false;
	}
	$$("srPostTopicImportSubmitButton").disable();
	uploader.send(function(ret){
		if (ret.ok) {
			webix.alert({
				type : "alert-info",
				title : "上传成功",
				ok : "我知道了",
				text : "上传班级学号成功"
			});
			srPostTopicApp.srPostTopicImportFormWindowUi.hide();
			$$("srPostTopicImportSubmitButton").enable();
		    that.trigger("doSearch");
		} else {
			webix.alert({
				type : "alert-error",
				title : "上传失败",
				ok : "我知道了",
				text : ret.msg
			});
			$$("srPostTopicImportSubmitButton").enable();
		}
	});
});


srPostTopicApp.on("doDownloadTemplate", function() {
	var url = "/srPostTopic/downloadTemplate.do"
	var opened = window.open(url, '_blank');
});


srPostTopicApp.getExportBaseName=function(){
	var ret = "sr_post_topic-";
	return ret;
};

//搜索
srPostTopicApp.on("doSearch", function() {
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
srPostTopicApp.on("doExportToExcel", function() {
	this.defaults.exportToExcel = true;
	//导出文件名
	this.defaults.exportToExcelFileName = srPostTopicApp.getExportBaseName() +  "导出结果";
	//所选导出列
	this.defaults.exportToExcelSelectColumns = null;
	//触发导出操作
	this.trigger("doSearch");
});

//刷新
srPostTopicApp.on("doRefresh", function() {
	//触发导出操作
	this.trigger("doSearch");
});