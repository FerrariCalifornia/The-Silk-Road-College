/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.dissertationrepo  
 * @Title: DissertationRepoBase.java  
 * @Description: dissertation_repo基本信息类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.dissertationrepo;

import java.util.Map;
import java.util.HashMap;

import com.wellbole.core.model.SqlBuilderBaseModel;

/**  
 * @ClassName: DissertationRepoBase  
 * @Description: dissertation_repo基本信息类  
 * @since V1.0.0  
 */
 @SuppressWarnings("serial")
abstract class DissertationRepoBase<K,M extends DissertationRepoBase<K,M>> extends SqlBuilderBaseModel<K,M>{
    public static final String TABLE_NAME = "dissertation_repo";

    public DissertationRepoBase() {
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
     * @param titleSpelling 标题拼写
     */

    public void setTitleSpelling(java.lang.String titleSpelling){
        this.set("title_spelling", titleSpelling);
    }

    /**
     * @return  标题拼写
     */
    public java.lang.String getTitleSpelling(){
        return this.get("title_spelling");
    }
        

    /**
     * @param name 名称
     */

    public void setName(java.lang.String name){
        this.set("name", name);
    }

    /**
     * @return  名称
     */
    public java.lang.String getName(){
        return this.get("name");
    }
        

    /**
     * @param nameSpelling 名称拼写
     */

    public void setNameSpelling(java.lang.String nameSpelling){
        this.set("name_spelling", nameSpelling);
    }

    /**
     * @return  名称拼写
     */
    public java.lang.String getNameSpelling(){
        return this.get("name_spelling");
    }
        

    /**
     * @param studentId 学生id
     */

    public void setStudentId(java.lang.String studentId){
        this.set("student_id", studentId);
    }

    /**
     * @return  学生id
     */
    public java.lang.String getStudentId(){
        return this.get("student_id");
    }
        

    /**
     * @param university 大学
     */

    public void setUniversity(java.lang.String university){
        this.set("university", university);
    }

    /**
     * @return  大学
     */
    public java.lang.String getUniversity(){
        return this.get("university");
    }
        

    /**
     * @param school 学校
     */

    public void setSchool(java.lang.String school){
        this.set("school", school);
    }

    /**
     * @return  学校
     */
    public java.lang.String getSchool(){
        return this.get("school");
    }
        

    /**
     * @param discipline 学科
     */

    public void setDiscipline(java.lang.String discipline){
        this.set("discipline", discipline);
    }

    /**
     * @return  学科
     */
    public java.lang.String getDiscipline(){
        return this.get("discipline");
    }
        

    /**
     * @param major 专业
     */

    public void setMajor(java.lang.String major){
        this.set("major", major);
    }

    /**
     * @return  专业
     */
    public java.lang.String getMajor(){
        return this.get("major");
    }
        

    /**
     * @param degree 学位
     */

    public void setDegree(java.lang.String degree){
        this.set("degree", degree);
    }

    /**
     * @return  学位
     */
    public java.lang.String getDegree(){
        return this.get("degree");
    }
        

    /**
     * @param degreeType 学位类型
     */

    public void setDegreeType(java.lang.String degreeType){
        this.set("degree_type", degreeType);
    }

    /**
     * @return  学位类型
     */
    public java.lang.String getDegreeType(){
        return this.get("degree_type");
    }
        

    /**
     * @param oralDefenseDate oral_defense_date
     */

    public void setOralDefenseDate(java.sql.Timestamp oralDefenseDate){
        this.set("oral_defense_date", oralDefenseDate);
    }
    /**
     * @param oralDefenseDate oral_defense_date
     */
    public void setOralDefenseDate(java.util.Date oralDefenseDate){
     
        this.setOralDefenseDate(new java.sql.Timestamp(oralDefenseDate.getTime()));
    }

    /**
     * @return  oral_defense_date
     */
    public java.sql.Timestamp getOralDefenseDate(){
        return this.get("oral_defense_date");
    }
        

    /**
     * @param secretLevel 密码级别
     */

    public void setSecretLevel(java.lang.String secretLevel){
        this.set("secret_level", secretLevel);
    }

    /**
     * @return  密码级别
     */
    public java.lang.String getSecretLevel(){
        return this.get("secret_level");
    }
        

    /**
     * @param submittingDate 提交日期
     */

    public void setSubmittingDate(java.lang.String submittingDate){
        this.set("submitting_date", submittingDate);
    }

    /**
     * @return  提交日期
     */
    public java.lang.String getSubmittingDate(){
        return this.get("submitting_date");
    }
        

    /**
     * @param foreignTitle 外文名
     */

    public void setForeignTitle(java.lang.String foreignTitle){
        this.set("foreign_title", foreignTitle);
    }

    /**
     * @return  外文名
     */
    public java.lang.String getForeignTitle(){
        return this.get("foreign_title");
    }
        

    /**
     * @param mentorName 导师名
     */

    public void setMentorName(java.lang.String mentorName){
        this.set("mentor_name", mentorName);
    }

    /**
     * @return  导师名
     */
    public java.lang.String getMentorName(){
        return this.get("mentor_name");
    }
        

    /**
     * @param mentorWorkUnit 导师工作单位
     */

    public void setMentorWorkUnit(java.lang.String mentorWorkUnit){
        this.set("mentor_work_unit", mentorWorkUnit);
    }

    /**
     * @return  导师工作单位
     */
    public java.lang.String getMentorWorkUnit(){
        return this.get("mentor_work_unit");
    }
        

    /**
     * @param chineseKeywords 中文关键字
     */

    public void setChineseKeywords(java.lang.String chineseKeywords){
        this.set("chinese_keywords", chineseKeywords);
    }

    /**
     * @return  中文关键字
     */
    public java.lang.String getChineseKeywords(){
        return this.get("chinese_keywords");
    }
        

    /**
     * @param englishKeywords 英文关键字
     */

    public void setEnglishKeywords(java.lang.String englishKeywords){
        this.set("english_keywords", englishKeywords);
    }

    /**
     * @return  英文关键字
     */
    public java.lang.String getEnglishKeywords(){
        return this.get("english_keywords");
    }
        

    /**
     * @param totalPages 总页数
     */

    public void setTotalPages(java.lang.Integer totalPages){
        this.set("total_pages", totalPages);
    }

    /**
     * @return  总页数
     */
    public java.lang.Integer getTotalPages(){
        return this.get("total_pages");
    }
        

    /**
     * @param numOfBibliography 参考文献数目
     */

    public void setNumOfBibliography(java.lang.Integer numOfBibliography){
        this.set("num_of_bibliography", numOfBibliography);
    }

    /**
     * @return  参考文献数目
     */
    public java.lang.Integer getNumOfBibliography(){
        return this.get("num_of_bibliography");
    }
        

    /**
     * @param chineseAbstract 中文摘要
     */

    public void setChineseAbstract(java.lang.String chineseAbstract){
        this.set("chinese_abstract", chineseAbstract);
    }

    /**
     * @return  中文摘要
     */
    public java.lang.String getChineseAbstract(){
        return this.get("chinese_abstract");
    }
        

    /**
     * @param englishAbstract 英文摘要
     */

    public void setEnglishAbstract(java.lang.String englishAbstract){
        this.set("english_abstract", englishAbstract);
    }

    /**
     * @return  英文摘要
     */
    public java.lang.String getEnglishAbstract(){
        return this.get("english_abstract");
    }
        

    /**
     * @param nationality 国籍
     */

    public void setNationality(java.lang.String nationality){
        this.set("nationality", nationality);
    }

    /**
     * @return  国籍
     */
    public java.lang.String getNationality(){
        return this.get("nationality");
    }
        

    /**
     * @param disciplineCode 学科代码
     */

    public void setDisciplineCode(java.lang.String disciplineCode){
        this.set("discipline_code", disciplineCode);
    }

    /**
     * @return  学科代码
     */
    public java.lang.String getDisciplineCode(){
        return this.get("discipline_code");
    }
        

    /**
     * @param lastUpdated 最后更新
     */

    public void setLastUpdated(java.sql.Timestamp lastUpdated){
        this.set("last_updated", lastUpdated);
    }
    /**
     * @param lastUpdated 最后更新
     */
    public void setLastUpdated(java.util.Date lastUpdated){
     
        this.setLastUpdated(new java.sql.Timestamp(lastUpdated.getTime()));
    }

    /**
     * @return  最后更新
     */
    public java.sql.Timestamp getLastUpdated(){
        return this.get("last_updated");
    }
        

    /**
     * @param callNum 图书编目号码
     */

    public void setCallNum(java.lang.String callNum){
        this.set("call_num", callNum);
    }

    /**
     * @return  图书编目号码
     */
    public java.lang.String getCallNum(){
        return this.get("call_num");
    }
        

    /**
     * @param fullText 全文
     */

    public void setFullText(java.lang.String fullText){
        this.set("full_text", fullText);
    }

    /**
     * @return  全文
     */
    public java.lang.String getFullText(){
        return this.get("full_text");
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
        //标题拼写, 类型 java.lang.String
        value = map.get("title_spelling");
        if(value != null){
            this.set("title_spelling", value.toString().trim());
        }
        //名称, 类型 java.lang.String
        value = map.get("name");
        if(value != null){
            this.set("name", value.toString().trim());
        }
        //名称拼写, 类型 java.lang.String
        value = map.get("name_spelling");
        if(value != null){
            this.set("name_spelling", value.toString().trim());
        }
        //学生id, 类型 java.lang.String
        value = map.get("student_id");
        if(value != null){
            this.set("student_id", value.toString().trim());
        }
        //大学, 类型 java.lang.String
        value = map.get("university");
        if(value != null){
            this.set("university", value.toString().trim());
        }
        //学校, 类型 java.lang.String
        value = map.get("school");
        if(value != null){
            this.set("school", value.toString().trim());
        }
        //学科, 类型 java.lang.String
        value = map.get("discipline");
        if(value != null){
            this.set("discipline", value.toString().trim());
        }
        //专业, 类型 java.lang.String
        value = map.get("major");
        if(value != null){
            this.set("major", value.toString().trim());
        }
        //学位, 类型 java.lang.String
        value = map.get("degree");
        if(value != null){
            this.set("degree", value.toString().trim());
        }
        //学位类型, 类型 java.lang.String
        value = map.get("degree_type");
        if(value != null){
            this.set("degree_type", value.toString().trim());
        }
        //oral_defense_date, 类型 java.sql.Timestamp
        value = map.get("oral_defense_date");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.sql.Timestamp.class, value.toString().trim());
        }
        if(value != null){
            this.set("oral_defense_date", value);
        }
        //密码级别, 类型 java.lang.String
        value = map.get("secret_level");
        if(value != null){
            this.set("secret_level", value.toString().trim());
        }
        //提交日期, 类型 java.lang.String
        value = map.get("submitting_date");
        if(value != null){
            this.set("submitting_date", value.toString().trim());
        }
        //外文名, 类型 java.lang.String
        value = map.get("foreign_title");
        if(value != null){
            this.set("foreign_title", value.toString().trim());
        }
        //导师名, 类型 java.lang.String
        value = map.get("mentor_name");
        if(value != null){
            this.set("mentor_name", value.toString().trim());
        }
        //导师工作单位, 类型 java.lang.String
        value = map.get("mentor_work_unit");
        if(value != null){
            this.set("mentor_work_unit", value.toString().trim());
        }
        //中文关键字, 类型 java.lang.String
        value = map.get("chinese_keywords");
        if(value != null){
            this.set("chinese_keywords", value.toString().trim());
        }
        //英文关键字, 类型 java.lang.String
        value = map.get("english_keywords");
        if(value != null){
            this.set("english_keywords", value.toString().trim());
        }
        //总页数, 类型 java.lang.Integer
        value = map.get("total_pages");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.lang.Integer.class, value.toString().trim());
        }
        if(value != null){
            this.set("total_pages", value);
        }
        //参考文献数目, 类型 java.lang.Integer
        value = map.get("num_of_bibliography");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.lang.Integer.class, value.toString().trim());
        }
        if(value != null){
            this.set("num_of_bibliography", value);
        }
        //中文摘要, 类型 java.lang.String
        value = map.get("chinese_abstract");
        if(value != null){
            this.set("chinese_abstract", value.toString().trim());
        }
        //英文摘要, 类型 java.lang.String
        value = map.get("english_abstract");
        if(value != null){
            this.set("english_abstract", value.toString().trim());
        }
        //国籍, 类型 java.lang.String
        value = map.get("nationality");
        if(value != null){
            this.set("nationality", value.toString().trim());
        }
        //学科代码, 类型 java.lang.String
        value = map.get("discipline_code");
        if(value != null){
            this.set("discipline_code", value.toString().trim());
        }
        //最后更新, 类型 java.sql.Timestamp
        value = map.get("last_updated");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.sql.Timestamp.class, value.toString().trim());
        }
        if(value != null){
            this.set("last_updated", value);
        }
        //图书编目号码, 类型 java.lang.String
        value = map.get("call_num");
        if(value != null){
            this.set("call_num", value.toString().trim());
        }
        //全文, 类型 java.lang.String
        value = map.get("full_text");
        if(value != null){
            this.set("full_text", value.toString().trim());
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
        titleMap.put("标题拼写", "title_spelling");
        titleMap.put("名称", "name");
        titleMap.put("name", "name");

        titleMap.put("名称拼写", "name_spelling");
        titleMap.put("学生id", "student_id");
        titleMap.put("大学", "university");
        titleMap.put("university", "university");

        titleMap.put("学校", "school");
        titleMap.put("学科", "discipline");
        titleMap.put("专业", "major");
        titleMap.put("学位", "degree");
        titleMap.put("degree", "degree");

        titleMap.put("学位类型", "degree_type");
        titleMap.put("oral_defense_date", "oral_defense_date");
        titleMap.put("密码级别", "secret_level");
        titleMap.put("提交日期", "submitting_date");
        titleMap.put("submitting_date", "submitting_date");

        titleMap.put("外文名", "foreign_title");
        titleMap.put("foreign_title", "foreign_title");

        titleMap.put("导师名", "mentor_name");
        titleMap.put("导师工作单位", "mentor_work_unit");
        titleMap.put("中文关键字", "chinese_keywords");
        titleMap.put("英文关键字", "english_keywords");
        titleMap.put("english_keywords", "english_keywords");

        titleMap.put("总页数", "total_pages");
        titleMap.put("参考文献数目", "num_of_bibliography");
        titleMap.put("中文摘要", "chinese_abstract");
        titleMap.put("英文摘要", "english_abstract");
        titleMap.put("english_abstract", "english_abstract");

        titleMap.put("国籍", "nationality");
        titleMap.put("学科代码", "discipline_code");
        titleMap.put("最后更新", "last_updated");
        titleMap.put("last_updated", "last_updated");

        titleMap.put("图书编目号码", "call_num");
        titleMap.put("全文", "full_text");
        titleMap.put("full_text", "full_text");

        return titleMap;
    }

}
