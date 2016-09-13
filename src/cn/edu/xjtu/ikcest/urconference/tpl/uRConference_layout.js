//工具栏定义
uRConferenceApp.toolbar = {
    margin: 5,
    height:40,
    css:"clean",
    cols:[
         { id : "keyword", view : "text",placeholder : "关键字",label : "关键字","labelWidth" : "60",labelAlign : "right",width : 260}
        ,{ view:"button", id:"uRConferenceToolbarBtnSearch", type:"iconButton", icon:"search", label:"查询", autowidth:true,hotkey: "enter"}
        ,{}
        ,{ view:"button", id:"uRConferenceToolbarBtnAddNew", type:"iconButton", icon:"plus-square", label:"添加", autowidth:true}
        ,{ view:"button", id:"uRConferenceToolbarBtnEdit",type:"iconButton", icon:"pencil", label:"修改", autowidth:true}
        ,{ view:"button", id:"uRConferenceToolbarBtnDelete",type:"iconButton", icon:"trash-o", label:"删除", autowidth:true}
        ,{ view:"button", id:"uRConferenceToolbarBtnImportFromExcel",type:"iconButton", icon:"file-excel-o", label:"导入", autowidth:true}
//        ,{ view:"button", id:"uRConferenceToolbarBtnExportToExcel",type:"iconButton", icon:"file-excel-o", label:"导出", autowidth:true}
    ]
};

//主列表定义
uRConferenceApp.mainTable = {
    id:"uRConferenceMainTable",
    view:"datatable",
    autoconfig:true,
    borderless:true,
    resizeColumn:true,
    //navigation:true,
    //datafetch:23,
    //loadahead:23,
    pager:"uRConferencePager",
    select:"row",
    //leftSplit:5,
    columns:[
//        { id:"id",  header:"id", css:{"text-align":"right"},    width:80}
//        { id:"name",    header:"名称", adjust:true}
        { id:"alias",    header:"别名", adjust:true}
        ,{ id:"date",   view:"datatable", format:webix.Date.dateToStr("%Y-%m-%d"),  header:"日期", adjust:true}
        ,{ id:"location",    header:"地点", adjust:true}
        ,{ id:"code",    header:"代码", adjust:true}
    ]
};

//分页代码
uRConferenceApp.pager = { 
        view:"pager", 
        id:"uRConferencePager",
        template:" <div class='paging_all'>{common.first()} {common.prev()} <div class='paging_text'>共#count#条记录，当前第 {common.page()} 页/共 #limit#页</div> {common.next()} {common.last()}</div>",
        autosize:true, 
        //size:10,
        group:6 
    };


//布局定义
uRConferenceApp.layout= {
    type:"space",
    rows:[
            uRConferenceApp.toolbar,
            {
                rows:[
                        uRConferenceApp.mainTable,
                        uRConferenceApp.pager
                    ]
            }
    ]
};