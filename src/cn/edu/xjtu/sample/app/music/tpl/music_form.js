//form定义
musicApp.form={
        id: "musicForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
{
	  "rows": [
	    {
	      "view": "richselect",
	      "id": "name",
	      "name": "name",
	      "label": "name",
	      "options": [
	        "One",
	        "Two"
	      ],
	      "labelWidth": "100"
	    },
	    {
	      "view": "text",
	      "id": "author",
	      "name": "author",
	      "label": "Author",
	      "labelWidth": "100"
	    }
	    
	  ]
	}

        ],
        rules:{
       "name": webix.rules.isNotEmpty
        ,"author": webix.rules.isNotEmpty
        }

};
//标题定义
musicApp.formWindowHeader={id:"musicFormWindowHeader", view:"template", template:"music list", type:"header"};

//允许下拉的滚动表单
musicApp.scrollFormLayout={
        rows:[
             
              {view:"scrollview",  height:400, width:480,scroll:"y",  body: musicApp.form}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:120,id:"musicSubmitButton", label:"保存" , type:"form"},
                    { view:"button", width:80,label:"取消" , click:"$$('musicFormWindow').hide();"}
                    
                ]}
              ]
};

//窗口定义
musicApp.formWindow = {
    id:"musicFormWindow",
    view:"window",
    modal:true,
    width:520,
    position:"center",
    //body:musicApp.form,
    body:musicApp.scrollFormLayout,
    head:musicApp.formWindowHeader
};