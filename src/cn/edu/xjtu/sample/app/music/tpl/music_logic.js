//UI初始化
musicApp.on("uiInit", function(){
	//form表单
    musicApp.formWindowUi=webix.ui(musicApp.formWindow);
    //导入窗口
    musicApp.musicImportFormWindowUi = webix.ui(musicApp.musicImportFormWindow);
    webix.ui(musicApp.layout);
});

//数据初始化
musicApp.on("dataInit", function(){
    this.trigger("doSearch");
});

//应用初始化
musicApp.on("appInit", function(){
    //保存表单的默认值
    this.defaults.formDefault = $$("musicForm").getValues();
    
    //挂载事件处理
    $$("musicToolbarBtnAddNew").attachEvent("onItemClick",this.action("openNewWindow"));
    $$("musicToolbarBtnEdit").attachEvent("onItemClick",this.action("openEditWindow"));
    $$("musicToolbarBtnDelete").attachEvent("onItemClick",this.action("doDelete"));

    //查询
    $$("musicToolbarBtnSearch").attachEvent("onItemClick",this.action("doSearch"));
    //导出
    $$("musicToolbarBtnExportToExcel").attachEvent("onItemClick",this.action("doExportToExcel"));

    //导入
    $$("musicToolbarBtnImportFromExcel").attachEvent("onItemClick",this.action("showImprotWindow"));
    $$("musicDownloadTemplateButton").attachEvent("onItemClick",this.action("doDownloadTemplate"));
    $$("musicImportSubmitButton").attachEvent("onItemClick",this.action("doUploadExcel"));
});

musicApp.on("showImprotWindow",function(){
	musicApp.musicImportFormWindowUi.show();
});

musicApp.on("doUploadExcel", function() {
	var that = this;
	var uploader = $$("musicExcelUploader");
	if(uploader.files.data.count() < 1){
		webix.alert({
			type : "alert-error",
			title : "上传失败",
			ok : "我知道了",
			text : "请选择一个需要导入的Excel文件"
		});
		return false;
	}
	$$("musicImportSubmitButton").disable();
	uploader.send(function(ret){
		if (ret.ok) {
			webix.alert({
				type : "alert-info",
				title : "上传成功",
				ok : "我知道了",
				text : "上传班级学号成功"
			});
			musicApp.musicImportFormWindowUi.hide();
			$$("musicImportSubmitButton").enable();
		    that.trigger("doSearch");
		} else {
			webix.alert({
				type : "alert-error",
				title : "上传失败",
				ok : "我知道了",
				text : ret.msg
			});
			$$("musicImportSubmitButton").enable();
		}
	});
});


musicApp.on("doDownloadTemplate", function() {
	var url = "${base}/app/music/downloadTemplate.do"
	var opened = window.open(url, '_blank');
});


musicApp.getExportBaseName=function(){
	var ret = "music list-";
	return ret;
};

//搜索
musicApp.on("doSearch", function() {
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
musicApp.on("doExportToExcel", function() {
	this.defaults.exportToExcel = true;
	//导出文件名
	this.defaults.exportToExcelFileName = musicApp.getExportBaseName() +  "导出结果";
	//所选导出列
	this.defaults.exportToExcelSelectColumns = null;
	//触发导出操作
	this.trigger("doSearch");
});

//刷新
musicApp.on("doRefresh", function() {
	//触发导出操作
	this.trigger("doSearch");
});