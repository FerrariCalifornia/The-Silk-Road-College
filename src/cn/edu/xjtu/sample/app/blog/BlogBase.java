/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.sample.app.blog  
 * @Title: BlogBase.java  
 * @Description: 博客基本信息类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.sample.app.blog;

import java.util.Map;
import java.util.HashMap;

import com.wellbole.core.model.SqlBuilderBaseModel;

/**  
 * @ClassName: BlogBase  
 * @Description: 博客基本信息类  
 * @since V1.0.0  
 */
 @SuppressWarnings("serial")
abstract class BlogBase<K,M extends BlogBase<K,M>> extends SqlBuilderBaseModel<K,M>{
    public static final String TABLE_NAME = "app_blog";

    public BlogBase() {
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
     * @param postAt 发布时间
     */

    public void setPostAt(java.sql.Timestamp postAt){
        this.set("post_at", postAt);
    }
    /**
     * @param postAt 发布时间
     */
    public void setPostAt(java.util.Date postAt){
     
        this.setPostAt(new java.sql.Timestamp(postAt.getTime()));
    }

    /**
     * @return  发布时间
     */
    public java.sql.Timestamp getPostAt(){
        return this.get("post_at");
    }
        

    /**
     * @param postBy 发布人
     */

    public void setPostBy(java.lang.String postBy){
        this.set("post_by", postBy);
    }

    /**
     * @return  发布人
     */
    public java.lang.String getPostBy(){
        return this.get("post_by");
    }
        

    /**
     * @param typeCode 
     */

    public void setTypeCode(java.lang.String typeCode){
        this.set("type_code", typeCode);
    }

    /**
     * @return  
     */
    public java.lang.String getTypeCode(){
        return this.get("type_code");
    }
        

    /**
     * @param author 
     */

    public void setAuthor(java.lang.String author){
        this.set("author", author);
    }

    /**
     * @return  
     */
    public java.lang.String getAuthor(){
        return this.get("author");
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
        //内容, 类型 java.lang.String
        value = map.get("content");
        if(value != null){
            this.set("content", value.toString().trim());
        }
        //发布时间, 类型 java.sql.Timestamp
        value = map.get("post_at");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.sql.Timestamp.class, value.toString().trim());
        }
        if(value != null){
            this.set("post_at", value);
        }
        //发布人, 类型 java.lang.String
        value = map.get("post_by");
        if(value != null){
            this.set("post_by", value.toString().trim());
        }
        //, 类型 java.lang.String
        value = map.get("type_code");
        if(value != null){
            this.set("type_code", value.toString().trim());
        }
        //, 类型 java.lang.String
        value = map.get("author");
        if(value != null){
            this.set("author", value.toString().trim());
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
        titleMap.put("内容", "content");
        titleMap.put("发布时间", "post_at");
        titleMap.put("发布人", "post_by");
        return titleMap;
    }

}
