/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.confrepo  
 * @Title: ConfRepoBase.java  
 * @Description: conf_repo基本信息类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.confrepo;

import java.util.Map;
import java.util.HashMap;

import com.wellbole.core.model.SqlBuilderBaseModel;

/**  
 * @ClassName: ConfRepoBase  
 * @Description: conf_repo基本信息类  
 * @since V1.0.0  
 */
 @SuppressWarnings("serial")
abstract class ConfRepoBase<K,M extends ConfRepoBase<K,M>> extends SqlBuilderBaseModel<K,M>{
    public static final String TABLE_NAME = "conf_repo";

    public ConfRepoBase() {
        super(TABLE_NAME);
    }
    
    @Override
    public String getPrimaryKey(){
        return "id";
    }

    /**
     * @param conferenceName 会议名
     */

    public void setConferenceName(java.lang.String conferenceName){
        this.set("conference_name", conferenceName);
    }

    /**
     * @return  会议名
     */
    public java.lang.String getConferenceName(){
        return this.get("conference_name");
    }
        

    /**
     * @param organizer 组织者
     */

    public void setOrganizer(java.lang.String organizer){
        this.set("organizer", organizer);
    }

    /**
     * @return  组织者
     */
    public java.lang.String getOrganizer(){
        return this.get("organizer");
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
     * @param eligibility 资格
     */

    public void setEligibility(java.lang.String eligibility){
        this.set("eligibility", eligibility);
    }

    /**
     * @return  资格
     */
    public java.lang.String getEligibility(){
        return this.get("eligibility");
    }
        

    /**
     * @param startDate 起始日期
     */

    public void setStartDate(java.lang.String startDate){
        this.set("start_date", startDate);
    }

    /**
     * @return  起始日期
     */
    public java.lang.String getStartDate(){
        return this.get("start_date");
    }
        

    /**
     * @param endDate 截止日期
     */

    public void setEndDate(java.lang.String endDate){
        this.set("end_date", endDate);
    }

    /**
     * @return  截止日期
     */
    public java.lang.String getEndDate(){
        return this.get("end_date");
    }
        

    /**
     * @param location 地点
     */

    public void setLocation(java.lang.String location){
        this.set("location", location);
    }

    /**
     * @return  地点
     */
    public java.lang.String getLocation(){
        return this.get("location");
    }
        

    /**
     * @param countryRegion 国家地区
     */

    public void setCountryRegion(java.lang.String countryRegion){
        this.set("country_region", countryRegion);
    }

    /**
     * @return  国家地区
     */
    public java.lang.String getCountryRegion(){
        return this.get("country_region");
    }
        

    /**
     * @param manuscriptLastDay 最新手稿
     */

    public void setManuscriptLastDay(java.lang.String manuscriptLastDay){
        this.set("manuscript_last_day", manuscriptLastDay);
    }

    /**
     * @return  最新手稿
     */
    public java.lang.String getManuscriptLastDay(){
        return this.get("manuscript_last_day");
    }
        

    /**
     * @param abstractLastDay 最新摘要
     */

    public void setAbstractLastDay(java.lang.String abstractLastDay){
        this.set("abstract_last_day", abstractLastDay);
    }

    /**
     * @return  最新摘要
     */
    public java.lang.String getAbstractLastDay(){
        return this.get("abstract_last_day");
    }
        

    /**
     * @param otherContacts 其他联系人
     */

    public void setOtherContacts(java.lang.String otherContacts){
        this.set("other_contacts", otherContacts);
    }

    /**
     * @return  其他联系人
     */
    public java.lang.String getOtherContacts(){
        return this.get("other_contacts");
    }
        

    /**
     * @param broadTheme 大主题
     */

    public void setBroadTheme(java.lang.String broadTheme){
        this.set("broad_theme", broadTheme);
    }

    /**
     * @return  大主题
     */
    public java.lang.String getBroadTheme(){
        return this.get("broad_theme");
    }
        

    /**
     * @param classify 分类
     */

    public void setClassify(java.lang.String classify){
        this.set("classify", classify);
    }

    /**
     * @return  分类
     */
    public java.lang.String getClassify(){
        return this.get("classify");
    }
        

    /**
     * @param subject 主题
     */

    public void setSubject(java.lang.String subject){
        this.set("subject", subject);
    }

    /**
     * @return  主题
     */
    public java.lang.String getSubject(){
        return this.get("subject");
    }
        

    /**
     * @param range 范围
     */

    public void setRange(java.lang.String range){
        this.set("range_", range);
    }

    /**
     * @return  范围
     */
    public java.lang.String getRange(){
        return this.get("range_");
    }
        

    /**
     * @param publicationName 出版名
     */

    public void setPublicationName(java.lang.String publicationName){
        this.set("publication_name", publicationName);
    }

    /**
     * @return  出版名
     */
    public java.lang.String getPublicationName(){
        return this.get("publication_name");
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
     * @param update 更新
     */

    public void setUpdate(java.lang.String update){
        this.set("update_", update);
    }

    /**
     * @return  更新
     */
    public java.lang.String getUpdate(){
        return this.get("update_");
    }
        

    /**
     * @param includeNum 包含数量
     */

    public void setIncludeNum(java.lang.String includeNum){
        this.set("include_num", includeNum);
    }

    /**
     * @return  包含数量
     */
    public java.lang.String getIncludeNum(){
        return this.get("include_num");
    }
        

    /**
     * @param db db
     */

    public void setDb(java.lang.String db){
        this.set("db", db);
    }

    /**
     * @return  db
     */
    public java.lang.String getDb(){
        return this.get("db");
    }
        

    /**
     * @param importantDate 重要日期
     */

    public void setImportantDate(java.lang.String importantDate){
        this.set("important_date", importantDate);
    }

    /**
     * @return  重要日期
     */
    public java.lang.String getImportantDate(){
        return this.get("important_date");
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
        //会议名, 类型 java.lang.String
        value = map.get("conference_name");
        if(value != null){
            this.set("conference_name", value.toString().trim());
        }
        //组织者, 类型 java.lang.String
        value = map.get("organizer");
        if(value != null){
            this.set("organizer", value.toString().trim());
        }
        //语言, 类型 java.lang.String
        value = map.get("language");
        if(value != null){
            this.set("language", value.toString().trim());
        }
        //资格, 类型 java.lang.String
        value = map.get("eligibility");
        if(value != null){
            this.set("eligibility", value.toString().trim());
        }
        //起始日期, 类型 java.lang.String
        value = map.get("start_date");
        if(value != null){
            this.set("start_date", value.toString().trim());
        }
        //截止日期, 类型 java.lang.String
        value = map.get("end_date");
        if(value != null){
            this.set("end_date", value.toString().trim());
        }
        //地点, 类型 java.lang.String
        value = map.get("location");
        if(value != null){
            this.set("location", value.toString().trim());
        }
        //国家地区, 类型 java.lang.String
        value = map.get("country_region");
        if(value != null){
            this.set("country_region", value.toString().trim());
        }
        //最新手稿, 类型 java.lang.String
        value = map.get("manuscript_last_day");
        if(value != null){
            this.set("manuscript_last_day", value.toString().trim());
        }
        //最新摘要, 类型 java.lang.String
        value = map.get("abstract_last_day");
        if(value != null){
            this.set("abstract_last_day", value.toString().trim());
        }
        //其他联系人, 类型 java.lang.String
        value = map.get("other_contacts");
        if(value != null){
            this.set("other_contacts", value.toString().trim());
        }
        //大主题, 类型 java.lang.String
        value = map.get("broad_theme");
        if(value != null){
            this.set("broad_theme", value.toString().trim());
        }
        //分类, 类型 java.lang.String
        value = map.get("classify");
        if(value != null){
            this.set("classify", value.toString().trim());
        }
        //主题, 类型 java.lang.String
        value = map.get("subject");
        if(value != null){
            this.set("subject", value.toString().trim());
        }
        //范围, 类型 java.lang.String
        value = map.get("range_");
        if(value != null){
            this.set("range_", value.toString().trim());
        }
        //出版名, 类型 java.lang.String
        value = map.get("publication_name");
        if(value != null){
            this.set("publication_name", value.toString().trim());
        }
        //url地址, 类型 java.lang.String
        value = map.get("url");
        if(value != null){
            this.set("url", value.toString().trim());
        }
        //更新, 类型 java.lang.String
        value = map.get("update_");
        if(value != null){
            this.set("update_", value.toString().trim());
        }
        //包含数量, 类型 java.lang.String
        value = map.get("include_num");
        if(value != null){
            this.set("include_num", value.toString().trim());
        }
        //db, 类型 java.lang.String
        value = map.get("db");
        if(value != null){
            this.set("db", value.toString().trim());
        }
        //重要日期, 类型 java.lang.String
        value = map.get("important_date");
        if(value != null){
            this.set("important_date", value.toString().trim());
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
        titleMap.put("会议名", "conference_name");
        titleMap.put("conference_name", "conference_name");

        titleMap.put("组织者", "organizer");
        titleMap.put("organizer", "organizer");

        titleMap.put("语言", "language");
        titleMap.put("language", "language");

        titleMap.put("资格", "eligibility");
        titleMap.put("eligibility", "eligibility");

        titleMap.put("起始日期", "start_date");
        titleMap.put("start_date", "start_date");

        titleMap.put("截止日期", "end_date");
        titleMap.put("end_date", "end_date");

        titleMap.put("地点", "location");
        titleMap.put("location", "location");

        titleMap.put("国家地区", "country_region");
        titleMap.put("country_region", "country_region");

        titleMap.put("最新手稿", "manuscript_last_day");
        titleMap.put("manuscript_last_day", "manuscript_last_day");

        titleMap.put("最新摘要", "abstract_last_day");
        titleMap.put("abstract_last_day", "abstract_last_day");

        titleMap.put("其他联系人", "other_contacts");
        titleMap.put("other_contacts", "other_contacts");

        titleMap.put("大主题", "broad_theme");
        titleMap.put("broad_theme", "broad_theme");

        titleMap.put("分类", "classify");
        titleMap.put("classify", "classify");

        titleMap.put("主题", "subject");
        titleMap.put("subject", "subject");

        titleMap.put("范围", "range_");
        titleMap.put("range_", "range_");

        titleMap.put("出版名", "publication_name");
        titleMap.put("publication_name", "publication_name");

        titleMap.put("url地址", "url");
        titleMap.put("url", "url");

        titleMap.put("更新", "update_");
        titleMap.put("update_", "update_");

        titleMap.put("包含数量", "include_num");
        titleMap.put("include_num", "include_num");

        titleMap.put("db", "db");
        titleMap.put("重要日期", "important_date");
        titleMap.put("important_date", "important_date");

        titleMap.put("创建时间", "created_at");
        titleMap.put("created_at", "created_at");

        return titleMap;
    }

}
