//工具栏定义
ebookRepoApp.toolbar = {
    margin: 5,
    height:40,
    css:"clean",
    cols:[
         { id : "keyword", view : "text",placeholder : "关键字",label : "关键字","labelWidth" : "60",labelAlign : "right",width : 260}
         ,{ view:"button", id:"ebookRepoToolbarBtnSearch", type:"iconButton", icon:"search", label:"查询", autowidth:true,hotkey: "enter"}
        ,{}
        ,{ view:"button", id:"ebookRepoToolbarBtnAddNew", type:"iconButton", icon:"plus-square", label:"添加", autowidth:true}
        ,{ view:"button", id:"ebookRepoToolbarBtnEdit",type:"iconButton", icon:"pencil", label:"修改", autowidth:true}
        ,{ view:"button", id:"ebookRepoToolbarBtnDelete",type:"iconButton", icon:"trash-o", label:"删除", autowidth:true}
        ,{ view:"button", id:"ebookRepoToolbarBtnImportFromExcel",type:"iconButton", icon:"file-excel-o", label:"导入", autowidth:true}
        ,{ view:"button", id:"ebookRepoToolbarBtnExportToExcel",type:"iconButton", icon:"file-excel-o", label:"导出", autowidth:true}
    ]
};

//主列表定义
ebookRepoApp.mainTable = {
    id:"ebookRepoMainTable",
    view:"datatable",
    autoconfig:true,
    borderless:true,
    resizeColumn:true,
    //navigation:true,
    //datafetch:23,
    //loadahead:23,
    pager:"ebookRepoPager",
    select:"row",
    //leftSplit:5,
    columns:[
//        { id:"id",  header:"id", css:{"text-align":"right"},    width:80}
        { id:"isbn",    header:"ISBN", adjust:true}
        ,{ id:"eisbn",    header:"ESIBN", adjust:true}
        ,{ id:"author",    header:"作者", adjust:true}
        ,{ id:"title",    header:"题名", adjust:true}
        ,{ id:"page_counter",    header:"页码", adjust:true}
        ,{ id:"place_published",    header:"出版地", adjust:true}
        ,{ id:"publisher",    header:"出版社", adjust:true}
        ,{ id:"year",    header:"出版年", adjust:true}
        ,{ id:"series_identification",    header:"丛书标识", adjust:true}
        ,{ id:"series_name",    header:"丛书名", adjust:true}
        ,{ id:"series_id",    header:"丛书号", adjust:true}
        ,{ id:"url",    header:"urlLink", adjust:true}
        ,{ id:"img_url",    header:"图片urlLink", adjust:true}
        ,{ id:"summary",    header:"摘要", adjust:true}
        ,{ id:"keys_or_subjects",    header:"关键字或主题", adjust:true}
        ,{ id:"language",    header:"语言", adjust:true}
        ,{ id:"class_num",    header:"分类号", adjust:true}
        ,{ id:"nation",    header:"国别", adjust:true}
    ]
};

//分页代码
ebookRepoApp.pager = { 
        view:"pager", 
        id:"ebookRepoPager",
        template:" <div class='paging_all'>{common.first()} {common.prev()} <div class='paging_text'>共#count#条记录，当前第 {common.page()} 页/共 #limit#页</div> {common.next()} {common.last()}</div>",
        autosize:true, 
        //size:10,
        group:6 
    };


//布局定义
ebookRepoApp.layout= {
    type:"space",
    rows:[
            ebookRepoApp.toolbar,
            {
                rows:[
                        ebookRepoApp.mainTable,
                        ebookRepoApp.pager
                    ]
            }
    ]
};