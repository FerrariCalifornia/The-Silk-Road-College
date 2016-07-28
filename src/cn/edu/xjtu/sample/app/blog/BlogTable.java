/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.sample.app.blog  
 * @Title: BlogTable.java  
 * @Description: 博客表定义类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.sample.app.blog;

import com.jfinal.plugin.sqlbuilder.column.Column;
import com.jfinal.plugin.sqlbuilder.table.TableDefine;

/**  
 * @ClassName: BlogTable  
 * @Description: 博客表定义类  
 * @since V1.0.0  
 */
public class BlogTable extends TableDefine<Blog>{

    /**
     * 表名
     */
    public static final String TABLE_NAME = "app_blog";
    
    /**
     * 静态对象
     */
    private static final BlogTable me = new BlogTable();
    
    /**
     * 可以多次复用，没有as信息
     */
    public static final BlogTable me(){
        return me;
    }

    /**
     * as，生成一个新的表定义对象（包含as信息）
     */
    public static final BlogTable as(String asName){
        return new BlogTable(asName);
    }
    
    /**
     * id
     */
    public final Column<Blog, java.lang.Long> ID = createColumn("id", this);
    
    /**
     * 标题
     */
    public final Column<Blog, java.lang.String> TITLE = createColumn("title", this);
    
    /**
     * 内容
     */
    public final Column<Blog, java.lang.String> CONTENT = createColumn("content", this);
    
    /**
     * 发布时间
     */
    public final Column<Blog, java.sql.Timestamp> POST_AT = createColumn("post_at", this);
    
    /**
     * 发布人
     */
    public final Column<Blog, java.lang.String> POST_BY = createColumn("post_by", this);
    
    /**
     * 
     */
    public final Column<Blog, java.lang.String> TYPE_CODE = createColumn("type_code", this);
    
    /**
     * 
     */
    public final Column<Blog, java.lang.String> AUTHOR = createColumn("author", this);
    

    public BlogTable() {
        super(null);
    }

    public BlogTable(String asName) {
        super(asName);
    }

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }
}
