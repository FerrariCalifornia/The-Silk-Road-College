/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.uraffiliatedwith  
 * @Title: URAffiliatedWithTable.java  
 * @Description: u_r_affiliated_with表定义类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.uraffiliatedwith;

import com.jfinal.plugin.sqlbuilder.column.Column;
import com.jfinal.plugin.sqlbuilder.table.TableDefine;

/**  
 * @ClassName: URAffiliatedWithTable  
 * @Description: u_r_affiliated_with表定义类  
 * @since V1.0.0  
 */
public class URAffiliatedWithTable extends TableDefine<URAffiliatedWith>{

    /**
     * 表名
     */
    public static final String TABLE_NAME = "u_r_affiliated_with";
    
    /**
     * 静态对象
     */
    private static final URAffiliatedWithTable me = new URAffiliatedWithTable();
    
    /**
     * 可以多次复用，没有as信息
     */
    public static final URAffiliatedWithTable me(){
        return me;
    }

    /**
     * as，生成一个新的表定义对象（包含as信息）
     */
    public static final URAffiliatedWithTable as(String asName){
        return new URAffiliatedWithTable(asName);
    }
    
    /**
     * 作者id
     */
    public final Column<URAffiliatedWith, java.lang.String> AUTHOR_ID = createColumn("author_id", this);
    
    /**
     * 大学id
     */
    public final Column<URAffiliatedWith, java.lang.String> UNIVERSITY_ID = createColumn("university_id", this);
    

    public URAffiliatedWithTable() {
        super(null);
    }

    public URAffiliatedWithTable(String asName) {
        super(asName);
    }

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }
}
