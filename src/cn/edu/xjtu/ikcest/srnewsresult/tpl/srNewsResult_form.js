//form定义
srNewsResultApp.form={
        id: "srNewsResultForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
       { id:"title", name:"title", view:"text", label:"标题"}
        ,{ id:"site_name", name:"site_name", view:"text", label:"网站名"}
        ,{ id:"url", name:"url", view:"text", label:"URL"}
        ,{ id:"post_time", name:"post_time", view:"text", label:"发布时间"}
        ,{ id:"related_topic", name:"related_topic", view:"text", label:"相关主题"}

        ],
        rules:{
       "title": webix.rules.isNotEmpty
        ,"site_name": webix.rules.isNotEmpty
        ,"url": webix.rules.isUrlNullable
        ,"post_time": webix.rules.isNotEmpty
        ,"related_topic": webix.rules.isNotEmpty
        }

};
//标题定义
srNewsResultApp.formWindowHeader={id:"srNewsResultFormWindowHeader", view:"template", template:"sr_news_result", type:"header"};

//允许下拉的滚动表单
srNewsResultApp.scrollFormLayout={
        rows:[
             
              {view:"scrollview",  height:400, width:480,scroll:"y",  body: srNewsResultApp.form}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:120,id:"srNewsResultSubmitButton", label:"保存" , type:"form"},
                    { view:"button", width:80,label:"取消" , click:"$$('srNewsResultFormWindow').hide();"}
                    
                ]}
              ]
};

//窗口定义
srNewsResultApp.formWindow = {
    id:"srNewsResultFormWindow",
    view:"window",
    modal:true,
    width:520,
    position:"center",
    //body:srNewsResultApp.form,
    body:srNewsResultApp.scrollFormLayout,
    head:srNewsResultApp.formWindowHeader
};