//工具栏定义
oaRepoApp.toolbar = {
    margin: 5,
    height:40,
    css:"clean",
    cols:[
         { id : "keyword", view : "text",placeholder : "关键字",label : "关键字","labelWidth" : "60",labelAlign : "right",width : 260}
        ,{ view:"button", id:"oaRepoToolbarBtnSearch", type:"iconButton", icon:"search", label:"查询", autowidth:true,hotkey: "enter"}
        ,{}
        ,{ view:"button", id:"oaRepoToolbarBtnAddNew", type:"iconButton", icon:"plus-square", label:"添加", autowidth:true}
        ,{ view:"button", id:"oaRepoToolbarBtnEdit",type:"iconButton", icon:"pencil", label:"修改", autowidth:true}
        ,{ view:"button", id:"oaRepoToolbarBtnDelete",type:"iconButton", icon:"trash-o", label:"删除", autowidth:true}
        ,{ view:"button", id:"oaRepoToolbarBtnImportFromExcel",type:"iconButton", icon:"file-excel-o", label:"导入", autowidth:true}
//        ,{ view:"button", id:"oaRepoToolbarBtnExportToExcel",type:"iconButton", icon:"file-excel-o", label:"导出", autowidth:true}
    ]
};

//主列表定义
oaRepoApp.mainTable = {
    id:"oaRepoMainTable",
    view:"datatable",
    autoconfig:true,
    borderless:true,
    resizeColumn:true,
    //navigation:true,
    //datafetch:23,
    //loadahead:23,
    pager:"oaRepoPager",
    select:"row",
    //leftSplit:5,
    columns:[
//        { id:"id",  header:"id", css:{"text-align":"right"},    width:80}
        { id:"first_subject",    header:"第一主题", adjust:true}
        ,{ id:"second_subject",    header:"第二主题", adjust:true}
        ,{ id:"literature_title",    header:"著作名", adjust:true}
        ,{ id:"abstract",    header:"摘要", adjust:true}
        ,{ id:"url",    header:"URL地址", adjust:true}
        ,{ id:"author",    header:"作者", adjust:true}
        ,{ id:"journal_title",    header:"杂志名", adjust:true}
        ,{ id:"journal_volume",    header:"卷", adjust:true}
        ,{ id:"journal_number",    header:"杂志号", adjust:true}
        ,{ id:"year",    header:"年份", adjust:true}
        ,{ id:"doi",    header:"工业部", adjust:true}
    ]
};

//分页代码
oaRepoApp.pager = { 
        view:"pager", 
        id:"oaRepoPager",
        template:" <div class='paging_all'>{common.first()} {common.prev()} <div class='paging_text'>共#count#条记录，当前第 {common.page()} 页/共 #limit#页</div> {common.next()} {common.last()}</div>",
        autosize:true, 
        //size:10,
        group:6 
    };


//布局定义
oaRepoApp.layout= {
    type:"space",
    rows:[
            oaRepoApp.toolbar,
            {
                rows:[
                        oaRepoApp.mainTable,
                        oaRepoApp.pager
                    ]
            }
    ]
};