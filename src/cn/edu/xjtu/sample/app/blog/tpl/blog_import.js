//form定义
blogApp.blogImportForm={
        id: "blogImportForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
	       {
			  "rows": [
			    { 
					id:"blogExcelUploader",
					view: "uploader", value: '选择Excel文件', 
					name:"blogExcelUploader",
					accept:"application/vnd.ms-excel",
					multiple:false,
					autosend:false, 
					link:"excelList",  upload:"${base}/app/blog/uploadFile.do" 
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
blogApp.importScrollFromLayout={
        rows:[
             
              {view:"scrollview",  height:160, width:680,scroll:"y",  body: blogApp.blogImportForm}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:140,label:"下载模板" , id:"blogDownloadTemplateButton"},
                    { view:"button", width:120,label:"取消" , id:"blogImportCancelButton", click:"$$('blogImportFormWindow').hide();"},
                    { view:"button", width:180,id:"blogImportSubmitButton", label:"开始上传" , type:"form"}
                ]}
              ]
};

//窗口定义
blogApp.blogImportFormWindow = {
    id:"blogImportFormWindow",
    view:"window",
    modal:true,
    width:720,
    position:"center",
    //body:blogApp.form,
    body:blogApp.importScrollFromLayout,
    head:"导入博客"
    //head:blogApp.formWindowHeader
};