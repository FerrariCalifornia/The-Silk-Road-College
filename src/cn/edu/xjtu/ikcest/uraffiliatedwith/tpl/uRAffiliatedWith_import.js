//form定义
uRAffiliatedWithApp.uRAffiliatedWithImportForm={
        id: "uRAffiliatedWithImportForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
	       {
			  "rows": [
			    { 
					id:"uRAffiliatedWithExcelUploader",
					view: "uploader", value: '选择Excel文件', 
					name:"uRAffiliatedWithExcelUploader",
					accept:"application/vnd.ms-excel",
					multiple:false,
					autosend:false, 
					link:"excelList",  upload:"/uRAffiliatedWith/uploadFile.do" 
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
uRAffiliatedWithApp.importScrollFromLayout={
        rows:[
             
              {view:"scrollview",  height:160, width:680,scroll:"y",  body: uRAffiliatedWithApp.uRAffiliatedWithImportForm}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:140,label:"下载模板" , id:"uRAffiliatedWithDownloadTemplateButton"},
                    { view:"button", width:120,label:"取消" , id:"uRAffiliatedWithImportCancelButton", click:"$$('uRAffiliatedWithImportFormWindow').hide();"},
                    { view:"button", width:180,id:"uRAffiliatedWithImportSubmitButton", label:"开始上传" , type:"form"}
                ]}
              ]
};

//窗口定义
uRAffiliatedWithApp.uRAffiliatedWithImportFormWindow = {
    id:"uRAffiliatedWithImportFormWindow",
    view:"window",
    modal:true,
    width:720,
    position:"center",
    //body:uRAffiliatedWithApp.form,
    body:uRAffiliatedWithApp.importScrollFromLayout,
    head:"导入u_r_affiliated_with"
    //head:uRAffiliatedWithApp.formWindowHeader
};