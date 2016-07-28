/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.sample.app.music  
 * @Title: MusicBase.java  
 * @Description: music list基本信息类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.sample.app.music;

import java.util.Map;
import java.util.HashMap;

import com.wellbole.core.model.SqlBuilderBaseModel;

/**  
 * @ClassName: MusicBase  
 * @Description: music list基本信息类  
 * @since V1.0.0  
 */
 @SuppressWarnings("serial")
abstract class MusicBase<K,M extends MusicBase<K,M>> extends SqlBuilderBaseModel<K,M>{
    public static final String TABLE_NAME = "app_music";

    public MusicBase() {
        super(TABLE_NAME);
    }
    
    @Override
    public String getPrimaryKey(){
        return "id";
    }

    /**
     * @param name name
     */

    public void setName(java.lang.String name){
        this.set("name", name);
    }

    /**
     * @return  name
     */
    public java.lang.String getName(){
        return this.get("name");
    }
        

    /**
     * @param author Author
     */

    public void setAuthor(java.lang.String author){
        this.set("author", author);
    }

    /**
     * @return  Author
     */
    public java.lang.String getAuthor(){
        return this.get("author");
    }
        

    /**
     * @param num 
     */

    public void setNum(java.lang.Long num){
        this.set("num", num);
    }

    /**
     * @return  
     */
    public java.lang.Long getNum(){
        return this.get("num");
    }
        

    /**
     * @Title: safeSetAttrs  
     * @Description: 安全地依据传入的Map来设定属性值（先转换成字符串，再依据转换成属性对应的类型）,excel导入用  
     * @param map 属性名－属性值
     * @since V1.0.0
     */
    public void safeSetAttrs(Map<String, Object> map){
        Object value = null;
        //name, 类型 java.lang.String
        value = map.get("name");
        if(value != null){
            this.set("name", value.toString().trim());
        }
        //Author, 类型 java.lang.String
        value = map.get("author");
        if(value != null){
            this.set("author", value.toString().trim());
        }
        //, 类型 java.lang.Long
        value = map.get("num");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.lang.Long.class, value.toString().trim());
        }
        if(value != null){
            this.set("num", value);
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
        titleMap.put("name", "name");
        titleMap.put("Author", "author");
        return titleMap;
    }

}
