/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.confrepo  
 * @Title: ConfRepoTable.java  
 * @Description: conf_repo表定义类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.confrepo;

import com.jfinal.plugin.sqlbuilder.column.Column;
import com.jfinal.plugin.sqlbuilder.table.TableDefine;

/**  
 * @ClassName: ConfRepoTable  
 * @Description: conf_repo表定义类  
 * @since V1.0.0  
 */
public class ConfRepoTable extends TableDefine<ConfRepo>{

    /**
     * 表名
     */
    public static final String TABLE_NAME = "conf_repo";
    
    /**
     * 静态对象
     */
    private static final ConfRepoTable me = new ConfRepoTable();
    
    /**
     * 可以多次复用，没有as信息
     */
    public static final ConfRepoTable me(){
        return me;
    }

    /**
     * as，生成一个新的表定义对象（包含as信息）
     */
    public static final ConfRepoTable as(String asName){
        return new ConfRepoTable(asName);
    }
    
    /**
     * id
     */
    public final Column<ConfRepo, java.lang.String> ID = createColumn("id", this);
    
    /**
     * 会议名
     */
    public final Column<ConfRepo, java.lang.String> CONFERENCE_NAME = createColumn("conference_name", this);
    
    /**
     * 组织者
     */
    public final Column<ConfRepo, java.lang.String> ORGANIZER = createColumn("organizer", this);
    
    /**
     * 语言
     */
    public final Column<ConfRepo, java.lang.String> LANGUAGE = createColumn("language", this);
    
    /**
     * 资格
     */
    public final Column<ConfRepo, java.lang.String> ELIGIBILITY = createColumn("eligibility", this);
    
    /**
     * 起始日期
     */
    public final Column<ConfRepo, java.lang.String> START_DATE = createColumn("start_date", this);
    
    /**
     * 截止日期
     */
    public final Column<ConfRepo, java.lang.String> END_DATE = createColumn("end_date", this);
    
    /**
     * 地点
     */
    public final Column<ConfRepo, java.lang.String> LOCATION = createColumn("location", this);
    
    /**
     * 国家地区
     */
    public final Column<ConfRepo, java.lang.String> COUNTRY_REGION = createColumn("country_region", this);
    
    /**
     * 最新手稿
     */
    public final Column<ConfRepo, java.lang.String> MANUSCRIPT_LAST_DAY = createColumn("manuscript_last_day", this);
    
    /**
     * 最新摘要
     */
    public final Column<ConfRepo, java.lang.String> ABSTRACT_LAST_DAY = createColumn("abstract_last_day", this);
    
    /**
     * 其他联系人
     */
    public final Column<ConfRepo, java.lang.String> OTHER_CONTACTS = createColumn("other_contacts", this);
    
    /**
     * 大主题
     */
    public final Column<ConfRepo, java.lang.String> BROAD_THEME = createColumn("broad_theme", this);
    
    /**
     * 分类
     */
    public final Column<ConfRepo, java.lang.String> CLASSIFY = createColumn("classify", this);
    
    /**
     * 主题
     */
    public final Column<ConfRepo, java.lang.String> SUBJECT = createColumn("subject", this);
    
    /**
     * 范围
     */
    public final Column<ConfRepo, java.lang.String> RANGE_ = createColumn("range_", this);
    
    /**
     * 出版名
     */
    public final Column<ConfRepo, java.lang.String> PUBLICATION_NAME = createColumn("publication_name", this);
    
    /**
     * url地址
     */
    public final Column<ConfRepo, java.lang.String> URL = createColumn("url", this);
    
    /**
     * 更新
     */
    public final Column<ConfRepo, java.lang.String> UPDATE_ = createColumn("update_", this);
    
    /**
     * 包含数量
     */
    public final Column<ConfRepo, java.lang.String> INCLUDE_NUM = createColumn("include_num", this);
    
    /**
     * db
     */
    public final Column<ConfRepo, java.lang.String> DB = createColumn("db", this);
    
    /**
     * 重要日期
     */
    public final Column<ConfRepo, java.lang.String> IMPORTANT_DATE = createColumn("important_date", this);
    
    /**
     * 创建时间
     */
    public final Column<ConfRepo, java.lang.Long> CREATED_AT = createColumn("created_at", this);
    

    public ConfRepoTable() {
        super(null);
    }

    public ConfRepoTable(String asName) {
        super(asName);
    }

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }
}
