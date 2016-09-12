/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.urauthor  
 * @Title: URAuthorTable.java  
 * @Description: u_r_author表定义类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.urauthor;

import com.jfinal.plugin.sqlbuilder.column.Column;
import com.jfinal.plugin.sqlbuilder.table.TableDefine;

/**  
 * @ClassName: URAuthorTable  
 * @Description: u_r_author表定义类  
 * @since V1.0.0  
 */
public class URAuthorTable extends TableDefine<URAuthor>{

    /**
     * 表名
     */
    public static final String TABLE_NAME = "u_r_author";
    
    /**
     * 静态对象
     */
    private static final URAuthorTable me = new URAuthorTable();
    
    /**
     * 可以多次复用，没有as信息
     */
    public static final URAuthorTable me(){
        return me;
    }

    /**
     * as，生成一个新的表定义对象（包含as信息）
     */
    public static final URAuthorTable as(String asName){
        return new URAuthorTable(asName);
    }
    
    /**
     * id
     */
    public final Column<URAuthor, java.lang.String> ID = createColumn("id", this);
    
    /**
     * 名称
     */
    public final Column<URAuthor, java.lang.String> NAME = createColumn("name", this);
    
    /**
     * 别名
     */
    public final Column<URAuthor, java.lang.String> ALIAS = createColumn("alias", this);
    
    /**
     * 隶属机构
     */
    public final Column<URAuthor, java.lang.String> AFFILIATION = createColumn("affiliation", this);
    

    public URAuthorTable() {
        super(null);
    }

    public URAuthorTable(String asName) {
        super(asName);
    }

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }
}
