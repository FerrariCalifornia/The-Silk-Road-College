/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.srtopic  
 * @Title: SrTopicBase.java  
 * @Description: sr_topic基本信息类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.srtopic;

import java.util.Map;
import java.util.HashMap;

import com.wellbole.core.model.SqlBuilderBaseModel;

/**  
 * @ClassName: SrTopicBase  
 * @Description: sr_topic基本信息类  
 * @since V1.0.0  
 */
 @SuppressWarnings("serial")
abstract class SrTopicBase<K,M extends SrTopicBase<K,M>> extends SqlBuilderBaseModel<K,M>{
    public static final String TABLE_NAME = "sr_topic";

    public SrTopicBase() {
        super(TABLE_NAME);
    }
    
    @Override
    public String getPrimaryKey(){
        return "topic_id";
    }

    /**
     * @param topicName 主题名
     */

    public void setTopicName(java.lang.String topicName){
        this.set("topic_name", topicName);
    }

    /**
     * @return  主题名
     */
    public java.lang.String getTopicName(){
        return this.get("topic_name");
    }
        

    /**
     * @param topicKeywords 主题关键字
     */

    public void setTopicKeywords(java.lang.String topicKeywords){
        this.set("topic_keywords", topicKeywords);
    }

    /**
     * @return  主题关键字
     */
    public java.lang.String getTopicKeywords(){
        return this.get("topic_keywords");
    }
        

    /**
     * @param languageType 语言类型
     */

    public void setLanguageType(java.lang.Integer languageType){
        this.set("language_type", languageType);
    }

    /**
     * @return  语言类型
     */
    public java.lang.Integer getLanguageType(){
        return this.get("language_type");
    }
        

    /**
     * @param summary 梗概
     */

    public void setSummary(java.lang.String summary){
        this.set("summary", summary);
    }

    /**
     * @return  梗概
     */
    public java.lang.String getSummary(){
        return this.get("summary");
    }
        

    /**
     * @param docNum 号码
     */

    public void setDocNum(java.lang.Integer docNum){
        this.set("doc_num", docNum);
    }

    /**
     * @return  号码
     */
    public java.lang.Integer getDocNum(){
        return this.get("doc_num");
    }
        

    /**
     * @param durationTime 持续时间
     */

    public void setDurationTime(java.lang.Integer durationTime){
        this.set("duration_time", durationTime);
    }

    /**
     * @return  持续时间
     */
    public java.lang.Integer getDurationTime(){
        return this.get("duration_time");
    }
        

    /**
     * @param medianTime median time
     */

    public void setMedianTime(java.lang.String medianTime){
        this.set("median_time", medianTime);
    }

    /**
     * @return  median time
     */
    public java.lang.String getMedianTime(){
        return this.get("median_time");
    }
        

    /**
     * @param meanTime 平均时间
     */

    public void setMeanTime(java.lang.String meanTime){
        this.set("mean_time", meanTime);
    }

    /**
     * @return  平均时间
     */
    public java.lang.String getMeanTime(){
        return this.get("mean_time");
    }
        

    /**
     * @param sen sen
     */

    public void setSen(java.lang.Float sen){
        this.set("sen", sen);
    }

    /**
     * @return  sen
     */
    public java.lang.Float getSen(){
        return this.get("sen");
    }
        

    /**
     * @Title: safeSetAttrs  
     * @Description: 安全地依据传入的Map来设定属性值（先转换成字符串，再依据转换成属性对应的类型）,excel导入用  
     * @param map 属性名－属性值
     * @since V1.0.0
     */
    public void safeSetAttrs(Map<String, Object> map){
        Object value = null;
        //主题id, 类型 java.lang.Integer
        value = map.get("topic_id");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.lang.Integer.class, value.toString().trim());
        }
        if(value != null){
            this.set("topic_id", value);
        }
        //主题名, 类型 java.lang.String
        value = map.get("topic_name");
        if(value != null){
            this.set("topic_name", value.toString().trim());
        }
        //主题关键字, 类型 java.lang.String
        value = map.get("topic_keywords");
        if(value != null){
            this.set("topic_keywords", value.toString().trim());
        }
        //语言类型, 类型 java.lang.Integer
        value = map.get("language_type");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.lang.Integer.class, value.toString().trim());
        }
        if(value != null){
            this.set("language_type", value);
        }
        //梗概, 类型 java.lang.String
        value = map.get("summary");
        if(value != null){
            this.set("summary", value.toString().trim());
        }
        //号码, 类型 java.lang.Integer
        value = map.get("doc_num");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.lang.Integer.class, value.toString().trim());
        }
        if(value != null){
            this.set("doc_num", value);
        }
        //持续时间, 类型 java.lang.Integer
        value = map.get("duration_time");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.lang.Integer.class, value.toString().trim());
        }
        if(value != null){
            this.set("duration_time", value);
        }
        //median time, 类型 java.lang.String
        value = map.get("median_time");
        if(value != null){
            this.set("median_time", value.toString().trim());
        }
        //平均时间, 类型 java.lang.String
        value = map.get("mean_time");
        if(value != null){
            this.set("mean_time", value.toString().trim());
        }
        //sen, 类型 java.lang.Float
        value = map.get("sen");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.lang.Float.class, value.toString().trim());
        }
        if(value != null){
            this.set("sen", value);
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
        titleMap.put("主题id", "topic_id");
        titleMap.put("主题名", "topic_name");
        titleMap.put("主题关键字", "topic_keywords");
        titleMap.put("语言类型", "language_type");
        titleMap.put("梗概", "summary");
        titleMap.put("号码", "doc_num");
        titleMap.put("持续时间", "duration_time");
        titleMap.put("median time", "median_time");
        titleMap.put("平均时间", "mean_time");
        titleMap.put("sen", "sen");
        return titleMap;
    }

}
