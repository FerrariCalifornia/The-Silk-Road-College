//工具栏定义
uRUniversityApp.toolbar = {
    margin: 5,
    height:40,
    css:"clean",
    cols:[
         { id : "keyword", view : "text",placeholder : "关键字",label : "关键字","labelWidth" : "60",labelAlign : "right",width : 260}
        ,{ view:"button", id:"uRUniversityToolbarBtnSearch", type:"iconButton", icon:"search", label:"查询", autowidth:true,hotkey: "enter"}
        ,{}
        ,{ view:"button", id:"uRUniversityToolbarBtnAddNew", type:"iconButton", icon:"plus-square", label:"添加", autowidth:true}
        ,{ view:"button", id:"uRUniversityToolbarBtnEdit",type:"iconButton", icon:"pencil", label:"修改", autowidth:true}
        ,{ view:"button", id:"uRUniversityToolbarBtnDelete",type:"iconButton", icon:"trash-o", label:"删除", autowidth:true}
        ,{ view:"button", id:"uRUniversityToolbarBtnImportFromExcel",type:"iconButton", icon:"file-excel-o", label:"导入", autowidth:true}
        ,{ view:"button", id:"uRUniversityToolbarBtnExportToExcel",type:"iconButton", icon:"file-excel-o", label:"导出", autowidth:true}
    ]
};

//主列表定义
uRUniversityApp.mainTable = {
    id:"uRUniversityMainTable",
    view:"datatable",
    autoconfig:true,
    borderless:true,
    resizeColumn:true,
    //navigation:true,
    //datafetch:23,
    //loadahead:23,
    pager:"uRUniversityPager",
    select:"row",
    //leftSplit:5,
    columns:[
//        { id:"id",  header:"id", css:{"text-align":"right"},    width:80}
        { id:"name",    header:"名称", adjust:true}
        ,{ id:"alias",    header:"别名", adjust:true}
    ]
};

//分页代码
uRUniversityApp.pager = { 
        view:"pager", 
        id:"uRUniversityPager",
        template:" <div class='paging_all'>{common.first()} {common.prev()} <div class='paging_text'>共#count#条记录，当前第 {common.page()} 页/共 #limit#页</div> {common.next()} {common.last()}</div>",
        autosize:true, 
        //size:10,
        group:6 
    };


//布局定义
uRUniversityApp.layout= {
    type:"space",
    rows:[
            uRUniversityApp.toolbar,
            {
                rows:[
                        uRUniversityApp.mainTable,
                        uRUniversityApp.pager
                    ]
            }
    ]
};