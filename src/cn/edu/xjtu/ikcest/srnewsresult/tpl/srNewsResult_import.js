//form定义
srNewsResultApp.srNewsResultImportForm={
        id: "srNewsResultImportForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
	       {
			  "rows": [
			    { 
					id:"srNewsResultExcelUploader",
					view: "uploader", value: '选择Excel文件', 
					name:"srNewsResultExcelUploader",
					accept:"application/vnd.ms-excel",
					multiple:false,
					autosend:false, 
					link:"excelList",  upload:"/srNewsResult/uploadFile.do" 
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
srNewsResultApp.importScrollFromLayout={
        rows:[
             
              {view:"scrollview",  height:160, width:680,scroll:"y",  body: srNewsResultApp.srNewsResultImportForm}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:140,label:"下载模板" , id:"srNewsResultDownloadTemplateButton"},
                    { view:"button", width:120,label:"取消" , id:"srNewsResultImportCancelButton", click:"$$('srNewsResultImportFormWindow').hide();"},
                    { view:"button", width:180,id:"srNewsResultImportSubmitButton", label:"开始上传" , type:"form"}
                ]}
              ]
};

//窗口定义
srNewsResultApp.srNewsResultImportFormWindow = {
    id:"srNewsResultImportFormWindow",
    view:"window",
    modal:true,
    width:720,
    position:"center",
    //body:srNewsResultApp.form,
    body:srNewsResultApp.importScrollFromLayout,
    head:"导入sr_news_result"
    //head:srNewsResultApp.formWindowHeader
};