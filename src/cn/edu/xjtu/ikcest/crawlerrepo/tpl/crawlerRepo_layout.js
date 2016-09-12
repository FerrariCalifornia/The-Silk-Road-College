//工具栏定义
crawlerRepoApp.toolbar = {
    margin: 5,
    height:40,
    css:"clean",
    cols:[
         { id : "keyword", view : "text",placeholder : "关键字",label : "关键字","labelWidth" : "60",labelAlign : "right",width : 260}
        ,{ view:"button", id:"crawlerRepoToolbarBtnSearch", type:"iconButton", icon:"search", label:"查询", autowidth:true,hotkey: "enter"}
        ,{}
        ,{ view:"button", id:"crawlerRepoToolbarBtnAddNew", type:"iconButton", icon:"plus-square", label:"添加", autowidth:true}
        ,{ view:"button", id:"crawlerRepoToolbarBtnEdit",type:"iconButton", icon:"pencil", label:"修改", autowidth:true}
        ,{ view:"button", id:"crawlerRepoToolbarBtnDelete",type:"iconButton", icon:"trash-o", label:"删除", autowidth:true}
        ,{ view:"button", id:"crawlerRepoToolbarBtnImportFromExcel",type:"iconButton", icon:"file-excel-o", label:"导入", autowidth:true}
        ,{ view:"button", id:"crawlerRepoToolbarBtnExportToExcel",type:"iconButton", icon:"file-excel-o", label:"导出", autowidth:true}
    ]
};

//主列表定义
crawlerRepoApp.mainTable = {
    id:"crawlerRepoMainTable",
    view:"datatable",
    autoconfig:true,
    borderless:true,
    resizeColumn:true,
    //navigation:true,
    //datafetch:23,
    //loadahead:23,
    pager:"crawlerRepoPager",
    select:"row",
    //leftSplit:5,
    columns:[
//        { id:"id",  header:"id", css:{"text-align":"right"},    width:80}
        { id:"title",    header:"标题	", adjust:true}
        ,{ id:"content",    header:"内容", adjust:true}
        ,{ id:"info_type",    header:"信息类型", adjust:true}
        ,{ id:"language",    header:"语言", adjust:true}
        ,{ id:"url",    header:"url地址", adjust:true}
        ,{ id:"site_name",    header:"网站名称", adjust:true}
        ,{ id:"image_url",    header:"图片url地址", adjust:true}
        ,{ id:"post_at",    header:"发布时间", adjust:true}
//        ,{ id:"created_at",    header:"创建时间", adjust:true}
    ]
};

//分页代码
crawlerRepoApp.pager = { 
        view:"pager", 
        id:"crawlerRepoPager",
        template:" <div class='paging_all'>{common.first()} {common.prev()} <div class='paging_text'>共#count#条记录，当前第 {common.page()} 页/共 #limit#页</div> {common.next()} {common.last()}</div>",
        autosize:true, 
        //size:10,
        group:6 
    };


//布局定义
crawlerRepoApp.layout= {
    type:"space",
    rows:[
            crawlerRepoApp.toolbar,
            {
                rows:[
                        crawlerRepoApp.mainTable,
                        crawlerRepoApp.pager
                    ]
            }
    ]
};