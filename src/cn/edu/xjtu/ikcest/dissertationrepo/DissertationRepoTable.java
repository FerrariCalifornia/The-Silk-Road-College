/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.dissertationrepo  
 * @Title: DissertationRepoTable.java  
 * @Description: dissertation_repo表定义类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.dissertationrepo;

import com.jfinal.plugin.sqlbuilder.column.Column;
import com.jfinal.plugin.sqlbuilder.table.TableDefine;

/**  
 * @ClassName: DissertationRepoTable  
 * @Description: dissertation_repo表定义类  
 * @since V1.0.0  
 */
public class DissertationRepoTable extends TableDefine<DissertationRepo>{

    /**
     * 表名
     */
    public static final String TABLE_NAME = "dissertation_repo";
    
    /**
     * 静态对象
     */
    private static final DissertationRepoTable me = new DissertationRepoTable();
    
    /**
     * 可以多次复用，没有as信息
     */
    public static final DissertationRepoTable me(){
        return me;
    }

    /**
     * as，生成一个新的表定义对象（包含as信息）
     */
    public static final DissertationRepoTable as(String asName){
        return new DissertationRepoTable(asName);
    }
    
    /**
     * id
     */
    public final Column<DissertationRepo, java.lang.String> ID = createColumn("id", this);
    
    /**
     * 标题
     */
    public final Column<DissertationRepo, java.lang.String> TITLE = createColumn("title", this);
    
    /**
     * 标题拼写
     */
    public final Column<DissertationRepo, java.lang.String> TITLE_SPELLING = createColumn("title_spelling", this);
    
    /**
     * 名称
     */
    public final Column<DissertationRepo, java.lang.String> NAME = createColumn("name", this);
    
    /**
     * 名称拼写
     */
    public final Column<DissertationRepo, java.lang.String> NAME_SPELLING = createColumn("name_spelling", this);
    
    /**
     * 学生id
     */
    public final Column<DissertationRepo, java.lang.String> STUDENT_ID = createColumn("student_id", this);
    
    /**
     * 大学
     */
    public final Column<DissertationRepo, java.lang.String> UNIVERSITY = createColumn("university", this);
    
    /**
     * 学校
     */
    public final Column<DissertationRepo, java.lang.String> SCHOOL = createColumn("school", this);
    
    /**
     * 学科
     */
    public final Column<DissertationRepo, java.lang.String> DISCIPLINE = createColumn("discipline", this);
    
    /**
     * 专业
     */
    public final Column<DissertationRepo, java.lang.String> MAJOR = createColumn("major", this);
    
    /**
     * 学位
     */
    public final Column<DissertationRepo, java.lang.String> DEGREE = createColumn("degree", this);
    
    /**
     * 学位类型
     */
    public final Column<DissertationRepo, java.lang.String> DEGREE_TYPE = createColumn("degree_type", this);
    
    /**
     * oral_defense_date
     */
    public final Column<DissertationRepo, java.sql.Timestamp> ORAL_DEFENSE_DATE = createColumn("oral_defense_date", this);
    
    /**
     * 密码级别
     */
    public final Column<DissertationRepo, java.lang.String> SECRET_LEVEL = createColumn("secret_level", this);
    
    /**
     * 提交日期
     */
    public final Column<DissertationRepo, java.lang.String> SUBMITTING_DATE = createColumn("submitting_date", this);
    
    /**
     * 外文名
     */
    public final Column<DissertationRepo, java.lang.String> FOREIGN_TITLE = createColumn("foreign_title", this);
    
    /**
     * 导师名
     */
    public final Column<DissertationRepo, java.lang.String> MENTOR_NAME = createColumn("mentor_name", this);
    
    /**
     * 导师工作单位
     */
    public final Column<DissertationRepo, java.lang.String> MENTOR_WORK_UNIT = createColumn("mentor_work_unit", this);
    
    /**
     * 中文关键字
     */
    public final Column<DissertationRepo, java.lang.String> CHINESE_KEYWORDS = createColumn("chinese_keywords", this);
    
    /**
     * 英文关键字
     */
    public final Column<DissertationRepo, java.lang.String> ENGLISH_KEYWORDS = createColumn("english_keywords", this);
    
    /**
     * 总页数
     */
    public final Column<DissertationRepo, java.lang.Integer> TOTAL_PAGES = createColumn("total_pages", this);
    
    /**
     * 参考文献数目
     */
    public final Column<DissertationRepo, java.lang.Integer> NUM_OF_BIBLIOGRAPHY = createColumn("num_of_bibliography", this);
    
    /**
     * 中文摘要
     */
    public final Column<DissertationRepo, java.lang.String> CHINESE_ABSTRACT = createColumn("chinese_abstract", this);
    
    /**
     * 英文摘要
     */
    public final Column<DissertationRepo, java.lang.String> ENGLISH_ABSTRACT = createColumn("english_abstract", this);
    
    /**
     * 国籍
     */
    public final Column<DissertationRepo, java.lang.String> NATIONALITY = createColumn("nationality", this);
    
    /**
     * 学科代码
     */
    public final Column<DissertationRepo, java.lang.String> DISCIPLINE_CODE = createColumn("discipline_code", this);
    
    /**
     * 最后更新
     */
    public final Column<DissertationRepo, java.sql.Timestamp> LAST_UPDATED = createColumn("last_updated", this);
    
    /**
     * 图书编目号码
     */
    public final Column<DissertationRepo, java.lang.String> CALL_NUM = createColumn("call_num", this);
    
    /**
     * 全文
     */
    public final Column<DissertationRepo, java.lang.String> FULL_TEXT = createColumn("full_text", this);
    

    public DissertationRepoTable() {
        super(null);
    }

    public DissertationRepoTable(String asName) {
        super(asName);
    }

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }
}
