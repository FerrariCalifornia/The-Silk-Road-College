//工具栏定义
uRWrittenByApp.toolbar = {
    margin: 5,
    height:40,
    css:"clean",
    cols:[
         { id : "keyword", view : "text",placeholder : "关键字",label : "关键字","labelWidth" : "60",labelAlign : "right",width : 260}
        ,{ view:"button", id:"uRWrittenByToolbarBtnSearch", type:"iconButton", icon:"search", label:"查询", autowidth:true,hotkey: "enter"}
        ,{}
        ,{ view:"button", id:"uRWrittenByToolbarBtnAddNew", type:"iconButton", icon:"plus-square", label:"添加", autowidth:true}
        ,{ view:"button", id:"uRWrittenByToolbarBtnEdit",type:"iconButton", icon:"pencil", label:"修改", autowidth:true}
        ,{ view:"button", id:"uRWrittenByToolbarBtnDelete",type:"iconButton", icon:"trash-o", label:"删除", autowidth:true}
        ,{ view:"button", id:"uRWrittenByToolbarBtnImportFromExcel",type:"iconButton", icon:"file-excel-o", label:"导入", autowidth:true}
        ,{ view:"button", id:"uRWrittenByToolbarBtnExportToExcel",type:"iconButton", icon:"file-excel-o", label:"导出", autowidth:true}
    ]
};

//主列表定义
uRWrittenByApp.mainTable = {
    id:"uRWrittenByMainTable",
    view:"datatable",
    autoconfig:true,
    borderless:true,
    resizeColumn:true,
    //navigation:true,
    //datafetch:23,
    //loadahead:23,
    pager:"uRWrittenByPager",
    select:"row",
    //leftSplit:5,
    columns:[
        { id:"id",  header:"id", css:{"text-align":"right"},    width:80}
        ,{ id:"literature_id",    header:"文献id", adjust:true}
        ,{ id:"author_id",    header:"作者id", adjust:true}
    ]
};

//分页代码
uRWrittenByApp.pager = { 
        view:"pager", 
        id:"uRWrittenByPager",
        template:" <div class='paging_all'>{common.first()} {common.prev()} <div class='paging_text'>共#count#条记录，当前第 {common.page()} 页/共 #limit#页</div> {common.next()} {common.last()}</div>",
        autosize:true, 
        //size:10,
        group:6 
    };


//布局定义
uRWrittenByApp.layout= {
    type:"space",
    rows:[
            uRWrittenByApp.toolbar,
            {
                rows:[
                        uRWrittenByApp.mainTable,
                        uRWrittenByApp.pager
                    ]
            }
    ]
};