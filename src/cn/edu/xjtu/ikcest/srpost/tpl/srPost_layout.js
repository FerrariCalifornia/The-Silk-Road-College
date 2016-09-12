//工具栏定义
srPostApp.toolbar = {
    margin: 5,
    height:40,
    css:"clean",
    cols:[
         { id : "keyword", view : "text",placeholder : "关键字",label : "关键字","labelWidth" : "60",labelAlign : "right",width : 260}
        ,{ view:"button", id:"srPostToolbarBtnSearch", type:"iconButton", icon:"search", label:"查询", autowidth:true,hotkey: "enter"}
        ,{}
        ,{ view:"button", id:"srPostToolbarBtnAddNew", type:"iconButton", icon:"plus-square", label:"添加", autowidth:true}
        ,{ view:"button", id:"srPostToolbarBtnEdit",type:"iconButton", icon:"pencil", label:"修改", autowidth:true}
        ,{ view:"button", id:"srPostToolbarBtnDelete",type:"iconButton", icon:"trash-o", label:"删除", autowidth:true}
        ,{ view:"button", id:"srPostToolbarBtnImportFromExcel",type:"iconButton", icon:"file-excel-o", label:"导入", autowidth:true}
        ,{ view:"button", id:"srPostToolbarBtnExportToExcel",type:"iconButton", icon:"file-excel-o", label:"导出", autowidth:true}
    ]
};

//主列表定义
srPostApp.mainTable = {
    id:"srPostMainTable",
    view:"datatable",
    autoconfig:true,
    borderless:true,
    resizeColumn:true,
    //navigation:true,
    //datafetch:23,
    //loadahead:23,
    pager:"srPostPager",
    select:"row",
    //leftSplit:5,
    columns:[
//        { id:"id",  header:"id", css:{"text-align":"right"},    width:80},
        { id:"url",    header:"URL", adjust:true}
        ,{ id:"site_name",    header:"网站名", adjust:true}
        ,{ id:"data_type",    header:"数据类型", adjust:true}
        ,{ id:"title",    header:"标题", adjust:true}
        ,{ id:"content",    header:"内容", adjust:true}
        ,{ id:"post_time",    header:"发布时间", adjust:true}
        ,{ id:"language_type",    header:"语言类型", adjust:true}
    ]
};

//分页代码
srPostApp.pager = { 
        view:"pager", 
        id:"srPostPager",
        template:" <div class='paging_all'>{common.first()} {common.prev()} <div class='paging_text'>共#count#条记录，当前第 {common.page()} 页/共 #limit#页</div> {common.next()} {common.last()}</div>",
        autosize:true, 
        //size:10,
        group:6 
    };


//布局定义
srPostApp.layout= {
    type:"space",
    rows:[
            srPostApp.toolbar,
            {
                rows:[
                        srPostApp.mainTable,
                        srPostApp.pager
                    ]
            }
    ]
};