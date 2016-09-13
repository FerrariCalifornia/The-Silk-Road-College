//UI初始化
confRepoApp.on("uiInit", function(){
	//form表单
    confRepoApp.formWindowUi=webix.ui(confRepoApp.formWindow);
    //导入窗口
    confRepoApp.confRepoImportFormWindowUi = webix.ui(confRepoApp.confRepoImportFormWindow);
    webix.ui(confRepoApp.layout);
});

//数据初始化
confRepoApp.on("dataInit", function(){
    this.trigger("doSearch");
});

//应用初始化
confRepoApp.on("appInit", function(){
    //保存表单的默认值
    this.defaults.formDefault = $$("confRepoForm").getValues();
    
    //挂载事件处理
    $$("confRepoToolbarBtnAddNew").attachEvent("onItemClick",this.action("openNewWindow"));
    $$("confRepoToolbarBtnEdit").attachEvent("onItemClick",this.action("openEditWindow"));
    $$("confRepoToolbarBtnDelete").attachEvent("onItemClick",this.action("doDelete"));

    //查询
    $$("confRepoToolbarBtnSearch").attachEvent("onItemClick",this.action("doSearch"));
    //导出
    $$("confRepoToolbarBtnExportToExcel").attachEvent("onItemClick",this.action("doExportToExcel"));

    //导入
    $$("confRepoToolbarBtnImportFromExcel").attachEvent("onItemClick",this.action("showImprotWindow"));
    $$("confRepoDownloadTemplateButton").attachEvent("onItemClick",this.action("doDownloadTemplate"));
    $$("confRepoImportSubmitButton").attachEvent("onItemClick",this.action("doUploadExcel"));
});

confRepoApp.on("showImprotWindow",function(){
	confRepoApp.confRepoImportFormWindowUi.show();
});

confRepoApp.on("doUploadExcel", function() {
	var that = this;
	var uploader = $$("confRepoExcelUploader");
	if(uploader.files.data.count() < 1){
		webix.alert({
			type : "alert-error",
			title : "上传失败",
			ok : "我知道了",
			text : "请选择一个需要导入的Excel文件"
		});
		return false;
	}
	$$("confRepoImportSubmitButton").disable();
	uploader.send(function(ret){
		if (ret.ok) {
			webix.alert({
				type : "alert-info",
				title : "上传成功",
				ok : "我知道了",
				text : "上传班级学号成功"
			});
			confRepoApp.confRepoImportFormWindowUi.hide();
			$$("confRepoImportSubmitButton").enable();
		    that.trigger("doSearch");
		} else {
			webix.alert({
				type : "alert-error",
				title : "上传失败",
				ok : "我知道了",
				text : ret.msg
			});
			$$("confRepoImportSubmitButton").enable();
		}
	});
});


confRepoApp.on("doDownloadTemplate", function() {
	var url = "/confRepo/downloadTemplate.do"
	var opened = window.open(url, '_blank');
});


confRepoApp.getExportBaseName=function(){
	var ret = "conf_repo-";
	return ret;
};

//搜索
confRepoApp.on("doSearch", function() {
	var that = this;
	var table = $$(this.defaults.mainTableId);
	table.clearAll();
	var url = this.defaults.loadUrl + "?key=value";
//	添加keywork搜索参数
//	alert("hehe");

	var keyword = $$("keyword").getValue();
//	alert(keyword);
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
confRepoApp.on("doExportToExcel", function() {
	this.defaults.exportToExcel = true;
	//导出文件名
	this.defaults.exportToExcelFileName = confRepoApp.getExportBaseName() +  "导出结果";
	//所选导出列
	this.defaults.exportToExcelSelectColumns = null;
	//触发导出操作
	this.trigger("doSearch");
});

//刷新
confRepoApp.on("doRefresh", function() {
	//触发导出操作
	this.trigger("doSearch");
});