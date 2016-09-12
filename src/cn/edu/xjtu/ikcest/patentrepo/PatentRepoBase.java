/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.patentrepo  
 * @Title: PatentRepoBase.java  
 * @Description: patent_repo基本信息类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.patentrepo;

import java.util.Map;
import java.util.HashMap;

import com.wellbole.core.model.SqlBuilderBaseModel;

/**  
 * @ClassName: PatentRepoBase  
 * @Description: patent_repo基本信息类  
 * @since V1.0.0  
 */
 @SuppressWarnings("serial")
abstract class PatentRepoBase<K,M extends PatentRepoBase<K,M>> extends SqlBuilderBaseModel<K,M>{
    public static final String TABLE_NAME = "patent_repo";

    public PatentRepoBase() {
        super(TABLE_NAME);
    }
    
    @Override
    public String getPrimaryKey(){
        return "id";
    }

    /**
     * @param patentNumber 专利号
     */

    public void setPatentNumber(java.lang.String patentNumber){
        this.set("patent_number", patentNumber);
    }

    /**
     * @return  专利号
     */
    public java.lang.String getPatentNumber(){
        return this.get("patent_number");
    }
        

    /**
     * @param title 标题
     */

    public void setTitle(java.lang.String title){
        this.set("title", title);
    }

    /**
     * @return  标题
     */
    public java.lang.String getTitle(){
        return this.get("title");
    }
        

    /**
     * @param inventor 发明者
     */

    public void setInventor(java.lang.String inventor){
        this.set("inventor", inventor);
    }

    /**
     * @return  发明者
     */
    public java.lang.String getInventor(){
        return this.get("inventor");
    }
        

    /**
     * @param assigneeNameOrCode 代理名或代理号
     */

    public void setAssigneeNameOrCode(java.lang.String assigneeNameOrCode){
        this.set("assignee_name_or_code", assigneeNameOrCode);
    }

    /**
     * @return  代理名或代理号
     */
    public java.lang.String getAssigneeNameOrCode(){
        return this.get("assignee_name_or_code");
    }
        

    /**
     * @param pan pan
     */

    public void setPan(java.lang.String pan){
        this.set("pan", pan);
    }

    /**
     * @return  pan
     */
    public java.lang.String getPan(){
        return this.get("pan");
    }
        

    /**
     * @param summary 梗概
     */

    public void setSummary(java.lang.String summary){
        this.set("summary", summary);
    }

    /**
     * @return  梗概
     */
    public java.lang.String getSummary(){
        return this.get("summary");
    }
        

    /**
     * @param extensionSummary 摘要延伸
     */

    public void setExtensionSummary(java.lang.String extensionSummary){
        this.set("extension_summary", extensionSummary);
    }

    /**
     * @return  摘要延伸
     */
    public java.lang.String getExtensionSummary(){
        return this.get("extension_summary");
    }
        

    /**
     * @param euivalentSummary 等价摘要
     */

    public void setEuivalentSummary(java.lang.String euivalentSummary){
        this.set("euivalent_summary", euivalentSummary);
    }

    /**
     * @return  等价摘要
     */
    public java.lang.String getEuivalentSummary(){
        return this.get("euivalent_summary");
    }
        

    /**
     * @param classCode 分类号
     */

    public void setClassCode(java.lang.String classCode){
        this.set("class_code", classCode);
    }

    /**
     * @return  分类号
     */
    public java.lang.String getClassCode(){
        return this.get("class_code");
    }
        

    /**
     * @param manualCode 操作号
     */

    public void setManualCode(java.lang.String manualCode){
        this.set("manual_code", manualCode);
    }

    /**
     * @return  操作号
     */
    public java.lang.String getManualCode(){
        return this.get("manual_code");
    }
        

    /**
     * @param ipc 信息处理中心
     */

    public void setIpc(java.lang.String ipc){
        this.set("ipc", ipc);
    }

    /**
     * @return  信息处理中心
     */
    public java.lang.String getIpc(){
        return this.get("ipc");
    }
        

    /**
     * @param patentDetails 专利细节
     */

    public void setPatentDetails(java.lang.String patentDetails){
        this.set("patent_details", patentDetails);
    }

    /**
     * @return  专利细节
     */
    public java.lang.String getPatentDetails(){
        return this.get("patent_details");
    }
        

    /**
     * @param appDetails APP细节
     */

    public void setAppDetails(java.lang.String appDetails){
        this.set("app_details", appDetails);
    }

    /**
     * @return  APP细节
     */
    public java.lang.String getAppDetails(){
        return this.get("app_details");
    }
        

    /**
     * @param furtherAppDetails 未来APP细节
     */

    public void setFurtherAppDetails(java.lang.String furtherAppDetails){
        this.set("further_app_details", furtherAppDetails);
    }

    /**
     * @return  未来APP细节
     */
    public java.lang.String getFurtherAppDetails(){
        return this.get("further_app_details");
    }
        

    /**
     * @param priorityAppInfoDate priority_app_info_date
     */

    public void setPriorityAppInfoDate(java.lang.String priorityAppInfoDate){
        this.set("priority_app_info_date", priorityAppInfoDate);
    }

    /**
     * @return  priority_app_info_date
     */
    public java.lang.String getPriorityAppInfoDate(){
        return this.get("priority_app_info_date");
    }
        

    /**
     * @param designatedStates designated_states
     */

    public void setDesignatedStates(java.lang.String designatedStates){
        this.set("designated_states", designatedStates);
    }

    /**
     * @return  designated_states
     */
    public java.lang.String getDesignatedStates(){
        return this.get("designated_states");
    }
        

    /**
     * @param fieldOfSearch 搜索领域
     */

    public void setFieldOfSearch(java.lang.String fieldOfSearch){
        this.set("field_of_search", fieldOfSearch);
    }

    /**
     * @return  搜索领域
     */
    public java.lang.String getFieldOfSearch(){
        return this.get("field_of_search");
    }
        

    /**
     * @param citingPatents 专利引用
     */

    public void setCitingPatents(java.lang.String citingPatents){
        this.set("citing_patents", citingPatents);
    }

    /**
     * @return  专利引用
     */
    public java.lang.String getCitingPatents(){
        return this.get("citing_patents");
    }
        

    /**
     * @param citingReference 参考文献
     */

    public void setCitingReference(java.lang.String citingReference){
        this.set("citing_reference", citingReference);
    }

    /**
     * @return  参考文献
     */
    public java.lang.String getCitingReference(){
        return this.get("citing_reference");
    }
        

    /**
     * @param dn dn
     */

    public void setDn(java.lang.String dn){
        this.set("dn", dn);
    }

    /**
     * @return  dn
     */
    public java.lang.String getDn(){
        return this.get("dn");
    }
        

    /**
     * @param mn mn
     */

    public void setMn(java.lang.String mn){
        this.set("mn", mn);
    }

    /**
     * @return  mn
     */
    public java.lang.String getMn(){
        return this.get("mn");
    }
        

    /**
     * @param ringIndexNums 环系索引号
     */

    public void setRingIndexNums(java.lang.String ringIndexNums){
        this.set("ring_index_nums", ringIndexNums);
    }

    /**
     * @return  环系索引号
     */
    public java.lang.String getRingIndexNums(){
        return this.get("ring_index_nums");
    }
        

    /**
     * @param citedInventor 被引用发明人
     */

    public void setCitedInventor(java.lang.String citedInventor){
        this.set("cited_inventor", citedInventor);
    }

    /**
     * @return  被引用发明人
     */
    public java.lang.String getCitedInventor(){
        return this.get("cited_inventor");
    }
        

    /**
     * @param derwentRegistryNums 德温特注册号
     */

    public void setDerwentRegistryNums(java.lang.String derwentRegistryNums){
        this.set("derwent_registry_nums", derwentRegistryNums);
    }

    /**
     * @return  德温特注册号
     */
    public java.lang.String getDerwentRegistryNums(){
        return this.get("derwent_registry_nums");
    }
        

    /**
     * @Title: safeSetAttrs  
     * @Description: 安全地依据传入的Map来设定属性值（先转换成字符串，再依据转换成属性对应的类型）,excel导入用  
     * @param map 属性名－属性值
     * @since V1.0.0
     */
    public void safeSetAttrs(Map<String, Object> map){
        Object value = null;
        //专利号, 类型 java.lang.String
        value = map.get("patent_number");
        if(value != null){
            this.set("patent_number", value.toString().trim());
        }
        //标题, 类型 java.lang.String
        value = map.get("title");
        if(value != null){
            this.set("title", value.toString().trim());
        }
        //发明者, 类型 java.lang.String
        value = map.get("inventor");
        if(value != null){
            this.set("inventor", value.toString().trim());
        }
        //代理名或代理号, 类型 java.lang.String
        value = map.get("assignee_name_or_code");
        if(value != null){
            this.set("assignee_name_or_code", value.toString().trim());
        }
        //pan, 类型 java.lang.String
        value = map.get("pan");
        if(value != null){
            this.set("pan", value.toString().trim());
        }
        //梗概, 类型 java.lang.String
        value = map.get("summary");
        if(value != null){
            this.set("summary", value.toString().trim());
        }
        //摘要延伸, 类型 java.lang.String
        value = map.get("extension_summary");
        if(value != null){
            this.set("extension_summary", value.toString().trim());
        }
        //等价摘要, 类型 java.lang.String
        value = map.get("euivalent_summary");
        if(value != null){
            this.set("euivalent_summary", value.toString().trim());
        }
        //分类号, 类型 java.lang.String
        value = map.get("class_code");
        if(value != null){
            this.set("class_code", value.toString().trim());
        }
        //操作号, 类型 java.lang.String
        value = map.get("manual_code");
        if(value != null){
            this.set("manual_code", value.toString().trim());
        }
        //信息处理中心, 类型 java.lang.String
        value = map.get("ipc");
        if(value != null){
            this.set("ipc", value.toString().trim());
        }
        //专利细节, 类型 java.lang.String
        value = map.get("patent_details");
        if(value != null){
            this.set("patent_details", value.toString().trim());
        }
        //APP细节, 类型 java.lang.String
        value = map.get("app_details");
        if(value != null){
            this.set("app_details", value.toString().trim());
        }
        //未来APP细节, 类型 java.lang.String
        value = map.get("further_app_details");
        if(value != null){
            this.set("further_app_details", value.toString().trim());
        }
        //priority_app_info_date, 类型 java.lang.String
        value = map.get("priority_app_info_date");
        if(value != null){
            this.set("priority_app_info_date", value.toString().trim());
        }
        //designated_states, 类型 java.lang.String
        value = map.get("designated_states");
        if(value != null){
            this.set("designated_states", value.toString().trim());
        }
        //搜索领域, 类型 java.lang.String
        value = map.get("field_of_search");
        if(value != null){
            this.set("field_of_search", value.toString().trim());
        }
        //专利引用, 类型 java.lang.String
        value = map.get("citing_patents");
        if(value != null){
            this.set("citing_patents", value.toString().trim());
        }
        //参考文献, 类型 java.lang.String
        value = map.get("citing_reference");
        if(value != null){
            this.set("citing_reference", value.toString().trim());
        }
        //dn, 类型 java.lang.String
        value = map.get("dn");
        if(value != null){
            this.set("dn", value.toString().trim());
        }
        //mn, 类型 java.lang.String
        value = map.get("mn");
        if(value != null){
            this.set("mn", value.toString().trim());
        }
        //环系索引号, 类型 java.lang.String
        value = map.get("ring_index_nums");
        if(value != null){
            this.set("ring_index_nums", value.toString().trim());
        }
        //被引用发明人, 类型 java.lang.String
        value = map.get("cited_inventor");
        if(value != null){
            this.set("cited_inventor", value.toString().trim());
        }
        //德温特注册号, 类型 java.lang.String
        value = map.get("derwent_registry_nums");
        if(value != null){
            this.set("derwent_registry_nums", value.toString().trim());
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
        titleMap.put("专利号", "patent_number");
        titleMap.put("标题", "title");
        titleMap.put("发明者", "inventor");
        titleMap.put("代理名或代理号", "assignee_name_or_code");
        titleMap.put("pan", "pan");
        titleMap.put("梗概", "summary");
        titleMap.put("摘要延伸", "extension_summary");
        titleMap.put("等价摘要", "euivalent_summary");
        titleMap.put("分类号", "class_code");
        titleMap.put("操作号", "manual_code");
        titleMap.put("信息处理中心", "ipc");
        titleMap.put("专利细节", "patent_details");
        titleMap.put("APP细节", "app_details");
        titleMap.put("未来APP细节", "further_app_details");
        titleMap.put("priority_app_info_date", "priority_app_info_date");
        titleMap.put("designated_states", "designated_states");
        titleMap.put("搜索领域", "field_of_search");
        titleMap.put("专利引用", "citing_patents");
        titleMap.put("参考文献", "citing_reference");
        titleMap.put("dn", "dn");
        titleMap.put("mn", "mn");
        titleMap.put("环系索引号", "ring_index_nums");
        titleMap.put("被引用发明人", "cited_inventor");
        titleMap.put("德温特注册号", "derwent_registry_nums");
        return titleMap;
    }

}
