/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.srtopic  
 * @Title: SrTopic.java  
 * @Description: sr_topic
 * @date 2016-07-30 
 * @since V1.0.0 
 *
 * Modification History:
 * Date         Author      Version     Description
 * -------------------------------------------------------------
 * 2016-07-30   初始化       V1.0.0      新建文件
 */
package cn.edu.xjtu.ikcest.srtopic;

import com.wellbole.core.annotation.Table;
import com.wellbole.core.optlog.Optlogable;

/**  
 * @ClassName: SrTopic  
 * @Description: sr_topic 
 * @since V1.0.0  
 */
@Table(value="sr_topic",id="topic_id")
@SuppressWarnings("serial")
public class SrTopic extends SrTopicBase<java.lang.Integer, SrTopic> implements Optlogable{ 
    /**
     * sr_topic DAO
     */
    public static final SrTopic DAO = new SrTopic();

    /**
     * 表定义
     */
    private static final SrTopicTable SR_TOPIC = SrTopicTable.me();
    
    /**
     * <p>Title: SrTopic</p>  
     * <p>Description: 默认构造函数</p>  
     * @since V1.0.0
     */
    public SrTopic(){
    }


    @Override
    public String getModelOptlogStr() {
        return " sr_topic【" + "" + "】";
    }
    
}