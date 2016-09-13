//工具栏定义
uRAuthorApp.toolbar = {
    margin: 5,
    height:40,
    css:"clean",
    cols:[
         { id : "keyword", view : "text",placeholder : "关键字",label : "关键字","labelWidth" : "60",labelAlign : "right",width : 260}
        ,{ view:"button", id:"uRAuthorToolbarBtnSearch", type:"iconButton", icon:"search", label:"查询", autowidth:true,hotkey: "enter"}
        ,{}
        ,{ view:"button", id:"uRAuthorToolbarBtnAddNew", type:"iconButton", icon:"plus-square", label:"添加", autowidth:true}
        ,{ view:"button", id:"uRAuthorToolbarBtnEdit",type:"iconButton", icon:"pencil", label:"修改", autowidth:true}
        ,{ view:"button", id:"uRAuthorToolbarBtnDelete",type:"iconButton", icon:"trash-o", label:"删除", autowidth:true}
        ,{ view:"button", id:"uRAuthorToolbarBtnImportFromExcel",type:"iconButton", icon:"file-excel-o", label:"导入", autowidth:true}
        ,{ view:"button", id:"uRAuthorToolbarBtnExportToExcel",type:"iconButton", icon:"file-excel-o", label:"导出", autowidth:true}
    ]
};

//主列表定义
uRAuthorApp.mainTable = {
    id:"uRAuthorMainTable",
    view:"datatable",
    autoconfig:true,
    borderless:true,
    resizeColumn:true,
    //navigation:true,
    //datafetch:23,
    //loadahead:23,
    pager:"uRAuthorPager",
    select:"row",
    //leftSplit:5,
    columns:[
//        { id:"id",  header:"id", css:{"text-align":"right"},    width:80}
        { id:"name",    header:"名称", adjust:true}
        ,{ id:"alias",    header:"别名", adjust:true}
        ,{ id:"affiliation",    header:"隶属机构", adjust:true}
    ]
};

//分页代码
uRAuthorApp.pager = { 
        view:"pager", 
        id:"uRAuthorPager",
        template:" <div class='paging_all'>{common.first()} {common.prev()} <div class='paging_text'>共#count#条记录，当前第 {common.page()} 页/共 #limit#页</div> {common.next()} {common.last()}</div>",
        autosize:true, 
        //size:10,
        group:6 
    };


//布局定义
uRAuthorApp.layout= {
    type:"space",
    rows:[
            uRAuthorApp.toolbar,
            {
                rows:[
                        uRAuthorApp.mainTable,
                        uRAuthorApp.pager
                    ]
            }
    ]
};