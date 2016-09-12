//form定义
srTopicsResultApp.form={
        id: "srTopicsResultForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
       { id:"keywords", name:"keywords", view:"text", label:""}
        ,{ id:"summary", name:"summary", view:"text", label:""}
        ,{ id:"doc_num", name:"doc_num", view:"text", label:""}

        ],
        rules:{
       "keywords": webix.rules.isNotEmpty
        ,"summary": webix.rules.isNotEmpty
        ,"doc_num": webix.rules.isNaturalNumberNullable
        }

};
//标题定义
srTopicsResultApp.formWindowHeader={id:"srTopicsResultFormWindowHeader", view:"template", template:"sr_topics_result", type:"header"};

//允许下拉的滚动表单
srTopicsResultApp.scrollFormLayout={
        rows:[
             
              {view:"scrollview",  height:400, width:480,scroll:"y",  body: srTopicsResultApp.form}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:120,id:"srTopicsResultSubmitButton", label:"保存" , type:"form"},
                    { view:"button", width:80,label:"取消" , click:"$$('srTopicsResultFormWindow').hide();"}
                    
                ]}
              ]
};

//窗口定义
srTopicsResultApp.formWindow = {
    id:"srTopicsResultFormWindow",
    view:"window",
    modal:true,
    width:520,
    position:"center",
    //body:srTopicsResultApp.form,
    body:srTopicsResultApp.scrollFormLayout,
    head:srTopicsResultApp.formWindowHeader
};