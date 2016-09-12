/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.srtopic  
 * @Title: SrTopicTable.java  
 * @Description: sr_topic表定义类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.srtopic;

import com.jfinal.plugin.sqlbuilder.column.Column;
import com.jfinal.plugin.sqlbuilder.table.TableDefine;

/**  
 * @ClassName: SrTopicTable  
 * @Description: sr_topic表定义类  
 * @since V1.0.0  
 */
public class SrTopicTable extends TableDefine<SrTopic>{

    /**
     * 表名
     */
    public static final String TABLE_NAME = "sr_topic";
    
    /**
     * 静态对象
     */
    private static final SrTopicTable me = new SrTopicTable();
    
    /**
     * 可以多次复用，没有as信息
     */
    public static final SrTopicTable me(){
        return me;
    }

    /**
     * as，生成一个新的表定义对象（包含as信息）
     */
    public static final SrTopicTable as(String asName){
        return new SrTopicTable(asName);
    }
    
    /**
     * 主题id
     */
    public final Column<SrTopic, java.lang.Integer> TOPIC_ID = createColumn("topic_id", this);
    
    /**
     * 主题名
     */
    public final Column<SrTopic, java.lang.String> TOPIC_NAME = createColumn("topic_name", this);
    
    /**
     * 主题关键字
     */
    public final Column<SrTopic, java.lang.String> TOPIC_KEYWORDS = createColumn("topic_keywords", this);
    
    /**
     * 语言类型
     */
    public final Column<SrTopic, java.lang.Integer> LANGUAGE_TYPE = createColumn("language_type", this);
    
    /**
     * 梗概
     */
    public final Column<SrTopic, java.lang.String> SUMMARY = createColumn("summary", this);
    
    /**
     * 号码
     */
    public final Column<SrTopic, java.lang.Integer> DOC_NUM = createColumn("doc_num", this);
    
    /**
     * 持续时间
     */
    public final Column<SrTopic, java.lang.Integer> DURATION_TIME = createColumn("duration_time", this);
    
    /**
     * median time
     */
    public final Column<SrTopic, java.lang.String> MEDIAN_TIME = createColumn("median_time", this);
    
    /**
     * 平均时间
     */
    public final Column<SrTopic, java.lang.String> MEAN_TIME = createColumn("mean_time", this);
    
    /**
     * sen
     */
    public final Column<SrTopic, java.lang.Float> SEN = createColumn("sen", this);
    

    public SrTopicTable() {
        super(null);
    }

    public SrTopicTable(String asName) {
        super(asName);
    }

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }
}
