/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.ebookrepo  
 * @Title: EbookRepoBase.java  
 * @Description: ebook_repo基本信息类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.ebookrepo;

import java.util.Map;
import java.util.HashMap;

import com.wellbole.core.model.SqlBuilderBaseModel;

/**  
 * @ClassName: EbookRepoBase  
 * @Description: ebook_repo基本信息类  
 * @since V1.0.0  
 */
 @SuppressWarnings("serial")
abstract class EbookRepoBase<K,M extends EbookRepoBase<K,M>> extends SqlBuilderBaseModel<K,M>{
    public static final String TABLE_NAME = "ebook_repo";

    public EbookRepoBase() {
        super(TABLE_NAME);
    }
    
    @Override
    public String getPrimaryKey(){
        return "id";
    }

    /**
     * @param isbn ISBN
     */

    public void setIsbn(java.lang.String isbn){
        this.set("isbn", isbn);
    }

    /**
     * @return  ISBN
     */
    public java.lang.String getIsbn(){
        return this.get("isbn");
    }
        

    /**
     * @param eisbn ESIBN
     */

    public void setEisbn(java.lang.String eisbn){
        this.set("eisbn", eisbn);
    }

    /**
     * @return  ESIBN
     */
    public java.lang.String getEisbn(){
        return this.get("eisbn");
    }
        

    /**
     * @param author 作者
     */

    public void setAuthor(java.lang.String author){
        this.set("author", author);
    }

    /**
     * @return  作者
     */
    public java.lang.String getAuthor(){
        return this.get("author");
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
     * @param pageCounter 页数
     */

    public void setPageCounter(java.lang.String pageCounter){
        this.set("page_counter", pageCounter);
    }

    /**
     * @return  页数
     */
    public java.lang.String getPageCounter(){
        return this.get("page_counter");
    }
        

    /**
     * @param placePublished 出版地点
     */

    public void setPlacePublished(java.lang.String placePublished){
        this.set("place_published", placePublished);
    }

    /**
     * @return  出版地点
     */
    public java.lang.String getPlacePublished(){
        return this.get("place_published");
    }
        

    /**
     * @param publisher 出版人
     */

    public void setPublisher(java.lang.String publisher){
        this.set("publisher", publisher);
    }

    /**
     * @return  出版人
     */
    public java.lang.String getPublisher(){
        return this.get("publisher");
    }
        

    /**
     * @param year 年份
     */

    public void setYear(java.lang.Integer year){
        this.set("year", year);
    }

    /**
     * @return  年份
     */
    public java.lang.Integer getYear(){
        return this.get("year");
    }
        

    /**
     * @param seriesIdentification 序列身份
     */

    public void setSeriesIdentification(java.lang.String seriesIdentification){
        this.set("series_identification", seriesIdentification);
    }

    /**
     * @return  序列身份
     */
    public java.lang.String getSeriesIdentification(){
        return this.get("series_identification");
    }
        

    /**
     * @param seriesName 序列名
     */

    public void setSeriesName(java.lang.String seriesName){
        this.set("series_name", seriesName);
    }

    /**
     * @return  序列名
     */
    public java.lang.String getSeriesName(){
        return this.get("series_name");
    }
        

    /**
     * @param seriesId 序列号
     */

    public void setSeriesId(java.lang.String seriesId){
        this.set("series_id", seriesId);
    }

    /**
     * @return  序列号
     */
    public java.lang.String getSeriesId(){
        return this.get("series_id");
    }
        

    /**
     * @param url URL地址
     */

    public void setUrl(java.lang.String url){
        this.set("url", url);
    }

    /**
     * @return  URL地址
     */
    public java.lang.String getUrl(){
        return this.get("url");
    }
        

    /**
     * @param imgUrl 图片URL地址
     */

    public void setImgUrl(java.lang.String imgUrl){
        this.set("img_url", imgUrl);
    }

    /**
     * @return  图片URL地址
     */
    public java.lang.String getImgUrl(){
        return this.get("img_url");
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
     * @param keysOrSubjects 关键字或主题
     */

    public void setKeysOrSubjects(java.lang.String keysOrSubjects){
        this.set("keys_or_subjects", keysOrSubjects);
    }

    /**
     * @return  关键字或主题
     */
    public java.lang.String getKeysOrSubjects(){
        return this.get("keys_or_subjects");
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
     * @param classNum class number
     */

    public void setClassNum(java.lang.String classNum){
        this.set("class_num", classNum);
    }

    /**
     * @return  class number
     */
    public java.lang.String getClassNum(){
        return this.get("class_num");
    }
        

    /**
     * @param nation 国家
     */

    public void setNation(java.lang.String nation){
        this.set("nation", nation);
    }

    /**
     * @return  国家
     */
    public java.lang.String getNation(){
        return this.get("nation");
    }
        

    /**
     * @Title: safeSetAttrs  
     * @Description: 安全地依据传入的Map来设定属性值（先转换成字符串，再依据转换成属性对应的类型）,excel导入用  
     * @param map 属性名－属性值
     * @since V1.0.0
     */
    public void safeSetAttrs(Map<String, Object> map){
        Object value = null;
        //ISBN, 类型 java.lang.String
        value = map.get("isbn");
        if(value != null){
            this.set("isbn", value.toString().trim());
        }
        //ESIBN, 类型 java.lang.String
        value = map.get("eisbn");
        if(value != null){
            this.set("eisbn", value.toString().trim());
        }
        //作者, 类型 java.lang.String
        value = map.get("author");
        if(value != null){
            this.set("author", value.toString().trim());
        }
        //标题, 类型 java.lang.String
        value = map.get("title");
        if(value != null){
            this.set("title", value.toString().trim());
        }
        //页数, 类型 java.lang.String
        value = map.get("page_counter");
        if(value != null){
            this.set("page_counter", value.toString().trim());
        }
        //出版地点, 类型 java.lang.String
        value = map.get("place_published");
        if(value != null){
            this.set("place_published", value.toString().trim());
        }
        //出版人, 类型 java.lang.String
        value = map.get("publisher");
        if(value != null){
            this.set("publisher", value.toString().trim());
        }
        //年份, 类型 java.lang.Integer
        value = map.get("year");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.lang.Integer.class, value.toString().trim());
        }
        if(value != null){
            this.set("year", value);
        }
        //序列身份, 类型 java.lang.String
        value = map.get("series_identification");
        if(value != null){
            this.set("series_identification", value.toString().trim());
        }
        //序列名, 类型 java.lang.String
        value = map.get("series_name");
        if(value != null){
            this.set("series_name", value.toString().trim());
        }
        //序列号, 类型 java.lang.String
        value = map.get("series_id");
        if(value != null){
            this.set("series_id", value.toString().trim());
        }
        //URL地址, 类型 java.lang.String
        value = map.get("url");
        if(value != null){
            this.set("url", value.toString().trim());
        }
        //图片URL地址, 类型 java.lang.String
        value = map.get("img_url");
        if(value != null){
            this.set("img_url", value.toString().trim());
        }
        //梗概, 类型 java.lang.String
        value = map.get("summary");
        if(value != null){
            this.set("summary", value.toString().trim());
        }
        //关键字或主题, 类型 java.lang.String
        value = map.get("keys_or_subjects");
        if(value != null){
            this.set("keys_or_subjects", value.toString().trim());
        }
        //语言, 类型 java.lang.String
        value = map.get("language");
        if(value != null){
            this.set("language", value.toString().trim());
        }
        //class number, 类型 java.lang.String
        value = map.get("class_num");
        if(value != null){
            this.set("class_num", value.toString().trim());
        }
        //国家, 类型 java.lang.String
        value = map.get("nation");
        if(value != null){
            this.set("nation", value.toString().trim());
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
        titleMap.put("ISBN", "isbn");
        titleMap.put("ESIBN", "eisbn");
        titleMap.put("作者", "author");
        titleMap.put("标题", "title");
        titleMap.put("页数", "page_counter");
        titleMap.put("出版地点", "place_published");
        titleMap.put("出版人", "publisher");
        titleMap.put("年份", "year");
        titleMap.put("序列身份", "series_identification");
        titleMap.put("序列名", "series_name");
        titleMap.put("序列号", "series_id");
        titleMap.put("URL地址", "url");
        titleMap.put("图片URL地址", "img_url");
        titleMap.put("梗概", "summary");
        titleMap.put("关键字或主题", "keys_or_subjects");
        titleMap.put("语言", "language");
        titleMap.put("class number", "class_num");
        titleMap.put("国家", "nation");
        return titleMap;
    }

}
