/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.ebookrepo  
 * @Title: EbookRepoTable.java  
 * @Description: ebook_repo表定义类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.ebookrepo;

import com.jfinal.plugin.sqlbuilder.column.Column;
import com.jfinal.plugin.sqlbuilder.table.TableDefine;

/**  
 * @ClassName: EbookRepoTable  
 * @Description: ebook_repo表定义类  
 * @since V1.0.0  
 */
public class EbookRepoTable extends TableDefine<EbookRepo>{

    /**
     * 表名
     */
    public static final String TABLE_NAME = "ebook_repo";
    
    /**
     * 静态对象
     */
    private static final EbookRepoTable me = new EbookRepoTable();
    
    /**
     * 可以多次复用，没有as信息
     */
    public static final EbookRepoTable me(){
        return me;
    }

    /**
     * as，生成一个新的表定义对象（包含as信息）
     */
    public static final EbookRepoTable as(String asName){
        return new EbookRepoTable(asName);
    }
    
    /**
     * id
     */
    public final Column<EbookRepo, java.lang.String> ID = createColumn("id", this);
    
    /**
     * ISBN
     */
    public final Column<EbookRepo, java.lang.String> ISBN = createColumn("isbn", this);
    
    /**
     * ESIBN
     */
    public final Column<EbookRepo, java.lang.String> EISBN = createColumn("eisbn", this);
    
    /**
     * 作者
     */
    public final Column<EbookRepo, java.lang.String> AUTHOR = createColumn("author", this);
    
    /**
     * 标题
     */
    public final Column<EbookRepo, java.lang.String> TITLE = createColumn("title", this);
    
    /**
     * 页数
     */
    public final Column<EbookRepo, java.lang.String> PAGE_COUNTER = createColumn("page_counter", this);
    
    /**
     * 出版地点
     */
    public final Column<EbookRepo, java.lang.String> PLACE_PUBLISHED = createColumn("place_published", this);
    
    /**
     * 出版人
     */
    public final Column<EbookRepo, java.lang.String> PUBLISHER = createColumn("publisher", this);
    
    /**
     * 年份
     */
    public final Column<EbookRepo, java.lang.Integer> YEAR = createColumn("year", this);
    
    /**
     * 序列身份
     */
    public final Column<EbookRepo, java.lang.String> SERIES_IDENTIFICATION = createColumn("series_identification", this);
    
    /**
     * 序列名
     */
    public final Column<EbookRepo, java.lang.String> SERIES_NAME = createColumn("series_name", this);
    
    /**
     * 序列号
     */
    public final Column<EbookRepo, java.lang.String> SERIES_ID = createColumn("series_id", this);
    
    /**
     * URL地址
     */
    public final Column<EbookRepo, java.lang.String> URL = createColumn("url", this);
    
    /**
     * 图片URL地址
     */
    public final Column<EbookRepo, java.lang.String> IMG_URL = createColumn("img_url", this);
    
    /**
     * 梗概
     */
    public final Column<EbookRepo, java.lang.String> SUMMARY = createColumn("summary", this);
    
    /**
     * 关键字或主题
     */
    public final Column<EbookRepo, java.lang.String> KEYS_OR_SUBJECTS = createColumn("keys_or_subjects", this);
    
    /**
     * 语言
     */
    public final Column<EbookRepo, java.lang.String> LANGUAGE = createColumn("language", this);
    
    /**
     * class number
     */
    public final Column<EbookRepo, java.lang.String> CLASS_NUM = createColumn("class_num", this);
    
    /**
     * 国家
     */
    public final Column<EbookRepo, java.lang.String> NATION = createColumn("nation", this);
    

    public EbookRepoTable() {
        super(null);
    }

    public EbookRepoTable(String asName) {
        super(asName);
    }

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }
}
