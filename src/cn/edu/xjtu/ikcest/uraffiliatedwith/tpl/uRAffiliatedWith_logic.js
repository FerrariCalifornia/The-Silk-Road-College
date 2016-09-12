//UI初始化
uRAffiliatedWithApp.on("uiInit", function(){
	//form表单
    uRAffiliatedWithApp.formWindowUi=webix.ui(uRAffiliatedWithApp.formWindow);
    //导入窗口
    uRAffiliatedWithApp.uRAffiliatedWithImportFormWindowUi = webix.ui(uRAffiliatedWithApp.uRAffiliatedWithImportFormWindow);
    webix.ui(uRAffiliatedWithApp.layout);
});

//数据初始化
uRAffiliatedWithApp.on("dataInit", function(){
    this.trigger("doSearch");
});

//应用初始化
uRAffiliatedWithApp.on("appInit", function(){
    //保存表单的默认值
    this.defaults.formDefault = $$("uRAffiliatedWithForm").getValues();
    
    //挂载事件处理
    $$("uRAffiliatedWithToolbarBtnAddNew").attachEvent("onItemClick",this.action("openNewWindow"));
    $$("uRAffiliatedWithToolbarBtnEdit").attachEvent("onItemClick",this.action("openEditWindow"));
    $$("uRAffiliatedWithToolbarBtnDelete").attachEvent("onItemClick",this.action("doDelete"));

    //查询
    $$("uRAffiliatedWithToolbarBtnSearch").attachEvent("onItemClick",this.action("doSearch"));
    //导出
    $$("uRAffiliatedWithToolbarBtnExportToExcel").attachEvent("onItemClick",this.action("doExportToExcel"));

    //导入
    $$("uRAffiliatedWithToolbarBtnImportFromExcel").attachEvent("onItemClick",this.action("showImprotWindow"));
    $$("uRAffiliatedWithDownloadTemplateButton").attachEvent("onItemClick",this.action("doDownloadTemplate"));
    $$("uRAffiliatedWithImportSubmitButton").attachEvent("onItemClick",this.action("doUploadExcel"));
});

uRAffiliatedWithApp.on("showImprotWindow",function(){
	uRAffiliatedWithApp.uRAffiliatedWithImportFormWindowUi.show();
});

uRAffiliatedWithApp.on("doUploadExcel", function() {
	var that = this;
	var uploader = $$("uRAffiliatedWithExcelUploader");
	if(uploader.files.data.count() < 1){
		webix.alert({
			type : "alert-error",
			title : "上传失败",
			ok : "我知道了",
			text : "请选择一个需要导入的Excel文件"
		});
		return false;
	}
	$$("uRAffiliatedWithImportSubmitButton").disable();
	uploader.send(function(ret){
		if (ret.ok) {
			webix.alert({
				type : "alert-info",
				title : "上传成功",
				ok : "我知道了",
				text : "上传班级学号成功"
			});
			uRAffiliatedWithApp.uRAffiliatedWithImportFormWindowUi.hide();
			$$("uRAffiliatedWithImportSubmitButton").enable();
		    that.trigger("doSearch");
		} else {
			webix.alert({
				type : "alert-error",
				title : "上传失败",
				ok : "我知道了",
				text : ret.msg
			});
			$$("uRAffiliatedWithImportSubmitButton").enable();
		}
	});
});


uRAffiliatedWithApp.on("doDownloadTemplate", function() {
	var url = "/uRAffiliatedWith/downloadTemplate.do"
	var opened = window.open(url, '_blank');
});


uRAffiliatedWithApp.getExportBaseName=function(){
	var ret = "u_r_affiliated_with-";
	return ret;
};

//搜索
uRAffiliatedWithApp.on("doSearch", function() {
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
uRAffiliatedWithApp.on("doExportToExcel", function() {
	this.defaults.exportToExcel = true;
	//导出文件名
	this.defaults.exportToExcelFileName = uRAffiliatedWithApp.getExportBaseName() +  "导出结果";
	//所选导出列
	this.defaults.exportToExcelSelectColumns = null;
	//触发导出操作
	this.trigger("doSearch");
});

//刷新
uRAffiliatedWithApp.on("doRefresh", function() {
	//触发导出操作
	this.trigger("doSearch");
});