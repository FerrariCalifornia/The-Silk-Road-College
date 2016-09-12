//form定义
confRepoApp.confRepoImportForm={
        id: "confRepoImportForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
	       {
			  "rows": [
			    { 
					id:"confRepoExcelUploader",
					view: "uploader", value: '选择Excel文件', 
					name:"confRepoExcelUploader",
					accept:"application/vnd.ms-excel",
					multiple:false,
					autosend:false, 
					link:"excelList",  upload:"/confRepo/uploadFile.do" 
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
confRepoApp.importScrollFromLayout={
        rows:[
             
              {view:"scrollview",  height:160, width:680,scroll:"y",  body: confRepoApp.confRepoImportForm}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:140,label:"下载模板" , id:"confRepoDownloadTemplateButton"},
                    { view:"button", width:120,label:"取消" , id:"confRepoImportCancelButton", click:"$$('confRepoImportFormWindow').hide();"},
                    { view:"button", width:180,id:"confRepoImportSubmitButton", label:"开始上传" , type:"form"}
                ]}
              ]
};

//窗口定义
confRepoApp.confRepoImportFormWindow = {
    id:"confRepoImportFormWindow",
    view:"window",
    modal:true,
    width:720,
    position:"center",
    //body:confRepoApp.form,
    body:confRepoApp.importScrollFromLayout,
    head:"导入conf_repo"
    //head:confRepoApp.formWindowHeader
};