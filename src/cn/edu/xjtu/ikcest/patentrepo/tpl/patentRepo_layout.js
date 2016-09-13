//工具栏定义
patentRepoApp.toolbar = {
    margin: 5,
    height:40,
    css:"clean",
    cols:[
         { id : "keyword", view : "text",placeholder : "关键字",label : "关键字","labelWidth" : "60",labelAlign : "right",width : 260}
        ,{ view:"button", id:"patentRepoToolbarBtnSearch", type:"iconButton", icon:"search", label:"查询", autowidth:true,hotkey: "enter"}
        ,{}
        ,{ view:"button", id:"patentRepoToolbarBtnAddNew", type:"iconButton", icon:"plus-square", label:"添加", autowidth:true}
        ,{ view:"button", id:"patentRepoToolbarBtnEdit",type:"iconButton", icon:"pencil", label:"修改", autowidth:true}
        ,{ view:"button", id:"patentRepoToolbarBtnDelete",type:"iconButton", icon:"trash-o", label:"删除", autowidth:true}
        ,{ view:"button", id:"patentRepoToolbarBtnImportFromExcel",type:"iconButton", icon:"file-excel-o", label:"导入", autowidth:true}
//        ,{ view:"button", id:"patentRepoToolbarBtnExportToExcel",type:"iconButton", icon:"file-excel-o", label:"导出", autowidth:true}
    ]
};

//主列表定义
patentRepoApp.mainTable = {
    id:"patentRepoMainTable",
    view:"datatable",
    autoconfig:true,
    borderless:true,
    resizeColumn:true,
    //navigation:true,
    //datafetch:23,
    //loadahead:23,
    pager:"patentRepoPager",
    select:"row",
    //leftSplit:5,
    columns:[
//        { id:"id",  header:"id", css:{"text-align":"right"},    width:80}
        { id:"patent_number",    header:"专利号", adjust:true}
        ,{ id:"title",    header:"专利名称", adjust:true}
        ,{ id:"inventor",    header:"发明人", adjust:true}
        ,{ id:"assignee_name_or_code",    header:"专利权人名称或代码", adjust:true}
        ,{ id:"pan",    header:"德温特入藏登记号", adjust:true}
        ,{ id:"summary",    header:"摘要", adjust:true}
        ,{ id:"extension_summary",    header:"技术焦点摘要", adjust:true}
        ,{ id:"euivalent_summary",    header:"等同摘要", adjust:true}
        ,{ id:"class_code",    header:"德温特分类号", adjust:true}
        ,{ id:"manual_code",    header:"手工代码", adjust:true}
        ,{ id:"ipc",    header:"国际专利分类号", adjust:true}
        ,{ id:"patent_details",    header:"专利详细信息", adjust:true}
        ,{ id:"app_details",    header:"申请详细信息和日期", adjust:true}
        ,{ id:"further_app_details",    header:"更多申请详细信息", adjust:true}
//        ,{ id:"priority_app_info_date",   view:"datatable", format:webix.Date.dateToStr("%Y-%m-%d"),  header:"优先权申请信息和日期", adjust:true}

        ,{ id:"priority_app_info_date",   view:"datatable",  header:"优先权申请信息和日期", adjust:true}
        ,{ id:"designated_states",    header:"指定州/国家/地区", adjust:true}
        ,{ id:"field_of_search",    header:"检索字段", adjust:true}
        ,{ id:"citing_patents",    header:"被引用专利", adjust:true}
        ,{ id:"citing_reference",    header:"被引用文献", adjust:true}
        ,{ id:"dn",    header:"DCR标示号", adjust:true}
        ,{ id:"mn",    header:" Markush号", adjust:true}
        ,{ id:"ring_index_nums",    header:"环系索引号", adjust:true}
        ,{ id:"cited_inventor",    header:"被引用发明人", adjust:true}
        ,{ id:"derwent_registry_nums",    header:"Derwent注册号", adjust:true}
    ]
};

//分页代码
patentRepoApp.pager = { 
        view:"pager", 
        id:"patentRepoPager",
        template:" <div class='paging_all'>{common.first()} {common.prev()} <div class='paging_text'>共#count#条记录，当前第 {common.page()} 页/共 #limit#页</div> {common.next()} {common.last()}</div>",
        autosize:true, 
        //size:10,
        group:6 
    };


//布局定义
patentRepoApp.layout= {
    type:"space",
    rows:[
            patentRepoApp.toolbar,
            {
                rows:[
                        patentRepoApp.mainTable,
                        patentRepoApp.pager
                    ]
            }
    ]
};