//工具栏定义
uRLiteratureApp.toolbar = {
    margin: 5,
    height:40,
    css:"clean",
    cols:[
         { id : "keyword", view : "text",placeholder : "关键字",label : "关键字","labelWidth" : "60",labelAlign : "right",width : 260}
        ,{ view:"button", id:"uRLiteratureToolbarBtnSearch", type:"iconButton", icon:"search", label:"查询", autowidth:true,hotkey: "enter"}
        ,{}
        ,{ view:"button", id:"uRLiteratureToolbarBtnAddNew", type:"iconButton", icon:"plus-square", label:"添加", autowidth:true}
        ,{ view:"button", id:"uRLiteratureToolbarBtnEdit",type:"iconButton", icon:"pencil", label:"修改", autowidth:true}
        ,{ view:"button", id:"uRLiteratureToolbarBtnDelete",type:"iconButton", icon:"trash-o", label:"删除", autowidth:true}
        ,{ view:"button", id:"uRLiteratureToolbarBtnImportFromExcel",type:"iconButton", icon:"file-excel-o", label:"导入", autowidth:true}
//        ,{ view:"button", id:"uRLiteratureToolbarBtnExportToExcel",type:"iconButton", icon:"file-excel-o", label:"导出", autowidth:true}
    ]
};

//主列表定义
uRLiteratureApp.mainTable = {
    id:"uRLiteratureMainTable",
    view:"datatable",
    autoconfig:true,
    borderless:true,
    resizeColumn:true,
    //navigation:true,
    //datafetch:23,
    //loadahead:23,
    pager:"uRLiteraturePager",
    select:"row",
    //leftSplit:5,
    columns:[
//        { id:"id",  header:"id", css:{"text-align":"right"},    width:80}
        { id:"title",    header:"标题", adjust:true}
        ,{ id:"year",    header:"年份", adjust:true}
        ,{ id:"orginal_publication",    header:"来源出版物名称", adjust:true}
        ,{ id:"volume",    header:"卷", adjust:true}
        ,{ id:"issue",    header:"期", adjust:true}
        ,{ id:"paper_id",    header:"论文编号", adjust:true}
        ,{ id:"start_page",    header:"起始页码", adjust:true}
        ,{ id:"end_page",    header:"截止页码", adjust:true}
        ,{ id:"page_counter",    header:"页码计数", adjust:true}
        ,{ id:"citing_paper",    header:"施引文献", adjust:true}
        ,{ id:"doi",    header:"DOI", adjust:true}
        ,{ id:"url",    header:"链接", adjust:true}
        ,{ id:"summary",    header:"摘要", adjust:true}
        ,{ id:"author_keyword",    header:"作者关键字", adjust:true}
        ,{ id:"index_keyword",    header:"索引关键字", adjust:true}
        ,{ id:"analysis_serial_number",    header:"分析序列号", adjust:true}
        ,{ id:"cas",    header:"化学物质", adjust:true}
        ,{ id:"brand",    header:"商标", adjust:true}
        ,{ id:"manufacturer",    header:"制造商", adjust:true}
        ,{ id:"funding_info",    header:"出资详情", adjust:true}
        ,{ id:"references",    header:"参考文献", adjust:true}
        ,{ id:"postal_addr",    header:"通讯地址", adjust:true}
        ,{ id:"editor",    header:"编者", adjust:true}
        ,{ id:"funding_agent",    header:"资助机构", adjust:true}
        ,{ id:"publisher",    header:"出版商️️", adjust:true}
        ,{ id:"conference_name",    header:"会议名", adjust:true}
        ,{ id:"issn",    header:"ISSN", adjust:true}
        ,{ id:"isbn",    header:"ISBN", adjust:true}
        ,{ id:"coden",    header:"CODEN", adjust:true}
        ,{ id:"pubmed_id",    header:"PubMed ID", adjust:true}
        ,{ id:"language",    header:"原始文献语言", adjust:true}
        ,{ id:"orginal_publication_abbr",    header:"来源出版物名称缩写", adjust:true}
        ,{ id:"paper_type",    header:"文献类型", adjust:true}
        ,{ id:"source_of_publication",    header:"来源出版物", adjust:true}
        ,{ id:"eid",    header:"EID", adjust:true}
//        ,{ id:"u_id",    header:"u id", adjust:true}
    ]
};

//分页代码
uRLiteratureApp.pager = { 
        view:"pager", 
        id:"uRLiteraturePager",
        template:" <div class='paging_all'>{common.first()} {common.prev()} <div class='paging_text'>共#count#条记录，当前第 {common.page()} 页/共 #limit#页</div> {common.next()} {common.last()}</div>",
        autosize:true, 
        //size:10,
        group:6 
    };


//布局定义
uRLiteratureApp.layout= {
    type:"space",
    rows:[
            uRLiteratureApp.toolbar,
            {
                rows:[
                        uRLiteratureApp.mainTable,
                        uRLiteratureApp.pager
                    ]
            }
    ]
};