//form定义
dissertationRepoApp.dissertationRepoImportForm={
        id: "dissertationRepoImportForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
	       {
			  "rows": [
			    { 
					id:"dissertationRepoExcelUploader",
					view: "uploader", value: '选择Excel文件', 
					name:"dissertationRepoExcelUploader",
					accept:"application/vnd.ms-excel",
					multiple:false,
					autosend:false, 
					link:"excelList",  upload:"/dissertationRepo/uploadFile.do" 
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
dissertationRepoApp.importScrollFromLayout={
        rows:[
             
              {view:"scrollview",  height:160, width:680,scroll:"y",  body: dissertationRepoApp.dissertationRepoImportForm}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:140,label:"下载模板" , id:"dissertationRepoDownloadTemplateButton"},
                    { view:"button", width:120,label:"取消" , id:"dissertationRepoImportCancelButton", click:"$$('dissertationRepoImportFormWindow').hide();"},
                    { view:"button", width:180,id:"dissertationRepoImportSubmitButton", label:"开始上传" , type:"form"}
                ]}
              ]
};

//窗口定义
dissertationRepoApp.dissertationRepoImportFormWindow = {
    id:"dissertationRepoImportFormWindow",
    view:"window",
    modal:true,
    width:720,
    position:"center",
    //body:dissertationRepoApp.form,
    body:dissertationRepoApp.importScrollFromLayout,
    head:"导入dissertation_repo"
    //head:dissertationRepoApp.formWindowHeader
};