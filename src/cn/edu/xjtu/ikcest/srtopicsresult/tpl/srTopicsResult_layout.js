//工具栏定义
srTopicsResultApp.toolbar = {
    margin: 5,
    height:40,
    css:"clean",
    cols:[
         { id : "keyword", view : "text",placeholder : "关键字",label : "关键字","labelWidth" : "60",labelAlign : "right",width : 260}
        ,{ view:"button", id:"srTopicsResultToolbarBtnSearch", type:"iconButton", icon:"search", label:"查询", autowidth:true,hotkey: "enter"}
        ,{}
        ,{ view:"button", id:"srTopicsResultToolbarBtnAddNew", type:"iconButton", icon:"plus-square", label:"添加", autowidth:true}
        ,{ view:"button", id:"srTopicsResultToolbarBtnEdit",type:"iconButton", icon:"pencil", label:"修改", autowidth:true}
        ,{ view:"button", id:"srTopicsResultToolbarBtnDelete",type:"iconButton", icon:"trash-o", label:"删除", autowidth:true}
        ,{ view:"button", id:"srTopicsResultToolbarBtnImportFromExcel",type:"iconButton", icon:"file-excel-o", label:"导入", autowidth:true}
        ,{ view:"button", id:"srTopicsResultToolbarBtnExportToExcel",type:"iconButton", icon:"file-excel-o", label:"导出", autowidth:true}
    ]
};

//主列表定义
srTopicsResultApp.mainTable = {
    id:"srTopicsResultMainTable",
    view:"datatable",
    autoconfig:true,
    borderless:true,
    resizeColumn:true,
    //navigation:true,
    //datafetch:23,
    //loadahead:23,
    pager:"srTopicsResultPager",
    select:"row",
    //leftSplit:5,
    columns:[
        { id:"id",  header:"id", css:{"text-align":"right"},    width:80}
        ,{ id:"keywords",    header:"", adjust:true}
        ,{ id:"summary",    header:"", adjust:true}
        ,{ id:"doc_num",    header:"", adjust:true}
    ]
};

//分页代码
srTopicsResultApp.pager = { 
        view:"pager", 
        id:"srTopicsResultPager",
        template:" <div class='paging_all'>{common.first()} {common.prev()} <div class='paging_text'>共#count#条记录，当前第 {common.page()} 页/共 #limit#页</div> {common.next()} {common.last()}</div>",
        autosize:true, 
        //size:10,
        group:6 
    };


//布局定义
srTopicsResultApp.layout= {
    type:"space",
    rows:[
            srTopicsResultApp.toolbar,
            {
                rows:[
                        srTopicsResultApp.mainTable,
                        srTopicsResultApp.pager
                    ]
            }
    ]
};