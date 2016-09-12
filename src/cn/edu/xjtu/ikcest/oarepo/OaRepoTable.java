/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.oarepo  
 * @Title: OaRepoTable.java  
 * @Description: oa_repo表定义类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.oarepo;

import com.jfinal.plugin.sqlbuilder.column.Column;
import com.jfinal.plugin.sqlbuilder.table.TableDefine;

/**  
 * @ClassName: OaRepoTable  
 * @Description: oa_repo表定义类  
 * @since V1.0.0  
 */
public class OaRepoTable extends TableDefine<OaRepo>{

    /**
     * 表名
     */
    public static final String TABLE_NAME = "oa_repo";
    
    /**
     * 静态对象
     */
    private static final OaRepoTable me = new OaRepoTable();
    
    /**
     * 可以多次复用，没有as信息
     */
    public static final OaRepoTable me(){
        return me;
    }

    /**
     * as，生成一个新的表定义对象（包含as信息）
     */
    public static final OaRepoTable as(String asName){
        return new OaRepoTable(asName);
    }
    
    /**
     * id
     */
    public final Column<OaRepo, java.lang.String> ID = createColumn("id", this);
    
    /**
     * 第一主题
     */
    public final Column<OaRepo, java.lang.String> FIRST_SUBJECT = createColumn("first_subject", this);
    
    /**
     * 第二主题
     */
    public final Column<OaRepo, java.lang.String> SECOND_SUBJECT = createColumn("second_subject", this);
    
    /**
     * 著作名
     */
    public final Column<OaRepo, java.lang.String> LITERATURE_TITLE = createColumn("literature_title", this);
    
    /**
     * 摘要
     */
    public final Column<OaRepo, java.lang.String> ABSTRACT = createColumn("abstract", this);
    
    /**
     * URL地址
     */
    public final Column<OaRepo, java.lang.String> URL = createColumn("url", this);
    
    /**
     * 作者
     */
    public final Column<OaRepo, java.lang.String> AUTHOR = createColumn("author", this);
    
    /**
     * 杂志名
     */
    public final Column<OaRepo, java.lang.String> JOURNAL_TITLE = createColumn("journal_title", this);
    
    /**
     * 卷
     */
    public final Column<OaRepo, java.lang.String> JOURNAL_VOLUME = createColumn("journal_volume", this);
    
    /**
     * 杂志号
     */
    public final Column<OaRepo, java.lang.String> JOURNAL_NUMBER = createColumn("journal_number", this);
    
    /**
     * 年份
     */
    public final Column<OaRepo, java.lang.Integer> YEAR = createColumn("year", this);
    
    /**
     * 工业部
     */
    public final Column<OaRepo, java.lang.String> DOI = createColumn("doi", this);
    

    public OaRepoTable() {
        super(null);
    }

    public OaRepoTable(String asName) {
        super(asName);
    }

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }
}
