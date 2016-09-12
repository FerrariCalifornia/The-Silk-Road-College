//form定义
uRLiteratureApp.uRLiteratureImportForm={
        id: "uRLiteratureImportForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
	       {
			  "rows": [
			    { 
					id:"uRLiteratureExcelUploader",
					view: "uploader", value: '选择Excel文件', 
					name:"uRLiteratureExcelUploader",
					accept:"application/vnd.ms-excel",
					multiple:false,
					autosend:false, 
					link:"excelList",  upload:"/uRLiterature/uploadFile.do" 
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
uRLiteratureApp.importScrollFromLayout={
        rows:[
             
              {view:"scrollview",  height:160, width:680,scroll:"y",  body: uRLiteratureApp.uRLiteratureImportForm}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:140,label:"下载模板" , id:"uRLiteratureDownloadTemplateButton"},
                    { view:"button", width:120,label:"取消" , id:"uRLiteratureImportCancelButton", click:"$$('uRLiteratureImportFormWindow').hide();"},
                    { view:"button", width:180,id:"uRLiteratureImportSubmitButton", label:"开始上传" , type:"form"}
                ]}
              ]
};

//窗口定义
uRLiteratureApp.uRLiteratureImportFormWindow = {
    id:"uRLiteratureImportFormWindow",
    view:"window",
    modal:true,
    width:720,
    position:"center",
    //body:uRLiteratureApp.form,
    body:uRLiteratureApp.importScrollFromLayout,
    head:"导入u_r_literature"
    //head:uRLiteratureApp.formWindowHeader
};