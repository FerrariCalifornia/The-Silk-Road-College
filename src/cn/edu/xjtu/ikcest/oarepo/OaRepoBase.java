/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.oarepo  
 * @Title: OaRepoBase.java  
 * @Description: oa_repo基本信息类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.oarepo;

import java.util.Map;
import java.util.HashMap;

import com.wellbole.core.model.SqlBuilderBaseModel;

/**  
 * @ClassName: OaRepoBase  
 * @Description: oa_repo基本信息类  
 * @since V1.0.0  
 */
 @SuppressWarnings("serial")
abstract class OaRepoBase<K,M extends OaRepoBase<K,M>> extends SqlBuilderBaseModel<K,M>{
    public static final String TABLE_NAME = "oa_repo";

    public OaRepoBase() {
        super(TABLE_NAME);
    }
    
    @Override
    public String getPrimaryKey(){
        return "id";
    }

    /**
     * @param firstSubject 第一主题
     */

    public void setFirstSubject(java.lang.String firstSubject){
        this.set("first_subject", firstSubject);
    }

    /**
     * @return  第一主题
     */
    public java.lang.String getFirstSubject(){
        return this.get("first_subject");
    }
        

    /**
     * @param secondSubject 第二主题
     */

    public void setSecondSubject(java.lang.String secondSubject){
        this.set("second_subject", secondSubject);
    }

    /**
     * @return  第二主题
     */
    public java.lang.String getSecondSubject(){
        return this.get("second_subject");
    }
        

    /**
     * @param literatureTitle 著作名
     */

    public void setLiteratureTitle(java.lang.String literatureTitle){
        this.set("literature_title", literatureTitle);
    }

    /**
     * @return  著作名
     */
    public java.lang.String getLiteratureTitle(){
        return this.get("literature_title");
    }
        

    /**
     * @param abstract 摘要
     */

    public void setAbstract(java.lang.String abstracts){
        this.set("abstract", abstracts);
    }

    /**
     * @return  摘要
     */
    public java.lang.String getAbstract(){
        return this.get("abstract");
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
     * @param journalTitle 杂志名
     */

    public void setJournalTitle(java.lang.String journalTitle){
        this.set("journal_title", journalTitle);
    }

    /**
     * @return  杂志名
     */
    public java.lang.String getJournalTitle(){
        return this.get("journal_title");
    }
        

    /**
     * @param journalVolume 卷
     */

    public void setJournalVolume(java.lang.String journalVolume){
        this.set("journal_volume", journalVolume);
    }

    /**
     * @return  卷
     */
    public java.lang.String getJournalVolume(){
        return this.get("journal_volume");
    }
        

    /**
     * @param journalNumber 杂志号
     */

    public void setJournalNumber(java.lang.String journalNumber){
        this.set("journal_number", journalNumber);
    }

    /**
     * @return  杂志号
     */
    public java.lang.String getJournalNumber(){
        return this.get("journal_number");
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
     * @param doi 工业部
     */

    public void setDoi(java.lang.String doi){
        this.set("doi", doi);
    }

    /**
     * @return  工业部
     */
    public java.lang.String getDoi(){
        return this.get("doi");
    }
        

    /**
     * @Title: safeSetAttrs  
     * @Description: 安全地依据传入的Map来设定属性值（先转换成字符串，再依据转换成属性对应的类型）,excel导入用  
     * @param map 属性名－属性值
     * @since V1.0.0
     */
    public void safeSetAttrs(Map<String, Object> map){
        Object value = null;
        //第一主题, 类型 java.lang.String
        value = map.get("first_subject");
        if(value != null){
            this.set("first_subject", value.toString().trim());
        }
        //第二主题, 类型 java.lang.String
        value = map.get("second_subject");
        if(value != null){
            this.set("second_subject", value.toString().trim());
        }
        //著作名, 类型 java.lang.String
        value = map.get("literature_title");
        if(value != null){
            this.set("literature_title", value.toString().trim());
        }
        //摘要, 类型 java.lang.String
        value = map.get("abstract");
        if(value != null){
            this.set("abstract", value.toString().trim());
        }
        //URL地址, 类型 java.lang.String
        value = map.get("url");
        if(value != null){
            this.set("url", value.toString().trim());
        }
        //作者, 类型 java.lang.String
        value = map.get("author");
        if(value != null){
            this.set("author", value.toString().trim());
        }
        //杂志名, 类型 java.lang.String
        value = map.get("journal_title");
        if(value != null){
            this.set("journal_title", value.toString().trim());
        }
        //卷, 类型 java.lang.String
        value = map.get("journal_volume");
        if(value != null){
            this.set("journal_volume", value.toString().trim());
        }
        //杂志号, 类型 java.lang.String
        value = map.get("journal_number");
        if(value != null){
            this.set("journal_number", value.toString().trim());
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
        //工业部, 类型 java.lang.String
        value = map.get("doi");
        if(value != null){
            this.set("doi", value.toString().trim());
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
        titleMap.put("第一主题", "first_subject");
        titleMap.put("第二主题", "second_subject");
        titleMap.put("著作名", "literature_title");
        titleMap.put("摘要", "abstract");
        titleMap.put("URL地址", "url");
        titleMap.put("作者", "author");
        titleMap.put("杂志名", "journal_title");
        titleMap.put("卷", "journal_volume");
        titleMap.put("杂志号", "journal_number");
        titleMap.put("年份", "year");
        titleMap.put("工业部", "doi");
        return titleMap;
    }

}
