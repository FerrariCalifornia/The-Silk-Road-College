//工具栏定义
musicApp.toolbar = {
    margin: 5,
    height:40,
    css:"clean",
    cols:[
         { id : "keyword", view : "text",placeholder : "关键字",label : "关键字","labelWidth" : "60",labelAlign : "right",width : 260}
        ,{ view:"button", id:"musicToolbarBtnSearch", type:"iconButton", icon:"search", label:"查询", autowidth:true,hotkey: "enter"}
        ,{}
        ,{ view:"button", id:"musicToolbarBtnAddNew", type:"iconButton", icon:"plus-square", label:"添加", autowidth:true}
        ,{ view:"button", id:"musicToolbarBtnEdit",type:"iconButton", icon:"pencil", label:"修改", autowidth:true}
        ,{ view:"button", id:"musicToolbarBtnDelete",type:"iconButton", icon:"trash-o", label:"删除", autowidth:true}
        ,{ view:"button", id:"musicToolbarBtnImportFromExcel",type:"iconButton", icon:"file-excel-o", label:"导入", autowidth:true}
        ,{ view:"button", id:"musicToolbarBtnExportToExcel",type:"iconButton", icon:"file-excel-o", label:"导出", autowidth:true}
    ]
};

//主列表定义
musicApp.mainTable = {
    id:"musicMainTable",
    view:"datatable",
    autoconfig:true,
    borderless:true,
    resizeColumn:true,
    //navigation:true,
    //datafetch:23,
    //loadahead:23,
    pager:"musicPager",
    select:"row",
    //leftSplit:5,
    columns:[
        { id:"id",  header:"id", css:{"text-align":"right"},    width:80}
        ,{ id:"name",    header:"name", adjust:true}
        ,{ id:"author",    header:"Author", adjust:true}
        ,{ id:"num",    header:"", adjust:true}
    ]
};

//分页代码
musicApp.pager = { 
        view:"pager", 
        id:"musicPager",
        template:" <div class='paging_all'>{common.first()} {common.prev()} <div class='paging_text'>共#count#条记录，当前第 {common.page()} 页/共 #limit#页</div> {common.next()} {common.last()}</div>",
        autosize:true, 
        //size:10,
        group:6 
    };


//布局定义
musicApp.layout= {
    type:"space",
    rows:[
            musicApp.toolbar,
            {
                rows:[
                        musicApp.mainTable,
                        musicApp.pager
                    ]
            }
    ]
};