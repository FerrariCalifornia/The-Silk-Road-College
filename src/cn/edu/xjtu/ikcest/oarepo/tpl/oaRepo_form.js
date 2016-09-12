//form定义
oaRepoApp.form={
        id: "oaRepoForm",
        view:"form", 
        scroll:false,
        width:960,
        elements:[
       {
  "margin": 10,
  "rows": [
    {
      "cols": [
        {
          "view": "text",
          "id": "first_subject",
          "name": "first_subject",
          "label": "第一主题",
          "labelWidth": "100",
          "labelAlign": "right"
        }
      ]
    },
    
    {
        "cols": [
          {
            "view": "text",
            "id": "second_subject",
            "name": "second_subject",
            "label": "第二主题",
            "labelWidth": "100",
            "labelAlign": "right"
          }
        ]
      },
    
    {
      "cols": [
        {
          "view": "text",
          "id": "literature_title",
          "name": "literature_title",
          "label": "著作名",
          "labelWidth": "100",
          "labelAlign": "right"
        }
      ]
    },

    
    {
      "cols": [
       
        {
          "view": "textarea",
          "id": "abstract",
          "name": "abstract",
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
          "id": "doi",
          "name": "doi",
          "label": "工业部",
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
          "id": "journal_title",
          "name": "journal_title",
          "label": "杂志名",
          "labelWidth": "100",
          "labelAlign": "right"
        },
        {
          "view": "text",
          "id": "journal_volume",
          "name": "journal_volume",
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
          "id": "journal_number",
          "name": "journal_number",
          "label": "杂志号",
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
            "id": "url",
            "name": "url",
            "label": "url地址",
            "labelWidth": "100",
            "labelAlign": "right"
          }
        ]
      },
  ]
}

        ],
        rules:{
       "first_subject": webix.rules.isNotEmpty
        ,"second_subject": webix.rules.isNotEmpty
        ,"literature_title": webix.rules.isNotEmpty
        ,"abstract": webix.rules.isNotEmpty
        ,"url": webix.rules.isNotEmpty
        ,"author": webix.rules.isNotEmpty
        ,"journal_title": webix.rules.isNotEmpty
        ,"journal_volume": webix.rules.isNotEmpty
        ,"journal_number": webix.rules.isNotEmpty
        ,"year": webix.rules.isNaturalNumberNullable
        ,"doi": webix.rules.isNotEmpty
        }

};
//标题定义
oaRepoApp.formWindowHeader={id:"oaRepoFormWindowHeader", view:"template", template:"oa_repo", type:"header"};

//允许下拉的滚动表单
oaRepoApp.scrollFormLayout={
        rows:[
             
              {view:"scrollview",  height:400, width:980,scroll:"y",  body: oaRepoApp.form}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:120,id:"oaRepoSubmitButton", label:"保存" , type:"form"},
                    { view:"button", width:80,label:"取消" , click:"$$('oaRepoFormWindow').hide();"}
                    
                ]}
              ]
};

//窗口定义
oaRepoApp.formWindow = {
    id:"oaRepoFormWindow",
    view:"window",
    modal:true,
    width:1020,
    position:"center",
    //body:oaRepoApp.form,
    body:oaRepoApp.scrollFormLayout,
    head:oaRepoApp.formWindowHeader
};