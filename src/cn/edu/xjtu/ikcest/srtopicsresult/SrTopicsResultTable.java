/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.srtopicsresult  
 * @Title: SrTopicsResultTable.java  
 * @Description: sr_topics_result表定义类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.srtopicsresult;

import com.jfinal.plugin.sqlbuilder.column.Column;
import com.jfinal.plugin.sqlbuilder.table.TableDefine;

/**  
 * @ClassName: SrTopicsResultTable  
 * @Description: sr_topics_result表定义类  
 * @since V1.0.0  
 */
public class SrTopicsResultTable extends TableDefine<SrTopicsResult>{

    /**
     * 表名
     */
    public static final String TABLE_NAME = "sr_topics_result";
    
    /**
     * 静态对象
     */
    private static final SrTopicsResultTable me = new SrTopicsResultTable();
    
    /**
     * 可以多次复用，没有as信息
     */
    public static final SrTopicsResultTable me(){
        return me;
    }

    /**
     * as，生成一个新的表定义对象（包含as信息）
     */
    public static final SrTopicsResultTable as(String asName){
        return new SrTopicsResultTable(asName);
    }
    
    /**
     * 
     */
    public final Column<SrTopicsResult, java.lang.String> ID = createColumn("id", this);
    
    /**
     * 
     */
    public final Column<SrTopicsResult, java.lang.String> KEYWORDS = createColumn("keywords", this);
    
    /**
     * 
     */
    public final Column<SrTopicsResult, java.lang.String> SUMMARY = createColumn("summary", this);
    
    /**
     * 
     */
    public final Column<SrTopicsResult, java.lang.Integer> DOC_NUM = createColumn("doc_num", this);
    

    public SrTopicsResultTable() {
        super(null);
    }

    public SrTopicsResultTable(String asName) {
        super(asName);
    }

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }
}
