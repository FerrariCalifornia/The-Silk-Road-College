/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.patentrepo  
 * @Title: PatentRepoTable.java  
 * @Description: patent_repo表定义类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.patentrepo;

import com.jfinal.plugin.sqlbuilder.column.Column;
import com.jfinal.plugin.sqlbuilder.table.TableDefine;

/**  
 * @ClassName: PatentRepoTable  
 * @Description: patent_repo表定义类  
 * @since V1.0.0  
 */
public class PatentRepoTable extends TableDefine<PatentRepo>{

    /**
     * 表名
     */
    public static final String TABLE_NAME = "patent_repo";
    
    /**
     * 静态对象
     */
    private static final PatentRepoTable me = new PatentRepoTable();
    
    /**
     * 可以多次复用，没有as信息
     */
    public static final PatentRepoTable me(){
        return me;
    }

    /**
     * as，生成一个新的表定义对象（包含as信息）
     */
    public static final PatentRepoTable as(String asName){
        return new PatentRepoTable(asName);
    }
    
    /**
     * id
     */
    public final Column<PatentRepo, java.lang.String> ID = createColumn("id", this);
    
    /**
     * 专利号
     */
    public final Column<PatentRepo, java.lang.String> PATENT_NUMBER = createColumn("patent_number", this);
    
    /**
     * 标题
     */
    public final Column<PatentRepo, java.lang.String> TITLE = createColumn("title", this);
    
    /**
     * 发明者
     */
    public final Column<PatentRepo, java.lang.String> INVENTOR = createColumn("inventor", this);
    
    /**
     * 代理名或代理号
     */
    public final Column<PatentRepo, java.lang.String> ASSIGNEE_NAME_OR_CODE = createColumn("assignee_name_or_code", this);
    
    /**
     * pan
     */
    public final Column<PatentRepo, java.lang.String> PAN = createColumn("pan", this);
    
    /**
     * 梗概
     */
    public final Column<PatentRepo, java.lang.String> SUMMARY = createColumn("summary", this);
    
    /**
     * 摘要延伸
     */
    public final Column<PatentRepo, java.lang.String> EXTENSION_SUMMARY = createColumn("extension_summary", this);
    
    /**
     * 等价摘要
     */
    public final Column<PatentRepo, java.lang.String> EUIVALENT_SUMMARY = createColumn("euivalent_summary", this);
    
    /**
     * 分类号
     */
    public final Column<PatentRepo, java.lang.String> CLASS_CODE = createColumn("class_code", this);
    
    /**
     * 操作号
     */
    public final Column<PatentRepo, java.lang.String> MANUAL_CODE = createColumn("manual_code", this);
    
    /**
     * 信息处理中心
     */
    public final Column<PatentRepo, java.lang.String> IPC = createColumn("ipc", this);
    
    /**
     * 专利细节
     */
    public final Column<PatentRepo, java.lang.String> PATENT_DETAILS = createColumn("patent_details", this);
    
    /**
     * APP细节
     */
    public final Column<PatentRepo, java.lang.String> APP_DETAILS = createColumn("app_details", this);
    
    /**
     * 未来APP细节
     */
    public final Column<PatentRepo, java.lang.String> FURTHER_APP_DETAILS = createColumn("further_app_details", this);
    
    /**
     * priority_app_info_date
     */
    public final Column<PatentRepo, java.lang.String> PRIORITY_APP_INFO_DATE = createColumn("priority_app_info_date", this);
    
    /**
     * designated_states
     */
    public final Column<PatentRepo, java.lang.String> DESIGNATED_STATES = createColumn("designated_states", this);
    
    /**
     * 搜索领域
     */
    public final Column<PatentRepo, java.lang.String> FIELD_OF_SEARCH = createColumn("field_of_search", this);
    
    /**
     * 专利引用
     */
    public final Column<PatentRepo, java.lang.String> CITING_PATENTS = createColumn("citing_patents", this);
    
    /**
     * 参考文献
     */
    public final Column<PatentRepo, java.lang.String> CITING_REFERENCE = createColumn("citing_reference", this);
    
    /**
     * dn
     */
    public final Column<PatentRepo, java.lang.String> DN = createColumn("dn", this);
    
    /**
     * mn
     */
    public final Column<PatentRepo, java.lang.String> MN = createColumn("mn", this);
    
    /**
     * 环系索引号
     */
    public final Column<PatentRepo, java.lang.String> RING_INDEX_NUMS = createColumn("ring_index_nums", this);
    
    /**
     * 被引用发明人
     */
    public final Column<PatentRepo, java.lang.String> CITED_INVENTOR = createColumn("cited_inventor", this);
    
    /**
     * 德温特注册号
     */
    public final Column<PatentRepo, java.lang.String> DERWENT_REGISTRY_NUMS = createColumn("derwent_registry_nums", this);
    

    public PatentRepoTable() {
        super(null);
    }

    public PatentRepoTable(String asName) {
        super(asName);
    }

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }
}
