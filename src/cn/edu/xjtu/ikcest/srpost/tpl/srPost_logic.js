//UI初始化
srPostApp.on("uiInit", function(){
	//form表单
    srPostApp.formWindowUi=webix.ui(srPostApp.formWindow);
    //导入窗口
    srPostApp.srPostImportFormWindowUi = webix.ui(srPostApp.srPostImportFormWindow);
    webix.ui(srPostApp.layout);
});

//数据初始化
srPostApp.on("dataInit", function(){
    this.trigger("doSearch");
});

//应用初始化
srPostApp.on("appInit", function(){
    //保存表单的默认值
    this.defaults.formDefault = $$("srPostForm").getValues();
    
    //挂载事件处理
    $$("srPostToolbarBtnAddNew").attachEvent("onItemClick",this.action("openNewWindow"));
    $$("srPostToolbarBtnEdit").attachEvent("onItemClick",this.action("openEditWindow"));
    $$("srPostToolbarBtnDelete").attachEvent("onItemClick",this.action("doDelete"));

    //查询
    $$("srPostToolbarBtnSearch").attachEvent("onItemClick",this.action("doSearch"));
    //导出
    $$("srPostToolbarBtnExportToExcel").attachEvent("onItemClick",this.action("doExportToExcel"));

    //导入
    $$("srPostToolbarBtnImportFromExcel").attachEvent("onItemClick",this.action("showImprotWindow"));
    $$("srPostDownloadTemplateButton").attachEvent("onItemClick",this.action("doDownloadTemplate"));
    $$("srPostImportSubmitButton").attachEvent("onItemClick",this.action("doUploadExcel"));
});

srPostApp.on("showImprotWindow",function(){
	srPostApp.srPostImportFormWindowUi.show();
});

srPostApp.on("doUploadExcel", function() {
	var that = this;
	var uploader = $$("srPostExcelUploader");
	if(uploader.files.data.count() < 1){
		webix.alert({
			type : "alert-error",
			title : "上传失败",
			ok : "我知道了",
			text : "请选择一个需要导入的Excel文件"
		});
		return false;
	}
	$$("srPostImportSubmitButton").disable();
	uploader.send(function(ret){
		if (ret.ok) {
			webix.alert({
				type : "alert-info",
				title : "上传成功",
				ok : "我知道了",
				text : "上传班级学号成功"
			});
			srPostApp.srPostImportFormWindowUi.hide();
			$$("srPostImportSubmitButton").enable();
		    that.trigger("doSearch");
		} else {
			webix.alert({
				type : "alert-error",
				title : "上传失败",
				ok : "我知道了",
				text : ret.msg
			});
			$$("srPostImportSubmitButton").enable();
		}
	});
});


srPostApp.on("doDownloadTemplate", function() {
	var url = "/srPost/downloadTemplate.do"
	var opened = window.open(url, '_blank');
});


srPostApp.getExportBaseName=function(){
	var ret = "sr_post-";
	return ret;
};

//搜索
srPostApp.on("doSearch", function() {
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
srPostApp.on("doExportToExcel", function() {
	this.defaults.exportToExcel = true;
	//导出文件名
	this.defaults.exportToExcelFileName = srPostApp.getExportBaseName() +  "导出结果";
	//所选导出列
	this.defaults.exportToExcelSelectColumns = null;
	//触发导出操作
	this.trigger("doSearch");
});

//刷新
srPostApp.on("doRefresh", function() {
	//触发导出操作
	this.trigger("doSearch");
});