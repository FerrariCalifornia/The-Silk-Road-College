/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.srnewsresult  
 * @Title: SrNewsResultTable.java  
 * @Description: sr_news_result表定义类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.srnewsresult;

import com.jfinal.plugin.sqlbuilder.column.Column;
import com.jfinal.plugin.sqlbuilder.table.TableDefine;

/**  
 * @ClassName: SrNewsResultTable  
 * @Description: sr_news_result表定义类  
 * @since V1.0.0  
 */
public class SrNewsResultTable extends TableDefine<SrNewsResult>{

    /**
     * 表名
     */
    public static final String TABLE_NAME = "sr_news_result";
    
    /**
     * 静态对象
     */
    private static final SrNewsResultTable me = new SrNewsResultTable();
    
    /**
     * 可以多次复用，没有as信息
     */
    public static final SrNewsResultTable me(){
        return me;
    }

    /**
     * as，生成一个新的表定义对象（包含as信息）
     */
    public static final SrNewsResultTable as(String asName){
        return new SrNewsResultTable(asName);
    }
    
    /**
     * id
     */
    public final Column<SrNewsResult, java.lang.String> ID = createColumn("id", this);
    
    /**
     * 标题
     */
    public final Column<SrNewsResult, java.lang.String> TITLE = createColumn("title", this);
    
    /**
     * 网站名
     */
    public final Column<SrNewsResult, java.lang.String> SITE_NAME = createColumn("site_name", this);
    
    /**
     * URL
     */
    public final Column<SrNewsResult, java.lang.String> URL = createColumn("url", this);
    
    /**
     * 发布时间
     */
    public final Column<SrNewsResult, java.lang.String> POST_TIME = createColumn("post_time", this);
    
    /**
     * 相关主题
     */
    public final Column<SrNewsResult, java.lang.String> RELATED_TOPIC = createColumn("related_topic", this);
    

    public SrNewsResultTable() {
        super(null);
    }

    public SrNewsResultTable(String asName) {
        super(asName);
    }

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }
}
