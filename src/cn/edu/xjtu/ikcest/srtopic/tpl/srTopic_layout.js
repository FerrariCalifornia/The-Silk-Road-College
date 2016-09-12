//工具栏定义
srTopicApp.toolbar = {
	margin : 5,
	height : 40,
	css : "clean",
	cols : [ {
		id : "keyword",
		view : "text",
		placeholder : "关键字",
		label : "关键字",
		"labelWidth" : "60",
		labelAlign : "right",
		width : 260
	}, {
		view : "button",
		id : "srTopicToolbarBtnSearch",
		type : "iconButton",
		icon : "search",
		label : "查询",
		autowidth : true,
		hotkey : "enter"
	}, {}, {
		view : "button",
		id : "srTopicToolbarBtnAddNew",
		type : "iconButton",
		icon : "plus-square",
		label : "添加",
		autowidth : true
	}, {
		view : "button",
		id : "srTopicToolbarBtnEdit",
		type : "iconButton",
		icon : "pencil",
		label : "修改",
		autowidth : true
	}, {
		view : "button",
		id : "srTopicToolbarBtnDelete",
		type : "iconButton",
		icon : "trash-o",
		label : "删除",
		autowidth : true
	}, {
		view : "button",
		id : "srTopicToolbarBtnImportFromExcel",
		type : "iconButton",
		icon : "file-excel-o",
		label : "导入",
		autowidth : true
	}, {
		view : "button",
		id : "srTopicToolbarBtnExportToExcel",
		type : "iconButton",
		icon : "file-excel-o",
		label : "导出",
		autowidth : true
	} ]
};

// 主列表定义
srTopicApp.mainTable = {
	id : "srTopicMainTable",
	view : "datatable",
	autoconfig : true,
	borderless : true,
	resizeColumn : true,
	// navigation:true,
	// datafetch:23,
	// loadahead:23,
	pager : "srTopicPager",
	select : "row",
	// leftSplit:5,
	columns : [
	// { id:"id", header:"id", css:{"text-align":"right"}, width:80}，
	{
		id : "topic_id",
		header : "主题id",
		adjust : true
	}, {
		id : "topic_name",
		header : "主题名",
		adjust : true
	}, {
		id : "topic_keywords",
		header : "主题关键字",
		adjust : true
	}, {
		id : "language_type",
		header : "语言类型",
		adjust : true
	}, {
		id : "summary",
		header : "梗概",
		adjust : true
	}, {
		id : "doc_num",
		header : "号码",
		adjust : true
	}, {
		id : "duration_time",
		header : "持续时间",
		adjust : true
	}, {
		id : "median_time",
		header : "median time",
		adjust : true
	}, {
		id : "mean_time",
		header : "平均时间",
		adjust : true
	}, {
		id : "sen",
		header : "sen",
		adjust : true
	} ]
};

// 分页代码
srTopicApp.pager = {
	view : "pager",
	id : "srTopicPager",
	template : " <div class='paging_all'>{common.first()} {common.prev()} <div class='paging_text'>共#count#条记录，当前第 {common.page()} 页/共 #limit#页</div> {common.next()} {common.last()}</div>",
	autosize : true,
	// size:10,
	group : 6
};

// 布局定义
srTopicApp.layout = {
	type : "space",
	rows : [ srTopicApp.toolbar, {
		rows : [ srTopicApp.mainTable, srTopicApp.pager ]
	} ]
};