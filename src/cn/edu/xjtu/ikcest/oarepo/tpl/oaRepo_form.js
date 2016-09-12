//form定义
oaRepoApp.form={
        id: "oaRepoForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
       { id:"first_subject", name:"first_subject", view:"text", label:"第一主题"}
        ,{ id:"second_subject", name:"second_subject", view:"text", label:"第二主题"}
        ,{ id:"literature_title", name:"literature_title", view:"text", label:"著作名"}
        ,{ id:"abstract", name:"abstract", view:"text", label:"摘要"}
        ,{ id:"url", name:"url", view:"text", label:"URL地址"}
        ,{ id:"author", name:"author", view:"text", label:"作者"}
        ,{ id:"journal_title", name:"journal_title", view:"text", label:"杂志名"}
        ,{ id:"journal_volume", name:"journal_volume", view:"text", label:"卷"}
        ,{ id:"journal_number", name:"journal_number", view:"text", label:"杂志号"}
        ,{ id:"year", name:"year", view:"text", label:"年份"}
        ,{ id:"doi", name:"doi", view:"text", label:"工业部"}

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
             
              {view:"scrollview",  height:400, width:480,scroll:"y",  body: oaRepoApp.form}
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
    width:520,
    position:"center",
    //body:oaRepoApp.form,
    body:oaRepoApp.scrollFormLayout,
    head:oaRepoApp.formWindowHeader
};