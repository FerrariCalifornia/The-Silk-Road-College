//form定义
srPostTopicApp.srPostTopicImportForm={
        id: "srPostTopicImportForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
	       {
			  "rows": [
			    { 
					id:"srPostTopicExcelUploader",
					view: "uploader", value: '选择Excel文件', 
					name:"srPostTopicExcelUploader",
					accept:"application/vnd.ms-excel",
					multiple:false,
					autosend:false, 
					link:"excelList",  upload:"/srPostTopic/uploadFile.do" 
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
srPostTopicApp.importScrollFromLayout={
        rows:[
             
              {view:"scrollview",  height:160, width:680,scroll:"y",  body: srPostTopicApp.srPostTopicImportForm}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:140,label:"下载模板" , id:"srPostTopicDownloadTemplateButton"},
                    { view:"button", width:120,label:"取消" , id:"srPostTopicImportCancelButton", click:"$$('srPostTopicImportFormWindow').hide();"},
                    { view:"button", width:180,id:"srPostTopicImportSubmitButton", label:"开始上传" , type:"form"}
                ]}
              ]
};

//窗口定义
srPostTopicApp.srPostTopicImportFormWindow = {
    id:"srPostTopicImportFormWindow",
    view:"window",
    modal:true,
    width:720,
    position:"center",
    //body:srPostTopicApp.form,
    body:srPostTopicApp.importScrollFromLayout,
    head:"导入sr_post_topic"
    //head:srPostTopicApp.formWindowHeader
};