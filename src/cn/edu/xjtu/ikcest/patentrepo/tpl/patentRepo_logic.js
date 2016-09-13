//UI初始化
patentRepoApp.on("uiInit", function(){
	//form表单
    patentRepoApp.formWindowUi=webix.ui(patentRepoApp.formWindow);
    //导入窗口
    patentRepoApp.patentRepoImportFormWindowUi = webix.ui(patentRepoApp.patentRepoImportFormWindow);
    webix.ui(patentRepoApp.layout);
});

//数据初始化
patentRepoApp.on("dataInit", function(){
    this.trigger("doSearch");
});

//应用初始化
patentRepoApp.on("appInit", function(){
    //保存表单的默认值
    this.defaults.formDefault = $$("patentRepoForm").getValues();
    
    //挂载事件处理
    $$("patentRepoToolbarBtnAddNew").attachEvent("onItemClick",this.action("openNewWindow"));
    $$("patentRepoToolbarBtnEdit").attachEvent("onItemClick",this.action("openEditWindow"));
    $$("patentRepoToolbarBtnDelete").attachEvent("onItemClick",this.action("doDelete"));

    //查询
    $$("patentRepoToolbarBtnSearch").attachEvent("onItemClick",this.action("doSearch"));
    //导出
//    $$("patentRepoToolbarBtnExportToExcel").attachEvent("onItemClick",this.action("doExportToExcel"));

    //导入
    $$("patentRepoToolbarBtnImportFromExcel").attachEvent("onItemClick",this.action("showImprotWindow"));
    $$("patentRepoDownloadTemplateButton").attachEvent("onItemClick",this.action("doDownloadTemplate"));
    $$("patentRepoImportSubmitButton").attachEvent("onItemClick",this.action("doUploadExcel"));
});

patentRepoApp.on("showImprotWindow",function(){
	patentRepoApp.patentRepoImportFormWindowUi.show();
});

patentRepoApp.on("doUploadExcel", function() {
	var that = this;
	var uploader = $$("patentRepoExcelUploader");
	if(uploader.files.data.count() < 1){
		webix.alert({
			type : "alert-error",
			title : "上传失败",
			ok : "我知道了",
			text : "请选择一个需要导入的Excel文件"
		});
		return false;
	}
	$$("patentRepoImportSubmitButton").disable();
	uploader.send(function(ret){
		if (ret.ok) {
			webix.alert({
				type : "alert-info",
				title : "上传成功",
				ok : "我知道了",
				text : "上传班级学号成功"
			});
			patentRepoApp.patentRepoImportFormWindowUi.hide();
			$$("patentRepoImportSubmitButton").enable();
		    that.trigger("doSearch");
		} else {
			webix.alert({
				type : "alert-error",
				title : "上传失败",
				ok : "我知道了",
				text : ret.msg
			});
			$$("patentRepoImportSubmitButton").enable();
		}
	});
});


patentRepoApp.on("doDownloadTemplate", function() {
	var url = "/patentRepo/downloadTemplate.do"
	var opened = window.open(url, '_blank');
});


patentRepoApp.getExportBaseName=function(){
	var ret = "patent_repo-";
	return ret;
};

//搜索
patentRepoApp.on("doSearch", function() {
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
patentRepoApp.on("doExportToExcel", function() {
	this.defaults.exportToExcel = true;
	//导出文件名
	this.defaults.exportToExcelFileName = patentRepoApp.getExportBaseName() +  "导出结果";
	//所选导出列
	this.defaults.exportToExcelSelectColumns = null;
	//触发导出操作
	this.trigger("doSearch");
});

//刷新
patentRepoApp.on("doRefresh", function() {
	//触发导出操作
	this.trigger("doSearch");
});