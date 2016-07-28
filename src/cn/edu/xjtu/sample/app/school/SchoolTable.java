/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.sample.app.school  
 * @Title: SchoolTable.java  
 * @Description: school表定义类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.sample.app.school;

import com.jfinal.plugin.sqlbuilder.column.Column;
import com.jfinal.plugin.sqlbuilder.table.TableDefine;

/**  
 * @ClassName: SchoolTable  
 * @Description: school表定义类  
 * @since V1.0.0  
 */
public class SchoolTable extends TableDefine<School>{

    /**
     * 表名
     */
    public static final String TABLE_NAME = "app_school";
    
    /**
     * 静态对象
     */
    private static final SchoolTable me = new SchoolTable();
    
    /**
     * 可以多次复用，没有as信息
     */
    public static final SchoolTable me(){
        return me;
    }

    /**
     * as，生成一个新的表定义对象（包含as信息）
     */
    public static final SchoolTable as(String asName){
        return new SchoolTable(asName);
    }
    
    /**
     * id

     */
    public final Column<School, java.lang.Long> ID = createColumn("id", this);
    
    /**
     * name
     */
    public final Column<School, java.lang.String> NAME = createColumn("name", this);
    

    public SchoolTable() {
        super(null);
    }

    public SchoolTable(String asName) {
        super(asName);
    }

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }
}
