//form定义
srPostTopicApp.form={
        id: "srPostTopicForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
       { id:"post_id", name:"post_id", view:"text", label:"帖子id"}
        ,{ id:"topic_id", name:"topic_id", view:"text", label:"主题id"}
        ,{ id:"similarity", name:"similarity", view:"text", label:"相似度"}
//        ,{ id:"post_time", name:"post_time", view:"text", label:"发布时间"}

        ],
        rules:{
       "post_id": webix.rules.isNotEmpty
        ,"topic_id": webix.rules.isNaturalNumberNullable
        ,"similarity": webix.rules.isNotEmpty
//        ,"post_time": webix.rules.isNotEmpty
        }

};
//标题定义
srPostTopicApp.formWindowHeader={id:"srPostTopicFormWindowHeader", view:"template", template:"sr_post_topic", type:"header"};

//允许下拉的滚动表单
srPostTopicApp.scrollFormLayout={
        rows:[
             
              {view:"scrollview",  height:400, width:480,scroll:"y",  body: srPostTopicApp.form}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:120,id:"srPostTopicSubmitButton", label:"保存" , type:"form"},
                    { view:"button", width:80,label:"取消" , click:"$$('srPostTopicFormWindow').hide();"}
                    
                ]}
              ]
};

//窗口定义
srPostTopicApp.formWindow = {
    id:"srPostTopicFormWindow",
    view:"window",
    modal:true,
    width:520,
    position:"center",
    //body:srPostTopicApp.form,
    body:srPostTopicApp.scrollFormLayout,
    head:srPostTopicApp.formWindowHeader
};