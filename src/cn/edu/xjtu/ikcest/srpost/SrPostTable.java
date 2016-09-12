/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.srpost  
 * @Title: SrPostTable.java  
 * @Description: sr_post表定义类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.srpost;

import com.jfinal.plugin.sqlbuilder.column.Column;
import com.jfinal.plugin.sqlbuilder.table.TableDefine;

/**  
 * @ClassName: SrPostTable  
 * @Description: sr_post表定义类  
 * @since V1.0.0  
 */
public class SrPostTable extends TableDefine<SrPost>{

    /**
     * 表名
     */
    public static final String TABLE_NAME = "sr_post";
    
    /**
     * 静态对象
     */
    private static final SrPostTable me = new SrPostTable();
    
    /**
     * 可以多次复用，没有as信息
     */
    public static final SrPostTable me(){
        return me;
    }

    /**
     * as，生成一个新的表定义对象（包含as信息）
     */
    public static final SrPostTable as(String asName){
        return new SrPostTable(asName);
    }
    
    /**
     * id
     */
    public final Column<SrPost, java.lang.String> ID = createColumn("id", this);
    
    /**
     * URL
     */
    public final Column<SrPost, java.lang.String> URL = createColumn("url", this);
    
    /**
     * 网站名
     */
    public final Column<SrPost, java.lang.String> SITE_NAME = createColumn("site_name", this);
    
    /**
     * 数据类型
     */
    public final Column<SrPost, java.lang.Integer> DATA_TYPE = createColumn("data_type", this);
    
    /**
     * 标题
     */
    public final Column<SrPost, java.lang.String> TITLE = createColumn("title", this);
    
    /**
     * 内容
     */
    public final Column<SrPost, java.lang.String> CONTENT = createColumn("content", this);
    
    /**
     * 发布时间
     */
    public final Column<SrPost, java.sql.Timestamp> POST_TIME = createColumn("post_time", this);
    
    /**
     * 语言类型
     */
    public final Column<SrPost, java.lang.Integer> LANGUAGE_TYPE = createColumn("language_type", this);
    

    public SrPostTable() {
        super(null);
    }

    public SrPostTable(String asName) {
        super(asName);
    }

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }
}
