/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.srpost  
 * @Title: SrPostBase.java  
 * @Description: sr_post基本信息类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.srpost;

import java.util.Map;
import java.util.HashMap;

import com.wellbole.core.model.SqlBuilderBaseModel;

/**  
 * @ClassName: SrPostBase  
 * @Description: sr_post基本信息类  
 * @since V1.0.0  
 */
 @SuppressWarnings("serial")
abstract class SrPostBase<K,M extends SrPostBase<K,M>> extends SqlBuilderBaseModel<K,M>{
    public static final String TABLE_NAME = "sr_post";

    public SrPostBase() {
        super(TABLE_NAME);
    }
    
    @Override
    public String getPrimaryKey(){
        return "id";
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
     * @param dataType 数据类型
     */

    public void setDataType(java.lang.Integer dataType){
        this.set("data_type", dataType);
    }

    /**
     * @return  数据类型
     */
    public java.lang.Integer getDataType(){
        return this.get("data_type");
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
     * @param content 内容
     */

    public void setContent(java.lang.String content){
        this.set("content", content);
    }

    /**
     * @return  内容
     */
    public java.lang.String getContent(){
        return this.get("content");
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
     * @Title: safeSetAttrs  
     * @Description: 安全地依据传入的Map来设定属性值（先转换成字符串，再依据转换成属性对应的类型）,excel导入用  
     * @param map 属性名－属性值
     * @since V1.0.0
     */
    public void safeSetAttrs(Map<String, Object> map){
        Object value = null;
        //URL, 类型 java.lang.String
        value = map.get("url");
        if(value != null){
            this.set("url", value.toString().trim());
        }
        //网站名, 类型 java.lang.String
        value = map.get("site_name");
        if(value != null){
            this.set("site_name", value.toString().trim());
        }
        //数据类型, 类型 java.lang.Integer
        value = map.get("data_type");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.lang.Integer.class, value.toString().trim());
        }
        if(value != null){
            this.set("data_type", value);
        }
        //标题, 类型 java.lang.String
        value = map.get("title");
        if(value != null){
            this.set("title", value.toString().trim());
        }
        //内容, 类型 java.lang.String
        value = map.get("content");
        if(value != null){
            this.set("content", value.toString().trim());
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
        //语言类型, 类型 java.lang.Integer
        value = map.get("language_type");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.lang.Integer.class, value.toString().trim());
        }
        if(value != null){
            this.set("language_type", value);
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
        titleMap.put("URL", "url");
        titleMap.put("网站名", "site_name");
        titleMap.put("数据类型", "data_type");
        titleMap.put("标题", "title");
        titleMap.put("内容", "content");
        titleMap.put("发布时间", "post_time");
        titleMap.put("语言类型", "language_type");
        return titleMap;
    }

}
