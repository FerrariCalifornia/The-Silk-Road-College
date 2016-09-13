//工具栏定义
confRepoApp.toolbar = {
    margin: 5,
    height:40,
    css:"clean",
    cols:[
         { id : "keyword", view : "text",placeholder : "关键字",label : "关键字","labelWidth" : "60",labelAlign : "right",width : 260}
        ,{ view:"button", id:"confRepoToolbarBtnSearch", type:"iconButton", icon:"search", label:"查询", autowidth:true,hotkey: "enter"}
        ,{}
        ,{ view:"button", id:"confRepoToolbarBtnAddNew", type:"iconButton", icon:"plus-square", label:"添加", autowidth:true}
        ,{ view:"button", id:"confRepoToolbarBtnEdit",type:"iconButton", icon:"pencil", label:"修改", autowidth:true}
        ,{ view:"button", id:"confRepoToolbarBtnDelete",type:"iconButton", icon:"trash-o", label:"删除", autowidth:true}
        ,{ view:"button", id:"confRepoToolbarBtnImportFromExcel",type:"iconButton", icon:"file-excel-o", label:"导入", autowidth:true}
//        ,{ view:"button", id:"confRepoToolbarBtnExportToExcel",type:"iconButton", icon:"file-excel-o", label:"导出", autowidth:true}
    ]
};

//主列表定义
confRepoApp.mainTable = {
    id:"confRepoMainTable",
    view:"datatable",
    autoconfig:true,
    borderless:true,
    resizeColumn:true,
    //navigation:true,
    //datafetch:23,
    //loadahead:23,
    pager:"confRepoPager",
    select:"row",
    //leftSplit:5,
    columns:[
//        { id:"id",  header:"id", css:{"text-align":"right"},    width:80}
         { id:"conference_name",    header:"会议名", adjust:true}
        ,{ id:"organizer",    header:"组织者", adjust:true}
        ,{ id:"language",    header:"语言", adjust:true}
        ,{ id:"eligibility",    header:"资格", adjust:true}       
        ,{ id:"start_date", view:"datatable", format:webix.Date.dateToStr("%Y-%m-%d"), header:"起始日期", adjust:true } 
        ,{ id:"end_date",    view:"datatable", format:webix.Date.dateToStr("%Y-%m-%d"), header:"截止日期", adjust:true}
        ,{ id:"location",    header:"地点", adjust:true}
        ,{ id:"country_region",    header:"国家地区", adjust:true}
        ,{ id:"manuscript_last_day",    header:"最新手稿", adjust:true}
        ,{ id:"abstract_last_day",    header:"最新摘要", adjust:true}
        ,{ id:"other_contacts",    header:"其他联系人", adjust:true}
        ,{ id:"broad_theme",    header:"大主题", adjust:true}
        ,{ id:"classify",    header:"分类", adjust:true}
        ,{ id:"subject",    header:"主题", adjust:true}
        ,{ id:"range_",    header:"范围", adjust:true}
        ,{ id:"publication_name",    header:"出版名", adjust:true}
        ,{ id:"url",    header:"url地址", adjust:true}
        ,{ id:"update_",    header:"更新", adjust:true}
        ,{ id:"include_num",    header:"包含数量", adjust:true}
        ,{ id:"db",    header:"DB", adjust:true}
        ,{ id:"important_date",    header:"重要日期", adjust:true}
        ,{ id:"created_at",    header:"创建时间", adjust:true}
    ]
};

//分页代码
confRepoApp.pager = { 
        view:"pager", 
        id:"confRepoPager",
        template:" <div class='paging_all'>{common.first()} {common.prev()} <div class='paging_text'>共#count#条记录，当前第 {common.page()} 页/共 #limit#页</div> {common.next()} {common.last()}</div>",
        autosize:true, 
        //size:10,
        group:6 
    };


//布局定义
confRepoApp.layout= {
    type:"space",
    rows:[
            confRepoApp.toolbar,
            {
                rows:[
                        confRepoApp.mainTable,
                        confRepoApp.pager
                    ]
            }
    ]
};