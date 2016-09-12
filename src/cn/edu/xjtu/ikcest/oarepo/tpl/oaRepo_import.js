//form定义
oaRepoApp.oaRepoImportForm={
        id: "oaRepoImportForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
	       {
			  "rows": [
			    { 
					id:"oaRepoExcelUploader",
					view: "uploader", value: '选择Excel文件', 
					name:"oaRepoExcelUploader",
					accept:"application/vnd.ms-excel",
					multiple:false,
					autosend:false, 
					link:"excelList",  upload:"/oaRepo/uploadFile.do" 
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
oaRepoApp.importScrollFromLayout={
        rows:[
             
              {view:"scrollview",  height:160, width:680,scroll:"y",  body: oaRepoApp.oaRepoImportForm}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:140,label:"下载模板" , id:"oaRepoDownloadTemplateButton"},
                    { view:"button", width:120,label:"取消" , id:"oaRepoImportCancelButton", click:"$$('oaRepoImportFormWindow').hide();"},
                    { view:"button", width:180,id:"oaRepoImportSubmitButton", label:"开始上传" , type:"form"}
                ]}
              ]
};

//窗口定义
oaRepoApp.oaRepoImportFormWindow = {
    id:"oaRepoImportFormWindow",
    view:"window",
    modal:true,
    width:720,
    position:"center",
    //body:oaRepoApp.form,
    body:oaRepoApp.importScrollFromLayout,
    head:"导入oa_repo"
    //head:oaRepoApp.formWindowHeader
};