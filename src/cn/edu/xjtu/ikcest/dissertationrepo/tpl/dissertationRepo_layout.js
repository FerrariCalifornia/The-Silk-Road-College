//工具栏定义
dissertationRepoApp.toolbar = {
    margin: 5,
    height:40,
    css:"clean",
    cols:[
         { id : "keyword", view : "text",placeholder : "关键字",label : "关键字","labelWidth" : "60",labelAlign : "right",width : 260}
        ,{ view:"button", id:"dissertationRepoToolbarBtnSearch", type:"iconButton", icon:"search", label:"查询", autowidth:true,hotkey: "enter"}
        ,{}
        ,{ view:"button", id:"dissertationRepoToolbarBtnAddNew", type:"iconButton", icon:"plus-square", label:"添加", autowidth:true}
        ,{ view:"button", id:"dissertationRepoToolbarBtnEdit",type:"iconButton", icon:"pencil", label:"修改", autowidth:true}
        ,{ view:"button", id:"dissertationRepoToolbarBtnDelete",type:"iconButton", icon:"trash-o", label:"删除", autowidth:true}
        ,{ view:"button", id:"dissertationRepoToolbarBtnImportFromExcel",type:"iconButton", icon:"file-excel-o", label:"导入", autowidth:true}
        ,{ view:"button", id:"dissertationRepoToolbarBtnExportToExcel",type:"iconButton", icon:"file-excel-o", label:"导出", autowidth:true}
    ]
};

//主列表定义
dissertationRepoApp.mainTable = {
    id:"dissertationRepoMainTable",
    view:"datatable",
    autoconfig:true,
    borderless:true,
    resizeColumn:true,
    //navigation:true,
    //datafetch:23,
    //loadahead:23,
    pager:"dissertationRepoPager",
    select:"row",
    //leftSplit:5,
    columns:[
//        { id:"id",  header:"id", css:{"text-align":"right"},    width:80}
        { id:"title",    header:"论文题目", adjust:true}
        ,{ id:"title_spelling",    header:"题目拼音", adjust:true}
        ,{ id:"name",    header:"作者姓名", adjust:true}
        ,{ id:"name_spelling",    header:"拼音姓名", adjust:true}
        ,{ id:"student_id",    header:"作者学号", adjust:true}
        ,{ id:"university",    header:"学校名称", adjust:true}
        ,{ id:"school",    header:"作者学院", adjust:true}
        ,{ id:"discipline",    header:"学科名称", adjust:true}
        ,{ id:"major",    header:"作者专业", adjust:true}
        ,{ id:"degree",    header:"作者学位", adjust:true}
        ,{ id:"degree_type",    header:"学位类型", adjust:true}
        ,{ id:"oral_defense_date",    view:"datatable", format:webix.Date.dateToStr("%Y-%m-%d"), header:"答辩日期", adjust:true}
        ,{ id:"secret_level",    header:"保密级别", adjust:true}
        ,{ id:"submitting_date",   view:"datatable", format:webix.Date.dateToStr("%Y-%m-%d"),  header:"提交日期", adjust:true}
        ,{ id:"foreign_title",    header:"外文题目", adjust:true}
        ,{ id:"mentor_name",    header:"导师姓名", adjust:true}
        ,{ id:"mentor_work_unit",    header:"导师单位", adjust:true}
        ,{ id:"chinese_keywords",    header:"中文关键词", adjust:true}
        ,{ id:"english_keywords",    header:"英文关键词", adjust:true}
        ,{ id:"total_pages",    header:"论文总页码", adjust:true}
        ,{ id:"num_of_bibliography",    header:"参考文献总数", adjust:true}
        ,{ id:"chinese_abstract",    header:"中文摘要", adjust:true}
        ,{ id:"english_abstract",    header:"英文摘要", adjust:true}
        ,{ id:"nationality",    header:"作者国籍", adjust:true}
        ,{ id:"discipline_code",    header:"学科代码", adjust:true}
        ,{ id:"last_updated",    header:"最近更新", adjust:true}
        ,{ id:"call_num",    header:"索书号", adjust:true}
        ,{ id:"full_text",    header:"全文", adjust:true}
    ]
};

//分页代码
dissertationRepoApp.pager = { 
        view:"pager", 
        id:"dissertationRepoPager",
        template:" <div class='paging_all'>{common.first()} {common.prev()} <div class='paging_text'>共#count#条记录，当前第 {common.page()} 页/共 #limit#页</div> {common.next()} {common.last()}</div>",
        autosize:true, 
        //size:10,
        group:6 
    };


//布局定义
dissertationRepoApp.layout= {
    type:"space",
    rows:[
            dissertationRepoApp.toolbar,
            {
                rows:[
                        dissertationRepoApp.mainTable,
                        dissertationRepoApp.pager
                    ]
            }
    ]
};