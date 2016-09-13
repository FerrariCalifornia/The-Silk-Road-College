//form定义
ebookRepoApp.form={
        id: "ebookRepoForm",
        view:"form", 
        scroll:false,
        width:1060,
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
	          "label": "题名",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        }
	     
	      ]
	    },
	   
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "eisbn",
	          "name": "eisbn",
	          "label": "ESIBN",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        },
	        {
		          "view": "text",
		          "id": "isbn",
		          "name": "isbn",
		          "label": "ISBN",
		          "labelWidth": "100",
		          "labelAlign": "right"
		        }
	      ]
	    },
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "page_counter",
	          "name": "page_counter",
	          "label": "页码",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        },
	        {
		          "view": "text",
		          "id": "author",
		          "name": "author",
		          "label": "作者",
		          "labelWidth": "100",
		          "labelAlign": "right"
		        }
	      ]
	    },
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "publisher",
	          "name": "publisher",
	          "label": "出版社",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        },
	        {
	          "view": "text",
	          "id": "year",
	          "name": "year",
	          "label": "出版年",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        }
	      ]
	    },
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "series_identification",
	          "name": "series_identification",
	          "label": "丛书标识",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        },
	        {
	          "view": "text",
	          "id": "series_name",
	          "name": "series_name",
	          "label": "丛书名",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        }
	      ]
	    },
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "series_id",
	          "name": "series_id",
	          "label": "丛书号",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        },
	        {
		          "view": "text",
		          "id": "place_published",
		          "name": "place_published",
		          "label": "出版地",
		          "labelWidth": "100",
		          "labelAlign": "right"
		        }
	      ]
	    },
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "keys_or_subjects",
	          "name": "keys_or_subjects",
	          "label": "关键字或主题",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        },
	        {
	          "view": "text",
	          "id": "language",
	          "name": "language",
	          "label": "语言",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        }
	      ]
	    },
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "class_num",
	          "name": "class_num",
	          "label": "分类号",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        },
	        {
	          "view": "text",
	          "id": "nation",
	          "name": "nation",
	          "label": "国别",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        }
	      ]
	    },
	    
	    
	    {
	      "cols": [
	      
	        {
	          "view": "textarea",
	          "id": "summary",
	          "name": "summary",
	          "label": "摘要",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        }
	      ]
	    },
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "url",
	          "name": "url",
	          "label": "urlLink",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        }
	      ]
	    },
	    {
		      "cols": [
		       
		        {
		          "view": "text",
		          "id": "img_url",
		          "name": "img_url",
		          "label": "图片urlLink",
		          "labelWidth": "100",
		          "labelAlign": "right"
		        }
		      ]
		    }
	  ]
	}
                  
                  
                  
                  
        ],
        rules:{
       "isbn": webix.rules.isNotEmpty
        ,"eisbn": webix.rules.isNotEmpty
        ,"author": webix.rules.isNotEmpty
        ,"title": webix.rules.isNotEmpty
//        ,"page_counter": webix.rules.isNotEmpty
//        ,"place_published": webix.rules.isNotEmpty
//        ,"publisher": webix.rules.isNotEmpty
//        ,"year": webix.rules.isNotEmpty
//        ,"series_identification": webix.rules.isNotEmpty
//        ,"series_name": webix.rules.isNotEmpty
//        ,"series_id": webix.rules.isNotEmpty
        ,"url": webix.rules.isUrlNullable
        ,"img_url": webix.rules.isUrlNullable
//        ,"summary": webix.rules.isNotEmpty
//        ,"keys_or_subjects": webix.rules.isNotEmpty
//        ,"language": webix.rules.isNotEmpty
//        ,"class_num": webix.rules.isNotEmpty
//        ,"nation": webix.rules.isNotEmpty
        }

};
//标题定义
ebookRepoApp.formWindowHeader={id:"ebookRepoFormWindowHeader", view:"template", template:"ebook_repo", type:"header"};

//允许下拉的滚动表单
ebookRepoApp.scrollFormLayout={
        rows:[
             
              {view:"scrollview",  height:450, width:1080,scroll:"y",  body: ebookRepoApp.form}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:120,id:"ebookRepoSubmitButton", label:"保存" , type:"form"},
                    { view:"button", width:80,label:"取消" , click:"$$('ebookRepoFormWindow').hide();"}
                    
                ]}
              ]
};

//窗口定义
ebookRepoApp.formWindow = {
    id:"ebookRepoFormWindow",
    view:"window",
    modal:true,
    width:1120,
    position:"center",
    //body:ebookRepoApp.form,
    body:ebookRepoApp.scrollFormLayout,
    head:ebookRepoApp.formWindowHeader
};