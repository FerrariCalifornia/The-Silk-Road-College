//工具栏定义
blogApp.toolbar = {
    margin: 5,
    height:40,
    css:"clean",
    cols:[
         { id : "keyword", view : "text",placeholder : "关键字",label : "关键字","labelWidth" : "60",labelAlign : "right",width : 260}
        ,{ view:"button", id:"blogToolbarBtnSearch", type:"iconButton", icon:"search", label:"查询", autowidth:true,hotkey: "enter"}
        ,{}
        ,{ view:"button", id:"blogToolbarBtnAddNew", type:"iconButton", icon:"plus-square", label:"添加", autowidth:true}
        ,{ view:"button", id:"blogToolbarBtnEdit",type:"iconButton", icon:"pencil", label:"修改", autowidth:true}
        ,{ view:"button", id:"blogToolbarBtnDelete",type:"iconButton", icon:"trash-o", label:"删除", autowidth:true}
        ,{ view:"button", id:"blogToolbarBtnImportFromExcel",type:"iconButton", icon:"file-excel-o", label:"导入", autowidth:true}
        ,{ view:"button", id:"blogToolbarBtnExportToExcel",type:"iconButton", icon:"file-excel-o", label:"导出", autowidth:true}
    ]
};

//主列表定义
blogApp.mainTable = {
    id:"blogMainTable",
    view:"datatable",
    autoconfig:true,
    borderless:true,
    resizeColumn:true,
    //navigation:true,
    //datafetch:23,
    //loadahead:23,
    pager:"blogPager",
    select:"row",
    //leftSplit:5,
    columns:[
        { id:"id",  header:"id", css:{"text-align":"right"},    width:80}
        ,{ id:"type_code_value",    header:"类型", adjust:true}
        ,{ id:"title",    header:"标题", adjust:true}
        ,{ id:"content",    header:"内容", fillspace:1}
        ,{ id:"post_at",    header:"发布时间", adjust:true}
        ,{ id:"post_by",    header:"发布人", adjust:true}
        ,{ id:"mobile",    header:"手机", adjust:true}
        ,{ id:"org_name",    header:"部门", adjust:true}
    ]
};

//分页代码
blogApp.pager = { 
        view:"pager", 
        id:"blogPager",
        template:" <div class='paging_all'>{common.first()} {common.prev()} <div class='paging_text'>共#count#条记录，当前第 {common.page()} 页/共 #limit#页</div> {common.next()} {common.last()}</div>",
        autosize:true, 
//        size:5,
        group:6 
    };


//布局定义
blogApp.layout= {
    type:"space",
    rows:[
            blogApp.toolbar,
            {
                rows:[
                        blogApp.mainTable,
                        blogApp.pager
                    ]
            }
    ]
};