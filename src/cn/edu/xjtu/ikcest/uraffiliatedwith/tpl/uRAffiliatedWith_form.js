//form定义
uRAffiliatedWithApp.form={
        id: "uRAffiliatedWithForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
       { id:"author_id", name:"author_id", view:"text", label:"作者id"}
        ,{ id:"university_id", name:"university_id", view:"text", label:"大学id"}

        ],
        rules:{
       "author_id": webix.rules.isNotEmpty
        ,"university_id": webix.rules.isNotEmpty
        }

};
//标题定义
uRAffiliatedWithApp.formWindowHeader={id:"uRAffiliatedWithFormWindowHeader", view:"template", template:"u_r_affiliated_with", type:"header"};

//允许下拉的滚动表单
uRAffiliatedWithApp.scrollFormLayout={
        rows:[
             
              {view:"scrollview",  height:400, width:480,scroll:"y",  body: uRAffiliatedWithApp.form}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:120,id:"uRAffiliatedWithSubmitButton", label:"保存" , type:"form"},
                    { view:"button", width:80,label:"取消" , click:"$$('uRAffiliatedWithFormWindow').hide();"}
                    
                ]}
              ]
};

//窗口定义
uRAffiliatedWithApp.formWindow = {
    id:"uRAffiliatedWithFormWindow",
    view:"window",
    modal:true,
    width:520,
    position:"center",
    //body:uRAffiliatedWithApp.form,
    body:uRAffiliatedWithApp.scrollFormLayout,
    head:uRAffiliatedWithApp.formWindowHeader
};