//form定义
schoolApp.schoolImportForm={
        id: "schoolImportForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
	       {
			  "rows": [
			    { 
					id:"schoolExcelUploader",
					view: "uploader", value: '选择Excel文件', 
					name:"schoolExcelUploader",
					accept:"application/vnd.ms-excel",
					multiple:false,
					autosend:false, 
					link:"excelList",  upload:"${base}/app/school/uploadFile.do" 
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
schoolApp.importScrollFromLayout={
        rows:[
             
              {view:"scrollview",  height:160, width:680,scroll:"y",  body: schoolApp.schoolImportForm}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:140,label:"下载模板" , id:"schoolDownloadTemplateButton"},
                    { view:"button", width:120,label:"取消" , id:"schoolImportCancelButton", click:"$$('schoolImportFormWindow').hide();"},
                    { view:"button", width:180,id:"schoolImportSubmitButton", label:"开始上传" , type:"form"}
                ]}
              ]
};

//窗口定义
schoolApp.schoolImportFormWindow = {
    id:"schoolImportFormWindow",
    view:"window",
    modal:true,
    width:720,
    position:"center",
    //body:schoolApp.form,
    body:schoolApp.importScrollFromLayout,
    head:"导入school"
    //head:schoolApp.formWindowHeader
};