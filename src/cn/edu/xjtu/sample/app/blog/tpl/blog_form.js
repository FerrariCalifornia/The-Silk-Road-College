//form定义
blogApp.form={
        id: "blogForm",
        view:"form", 
        scroll:false,
        width:760,
        elements:[
       {
  "rows": [
{
    "view": "richselect",
    "id": "type_code",
    "name": "type_code",
    "label": "文章类型",
    "labelAlign": "right",
    "labelWidth": "100", 
    "options": "${base}/sys/dict/getDictsForSelect.do?code=type_code&withAll=false"
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
      "labelWidth": "100",
      "height": 300
    }
  ]
}

        ],
        rules:{
       "title": webix.rules.isNotEmpty
        ,"content": webix.rules.isNotEmpty
        }

};
//标题定义
blogApp.formWindowHeader={id:"blogFormWindowHeader", view:"template", template:"博客", type:"header"};

//允许下拉的滚动表单
blogApp.scrollFormLayout={
        rows:[
             
              {view:"scrollview",  height:400, width:780,scroll:"y",  body: blogApp.form}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:120,id:"blogSubmitButton", label:"保存" , type:"form"},
                    { view:"button", width:80,label:"取消" , click:"$$('blogFormWindow').hide();"}
                    
                ]}
              ]
};

//窗口定义
blogApp.formWindow = {
    id:"blogFormWindow",
    view:"window",
    modal:true,
    width:820,
    position:"center",
    //body:blogApp.form,
    body:blogApp.scrollFormLayout,
    head:blogApp.formWindowHeader
};