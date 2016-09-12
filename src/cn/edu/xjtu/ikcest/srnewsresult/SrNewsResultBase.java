/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.srnewsresult  
 * @Title: SrNewsResultBase.java  
 * @Description: sr_news_result基本信息类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.srnewsresult;

import java.util.Map;
import java.util.HashMap;

import com.wellbole.core.model.SqlBuilderBaseModel;

/**  
 * @ClassName: SrNewsResultBase  
 * @Description: sr_news_result基本信息类  
 * @since V1.0.0  
 */
 @SuppressWarnings("serial")
abstract class SrNewsResultBase<K,M extends SrNewsResultBase<K,M>> extends SqlBuilderBaseModel<K,M>{
    public static final String TABLE_NAME = "sr_news_result";

    public SrNewsResultBase() {
        super(TABLE_NAME);
    }
    
    @Override
    public String getPrimaryKey(){
        return "id";
    }

    /**
     * @param title 标题
     */

    public void setTitle(java.lang.String title){
        this.set("title", title);
    }

    /**
     * @return  标题
     */
    public java.lang.String getTitle(){
        return this.get("title");
    }
        

    /**
     * @param siteName 网站名
     */

    public void setSiteName(java.lang.String siteName){
        this.set("site_name", siteName);
    }

    /**
     * @return  网站名
     */
    public java.lang.String getSiteName(){
        return this.get("site_name");
    }
        

    /**
     * @param url URL
     */

    public void setUrl(java.lang.String url){
        this.set("url", url);
    }

    /**
     * @return  URL
     */
    public java.lang.String getUrl(){
        return this.get("url");
    }
        

    /**
     * @param postTime 发布时间
     */

    public void setPostTime(java.lang.String postTime){
        this.set("post_time", postTime);
    }

    /**
     * @return  发布时间
     */
    public java.lang.String getPostTime(){
        return this.get("post_time");
    }
        

    /**
     * @param relatedTopic 相关主题
     */

    public void setRelatedTopic(java.lang.String relatedTopic){
        this.set("related_topic", relatedTopic);
    }

    /**
     * @return  相关主题
     */
    public java.lang.String getRelatedTopic(){
        return this.get("related_topic");
    }
        

    /**
     * @Title: safeSetAttrs  
     * @Description: 安全地依据传入的Map来设定属性值（先转换成字符串，再依据转换成属性对应的类型）,excel导入用  
     * @param map 属性名－属性值
     * @since V1.0.0
     */
    public void safeSetAttrs(Map<String, Object> map){
        Object value = null;
        //标题, 类型 java.lang.String
        value = map.get("title");
        if(value != null){
            this.set("title", value.toString().trim());
        }
        //网站名, 类型 java.lang.String
        value = map.get("site_name");
        if(value != null){
            this.set("site_name", value.toString().trim());
        }
        //URL, 类型 java.lang.String
        value = map.get("url");
        if(value != null){
            this.set("url", value.toString().trim());
        }
        //发布时间, 类型 java.lang.String
        value = map.get("post_time");
        if(value != null){
            this.set("post_time", value.toString().trim());
        }
        //相关主题, 类型 java.lang.String
        value = map.get("related_topic");
        if(value != null){
            this.set("related_topic", value.toString().trim());
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
        titleMap.put("标题", "title");
        titleMap.put("网站名", "site_name");
        titleMap.put("URL", "url");
        titleMap.put("发布时间", "post_time");
        titleMap.put("相关主题", "related_topic");
        return titleMap;
    }

}
