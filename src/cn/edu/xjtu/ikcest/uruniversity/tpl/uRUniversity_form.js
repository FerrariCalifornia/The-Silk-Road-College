//form定义
uRUniversityApp.form={
        id: "uRUniversityForm",
        view:"form", 
        scroll:false,
        width:760,
        elements:[
       { id:"name", name:"name", view:"text", label:"名称"}
        ,{ id:"alias", name:"alias", view:"text", label:"别名"}

        ],
        rules:{
       "name": webix.rules.isNotEmpty
        ,"alias": webix.rules.isNotEmpty
        }

};
//标题定义
uRUniversityApp.formWindowHeader={id:"uRUniversityFormWindowHeader", view:"template", template:"u_r_university", type:"header"};

//允许下拉的滚动表单
uRUniversityApp.scrollFormLayout={
        rows:[
             
              {view:"scrollview",  height:400, width:780,scroll:"y",  body: uRUniversityApp.form}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:120,id:"uRUniversitySubmitButton", label:"保存" , type:"form"},
                    { view:"button", width:80,label:"取消" , click:"$$('uRUniversityFormWindow').hide();"}
                    
                ]}
              ]
};

//窗口定义
uRUniversityApp.formWindow = {
    id:"uRUniversityFormWindow",
    view:"window",
    modal:true,
    width:820,
    position:"center",
    //body:uRUniversityApp.form,
    body:uRUniversityApp.scrollFormLayout,
    head:uRUniversityApp.formWindowHeader
};