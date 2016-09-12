//form定义
crawlerRepoApp.form={
        id: "crawlerRepoForm",
        view:"form", 
        scroll:false,
        width:760,
        elements:[
{
	  "margin": 10,
	  "rows": [
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "title",
	          "name": "title",
	          "label": "标题\t",
	          "labelWidth": "100"
	        },
	        {
	          "view": "text",
	          "id": "info_type",
	          "name": "info_type",
	          "label": "信息类型",
	          "labelWidth": "100"
	        }
	      ]
	    },
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "language",
	          "name": "language",
	          "label": "语言",
	          "labelWidth": "100"
	        },
	        {
	          "view": "text",
	          "id": "url",
	          "name": "url",
	          "label": "url地址",
	          "labelWidth": "100"
	        }
	      ]
	    },
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "site_name",
	          "name": "site_name",
	          "label": "网站名称",
	          "labelWidth": "100"
	        },
	        {
	          "view": "text",
	          "id": "image_url",
	          "name": "image_url",
	          "label": "图片url地址",
	          "labelWidth": "100"
	        }
	      ]
	    },
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "post_at",
	          "name": "post_at",
	          "label": "发布时间",
	          "labelWidth": "100"
	        },
	        {
	          "view": "text",
	          "id": "created_at",
	          "name": "created_at",
	          "label": "创建时间",
	          "labelWidth": "100"
	        }
	      ]
	    },
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "content",
	          "name": "content",
	          "label": "内容",
	          "height": 300,
	          "labelWidth": "100"
	        }
	      ]
	    }
	  ]
	}


        ],
        rules:{
       "title": webix.rules.isNotEmpty
        ,"content": webix.rules.isNotEmpty
        ,"info_type": webix.rules.isNotEmpty
        ,"language": webix.rules.isNotEmpty
        ,"url": webix.rules.isNotEmpty
        ,"site_name": webix.rules.isNotEmpty
        ,"image_url": webix.rules.isNotEmpty
        ,"post_at": webix.rules.isNotEmpty
//        ,"created_at": webix.rules.isNotEmpty
        }

};
//标题定义
crawlerRepoApp.formWindowHeader={id:"crawlerRepoFormWindowHeader", view:"template", template:"crawler_repo", type:"header"};

//允许下拉的滚动表单
crawlerRepoApp.scrollFormLayout={
        rows:[
             
              {view:"scrollview",  height:400, width:780,scroll:"y",  body: crawlerRepoApp.form}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:120,id:"crawlerRepoSubmitButton", label:"保存" , type:"form"},
                    { view:"button", width:80,label:"取消" , click:"$$('crawlerRepoFormWindow').hide();"}
                    
                ]}
              ]
};

//窗口定义
crawlerRepoApp.formWindow = {
    id:"crawlerRepoFormWindow",
    view:"window",
    modal:true,
    width:820,
    position:"center",
    //body:crawlerRepoApp.form,
    body:crawlerRepoApp.scrollFormLayout,
    head:crawlerRepoApp.formWindowHeader
};