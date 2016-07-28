/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.sample.app.music  
 * @Title: MusicTable.java  
 * @Description: music list表定义类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.sample.app.music;

import com.jfinal.plugin.sqlbuilder.column.Column;
import com.jfinal.plugin.sqlbuilder.table.TableDefine;

/**  
 * @ClassName: MusicTable  
 * @Description: music list表定义类  
 * @since V1.0.0  
 */
public class MusicTable extends TableDefine<Music>{

    /**
     * 表名
     */
    public static final String TABLE_NAME = "app_music";
    
    /**
     * 静态对象
     */
    private static final MusicTable me = new MusicTable();
    
    /**
     * 可以多次复用，没有as信息
     */
    public static final MusicTable me(){
        return me;
    }

    /**
     * as，生成一个新的表定义对象（包含as信息）
     */
    public static final MusicTable as(String asName){
        return new MusicTable(asName);
    }
    
    /**
     * id
     */
    public final Column<Music, java.lang.Long> ID = createColumn("id", this);
    
    /**
     * name
     */
    public final Column<Music, java.lang.String> NAME = createColumn("name", this);
    
    /**
     * Author
     */
    public final Column<Music, java.lang.String> AUTHOR = createColumn("author", this);
    
    /**
     * 
     */
    public final Column<Music, java.lang.Long> NUM = createColumn("num", this);
    

    public MusicTable() {
        super(null);
    }

    public MusicTable(String asName) {
        super(asName);
    }

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }
}
