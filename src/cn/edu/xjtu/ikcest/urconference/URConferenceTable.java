/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.urconference  
 * @Title: URConferenceTable.java  
 * @Description: u_r_conference表定义类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.urconference;

import com.jfinal.plugin.sqlbuilder.column.Column;
import com.jfinal.plugin.sqlbuilder.table.TableDefine;

/**  
 * @ClassName: URConferenceTable  
 * @Description: u_r_conference表定义类  
 * @since V1.0.0  
 */
public class URConferenceTable extends TableDefine<URConference>{

    /**
     * 表名
     */
    public static final String TABLE_NAME = "u_r_conference";
    
    /**
     * 静态对象
     */
    private static final URConferenceTable me = new URConferenceTable();
    
    /**
     * 可以多次复用，没有as信息
     */
    public static final URConferenceTable me(){
        return me;
    }

    /**
     * as，生成一个新的表定义对象（包含as信息）
     */
    public static final URConferenceTable as(String asName){
        return new URConferenceTable(asName);
    }
    
    /**
     * 名称
     */
    public final Column<URConference, java.lang.String> NAME = createColumn("name", this);
    
    /**
     * 别名
     */
    public final Column<URConference, java.lang.String> ALIAS = createColumn("alias", this);
    
    /**
     * 日期
     */
    public final Column<URConference, java.sql.Timestamp> DATE = createColumn("date", this);
    
    /**
     * 地点
     */
    public final Column<URConference, java.lang.String> LOCATION = createColumn("location", this);
    
    /**
     * 代码
     */
    public final Column<URConference, java.lang.String> CODE = createColumn("code", this);
    

    public URConferenceTable() {
        super(null);
    }

    public URConferenceTable(String asName) {
        super(asName);
    }

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }
}
