/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.urwrittenby  
 * @Title: URWrittenByTable.java  
 * @Description: u_r_written_by表定义类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.urwrittenby;

import com.jfinal.plugin.sqlbuilder.column.Column;
import com.jfinal.plugin.sqlbuilder.table.TableDefine;

/**  
 * @ClassName: URWrittenByTable  
 * @Description: u_r_written_by表定义类  
 * @since V1.0.0  
 */
public class URWrittenByTable extends TableDefine<URWrittenBy>{

    /**
     * 表名
     */
    public static final String TABLE_NAME = "u_r_written_by";
    
    /**
     * 静态对象
     */
    private static final URWrittenByTable me = new URWrittenByTable();
    
    /**
     * 可以多次复用，没有as信息
     */
    public static final URWrittenByTable me(){
        return me;
    }

    /**
     * as，生成一个新的表定义对象（包含as信息）
     */
    public static final URWrittenByTable as(String asName){
        return new URWrittenByTable(asName);
    }
    
    /**
     * 文献id
     */
    public final Column<URWrittenBy, java.lang.String> LITERATURE_ID = createColumn("literature_id", this);
    
    /**
     * 作者id
     */
    public final Column<URWrittenBy, java.lang.String> AUTHOR_ID = createColumn("author_id", this);
    

    public URWrittenByTable() {
        super(null);
    }

    public URWrittenByTable(String asName) {
        super(asName);
    }

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }
}
