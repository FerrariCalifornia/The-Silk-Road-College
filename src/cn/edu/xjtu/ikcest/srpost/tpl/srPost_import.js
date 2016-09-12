//form定义
srPostApp.srPostImportForm={
        id: "srPostImportForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
	       {
			  "rows": [
			    { 
					id:"srPostExcelUploader",
					view: "uploader", value: '选择Excel文件', 
					name:"srPostExcelUploader",
					accept:"application/vnd.ms-excel",
					multiple:false,
					autosend:false, 
					link:"excelList",  upload:"/srPost/uploadFile.do" 
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
srPostApp.importScrollFromLayout={
        rows:[
             
              {view:"scrollview",  height:160, width:680,scroll:"y",  body: srPostApp.srPostImportForm}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:140,label:"下载模板" , id:"srPostDownloadTemplateButton"},
                    { view:"button", width:120,label:"取消" , id:"srPostImportCancelButton", click:"$$('srPostImportFormWindow').hide();"},
                    { view:"button", width:180,id:"srPostImportSubmitButton", label:"开始上传" , type:"form"}
                ]}
              ]
};

//窗口定义
srPostApp.srPostImportFormWindow = {
    id:"srPostImportFormWindow",
    view:"window",
    modal:true,
    width:720,
    position:"center",
    //body:srPostApp.form,
    body:srPostApp.importScrollFromLayout,
    head:"导入sr_post"
    //head:srPostApp.formWindowHeader
};