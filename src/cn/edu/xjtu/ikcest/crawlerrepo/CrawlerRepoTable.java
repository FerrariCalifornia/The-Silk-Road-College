/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.crawlerrepo  
 * @Title: CrawlerRepoTable.java  
 * @Description: crawler_repo表定义类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.crawlerrepo;

import com.jfinal.plugin.sqlbuilder.column.Column;
import com.jfinal.plugin.sqlbuilder.table.TableDefine;

/**  
 * @ClassName: CrawlerRepoTable  
 * @Description: crawler_repo表定义类  
 * @since V1.0.0  
 */
public class CrawlerRepoTable extends TableDefine<CrawlerRepo>{

    /**
     * 表名
     */
    public static final String TABLE_NAME = "crawler_repo";
    
    /**
     * 静态对象
     */
    private static final CrawlerRepoTable me = new CrawlerRepoTable();
    
    /**
     * 可以多次复用，没有as信息
     */
    public static final CrawlerRepoTable me(){
        return me;
    }

    /**
     * as，生成一个新的表定义对象（包含as信息）
     */
    public static final CrawlerRepoTable as(String asName){
        return new CrawlerRepoTable(asName);
    }
    
    /**
     * id

     */
    public final Column<CrawlerRepo, java.lang.String> ID = createColumn("id", this);
    
    /**
     * 标题	
     */
    public final Column<CrawlerRepo, java.lang.String> TITLE = createColumn("title", this);
    
    /**
     * 内容
     */
    public final Column<CrawlerRepo, java.lang.String> CONTENT = createColumn("content", this);
    
    /**
     * 信息类型
     */
    public final Column<CrawlerRepo, java.lang.String> INFO_TYPE = createColumn("info_type", this);
    
    /**
     * 语言
     */
    public final Column<CrawlerRepo, java.lang.String> LANGUAGE = createColumn("language", this);
    
    /**
     * url地址
     */
    public final Column<CrawlerRepo, java.lang.String> URL = createColumn("url", this);
    
    /**
     * 网站名称
     */
    public final Column<CrawlerRepo, java.lang.String> SITE_NAME = createColumn("site_name", this);
    
    /**
     * 图片url地址
     */
    public final Column<CrawlerRepo, java.lang.String> IMAGE_URL = createColumn("image_url", this);
    
    /**
     * 发布时间
     */
    public final Column<CrawlerRepo, java.sql.Timestamp> POST_AT = createColumn("post_at", this);
    
    /**
     * 创建时间
     */
    public final Column<CrawlerRepo, java.lang.Long> CREATED_AT = createColumn("created_at", this);
    

    public CrawlerRepoTable() {
        super(null);
    }

    public CrawlerRepoTable(String asName) {
        super(asName);
    }

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }
}
