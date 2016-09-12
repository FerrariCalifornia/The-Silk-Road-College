/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.srposttopic  
 * @Title: SrPostTopicBase.java  
 * @Description: sr_post_topic基本信息类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.srposttopic;

import java.util.Map;
import java.util.HashMap;

import com.wellbole.core.model.SqlBuilderBaseModel;

/**  
 * @ClassName: SrPostTopicBase  
 * @Description: sr_post_topic基本信息类  
 * @since V1.0.0  
 */
 @SuppressWarnings("serial")
abstract class SrPostTopicBase<K,M extends SrPostTopicBase<K,M>> extends SqlBuilderBaseModel<K,M>{
    public static final String TABLE_NAME = "sr_post_topic";

    public SrPostTopicBase() {
        super(TABLE_NAME);
    }
    
    @Override
    public String getPrimaryKey(){
        return "post_id,topic_id";
    }

    /**
     * @param postId 帖子id
     */

    public void setPostId(java.lang.String postId){
        this.set("post_id", postId);
    }

    /**
     * @return  帖子id
     */
    public java.lang.String getPostId(){
        return this.get("post_id");
    }
        

    /**
     * @param topicId 主题id
     */

    public void setTopicId(java.lang.Integer topicId){
        this.set("topic_id", topicId);
    }

    /**
     * @return  主题id
     */
    public java.lang.Integer getTopicId(){
        return this.get("topic_id");
    }
        

    /**
     * @param similarity 相似度
     */

    public void setSimilarity(java.lang.Double similarity){
        this.set("similarity", similarity);
    }

    /**
     * @return  相似度
     */
    public java.lang.Double getSimilarity(){
        return this.get("similarity");
    }
        

    /**
     * @param postTime 发布时间
     */

    public void setPostTime(java.sql.Timestamp postTime){
        this.set("post_time", postTime);
    }
    /**
     * @param postTime 发布时间
     */
    public void setPostTime(java.util.Date postTime){
     
        this.setPostTime(new java.sql.Timestamp(postTime.getTime()));
    }

    /**
     * @return  发布时间
     */
    public java.sql.Timestamp getPostTime(){
        return this.get("post_time");
    }
        

    /**
     * @Title: safeSetAttrs  
     * @Description: 安全地依据传入的Map来设定属性值（先转换成字符串，再依据转换成属性对应的类型）,excel导入用  
     * @param map 属性名－属性值
     * @since V1.0.0
     */
    public void safeSetAttrs(Map<String, Object> map){
        Object value = null;
        //帖子id, 类型 java.lang.String
        value = map.get("post_id");
        if(value != null){
            this.set("post_id", value.toString().trim());
        }
        //主题id, 类型 java.lang.Integer
        value = map.get("topic_id");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.lang.Integer.class, value.toString().trim());
        }
        if(value != null){
            this.set("topic_id", value);
        }
        //相似度, 类型 java.lang.Double
        value = map.get("similarity");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.lang.Double.class, value.toString().trim());
        }
        if(value != null){
            this.set("similarity", value);
        }
        //发布时间, 类型 java.sql.Timestamp
        value = map.get("post_time");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.sql.Timestamp.class, value.toString().trim());
        }
        if(value != null){
            this.set("post_time", value);
        }
    }

    /**
     * @Title: getTitleMap  
     * @Description: 获得每个标题名－字段名映射map ,excel导入用 
     * @return 标题名－字段名map
     * @since V1.0.0
     */
    public Map<String, String> getTitleMap(){
        Map<String, String> titleMap = new HashMap<String, String>();
        titleMap.put("帖子id", "post_id");
        titleMap.put("主题id", "topic_id");
        titleMap.put("相似度", "similarity");
        titleMap.put("发布时间", "post_time");
        return titleMap;
    }

}
