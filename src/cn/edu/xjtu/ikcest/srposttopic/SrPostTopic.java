/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.srposttopic  
 * @Title: SrPostTopic.java  
 * @Description: sr_post_topic
 * @date 2016-07-30 
 * @since V1.0.0 
 *
 * Modification History:
 * Date         Author      Version     Description
 * -------------------------------------------------------------
 * 2016-07-30   初始化       V1.0.0      新建文件
 */
package cn.edu.xjtu.ikcest.srposttopic;

import com.wellbole.core.annotation.Table;
import com.wellbole.core.optlog.Optlogable;

/**  
 * @ClassName: SrPostTopic  
 * @Description: sr_post_topic 
 * @since V1.0.0  
 */
@Table(value="sr_post_topic",id="post_id,topic_id")
@SuppressWarnings("serial")
public class SrPostTopic extends SrPostTopicBase<java.lang.Integer, SrPostTopic> implements Optlogable{ 
    /**
     * sr_post_topic DAO
     */
    public static final SrPostTopic DAO = new SrPostTopic();

    /**
     * 表定义
     */
    private static final SrPostTopicTable SR_POST_TOPIC = SrPostTopicTable.me();
    
    /**
     * <p>Title: SrPostTopic</p>  
     * <p>Description: 默认构造函数</p>  
     * @since V1.0.0
     */
    public SrPostTopic(){
    }


    @Override
    public String getModelOptlogStr() {
        return " sr_post_topic【" + "" + "】";
    }
    
}