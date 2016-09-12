//form定义
patentRepoApp.patentRepoImportForm={
        id: "patentRepoImportForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
	       {
			  "rows": [
			    { 
					id:"patentRepoExcelUploader",
					view: "uploader", value: '选择Excel文件', 
					name:"patentRepoExcelUploader",
					accept:"application/vnd.ms-excel",
					multiple:false,
					autosend:false, 
					link:"excelList",  upload:"/patentRepo/uploadFile.do" 
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
patentRepoApp.importScrollFromLayout={
        rows:[
             
              {view:"scrollview",  height:160, width:680,scroll:"y",  body: patentRepoApp.patentRepoImportForm}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:140,label:"下载模板" , id:"patentRepoDownloadTemplateButton"},
                    { view:"button", width:120,label:"取消" , id:"patentRepoImportCancelButton", click:"$$('patentRepoImportFormWindow').hide();"},
                    { view:"button", width:180,id:"patentRepoImportSubmitButton", label:"开始上传" , type:"form"}
                ]}
              ]
};

//窗口定义
patentRepoApp.patentRepoImportFormWindow = {
    id:"patentRepoImportFormWindow",
    view:"window",
    modal:true,
    width:720,
    position:"center",
    //body:patentRepoApp.form,
    body:patentRepoApp.importScrollFromLayout,
    head:"导入patent_repo"
    //head:patentRepoApp.formWindowHeader
};