/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.uraffiliatedwith  
 * @Title: URAffiliatedWithBase.java  
 * @Description: u_r_affiliated_with基本信息类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.uraffiliatedwith;

import java.util.Map;
import java.util.HashMap;

import com.wellbole.core.model.SqlBuilderBaseModel;

/**  
 * @ClassName: URAffiliatedWithBase  
 * @Description: u_r_affiliated_with基本信息类  
 * @since V1.0.0  
 */
 @SuppressWarnings("serial")
abstract class URAffiliatedWithBase<K,M extends URAffiliatedWithBase<K,M>> extends SqlBuilderBaseModel<K,M>{
    public static final String TABLE_NAME = "u_r_affiliated_with";

    public URAffiliatedWithBase() {
        super(TABLE_NAME);
    }
    
    @Override
    public String getPrimaryKey(){
        return "author_id,university_id";
    }

    /**
     * @param authorId 作者id
     */

    public void setAuthorId(java.lang.String authorId){
        this.set("author_id", authorId);
    }

    /**
     * @return  作者id
     */
    public java.lang.String getAuthorId(){
        return this.get("author_id");
    }
        

    /**
     * @param universityId 大学id
     */

    public void setUniversityId(java.lang.String universityId){
        this.set("university_id", universityId);
    }

    /**
     * @return  大学id
     */
    public java.lang.String getUniversityId(){
        return this.get("university_id");
    }
        

    /**
     * @Title: safeSetAttrs  
     * @Description: 安全地依据传入的Map来设定属性值（先转换成字符串，再依据转换成属性对应的类型）,excel导入用  
     * @param map 属性名－属性值
     * @since V1.0.0
     */
    public void safeSetAttrs(Map<String, Object> map){
        Object value = null;
        //作者id, 类型 java.lang.String
        value = map.get("author_id");
        if(value != null){
            this.set("author_id", value.toString().trim());
        }
        //大学id, 类型 java.lang.String
        value = map.get("university_id");
        if(value != null){
            this.set("university_id", value.toString().trim());
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
        titleMap.put("作者id", "author_id");
        titleMap.put("大学id", "university_id");
        return titleMap;
    }

}
