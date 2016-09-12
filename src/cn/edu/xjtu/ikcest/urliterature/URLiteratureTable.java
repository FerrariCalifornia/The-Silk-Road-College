/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.urliterature  
 * @Title: URLiteratureTable.java  
 * @Description: u_r_literature表定义类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.urliterature;

import com.jfinal.plugin.sqlbuilder.column.Column;
import com.jfinal.plugin.sqlbuilder.table.TableDefine;

/**  
 * @ClassName: URLiteratureTable  
 * @Description: u_r_literature表定义类  
 * @since V1.0.0  
 */
public class URLiteratureTable extends TableDefine<URLiterature>{

    /**
     * 表名
     */
    public static final String TABLE_NAME = "u_r_literature";
    
    /**
     * 静态对象
     */
    private static final URLiteratureTable me = new URLiteratureTable();
    
    /**
     * 可以多次复用，没有as信息
     */
    public static final URLiteratureTable me(){
        return me;
    }

    /**
     * as，生成一个新的表定义对象（包含as信息）
     */
    public static final URLiteratureTable as(String asName){
        return new URLiteratureTable(asName);
    }
    
    /**
     * id
     */
    public final Column<URLiterature, java.lang.String> ID = createColumn("id", this);
    
    /**
     * 标题
     */
    public final Column<URLiterature, java.lang.String> TITLE = createColumn("title", this);
    
    /**
     * 年份
     */
    public final Column<URLiterature, java.lang.Integer> YEAR = createColumn("year", this);
    
    /**
     * 原出版社
     */
    public final Column<URLiterature, java.lang.String> ORGINAL_PUBLICATION = createColumn("orginal_publication", this);
    
    /**
     * 卷
     */
    public final Column<URLiterature, java.lang.String> VOLUME = createColumn("volume", this);
    
    /**
     * 期
     */
    public final Column<URLiterature, java.lang.String> ISSUE = createColumn("issue", this);
    
    /**
     * 论文id
     */
    public final Column<URLiterature, java.lang.Integer> PAPER_ID = createColumn("paper_id", this);
    
    /**
     * 起始页
     */
    public final Column<URLiterature, java.lang.Integer> START_PAGE = createColumn("start_page", this);
    
    /**
     * 结束页
     */
    public final Column<URLiterature, java.lang.Integer> END_PAGE = createColumn("end_page", this);
    
    /**
     * 页码数
     */
    public final Column<URLiterature, java.lang.Integer> PAGE_COUNTER = createColumn("page_counter", this);
    
    /**
     * 引用
     */
    public final Column<URLiterature, java.lang.String> CITING_PAPER = createColumn("citing_paper", this);
    
    /**
     * dos
     */
    public final Column<URLiterature, java.lang.String> DOI = createColumn("doi", this);
    
    /**
     * url
     */
    public final Column<URLiterature, java.lang.String> URL = createColumn("url", this);
    
    /**
     * 梗概
     */
    public final Column<URLiterature, java.lang.String> SUMMARY = createColumn("summary", this);
    
    /**
     * 作者关键词
     */
    public final Column<URLiterature, java.lang.String> AUTHOR_KEYWORD = createColumn("author_keyword", this);
    
    /**
     * 索引关键词
     */
    public final Column<URLiterature, java.lang.String> INDEX_KEYWORD = createColumn("index_keyword", this);
    
    /**
     * 分析序列号
     */
    public final Column<URLiterature, java.lang.String> ANALYSIS_SERIAL_NUMBER = createColumn("analysis_serial_number", this);
    
    /**
     * cas
     */
    public final Column<URLiterature, java.lang.String> CAS = createColumn("cas", this);
    
    /**
     * 商标
     */
    public final Column<URLiterature, java.lang.String> BRAND = createColumn("brand", this);
    
    /**
     * 制造商
     */
    public final Column<URLiterature, java.lang.String> MANUFACTURER = createColumn("manufacturer", this);
    
    /**
     * 资助信息
     */
    public final Column<URLiterature, java.lang.String> FUNDING_INFO = createColumn("funding_info", this);
    
    /**
     * 参考文献
     */
    public final Column<URLiterature, java.lang.String> REFERENCES = createColumn("references", this);
    
    /**
     * 邮寄地址
     */
    public final Column<URLiterature, java.lang.String> POSTAL_ADDR = createColumn("postal_addr", this);
    
    /**
     * 编辑
     */
    public final Column<URLiterature, java.lang.String> EDITOR = createColumn("editor", this);
    
    /**
     * 资助机构
     */
    public final Column<URLiterature, java.lang.String> FUNDING_AGENT = createColumn("funding_agent", this);
    
    /**
     * 出版商
     */
    public final Column<URLiterature, java.lang.String> PUBLISHER = createColumn("publisher", this);
    
    /**
     * 会议名称
     */
    public final Column<URLiterature, java.lang.String> CONFERENCE_NAME = createColumn("conference_name", this);
    
    /**
     * issn
     */
    public final Column<URLiterature, java.lang.String> ISSN = createColumn("issn", this);
    
    /**
     * isbn
     */
    public final Column<URLiterature, java.lang.String> ISBN = createColumn("isbn", this);
    
    /**
     * codes
     */
    public final Column<URLiterature, java.lang.String> CODEN = createColumn("coden", this);
    
    /**
     * pubmed id
     */
    public final Column<URLiterature, java.lang.String> PUBMED_ID = createColumn("pubmed_id", this);
    
    /**
     * 语言
     */
    public final Column<URLiterature, java.lang.String> LANGUAGE = createColumn("language", this);
    
    /**
     * 原出版社地址
     */
    public final Column<URLiterature, java.lang.String> ORGINAL_PUBLICATION_ABBR = createColumn("orginal_publication_abbr", this);
    
    /**
     * 论文类型
     */
    public final Column<URLiterature, java.lang.String> PAPER_TYPE = createColumn("paper_type", this);
    
    /**
     * 出版源
     */
    public final Column<URLiterature, java.lang.String> SOURCE_OF_PUBLICATION = createColumn("source_of_publication", this);
    
    /**
     * eid
     */
    public final Column<URLiterature, java.lang.String> EID = createColumn("eid", this);
    
    /**
     * u id
     */
    public final Column<URLiterature, java.lang.String> U_ID = createColumn("u_id", this);
    

    public URLiteratureTable() {
        super(null);
    }

    public URLiteratureTable(String asName) {
        super(asName);
    }

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }
}
