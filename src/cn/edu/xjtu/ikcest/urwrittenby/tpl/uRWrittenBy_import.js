//form定义
uRWrittenByApp.uRWrittenByImportForm={
        id: "uRWrittenByImportForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
	       {
			  "rows": [
			    { 
					id:"uRWrittenByExcelUploader",
					view: "uploader", value: '选择Excel文件', 
					name:"uRWrittenByExcelUploader",
					accept:"application/vnd.ms-excel",
					multiple:false,
					autosend:false, 
					link:"excelList",  upload:"/uRWrittenBy/uploadFile.do" 
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
uRWrittenByApp.importScrollFromLayout={
        rows:[
             
              {view:"scrollview",  height:160, width:680,scroll:"y",  body: uRWrittenByApp.uRWrittenByImportForm}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:140,label:"下载模板" , id:"uRWrittenByDownloadTemplateButton"},
                    { view:"button", width:120,label:"取消" , id:"uRWrittenByImportCancelButton", click:"$$('uRWrittenByImportFormWindow').hide();"},
                    { view:"button", width:180,id:"uRWrittenByImportSubmitButton", label:"开始上传" , type:"form"}
                ]}
              ]
};

//窗口定义
uRWrittenByApp.uRWrittenByImportFormWindow = {
    id:"uRWrittenByImportFormWindow",
    view:"window",
    modal:true,
    width:720,
    position:"center",
    //body:uRWrittenByApp.form,
    body:uRWrittenByApp.importScrollFromLayout,
    head:"导入u_r_written_by"
    //head:uRWrittenByApp.formWindowHeader
};