//UI初始化
blogApp.on("uiInit", function(){
	//form表单
    blogApp.formWindowUi=webix.ui(blogApp.formWindow);
    //导入窗口
    blogApp.blogImportFormWindowUi = webix.ui(blogApp.blogImportFormWindow);
    webix.ui(blogApp.layout);
});

//数据初始化
blogApp.on("dataInit", function(){
    this.trigger("doSearch");
});

//应用初始化
blogApp.on("appInit", function(){
    //保存表单的默认值
    this.defaults.formDefault = $$("blogForm").getValues();
    
    //挂载事件处理
    $$("blogToolbarBtnAddNew").attachEvent("onItemClick",this.action("openNewWindow"));
    $$("blogToolbarBtnEdit").attachEvent("onItemClick",this.action("openEditWindow"));
    $$("blogToolbarBtnDelete").attachEvent("onItemClick",this.action("doDelete"));

    //查询
    $$("blogToolbarBtnSearch").attachEvent("onItemClick",this.action("doSearch"));
    //导出
    $$("blogToolbarBtnExportToExcel").attachEvent("onItemClick",this.action("doExportToExcel"));

    //导入
    $$("blogToolbarBtnImportFromExcel").attachEvent("onItemClick",this.action("showImprotWindow"));
    $$("blogDownloadTemplateButton").attachEvent("onItemClick",this.action("doDownloadTemplate"));
    $$("blogImportSubmitButton").attachEvent("onItemClick",this.action("doUploadExcel"));
});

blogApp.on("showImprotWindow",function(){
	blogApp.blogImportFormWindowUi.show();
});

blogApp.on("doUploadExcel", function() {
	var that = this;
	var uploader = $$("blogExcelUploader");
	if(uploader.files.data.count() < 1){
		webix.alert({
			type : "alert-error",
			title : "上传失败",
			ok : "我知道了",
			text : "请选择一个需要导入的Excel文件"
		});
		return false;
	}
	$$("blogImportSubmitButton").disable();
	uploader.send(function(ret){
		if (ret.ok) {
			webix.alert({
				type : "alert-info",
				title : "上传成功",
				ok : "我知道了",
				text : "上传班级学号成功"
			});
			blogApp.blogImportFormWindowUi.hide();
			$$("blogImportSubmitButton").enable();
		    that.trigger("doSearch");
		} else {
			webix.alert({
				type : "alert-error",
				title : "上传失败",
				ok : "我知道了",
				text : ret.msg
			});
			$$("blogImportSubmitButton").enable();
		}
	});
});


blogApp.on("doDownloadTemplate", function() {
	var url = "${base}/app/blog/downloadTemplate.do"
	var opened = window.open(url, '_blank');
});


blogApp.getExportBaseName=function(){
	var ret = "博客-";
	return ret;
};

//搜索
blogApp.on("doSearch", function() {
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
blogApp.on("doExportToExcel", function() {
	this.defaults.exportToExcel = true;
	//导出文件名
	this.defaults.exportToExcelFileName = blogApp.getExportBaseName() +  "导出结果";
	//所选导出列
	this.defaults.exportToExcelSelectColumns = null;
	//触发导出操作
	this.trigger("doSearch");
});

//刷新
blogApp.on("doRefresh", function() {
	//触发导出操作
	this.trigger("doSearch");
});