//form定义
uRLiteratureApp.form={
        id: "uRLiteratureForm",
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
	          "label": "标题",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        }
	      ]
	    },
	    
	    {
		      "cols": [
		               {
		     	          "view": "text",
		     	          "id": "doi",
		     	          "name": "doi",
		     	          "label": "DOI",
		     	          "labelWidth": "100",
		     	          "labelAlign": "right"
		     	        },
		        {
		          "view": "text",
		          "id": "year",
		          "name": "year",
		          "label": "年份",
		          "labelWidth": "100",
		          "labelAlign": "right"
		        }
		      ]
		    },
	    
	    
	    
	    
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "orginal_publication",
	          "name": "orginal_publication",
	          "label": "原出版社",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        },
	        {
	          "view": "text",
	          "id": "volume",
	          "name": "volume",
	          "label": "卷",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        }
	      ]
	    },
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "issue",
	          "name": "issue",
	          "label": "期",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        },
	        {
	          "view": "text",
	          "id": "paper_id",
	          "name": "paper_id",
	          "label": "论文ID",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        }
	      ]
	    },
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "start_page",
	          "name": "start_page",
	          "label": "起始页",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        },
	        {
	          "view": "text",
	          "id": "end_page",
	          "name": "end_page",
	          "label": "结束页",
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
	          "label": "页码数",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        },
	        {
	          "view": "text",
	          "id": "citing_paper",
	          "name": "citing_paper",
	          "label": "引用",
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
	          "label": "url",
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
		          "id": "author_keyword",
		          "name": "author_keyword",
		          "label": "作者关键词",
		          "labelWidth": "100",
		          "labelAlign": "right"
		        }
		      ]
		    },
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "index_keyword",
	          "name": "index_keyword",
	          "label": "索引关键词",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        },
	        {
	          "view": "text",
	          "id": "analysis_serial_number",
	          "name": "analysis_serial_number",
	          "label": "分析序列号",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        }
	      ]
	    },
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "cas",
	          "name": "cas",
	          "label": "CAS",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        },
	        {
	          "view": "text",
	          "id": "brand",
	          "name": "brand",
	          "label": "商标",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        }
	      ]
	    },
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "manufacturer",
	          "name": "manufacturer",
	          "label": "制造商",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        },
	        {
	          "view": "text",
	          "id": "funding_info",
	          "name": "funding_info",
	          "label": "资助信息",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        }
	      ]
	    },
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "references",
	          "name": "references",
	          "label": "参考文献",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        },
	        {
	          "view": "text",
	          "id": "postal_addr",
	          "name": "postal_addr",
	          "label": "邮寄地址",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        }
	      ]
	    },
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "editor",
	          "name": "editor",
	          "label": "编辑",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        },
	        {
	          "view": "text",
	          "id": "funding_agent",
	          "name": "funding_agent",
	          "label": "资助机构",
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
	          "label": "出版商",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        },
	        {
	          "view": "text",
	          "id": "conference_name",
	          "name": "conference_name",
	          "label": "会议名称",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        }
	      ]
	    },
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "issn",
	          "name": "issn",
	          "label": "ISSN",
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
	          "id": "coden",
	          "name": "coden",
	          "label": "CODEN",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        },
	        {
	          "view": "text",
	          "id": "pubmed_id",
	          "name": "pubmed_id",
	          "label": "PubmedID",
	          "labelWidth": "100",
	          "labelAlign": "right"
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
	          "labelWidth": "100",
	          "labelAlign": "right"
	        },
	        {
	          "view": "text",
	          "id": "orginal_publication_abbr",
	          "name": "orginal_publication_abbr",
	          "label": "原出版社",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        }
	      ]
	    },
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "paper_type",
	          "name": "paper_type",
	          "label": "论文类型",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        },
	        {
	          "view": "text",
	          "id": "source_of_publication",
	          "name": "source_of_publication",
	          "label": "出版源",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        }
	      ]
	    },
	    {
	      "cols": [
	        {
	          "view": "text",
	          "id": "eid",
	          "name": "eid",
	          "label": "EID",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        },
	        {
	          "view": "text",
	          "id": "u_id",
	          "name": "u_id",
	          "label": "UID",
	          "labelWidth": "100",
	          "labelAlign": "right"
	        }
	      ]
	    }
	  ]
	}

        ],
        rules:{
//       "title": webix.rules.isNotEmpty
//        ,"year": webix.rules.isNaturalNumberNullable
//        ,"orginal_publication": webix.rules.isNotEmpty
//        ,"volume": webix.rules.isNotEmpty
//        ,"issue": webix.rules.isNotEmpty
//        ,"paper_id": webix.rules.isNaturalNumberNullable
//        ,"start_page": webix.rules.isNaturalNumberNullable
//        ,"end_page": webix.rules.isNaturalNumberNullable
//        ,"page_counter": webix.rules.isNaturalNumberNullable
//        ,"citing_paper": webix.rules.isNotEmpty
//        ,"doi": webix.rules.isNotEmpty
//        ,"url": webix.rules.isNotEmpty
//        ,"summary": webix.rules.isNotEmpty
//        ,"author_keyword": webix.rules.isNotEmpty
//        ,"index_keyword": webix.rules.isNotEmpty
//        ,"analysis_serial_number": webix.rules.isNotEmpty
//        ,"cas": webix.rules.isNotEmpty
//        ,"brand": webix.rules.isNotEmpty
//        ,"manufacturer": webix.rules.isNotEmpty
//        ,"funding_info": webix.rules.isNotEmpty
//        ,"references": webix.rules.isNotEmpty
//        ,"postal_addr": webix.rules.isNotEmpty
//        ,"editor": webix.rules.isNotEmpty
//        ,"funding_agent": webix.rules.isNotEmpty
//        ,"publisher": webix.rules.isNotEmpty
//        ,"conference_name": webix.rules.isNotEmpty
//        ,"issn": webix.rules.isNotEmpty
//        ,"isbn": webix.rules.isNotEmpty
//        ,"coden": webix.rules.isNotEmpty
//        ,"pubmed_id": webix.rules.isNotEmpty
//        ,"language": webix.rules.isNotEmpty
//        ,"orginal_publication_abbr": webix.rules.isNotEmpty
//        ,"paper_type": webix.rules.isNotEmpty
//        ,"source_of_publication": webix.rules.isNotEmpty
//        ,"eid": webix.rules.isNotEmpty
//        ,"u_id": webix.rules.isNotEmpty
        }

};
//标题定义
uRLiteratureApp.formWindowHeader={id:"uRLiteratureFormWindowHeader", view:"template", template:"u_r_literature", type:"header"};

//允许下拉的滚动表单
uRLiteratureApp.scrollFormLayout={
        rows:[
             
              {view:"scrollview",  height:450, width:1080,scroll:"y",  body: uRLiteratureApp.form}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:120,id:"uRLiteratureSubmitButton", label:"保存" , type:"form"},
                    { view:"button", width:80,label:"取消" , click:"$$('uRLiteratureFormWindow').hide();"}
                    
                ]}
              ]
};

//窗口定义
uRLiteratureApp.formWindow = {
    id:"uRLiteratureFormWindow",
    view:"window",
    modal:true,
    width:1120,
    position:"center",
    //body:uRLiteratureApp.form,
    body:uRLiteratureApp.scrollFormLayout,
    head:uRLiteratureApp.formWindowHeader
};