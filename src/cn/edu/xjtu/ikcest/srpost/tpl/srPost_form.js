//form定义
srPostApp.form={
        id: "srPostForm",
        view:"form", 
        scroll:false,
        width:660,
        elements:[
   
{
	  "rows": [
	    {
	      "view": "text",
	      "id": "url",
	      "name": "url",
	      "label": "URL",
	      "labelWidth": "100"
	    },
	    {
	      "view": "text",
	      "id": "site_name",
	      "name": "site_name",
	      "label": "网站名",
	      "labelWidth": "100"
	    },
	    
	    
	    
	    
	    {
	      "view": "text",
	      "id": "data_type",
	      "name": "data_type",
	      "label": "数据类型",
	      "placeholder":"int型",
	      "labelWidth": "100"
	    },
	    {
	      "view": "richselect",
	      "id": "language_type",
	      "name": "language_type",
	      "label": "语言类型",
	      "options":[
	                 {id:"1",value:"中文"},
	                 {id:"2",value:"English"}
	                 ],
	      "labelWidth": "100"
	    },
	    {
	      "view": "text",
	      "id": "title",
	      "name": "title",
	      "label": "标题",
	      "labelWidth": "100"
	    },
	    {
	      "view": "textarea",
	      "id": "content",
	      "name": "content",
	      "label": "内容",
	      "labelWidth": "100"
	    }
	  ]
	}

        ],
        rules:{
       "url": webix.rules.isUrlNullable
//        ,"site_name": webix.rules.isNotEmpty
        ,"data_type": webix.rules.isNaturalNumberNullable
//        ,"title": webix.rules.isNotEmpty
//        ,"content": webix.rules.isNotEmpty
//        ,"post_time": webix.rules.isNotEmpty
        ,"language_type": webix.rules.isNaturalNumberNullable
        }

};
//标题定义
srPostApp.formWindowHeader={id:"srPostFormWindowHeader", view:"template", template:"sr_post", type:"header"};

//允许下拉的滚动表单
srPostApp.scrollFormLayout={
        rows:[
             
              {view:"scrollview",  height:400, width:680,scroll:"y",  body: srPostApp.form}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:120,id:"srPostSubmitButton", label:"保存" , type:"form"},
                    { view:"button", width:80,label:"取消" , click:"$$('srPostFormWindow').hide();"}
                    
                ]}
              ]
};

//窗口定义
srPostApp.formWindow = {
    id:"srPostFormWindow",
    view:"window",
    modal:true,
    width:720,
    position:"center",
    //body:srPostApp.form,
    body:srPostApp.scrollFormLayout,
    head:srPostApp.formWindowHeader
};