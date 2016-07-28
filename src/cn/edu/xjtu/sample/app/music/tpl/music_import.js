//form定义
musicApp.musicImportForm={
        id: "musicImportForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
	       {
			  "rows": [
			    { 
					id:"musicExcelUploader",
					view: "uploader", value: '选择Excel文件', 
					name:"musicExcelUploader",
					accept:"application/vnd.ms-excel",
					multiple:false,
					autosend:false, 
					link:"excelList",  upload:"${base}/app/music/uploadFile.do" 
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
musicApp.importScrollFromLayout={
        rows:[
             
              {view:"scrollview",  height:160, width:680,scroll:"y",  body: musicApp.musicImportForm}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:140,label:"下载模板" , id:"musicDownloadTemplateButton"},
                    { view:"button", width:120,label:"取消" , id:"musicImportCancelButton", click:"$$('musicImportFormWindow').hide();"},
                    { view:"button", width:180,id:"musicImportSubmitButton", label:"开始上传" , type:"form"}
                ]}
              ]
};

//窗口定义
musicApp.musicImportFormWindow = {
    id:"musicImportFormWindow",
    view:"window",
    modal:true,
    width:720,
    position:"center",
    //body:musicApp.form,
    body:musicApp.importScrollFromLayout,
    head:"导入music list"
    //head:musicApp.formWindowHeader
};