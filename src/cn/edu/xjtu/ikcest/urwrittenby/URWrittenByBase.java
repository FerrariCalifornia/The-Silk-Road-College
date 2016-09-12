/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.urwrittenby  
 * @Title: URWrittenByBase.java  
 * @Description: u_r_written_by基本信息类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.urwrittenby;

import java.util.Map;
import java.util.HashMap;

import com.wellbole.core.model.SqlBuilderBaseModel;

/**  
 * @ClassName: URWrittenByBase  
 * @Description: u_r_written_by基本信息类  
 * @since V1.0.0  
 */
 @SuppressWarnings("serial")
abstract class URWrittenByBase<K,M extends URWrittenByBase<K,M>> extends SqlBuilderBaseModel<K,M>{
    public static final String TABLE_NAME = "u_r_written_by";

    public URWrittenByBase() {
        super(TABLE_NAME);
    }
    
    @Override
    public String getPrimaryKey(){
        return "author_id,literature_id";
    }

    /**
     * @param literatureId 文献id
     */

    public void setLiteratureId(java.lang.String literatureId){
        this.set("literature_id", literatureId);
    }

    /**
     * @return  文献id
     */
    public java.lang.String getLiteratureId(){
        return this.get("literature_id");
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
     * @Title: safeSetAttrs  
     * @Description: 安全地依据传入的Map来设定属性值（先转换成字符串，再依据转换成属性对应的类型）,excel导入用  
     * @param map 属性名－属性值
     * @since V1.0.0
     */
    public void safeSetAttrs(Map<String, Object> map){
        Object value = null;
        //文献id, 类型 java.lang.String
        value = map.get("literature_id");
        if(value != null){
            this.set("literature_id", value.toString().trim());
        }
        //作者id, 类型 java.lang.String
        value = map.get("author_id");
        if(value != null){
            this.set("author_id", value.toString().trim());
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
        titleMap.put("文献id", "literature_id");
        titleMap.put("作者id", "author_id");
        return titleMap;
    }

}
