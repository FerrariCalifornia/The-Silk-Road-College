//form定义
uRUniversityApp.uRUniversityImportForm={
        id: "uRUniversityImportForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
	       {
			  "rows": [
			    { 
					id:"uRUniversityExcelUploader",
					view: "uploader", value: '选择Excel文件', 
					name:"uRUniversityExcelUploader",
					accept:"application/vnd.ms-excel",
					multiple:false,
					autosend:false, 
					link:"excelList",  upload:"/uRUniversity/uploadFile.do" 
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
uRUniversityApp.importScrollFromLayout={
        rows:[
             
              {view:"scrollview",  height:160, width:680,scroll:"y",  body: uRUniversityApp.uRUniversityImportForm}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:140,label:"下载模板" , id:"uRUniversityDownloadTemplateButton"},
                    { view:"button", width:120,label:"取消" , id:"uRUniversityImportCancelButton", click:"$$('uRUniversityImportFormWindow').hide();"},
                    { view:"button", width:180,id:"uRUniversityImportSubmitButton", label:"开始上传" , type:"form"}
                ]}
              ]
};

//窗口定义
uRUniversityApp.uRUniversityImportFormWindow = {
    id:"uRUniversityImportFormWindow",
    view:"window",
    modal:true,
    width:720,
    position:"center",
    //body:uRUniversityApp.form,
    body:uRUniversityApp.importScrollFromLayout,
    head:"导入u_r_university"
    //head:uRUniversityApp.formWindowHeader
};