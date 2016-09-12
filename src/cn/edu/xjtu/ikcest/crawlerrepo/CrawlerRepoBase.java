/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.crawlerrepo  
 * @Title: CrawlerRepoBase.java  
 * @Description: crawler_repo基本信息类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.crawlerrepo;

import java.util.Map;
import java.util.HashMap;

import com.wellbole.core.model.SqlBuilderBaseModel;

/**  
 * @ClassName: CrawlerRepoBase  
 * @Description: crawler_repo基本信息类  
 * @since V1.0.0  
 */
 @SuppressWarnings("serial")
abstract class CrawlerRepoBase<K,M extends CrawlerRepoBase<K,M>> extends SqlBuilderBaseModel<K,M>{
    public static final String TABLE_NAME = "crawler_repo";

    public CrawlerRepoBase() {
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
     * @param infoType 信息类型
     */

    public void setInfoType(java.lang.String infoType){
        this.set("info_type", infoType);
    }

    /**
     * @return  信息类型
     */
    public java.lang.String getInfoType(){
        return this.get("info_type");
    }
        

    /**
     * @param language 语言
     */

    public void setLanguage(java.lang.String language){
        this.set("language", language);
    }

    /**
     * @return  语言
     */
    public java.lang.String getLanguage(){
        return this.get("language");
    }
        

    /**
     * @param url url地址
     */

    public void setUrl(java.lang.String url){
        this.set("url", url);
    }

    /**
     * @return  url地址
     */
    public java.lang.String getUrl(){
        return this.get("url");
    }
        

    /**
     * @param siteName 网站名称
     */

    public void setSiteName(java.lang.String siteName){
        this.set("site_name", siteName);
    }

    /**
     * @return  网站名称
     */
    public java.lang.String getSiteName(){
        return this.get("site_name");
    }
        

    /**
     * @param imageUrl 图片url地址
     */

    public void setImageUrl(java.lang.String imageUrl){
        this.set("image_url", imageUrl);
    }

    /**
     * @return  图片url地址
     */
    public java.lang.String getImageUrl(){
        return this.get("image_url");
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
     * @param createdAt 创建时间
     */

    public void setCreatedAt(java.lang.Long createdAt){
        this.set("created_at", createdAt);
    }

    /**
     * @return  创建时间
     */
    public java.lang.Long getCreatedAt(){
        return this.get("created_at");
    }
        

    /**
     * @Title: safeSetAttrs  
     * @Description: 安全地依据传入的Map来设定属性值（先转换成字符串，再依据转换成属性对应的类型）,excel导入用  
     * @param map 属性名－属性值
     * @since V1.0.0
     */
    public void safeSetAttrs(Map<String, Object> map){
        Object value = null;
        //标题	, 类型 java.lang.String
        value = map.get("title");
        if(value != null){
            this.set("title", value.toString().trim());
        }
        //内容, 类型 java.lang.String
        value = map.get("content");
        if(value != null){
            this.set("content", value.toString().trim());
        }
        //信息类型, 类型 java.lang.String
        value = map.get("info_type");
        if(value != null){
            this.set("info_type", value.toString().trim());
        }
        //语言, 类型 java.lang.String
        value = map.get("language");
        if(value != null){
            this.set("language", value.toString().trim());
        }
        //url地址, 类型 java.lang.String
        value = map.get("url");
        if(value != null){
            this.set("url", value.toString().trim());
        }
        //网站名称, 类型 java.lang.String
        value = map.get("site_name");
        if(value != null){
            this.set("site_name", value.toString().trim());
        }
        //图片url地址, 类型 java.lang.String
        value = map.get("image_url");
        if(value != null){
            this.set("image_url", value.toString().trim());
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
        //创建时间, 类型 java.lang.Long
        value = map.get("created_at");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.lang.Long.class, value.toString().trim());
        }
        if(value != null){
            this.set("created_at", value);
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
        titleMap.put("信息类型", "info_type");
        titleMap.put("语言", "language");
        titleMap.put("url地址", "url");
        titleMap.put("网站名称", "site_name");
        titleMap.put("图片url地址", "image_url");
        titleMap.put("发布时间", "post_at");
        titleMap.put("创建时间", "created_at");
        return titleMap;
    }

}
