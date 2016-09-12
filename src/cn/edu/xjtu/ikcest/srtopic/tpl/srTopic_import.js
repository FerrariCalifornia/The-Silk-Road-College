//form定义
srTopicApp.srTopicImportForm={
        id: "srTopicImportForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
	       {
			  "rows": [
			    { 
					id:"srTopicExcelUploader",
					view: "uploader", value: '选择Excel文件', 
					name:"srTopicExcelUploader",
					accept:"application/vnd.ms-excel",
					multiple:false,
					autosend:false, 
					link:"excelList",  upload:"/srTopic/uploadFile.do" 
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
srTopicApp.importScrollFromLayout={
        rows:[
             
              {view:"scrollview",  height:160, width:680,scroll:"y",  body: srTopicApp.srTopicImportForm}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:140,label:"下载模板" , id:"srTopicDownloadTemplateButton"},
                    { view:"button", width:120,label:"取消" , id:"srTopicImportCancelButton", click:"$$('srTopicImportFormWindow').hide();"},
                    { view:"button", width:180,id:"srTopicImportSubmitButton", label:"开始上传" , type:"form"}
                ]}
              ]
};

//窗口定义
srTopicApp.srTopicImportFormWindow = {
    id:"srTopicImportFormWindow",
    view:"window",
    modal:true,
    width:720,
    position:"center",
    //body:srTopicApp.form,
    body:srTopicApp.importScrollFromLayout,
    head:"导入sr_topic"
    //head:srTopicApp.formWindowHeader
};