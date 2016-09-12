//form定义
uRWrittenByApp.form={
        id: "uRWrittenByForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
       { id:"literature_id", name:"literature_id", view:"text", label:"文献id"}
        ,{ id:"author_id", name:"author_id", view:"text", label:"作者id"}

        ],
        rules:{
       "literature_id": webix.rules.isNotEmpty
        ,"author_id": webix.rules.isNotEmpty
        }

};
//标题定义
uRWrittenByApp.formWindowHeader={id:"uRWrittenByFormWindowHeader", view:"template", template:"u_r_written_by", type:"header"};

//允许下拉的滚动表单
uRWrittenByApp.scrollFormLayout={
        rows:[
             
              {view:"scrollview",  height:400, width:480,scroll:"y",  body: uRWrittenByApp.form}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:120,id:"uRWrittenBySubmitButton", label:"保存" , type:"form"},
                    { view:"button", width:80,label:"取消" , click:"$$('uRWrittenByFormWindow').hide();"}
                    
                ]}
              ]
};

//窗口定义
uRWrittenByApp.formWindow = {
    id:"uRWrittenByFormWindow",
    view:"window",
    modal:true,
    width:520,
    position:"center",
    //body:uRWrittenByApp.form,
    body:uRWrittenByApp.scrollFormLayout,
    head:uRWrittenByApp.formWindowHeader
};