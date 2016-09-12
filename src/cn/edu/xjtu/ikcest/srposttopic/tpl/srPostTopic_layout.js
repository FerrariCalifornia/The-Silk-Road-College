//工具栏定义
srPostTopicApp.toolbar = {
    margin: 5,
    height:40,
    css:"clean",
    cols:[
         { id : "keyword", view : "text",placeholder : "关键字",label : "关键字","labelWidth" : "60",labelAlign : "right",width : 260}
       , { view:"button", id:"srPostTopicToolbarBtnSearch", type:"iconButton", icon:"search", label:"查询", autowidth:true,hotkey: "enter"}
        ,{}
        ,{ view:"button", id:"srPostTopicToolbarBtnAddNew", type:"iconButton", icon:"plus-square", label:"添加", autowidth:true}
        ,{ view:"button", id:"srPostTopicToolbarBtnEdit",type:"iconButton", icon:"pencil", label:"修改", autowidth:true}
        ,{ view:"button", id:"srPostTopicToolbarBtnDelete",type:"iconButton", icon:"trash-o", label:"删除", autowidth:true}
        ,{ view:"button", id:"srPostTopicToolbarBtnImportFromExcel",type:"iconButton", icon:"file-excel-o", label:"导入", autowidth:true}
        ,{ view:"button", id:"srPostTopicToolbarBtnExportToExcel",type:"iconButton", icon:"file-excel-o", label:"导出", autowidth:true}
    ]
};

//主列表定义
srPostTopicApp.mainTable = {
    id:"srPostTopicMainTable",
    view:"datatable",
    autoconfig:true,
    borderless:true,
    resizeColumn:true,
    //navigation:true,
    //datafetch:23,
    //loadahead:23,
    pager:"srPostTopicPager",
    select:"row",
    //leftSplit:5,
    columns:[
//        { id:"id",  header:"id", css:{"text-align":"right"},    width:80}
        { id:"post_id",    header:"帖子id", adjust:true}
        ,{ id:"topic_id",    header:"主题id", adjust:true}
        ,{ id:"similarity",    header:"相似度", adjust:true}
        ,{ id:"post_time",    header:"发布时间", adjust:true}
    ]
};

//分页代码
srPostTopicApp.pager = { 
        view:"pager", 
        id:"srPostTopicPager",
        template:" <div class='paging_all'>{common.first()} {common.prev()} <div class='paging_text'>共#count#条记录，当前第 {common.page()} 页/共 #limit#页</div> {common.next()} {common.last()}</div>",
        autosize:true, 
        //size:10,
        group:6 
    };


//布局定义
srPostTopicApp.layout= {
    type:"space",
    rows:[
            srPostTopicApp.toolbar,
            {
                rows:[
                        srPostTopicApp.mainTable,
                        srPostTopicApp.pager
                    ]
            }
    ]
};