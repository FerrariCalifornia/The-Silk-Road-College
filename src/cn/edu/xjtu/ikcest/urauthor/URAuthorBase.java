/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.urauthor  
 * @Title: URAuthorBase.java  
 * @Description: u_r_author基本信息类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.urauthor;

import java.util.Map;
import java.util.HashMap;

import com.wellbole.core.model.SqlBuilderBaseModel;

/**  
 * @ClassName: URAuthorBase  
 * @Description: u_r_author基本信息类  
 * @since V1.0.0  
 */
 @SuppressWarnings("serial")
abstract class URAuthorBase<K,M extends URAuthorBase<K,M>> extends SqlBuilderBaseModel<K,M>{
    public static final String TABLE_NAME = "u_r_author";

    public URAuthorBase() {
        super(TABLE_NAME);
    }
    
    @Override
    public String getPrimaryKey(){
        return "id";
    }

    /**
     * @param name 名称
     */

    public void setName(java.lang.String name){
        this.set("name", name);
    }

    /**
     * @return  名称
     */
    public java.lang.String getName(){
        return this.get("name");
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
     * @param affiliation 隶属机构
     */

    public void setAffiliation(java.lang.String affiliation){
        this.set("affiliation", affiliation);
    }

    /**
     * @return  隶属机构
     */
    public java.lang.String getAffiliation(){
        return this.get("affiliation");
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
        //隶属机构, 类型 java.lang.String
        value = map.get("affiliation");
        if(value != null){
            this.set("affiliation", value.toString().trim());
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
        titleMap.put("隶属机构", "affiliation");
        return titleMap;
    }

}
