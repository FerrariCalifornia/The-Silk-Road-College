//form定义
uRAuthorApp.uRAuthorImportForm={
        id: "uRAuthorImportForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
	       {
			  "rows": [
			    { 
					id:"uRAuthorExcelUploader",
					view: "uploader", value: '选择Excel文件', 
					name:"uRAuthorExcelUploader",
					accept:"application/vnd.ms-excel",
					multiple:false,
					autosend:false, 
					link:"excelList",  upload:"/uRAuthor/uploadFile.do" 
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
uRAuthorApp.importScrollFromLayout={
        rows:[
             
              {view:"scrollview",  height:160, width:680,scroll:"y",  body: uRAuthorApp.uRAuthorImportForm}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:140,label:"下载模板" , id:"uRAuthorDownloadTemplateButton"},
                    { view:"button", width:120,label:"取消" , id:"uRAuthorImportCancelButton", click:"$$('uRAuthorImportFormWindow').hide();"},
                    { view:"button", width:180,id:"uRAuthorImportSubmitButton", label:"开始上传" , type:"form"}
                ]}
              ]
};

//窗口定义
uRAuthorApp.uRAuthorImportFormWindow = {
    id:"uRAuthorImportFormWindow",
    view:"window",
    modal:true,
    width:720,
    position:"center",
    //body:uRAuthorApp.form,
    body:uRAuthorApp.importScrollFromLayout,
    head:"导入u_r_author"
    //head:uRAuthorApp.formWindowHeader
};