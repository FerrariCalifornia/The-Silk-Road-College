//form定义
uRConferenceApp.uRConferenceImportForm={
        id: "uRConferenceImportForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
	       {
			  "rows": [
			    { 
					id:"uRConferenceExcelUploader",
					view: "uploader", value: '选择Excel文件', 
					name:"uRConferenceExcelUploader",
					accept:"application/vnd.ms-excel",
					multiple:false,
					autosend:false, 
					link:"excelList",  upload:"/uRConference/uploadFile.do" 
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
uRConferenceApp.importScrollFromLayout={
        rows:[
             
              {view:"scrollview",  height:160, width:680,scroll:"y",  body: uRConferenceApp.uRConferenceImportForm}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:140,label:"下载模板" , id:"uRConferenceDownloadTemplateButton"},
                    { view:"button", width:120,label:"取消" , id:"uRConferenceImportCancelButton", click:"$$('uRConferenceImportFormWindow').hide();"},
                    { view:"button", width:180,id:"uRConferenceImportSubmitButton", label:"开始上传" , type:"form"}
                ]}
              ]
};

//窗口定义
uRConferenceApp.uRConferenceImportFormWindow = {
    id:"uRConferenceImportFormWindow",
    view:"window",
    modal:true,
    width:720,
    position:"center",
    //body:uRConferenceApp.form,
    body:uRConferenceApp.importScrollFromLayout,
    head:"导入u_r_conference"
    //head:uRConferenceApp.formWindowHeader
};