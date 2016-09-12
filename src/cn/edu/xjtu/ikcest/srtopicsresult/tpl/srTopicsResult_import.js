//form定义
srTopicsResultApp.srTopicsResultImportForm={
        id: "srTopicsResultImportForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
	       {
			  "rows": [
			    { 
					id:"srTopicsResultExcelUploader",
					view: "uploader", value: '选择Excel文件', 
					name:"srTopicsResultExcelUploader",
					accept:"application/vnd.ms-excel",
					multiple:false,
					autosend:false, 
					link:"excelList",  upload:"/srTopicsResult/uploadFile.do" 
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
srTopicsResultApp.importScrollFromLayout={
        rows:[
             
              {view:"scrollview",  height:160, width:680,scroll:"y",  body: srTopicsResultApp.srTopicsResultImportForm}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:140,label:"下载模板" , id:"srTopicsResultDownloadTemplateButton"},
                    { view:"button", width:120,label:"取消" , id:"srTopicsResultImportCancelButton", click:"$$('srTopicsResultImportFormWindow').hide();"},
                    { view:"button", width:180,id:"srTopicsResultImportSubmitButton", label:"开始上传" , type:"form"}
                ]}
              ]
};

//窗口定义
srTopicsResultApp.srTopicsResultImportFormWindow = {
    id:"srTopicsResultImportFormWindow",
    view:"window",
    modal:true,
    width:720,
    position:"center",
    //body:srTopicsResultApp.form,
    body:srTopicsResultApp.importScrollFromLayout,
    head:"导入sr_topics_result"
    //head:srTopicsResultApp.formWindowHeader
};