/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.sample.app.school  
 * @Title: SchoolBase.java  
 * @Description: school基本信息类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.sample.app.school;

import java.util.Map;
import java.util.HashMap;

import com.wellbole.core.model.SqlBuilderBaseModel;

/**  
 * @ClassName: SchoolBase  
 * @Description: school基本信息类  
 * @since V1.0.0  
 */
 @SuppressWarnings("serial")
abstract class SchoolBase<K,M extends SchoolBase<K,M>> extends SqlBuilderBaseModel<K,M>{
    public static final String TABLE_NAME = "app_school";

    public SchoolBase() {
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
        return titleMap;
    }

}
