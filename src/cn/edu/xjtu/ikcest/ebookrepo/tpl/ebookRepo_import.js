//form定义
ebookRepoApp.ebookRepoImportForm={
        id: "ebookRepoImportForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
	       {
			  "rows": [
			    { 
					id:"ebookRepoExcelUploader",
					view: "uploader", value: '选择Excel文件', 
					name:"ebookRepoExcelUploader",
					accept:"application/vnd.ms-excel",
					multiple:false,
					autosend:false, 
					link:"excelList",  upload:"/ebookRepo/uploadFile.do" 
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
ebookRepoApp.importScrollFromLayout={
        rows:[
             
              {view:"scrollview",  height:160, width:680,scroll:"y",  body: ebookRepoApp.ebookRepoImportForm}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:140,label:"下载模板" , id:"ebookRepoDownloadTemplateButton"},
                    { view:"button", width:120,label:"取消" , id:"ebookRepoImportCancelButton", click:"$$('ebookRepoImportFormWindow').hide();"},
                    { view:"button", width:180,id:"ebookRepoImportSubmitButton", label:"开始上传" , type:"form"}
                ]}
              ]
};

//窗口定义
ebookRepoApp.ebookRepoImportFormWindow = {
    id:"ebookRepoImportFormWindow",
    view:"window",
    modal:true,
    width:720,
    position:"center",
    //body:ebookRepoApp.form,
    body:ebookRepoApp.importScrollFromLayout,
    head:"导入ebook_repo"
    //head:ebookRepoApp.formWindowHeader
};