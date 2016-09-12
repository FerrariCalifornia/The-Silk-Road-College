//UI初始化
dissertationRepoApp.on("uiInit", function(){
	//form表单
    dissertationRepoApp.formWindowUi=webix.ui(dissertationRepoApp.formWindow);
    //导入窗口
    dissertationRepoApp.dissertationRepoImportFormWindowUi = webix.ui(dissertationRepoApp.dissertationRepoImportFormWindow);
    webix.ui(dissertationRepoApp.layout);
});

//数据初始化
dissertationRepoApp.on("dataInit", function(){
    this.trigger("doSearch");
});

//应用初始化
dissertationRepoApp.on("appInit", function(){
    //保存表单的默认值
    this.defaults.formDefault = $$("dissertationRepoForm").getValues();
    
    //挂载事件处理
    $$("dissertationRepoToolbarBtnAddNew").attachEvent("onItemClick",this.action("openNewWindow"));
    $$("dissertationRepoToolbarBtnEdit").attachEvent("onItemClick",this.action("openEditWindow"));
    $$("dissertationRepoToolbarBtnDelete").attachEvent("onItemClick",this.action("doDelete"));

    //查询
    $$("dissertationRepoToolbarBtnSearch").attachEvent("onItemClick",this.action("doSearch"));
    //导出
    $$("dissertationRepoToolbarBtnExportToExcel").attachEvent("onItemClick",this.action("doExportToExcel"));

    //导入
    $$("dissertationRepoToolbarBtnImportFromExcel").attachEvent("onItemClick",this.action("showImprotWindow"));
    $$("dissertationRepoDownloadTemplateButton").attachEvent("onItemClick",this.action("doDownloadTemplate"));
    $$("dissertationRepoImportSubmitButton").attachEvent("onItemClick",this.action("doUploadExcel"));
});

dissertationRepoApp.on("showImprotWindow",function(){
	dissertationRepoApp.dissertationRepoImportFormWindowUi.show();
});

dissertationRepoApp.on("doUploadExcel", function() {
	var that = this;
	var uploader = $$("dissertationRepoExcelUploader");
	if(uploader.files.data.count() < 1){
		webix.alert({
			type : "alert-error",
			title : "上传失败",
			ok : "我知道了",
			text : "请选择一个需要导入的Excel文件"
		});
		return false;
	}
	$$("dissertationRepoImportSubmitButton").disable();
	uploader.send(function(ret){
		if (ret.ok) {
			webix.alert({
				type : "alert-info",
				title : "上传成功",
				ok : "我知道了",
				text : "上传班级学号成功"
			});
			dissertationRepoApp.dissertationRepoImportFormWindowUi.hide();
			$$("dissertationRepoImportSubmitButton").enable();
		    that.trigger("doSearch");
		} else {
			webix.alert({
				type : "alert-error",
				title : "上传失败",
				ok : "我知道了",
				text : ret.msg
			});
			$$("dissertationRepoImportSubmitButton").enable();
		}
	});
});


dissertationRepoApp.on("doDownloadTemplate", function() {
	var url = "/dissertationRepo/downloadTemplate.do"
	var opened = window.open(url, '_blank');
});


dissertationRepoApp.getExportBaseName=function(){
	var ret = "dissertation_repo-";
	return ret;
};

//搜索
dissertationRepoApp.on("doSearch", function() {
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
dissertationRepoApp.on("doExportToExcel", function() {
	this.defaults.exportToExcel = true;
	//导出文件名
	this.defaults.exportToExcelFileName = dissertationRepoApp.getExportBaseName() +  "导出结果";
	//所选导出列
	this.defaults.exportToExcelSelectColumns = null;
	//触发导出操作
	this.trigger("doSearch");
});

//刷新
dissertationRepoApp.on("doRefresh", function() {
	//触发导出操作
	this.trigger("doSearch");
});