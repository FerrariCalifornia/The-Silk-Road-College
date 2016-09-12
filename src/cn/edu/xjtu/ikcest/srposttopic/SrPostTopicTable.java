/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.srposttopic  
 * @Title: SrPostTopicTable.java  
 * @Description: sr_post_topic表定义类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.srposttopic;

import com.jfinal.plugin.sqlbuilder.column.Column;
import com.jfinal.plugin.sqlbuilder.table.TableDefine;

/**  
 * @ClassName: SrPostTopicTable  
 * @Description: sr_post_topic表定义类  
 * @since V1.0.0  
 */
public class SrPostTopicTable extends TableDefine<SrPostTopic>{

    /**
     * 表名
     */
    public static final String TABLE_NAME = "sr_post_topic";
    
    /**
     * 静态对象
     */
    private static final SrPostTopicTable me = new SrPostTopicTable();
    
    /**
     * 可以多次复用，没有as信息
     */
    public static final SrPostTopicTable me(){
        return me;
    }

    /**
     * as，生成一个新的表定义对象（包含as信息）
     */
    public static final SrPostTopicTable as(String asName){
        return new SrPostTopicTable(asName);
    }
    
    /**
     * 帖子id
     */
    public final Column<SrPostTopic, java.lang.String> POST_ID = createColumn("post_id", this);
    
    /**
     * 主题id
     */
    public final Column<SrPostTopic, java.lang.Integer> TOPIC_ID = createColumn("topic_id", this);
    
    /**
     * 相似度
     */
    public final Column<SrPostTopic, java.lang.Double> SIMILARITY = createColumn("similarity", this);
    
    /**
     * 发布时间
     */
    public final Column<SrPostTopic, java.sql.Timestamp> POST_TIME = createColumn("post_time", this);
    

    public SrPostTopicTable() {
        super(null);
    }

    public SrPostTopicTable(String asName) {
        super(asName);
    }

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }
}
