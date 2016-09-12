/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.urconference  
 * @Title: URConferenceBase.java  
 * @Description: u_r_conference基本信息类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.urconference;

import java.util.Map;
import java.util.HashMap;

import com.wellbole.core.model.SqlBuilderBaseModel;

/**  
 * @ClassName: URConferenceBase  
 * @Description: u_r_conference基本信息类  
 * @since V1.0.0  
 */
 @SuppressWarnings("serial")
abstract class URConferenceBase<K,M extends URConferenceBase<K,M>> extends SqlBuilderBaseModel<K,M>{
    public static final String TABLE_NAME = "u_r_conference";

    public URConferenceBase() {
        super(TABLE_NAME);
    }
    
    @Override
    public String getPrimaryKey(){
        return "name";
    }

    /**
     * @param alias 别名
     */

    public void setAlias(java.lang.String alias){
        this.set("alias", alias);
    }

    /**
     * @return  别名
     */
    public java.lang.String getAlias(){
        return this.get("alias");
    }
        

    /**
     * @param date 日期
     */

    public void setDate(java.sql.Timestamp date){
        this.set("date", date);
    }
    /**
     * @param date 日期
     */
    public void setDate(java.util.Date date){
     
        this.setDate(new java.sql.Timestamp(date.getTime()));
    }

    /**
     * @return  日期
     */
    public java.sql.Timestamp getDate(){
        return this.get("date");
    }
        

    /**
     * @param location 地点
     */

    public void setLocation(java.lang.String location){
        this.set("location", location);
    }

    /**
     * @return  地点
     */
    public java.lang.String getLocation(){
        return this.get("location");
    }
        

    /**
     * @param code 代码
     */

    public void setCode(java.lang.String code){
        this.set("code", code);
    }

    /**
     * @return  代码
     */
    public java.lang.String getCode(){
        return this.get("code");
    }
        

    /**
     * @Title: safeSetAttrs  
     * @Description: 安全地依据传入的Map来设定属性值（先转换成字符串，再依据转换成属性对应的类型）,excel导入用  
     * @param map 属性名－属性值
     * @since V1.0.0
     */
    public void safeSetAttrs(Map<String, Object> map){
        Object value = null;
        //名称, 类型 java.lang.String
        value = map.get("name");
        if(value != null){
            this.set("name", value.toString().trim());
        }
        //别名, 类型 java.lang.String
        value = map.get("alias");
        if(value != null){
            this.set("alias", value.toString().trim());
        }
        //日期, 类型 java.sql.Timestamp
        value = map.get("date");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.sql.Timestamp.class, value.toString().trim());
        }
        if(value != null){
            this.set("date", value);
        }
        //地点, 类型 java.lang.String
        value = map.get("location");
        if(value != null){
            this.set("location", value.toString().trim());
        }
        //代码, 类型 java.lang.String
        value = map.get("code");
        if(value != null){
            this.set("code", value.toString().trim());
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
        titleMap.put("名称", "name");
        titleMap.put("别名", "alias");
        titleMap.put("日期", "date");
        titleMap.put("地点", "location");
        titleMap.put("代码", "code");
        return titleMap;
    }

}
