/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.srtopicsresult  
 * @Title: SrTopicsResultBase.java  
 * @Description: sr_topics_result基本信息类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.srtopicsresult;

import java.util.Map;
import java.util.HashMap;

import com.wellbole.core.model.SqlBuilderBaseModel;

/**  
 * @ClassName: SrTopicsResultBase  
 * @Description: sr_topics_result基本信息类  
 * @since V1.0.0  
 */
 @SuppressWarnings("serial")
abstract class SrTopicsResultBase<K,M extends SrTopicsResultBase<K,M>> extends SqlBuilderBaseModel<K,M>{
    public static final String TABLE_NAME = "sr_topics_result";

    public SrTopicsResultBase() {
        super(TABLE_NAME);
    }
    
    @Override
    public String getPrimaryKey(){
        return "id";
    }

    /**
     * @param keywords 
     */

    public void setKeywords(java.lang.String keywords){
        this.set("keywords", keywords);
    }

    /**
     * @return  
     */
    public java.lang.String getKeywords(){
        return this.get("keywords");
    }
        

    /**
     * @param summary 
     */

    public void setSummary(java.lang.String summary){
        this.set("summary", summary);
    }

    /**
     * @return  
     */
    public java.lang.String getSummary(){
        return this.get("summary");
    }
        

    /**
     * @param docNum 
     */

    public void setDocNum(java.lang.Integer docNum){
        this.set("doc_num", docNum);
    }

    /**
     * @return  
     */
    public java.lang.Integer getDocNum(){
        return this.get("doc_num");
    }
        

    /**
     * @Title: safeSetAttrs  
     * @Description: 安全地依据传入的Map来设定属性值（先转换成字符串，再依据转换成属性对应的类型）,excel导入用  
     * @param map 属性名－属性值
     * @since V1.0.0
     */
    public void safeSetAttrs(Map<String, Object> map){
        Object value = null;
        //, 类型 java.lang.String
        value = map.get("keywords");
        if(value != null){
            this.set("keywords", value.toString().trim());
        }
        //, 类型 java.lang.String
        value = map.get("summary");
        if(value != null){
            this.set("summary", value.toString().trim());
        }
        //, 类型 java.lang.Integer
        value = map.get("doc_num");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.lang.Integer.class, value.toString().trim());
        }
        if(value != null){
            this.set("doc_num", value);
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
        return titleMap;
    }

}
