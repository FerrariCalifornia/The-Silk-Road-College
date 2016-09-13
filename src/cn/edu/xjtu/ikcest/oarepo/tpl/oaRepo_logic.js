//UI初始化
oaRepoApp.on("uiInit", function(){
	//form表单
    oaRepoApp.formWindowUi=webix.ui(oaRepoApp.formWindow);
    //导入窗口
    oaRepoApp.oaRepoImportFormWindowUi = webix.ui(oaRepoApp.oaRepoImportFormWindow);
    webix.ui(oaRepoApp.layout);
});

//数据初始化
oaRepoApp.on("dataInit", function(){
    this.trigger("doSearch");
});

//应用初始化
oaRepoApp.on("appInit", function(){
    //保存表单的默认值
    this.defaults.formDefault = $$("oaRepoForm").getValues();
    
    //挂载事件处理
    $$("oaRepoToolbarBtnAddNew").attachEvent("onItemClick",this.action("openNewWindow"));
    $$("oaRepoToolbarBtnEdit").attachEvent("onItemClick",this.action("openEditWindow"));
    $$("oaRepoToolbarBtnDelete").attachEvent("onItemClick",this.action("doDelete"));

    //查询
    $$("oaRepoToolbarBtnSearch").attachEvent("onItemClick",this.action("doSearch"));
    //导出
    $$("oaRepoToolbarBtnExportToExcel").attachEvent("onItemClick",this.action("doExportToExcel"));

    //导入
    $$("oaRepoToolbarBtnImportFromExcel").attachEvent("onItemClick",this.action("showImprotWindow"));
    $$("oaRepoDownloadTemplateButton").attachEvent("onItemClick",this.action("doDownloadTemplate"));
    $$("oaRepoImportSubmitButton").attachEvent("onItemClick",this.action("doUploadExcel"));
});

oaRepoApp.on("showImprotWindow",function(){
	oaRepoApp.oaRepoImportFormWindowUi.show();
});

oaRepoApp.on("doUploadExcel", function() {
	var that = this;
	var uploader = $$("oaRepoExcelUploader");
	if(uploader.files.data.count() < 1){
		webix.alert({
			type : "alert-error",
			title : "上传失败",
			ok : "我知道了",
			text : "请选择一个需要导入的Excel文件"
		});
		return false;
	}
	$$("oaRepoImportSubmitButton").disable();
	uploader.send(function(ret){
		if (ret.ok) {
			webix.alert({
				type : "alert-info",
				title : "上传成功",
				ok : "我知道了",
				text : "上传班级学号成功"
			});
			oaRepoApp.oaRepoImportFormWindowUi.hide();
			$$("oaRepoImportSubmitButton").enable();
		    that.trigger("doSearch");
		} else {
			webix.alert({
				type : "alert-error",
				title : "上传失败",
				ok : "我知道了",
				text : ret.msg
			});
			$$("oaRepoImportSubmitButton").enable();
		}
	});
});


oaRepoApp.on("doDownloadTemplate", function() {
	var url = "/oaRepo/downloadTemplate.do"
	var opened = window.open(url, '_blank');
});


oaRepoApp.getExportBaseName=function(){
	var ret = "oa_repo-";
	return ret;
};

//搜索
oaRepoApp.on("doSearch", function() {
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
oaRepoApp.on("doExportToExcel", function() {
	this.defaults.exportToExcel = true;
	//导出文件名
	this.defaults.exportToExcelFileName = oaRepoApp.getExportBaseName() +  "导出结果";
	//所选导出列
	this.defaults.exportToExcelSelectColumns = null;
	//触发导出操作
	this.trigger("doSearch");
});

//刷新
oaRepoApp.on("doRefresh", function() {
	//触发导出操作
	this.trigger("doSearch");
});