//工具栏定义
srNewsResultApp.toolbar = {
    margin: 5,
    height:40,
    css:"clean",
    cols:[
         { id : "keyword", view : "text",placeholder : "关键字",label : "关键字","labelWidth" : "60",labelAlign : "right",width : 260}
        ,{ view:"button", id:"srNewsResultToolbarBtnSearch", type:"iconButton", icon:"search", label:"查询", autowidth:true,hotkey: "enter"}
        ,{}
        ,{ view:"button", id:"srNewsResultToolbarBtnAddNew", type:"iconButton", icon:"plus-square", label:"添加", autowidth:true}
        ,{ view:"button", id:"srNewsResultToolbarBtnEdit",type:"iconButton", icon:"pencil", label:"修改", autowidth:true}
        ,{ view:"button", id:"srNewsResultToolbarBtnDelete",type:"iconButton", icon:"trash-o", label:"删除", autowidth:true}
        ,{ view:"button", id:"srNewsResultToolbarBtnImportFromExcel",type:"iconButton", icon:"file-excel-o", label:"导入", autowidth:true}
        ,{ view:"button", id:"srNewsResultToolbarBtnExportToExcel",type:"iconButton", icon:"file-excel-o", label:"导出", autowidth:true}
    ]
};

//主列表定义
srNewsResultApp.mainTable = {
    id:"srNewsResultMainTable",
    view:"datatable",
    autoconfig:true,
    borderless:true,
    resizeColumn:true,
    //navigation:true,
    //datafetch:23,
    //loadahead:23,
    pager:"srNewsResultPager",
    select:"row",
    //leftSplit:5,
    columns:[
//        { id:"id",  header:"id", css:{"text-align":"right"},    width:80}
        { id:"title",    header:"标题", adjust:true}
        ,{ id:"site_name",    header:"网站名", adjust:true}
        ,{ id:"url",    header:"URL", adjust:true}
        ,{ id:"post_time",    header:"发布时间", adjust:true}
        ,{ id:"related_topic",    header:"相关主题", adjust:true}
    ]
};

//分页代码
srNewsResultApp.pager = { 
        view:"pager", 
        id:"srNewsResultPager",
        template:" <div class='paging_all'>{common.first()} {common.prev()} <div class='paging_text'>共#count#条记录，当前第 {common.page()} 页/共 #limit#页</div> {common.next()} {common.last()}</div>",
        autosize:true, 
        //size:10,
        group:6 
    };


//布局定义
srNewsResultApp.layout= {
    type:"space",
    rows:[
            srNewsResultApp.toolbar,
            {
                rows:[
                        srNewsResultApp.mainTable,
                        srNewsResultApp.pager
                    ]
            }
    ]
};