//form定义
uRAuthorApp.form={
        id: "uRAuthorForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
       { id:"name", name:"name", view:"text", label:"名称"},
        { id:"alias", name:"alias", view:"text", label:"别名"}
        ,{ id:"affiliation", name:"affiliation", view:"text", label:"隶属机构"}

        ],
        rules:{
       "name": webix.rules.isNotEmpty
        ,"alias": webix.rules.isNotEmpty
        ,"affiliation": webix.rules.isNotEmpty
        }

};
//标题定义
uRAuthorApp.formWindowHeader={id:"uRAuthorFormWindowHeader", view:"template", template:"u_r_author", type:"header"};

//允许下拉的滚动表单
uRAuthorApp.scrollFormLayout={
        rows:[
             
              {view:"scrollview",  height:400, width:480,scroll:"y",  body: uRAuthorApp.form}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:120,id:"uRAuthorSubmitButton", label:"保存" , type:"form"},
                    { view:"button", width:80,label:"取消" , click:"$$('uRAuthorFormWindow').hide();"}
                    
                ]}
              ]
};

//窗口定义
uRAuthorApp.formWindow = {
    id:"uRAuthorFormWindow",
    view:"window",
    modal:true,
    width:520,
    position:"center",
    //body:uRAuthorApp.form,
    body:uRAuthorApp.scrollFormLayout,
    head:uRAuthorApp.formWindowHeader
};