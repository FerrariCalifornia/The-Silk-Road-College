//form定义
crawlerRepoApp.crawlerRepoImportForm={
        id: "crawlerRepoImportForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
	       {
			  "rows": [
			    { 
					id:"crawlerRepoExcelUploader",
					view: "uploader", value: '选择Excel文件', 
					name:"crawlerRepoExcelUploader",
					accept:"application/vnd.ms-excel",
					multiple:false,
					autosend:false, 
					link:"excelList",  upload:"/crawlerRepo/uploadFile.do" 
				},
				{
				 	view:"list",  id:"excelList", type:"wellboleUploaderList", height:80,borderless:true	
				}
			  ]
			}

        ],
        rules:{
        "excelUploader": webix.rules.isNotEmpty
        }

};

//允许下拉的滚动表单
crawlerRepoApp.importScrollFromLayout={
        rows:[
             
              {view:"scrollview",  height:160, width:680,scroll:"y",  body: crawlerRepoApp.crawlerRepoImportForm}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:140,label:"下载模板" , id:"crawlerRepoDownloadTemplateButton"},
                    { view:"button", width:120,label:"取消" , id:"crawlerRepoImportCancelButton", click:"$$('crawlerRepoImportFormWindow').hide();"},
                    { view:"button", width:180,id:"crawlerRepoImportSubmitButton", label:"开始上传" , type:"form"}
                ]}
              ]
};

//窗口定义
crawlerRepoApp.crawlerRepoImportFormWindow = {
    id:"crawlerRepoImportFormWindow",
    view:"window",
    modal:true,
    width:720,
    position:"center",
    //body:crawlerRepoApp.form,
    body:crawlerRepoApp.importScrollFromLayout,
    head:"导入crawler_repo"
    //head:crawlerRepoApp.formWindowHeader
};