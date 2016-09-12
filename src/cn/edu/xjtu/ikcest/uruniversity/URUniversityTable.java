/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.uruniversity  
 * @Title: URUniversityTable.java  
 * @Description: u_r_university表定义类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.uruniversity;

import com.jfinal.plugin.sqlbuilder.column.Column;
import com.jfinal.plugin.sqlbuilder.table.TableDefine;

/**  
 * @ClassName: URUniversityTable  
 * @Description: u_r_university表定义类  
 * @since V1.0.0  
 */
public class URUniversityTable extends TableDefine<URUniversity>{

    /**
     * 表名
     */
    public static final String TABLE_NAME = "u_r_university";
    
    /**
     * 静态对象
     */
    private static final URUniversityTable me = new URUniversityTable();
    
    /**
     * 可以多次复用，没有as信息
     */
    public static final URUniversityTable me(){
        return me;
    }

    /**
     * as，生成一个新的表定义对象（包含as信息）
     */
    public static final URUniversityTable as(String asName){
        return new URUniversityTable(asName);
    }
    
    /**
     * id
     */
    public final Column<URUniversity, java.lang.String> ID = createColumn("id", this);
    
    /**
     * 名称
     */
    public final Column<URUniversity, java.lang.String> NAME = createColumn("name", this);
    
    /**
     * 别名
     */
    public final Column<URUniversity, java.lang.String> ALIAS = createColumn("alias", this);
    

    public URUniversityTable() {
        super(null);
    }

    public URUniversityTable(String asName) {
        super(asName);
    }

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }
}
