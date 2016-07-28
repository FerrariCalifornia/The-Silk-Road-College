//form定义
schoolApp.form={
        id: "schoolForm",
        view:"form", 
        scroll:false,
        width:460,
        elements:[
       { id:"name", name:"name", view:"text", label:"name"}

        ],
        rules:{
       "name": webix.rules.isNotEmpty
        }

};
//标题定义
schoolApp.formWindowHeader={id:"schoolFormWindowHeader", view:"template", template:"school", type:"header"};

//允许下拉的滚动表单
schoolApp.scrollFormLayout={
        rows:[
             
              {view:"scrollview",  height:400, width:480,scroll:"y",  body: schoolApp.form}
              ,
              {
                  margin : 5,
                  padding: 10,
                  height:60,
                  css:"clean",
                  cols:[
                    {},
                    { view:"button", width:120,id:"schoolSubmitButton", label:"保存" , type:"form"},
                    { view:"button", width:80,label:"取消" , click:"$$('schoolFormWindow').hide();"}
                    
                ]}
              ]
};

//窗口定义
schoolApp.formWindow = {
    id:"schoolFormWindow",
    view:"window",
    modal:true,
    width:520,
    position:"center",
    //body:schoolApp.form,
    body:schoolApp.scrollFormLayout,
    head:schoolApp.formWindowHeader
};