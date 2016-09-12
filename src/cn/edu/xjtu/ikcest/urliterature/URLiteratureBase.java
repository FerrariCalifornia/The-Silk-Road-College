/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.urliterature  
 * @Title: URLiteratureBase.java  
 * @Description: u_r_literature基本信息类   
 * @since V1.0.0 
 */
package cn.edu.xjtu.ikcest.urliterature;

import java.util.Map;
import java.util.HashMap;

import com.wellbole.core.model.SqlBuilderBaseModel;

/**  
 * @ClassName: URLiteratureBase  
 * @Description: u_r_literature基本信息类  
 * @since V1.0.0  
 */
 @SuppressWarnings("serial")
abstract class URLiteratureBase<K,M extends URLiteratureBase<K,M>> extends SqlBuilderBaseModel<K,M>{
    public static final String TABLE_NAME = "u_r_literature";

    public URLiteratureBase() {
        super(TABLE_NAME);
    }
    
    @Override
    public String getPrimaryKey(){
        return "id";
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
     * @param year 年份
     */

    public void setYear(java.lang.Integer year){
        this.set("year", year);
    }

    /**
     * @return  年份
     */
    public java.lang.Integer getYear(){
        return this.get("year");
    }
        

    /**
     * @param orginalPublication 原出版社
     */

    public void setOrginalPublication(java.lang.String orginalPublication){
        this.set("orginal_publication", orginalPublication);
    }

    /**
     * @return  原出版社
     */
    public java.lang.String getOrginalPublication(){
        return this.get("orginal_publication");
    }
        

    /**
     * @param volume 卷
     */

    public void setVolume(java.lang.String volume){
        this.set("volume", volume);
    }

    /**
     * @return  卷
     */
    public java.lang.String getVolume(){
        return this.get("volume");
    }
        

    /**
     * @param issue 期
     */

    public void setIssue(java.lang.String issue){
        this.set("issue", issue);
    }

    /**
     * @return  期
     */
    public java.lang.String getIssue(){
        return this.get("issue");
    }
        

    /**
     * @param paperId 论文id
     */

    public void setPaperId(java.lang.Integer paperId){
        this.set("paper_id", paperId);
    }

    /**
     * @return  论文id
     */
    public java.lang.Integer getPaperId(){
        return this.get("paper_id");
    }
        

    /**
     * @param startPage 起始页
     */

    public void setStartPage(java.lang.Integer startPage){
        this.set("start_page", startPage);
    }

    /**
     * @return  起始页
     */
    public java.lang.Integer getStartPage(){
        return this.get("start_page");
    }
        

    /**
     * @param endPage 结束页
     */

    public void setEndPage(java.lang.Integer endPage){
        this.set("end_page", endPage);
    }

    /**
     * @return  结束页
     */
    public java.lang.Integer getEndPage(){
        return this.get("end_page");
    }
        

    /**
     * @param pageCounter 页码数
     */

    public void setPageCounter(java.lang.Integer pageCounter){
        this.set("page_counter", pageCounter);
    }

    /**
     * @return  页码数
     */
    public java.lang.Integer getPageCounter(){
        return this.get("page_counter");
    }
        

    /**
     * @param citingPaper 引用
     */

    public void setCitingPaper(java.lang.String citingPaper){
        this.set("citing_paper", citingPaper);
    }

    /**
     * @return  引用
     */
    public java.lang.String getCitingPaper(){
        return this.get("citing_paper");
    }
        

    /**
     * @param doi dos
     */

    public void setDoi(java.lang.String doi){
        this.set("doi", doi);
    }

    /**
     * @return  dos
     */
    public java.lang.String getDoi(){
        return this.get("doi");
    }
        

    /**
     * @param url url
     */

    public void setUrl(java.lang.String url){
        this.set("url", url);
    }

    /**
     * @return  url
     */
    public java.lang.String getUrl(){
        return this.get("url");
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
     * @param authorKeyword 作者关键词
     */

    public void setAuthorKeyword(java.lang.String authorKeyword){
        this.set("author_keyword", authorKeyword);
    }

    /**
     * @return  作者关键词
     */
    public java.lang.String getAuthorKeyword(){
        return this.get("author_keyword");
    }
        

    /**
     * @param indexKeyword 索引关键词
     */

    public void setIndexKeyword(java.lang.String indexKeyword){
        this.set("index_keyword", indexKeyword);
    }

    /**
     * @return  索引关键词
     */
    public java.lang.String getIndexKeyword(){
        return this.get("index_keyword");
    }
        

    /**
     * @param analysisSerialNumber 分析序列号
     */

    public void setAnalysisSerialNumber(java.lang.String analysisSerialNumber){
        this.set("analysis_serial_number", analysisSerialNumber);
    }

    /**
     * @return  分析序列号
     */
    public java.lang.String getAnalysisSerialNumber(){
        return this.get("analysis_serial_number");
    }
        

    /**
     * @param cas cas
     */

    public void setCas(java.lang.String cas){
        this.set("cas", cas);
    }

    /**
     * @return  cas
     */
    public java.lang.String getCas(){
        return this.get("cas");
    }
        

    /**
     * @param brand 商标
     */

    public void setBrand(java.lang.String brand){
        this.set("brand", brand);
    }

    /**
     * @return  商标
     */
    public java.lang.String getBrand(){
        return this.get("brand");
    }
        

    /**
     * @param manufacturer 制造商
     */

    public void setManufacturer(java.lang.String manufacturer){
        this.set("manufacturer", manufacturer);
    }

    /**
     * @return  制造商
     */
    public java.lang.String getManufacturer(){
        return this.get("manufacturer");
    }
        

    /**
     * @param fundingInfo 资助信息
     */

    public void setFundingInfo(java.lang.String fundingInfo){
        this.set("funding_info", fundingInfo);
    }

    /**
     * @return  资助信息
     */
    public java.lang.String getFundingInfo(){
        return this.get("funding_info");
    }
        

    /**
     * @param references 参考文献
     */

    public void setReferences(java.lang.String references){
        this.set("references", references);
    }

    /**
     * @return  参考文献
     */
    public java.lang.String getReferences(){
        return this.get("references");
    }
        

    /**
     * @param postalAddr 邮寄地址
     */

    public void setPostalAddr(java.lang.String postalAddr){
        this.set("postal_addr", postalAddr);
    }

    /**
     * @return  邮寄地址
     */
    public java.lang.String getPostalAddr(){
        return this.get("postal_addr");
    }
        

    /**
     * @param editor 编辑
     */

    public void setEditor(java.lang.String editor){
        this.set("editor", editor);
    }

    /**
     * @return  编辑
     */
    public java.lang.String getEditor(){
        return this.get("editor");
    }
        

    /**
     * @param fundingAgent 资助机构
     */

    public void setFundingAgent(java.lang.String fundingAgent){
        this.set("funding_agent", fundingAgent);
    }

    /**
     * @return  资助机构
     */
    public java.lang.String getFundingAgent(){
        return this.get("funding_agent");
    }
        

    /**
     * @param publisher 出版商
     */

    public void setPublisher(java.lang.String publisher){
        this.set("publisher", publisher);
    }

    /**
     * @return  出版商
     */
    public java.lang.String getPublisher(){
        return this.get("publisher");
    }
        

    /**
     * @param conferenceName 会议名称
     */

    public void setConferenceName(java.lang.String conferenceName){
        this.set("conference_name", conferenceName);
    }

    /**
     * @return  会议名称
     */
    public java.lang.String getConferenceName(){
        return this.get("conference_name");
    }
        

    /**
     * @param issn issn
     */

    public void setIssn(java.lang.String issn){
        this.set("issn", issn);
    }

    /**
     * @return  issn
     */
    public java.lang.String getIssn(){
        return this.get("issn");
    }
        

    /**
     * @param isbn isbn
     */

    public void setIsbn(java.lang.String isbn){
        this.set("isbn", isbn);
    }

    /**
     * @return  isbn
     */
    public java.lang.String getIsbn(){
        return this.get("isbn");
    }
        

    /**
     * @param coden codes
     */

    public void setCoden(java.lang.String coden){
        this.set("coden", coden);
    }

    /**
     * @return  codes
     */
    public java.lang.String getCoden(){
        return this.get("coden");
    }
        

    /**
     * @param pubmedId pubmed id
     */

    public void setPubmedId(java.lang.String pubmedId){
        this.set("pubmed_id", pubmedId);
    }

    /**
     * @return  pubmed id
     */
    public java.lang.String getPubmedId(){
        return this.get("pubmed_id");
    }
        

    /**
     * @param language 语言
     */

    public void setLanguage(java.lang.String language){
        this.set("language", language);
    }

    /**
     * @return  语言
     */
    public java.lang.String getLanguage(){
        return this.get("language");
    }
        

    /**
     * @param orginalPublicationAbbr 原出版社地址
     */

    public void setOrginalPublicationAbbr(java.lang.String orginalPublicationAbbr){
        this.set("orginal_publication_abbr", orginalPublicationAbbr);
    }

    /**
     * @return  原出版社地址
     */
    public java.lang.String getOrginalPublicationAbbr(){
        return this.get("orginal_publication_abbr");
    }
        

    /**
     * @param paperType 论文类型
     */

    public void setPaperType(java.lang.String paperType){
        this.set("paper_type", paperType);
    }

    /**
     * @return  论文类型
     */
    public java.lang.String getPaperType(){
        return this.get("paper_type");
    }
        

    /**
     * @param sourceOfPublication 出版源
     */

    public void setSourceOfPublication(java.lang.String sourceOfPublication){
        this.set("source_of_publication", sourceOfPublication);
    }

    /**
     * @return  出版源
     */
    public java.lang.String getSourceOfPublication(){
        return this.get("source_of_publication");
    }
        

    /**
     * @param eid eid
     */

    public void setEid(java.lang.String eid){
        this.set("eid", eid);
    }

    /**
     * @return  eid
     */
    public java.lang.String getEid(){
        return this.get("eid");
    }
        

    /**
     * @param uId u id
     */

    public void setUId(java.lang.String uId){
        this.set("u_id", uId);
    }

    /**
     * @return  u id
     */
    public java.lang.String getUId(){
        return this.get("u_id");
    }
        

    /**
     * @Title: safeSetAttrs  
     * @Description: 安全地依据传入的Map来设定属性值（先转换成字符串，再依据转换成属性对应的类型）,excel导入用  
     * @param map 属性名－属性值
     * @since V1.0.0
     */
    public void safeSetAttrs(Map<String, Object> map){
        Object value = null;
        //标题, 类型 java.lang.String
        value = map.get("title");
        if(value != null){
            this.set("title", value.toString().trim());
        }
        //年份, 类型 java.lang.Integer
        value = map.get("year");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.lang.Integer.class, value.toString().trim());
        }
        if(value != null){
            this.set("year", value);
        }
        //原出版社, 类型 java.lang.String
        value = map.get("orginal_publication");
        if(value != null){
            this.set("orginal_publication", value.toString().trim());
        }
        //卷, 类型 java.lang.String
        value = map.get("volume");
        if(value != null){
            this.set("volume", value.toString().trim());
        }
        //期, 类型 java.lang.String
        value = map.get("issue");
        if(value != null){
            this.set("issue", value.toString().trim());
        }
        //论文id, 类型 java.lang.Integer
        value = map.get("paper_id");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.lang.Integer.class, value.toString().trim());
        }
        if(value != null){
            this.set("paper_id", value);
        }
        //起始页, 类型 java.lang.Integer
        value = map.get("start_page");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.lang.Integer.class, value.toString().trim());
        }
        if(value != null){
            this.set("start_page", value);
        }
        //结束页, 类型 java.lang.Integer
        value = map.get("end_page");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.lang.Integer.class, value.toString().trim());
        }
        if(value != null){
            this.set("end_page", value);
        }
        //页码数, 类型 java.lang.Integer
        value = map.get("page_counter");
        if(value != null){
            //非String类型需要转换
            value = com.jfinal.core.TypeConverter.safeConvert(java.lang.Integer.class, value.toString().trim());
        }
        if(value != null){
            this.set("page_counter", value);
        }
        //引用, 类型 java.lang.String
        value = map.get("citing_paper");
        if(value != null){
            this.set("citing_paper", value.toString().trim());
        }
        //dos, 类型 java.lang.String
        value = map.get("doi");
        if(value != null){
            this.set("doi", value.toString().trim());
        }
        //url, 类型 java.lang.String
        value = map.get("url");
        if(value != null){
            this.set("url", value.toString().trim());
        }
        //梗概, 类型 java.lang.String
        value = map.get("summary");
        if(value != null){
            this.set("summary", value.toString().trim());
        }
        //作者关键词, 类型 java.lang.String
        value = map.get("author_keyword");
        if(value != null){
            this.set("author_keyword", value.toString().trim());
        }
        //索引关键词, 类型 java.lang.String
        value = map.get("index_keyword");
        if(value != null){
            this.set("index_keyword", value.toString().trim());
        }
        //分析序列号, 类型 java.lang.String
        value = map.get("analysis_serial_number");
        if(value != null){
            this.set("analysis_serial_number", value.toString().trim());
        }
        //cas, 类型 java.lang.String
        value = map.get("cas");
        if(value != null){
            this.set("cas", value.toString().trim());
        }
        //商标, 类型 java.lang.String
        value = map.get("brand");
        if(value != null){
            this.set("brand", value.toString().trim());
        }
        //制造商, 类型 java.lang.String
        value = map.get("manufacturer");
        if(value != null){
            this.set("manufacturer", value.toString().trim());
        }
        //资助信息, 类型 java.lang.String
        value = map.get("funding_info");
        if(value != null){
            this.set("funding_info", value.toString().trim());
        }
        //参考文献, 类型 java.lang.String
        value = map.get("references");
        if(value != null){
            this.set("references", value.toString().trim());
        }
        //邮寄地址, 类型 java.lang.String
        value = map.get("postal_addr");
        if(value != null){
            this.set("postal_addr", value.toString().trim());
        }
        //编辑, 类型 java.lang.String
        value = map.get("editor");
        if(value != null){
            this.set("editor", value.toString().trim());
        }
        //资助机构, 类型 java.lang.String
        value = map.get("funding_agent");
        if(value != null){
            this.set("funding_agent", value.toString().trim());
        }
        //出版商, 类型 java.lang.String
        value = map.get("publisher");
        if(value != null){
            this.set("publisher", value.toString().trim());
        }
        //会议名称, 类型 java.lang.String
        value = map.get("conference_name");
        if(value != null){
            this.set("conference_name", value.toString().trim());
        }
        //issn, 类型 java.lang.String
        value = map.get("issn");
        if(value != null){
            this.set("issn", value.toString().trim());
        }
        //isbn, 类型 java.lang.String
        value = map.get("isbn");
        if(value != null){
            this.set("isbn", value.toString().trim());
        }
        //codes, 类型 java.lang.String
        value = map.get("coden");
        if(value != null){
            this.set("coden", value.toString().trim());
        }
        //pubmed id, 类型 java.lang.String
        value = map.get("pubmed_id");
        if(value != null){
            this.set("pubmed_id", value.toString().trim());
        }
        //语言, 类型 java.lang.String
        value = map.get("language");
        if(value != null){
            this.set("language", value.toString().trim());
        }
        //原出版社地址, 类型 java.lang.String
        value = map.get("orginal_publication_abbr");
        if(value != null){
            this.set("orginal_publication_abbr", value.toString().trim());
        }
        //论文类型, 类型 java.lang.String
        value = map.get("paper_type");
        if(value != null){
            this.set("paper_type", value.toString().trim());
        }
        //出版源, 类型 java.lang.String
        value = map.get("source_of_publication");
        if(value != null){
            this.set("source_of_publication", value.toString().trim());
        }
        //eid, 类型 java.lang.String
        value = map.get("eid");
        if(value != null){
            this.set("eid", value.toString().trim());
        }
        //u id, 类型 java.lang.String
        value = map.get("u_id");
        if(value != null){
            this.set("u_id", value.toString().trim());
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
        titleMap.put("标题", "title");
        titleMap.put("年份", "year");
        titleMap.put("原出版社", "orginal_publication");
        titleMap.put("卷", "volume");
        titleMap.put("期", "issue");
        titleMap.put("论文id", "paper_id");
        titleMap.put("起始页", "start_page");
        titleMap.put("结束页", "end_page");
        titleMap.put("页码数", "page_counter");
        titleMap.put("引用", "citing_paper");
        titleMap.put("dos", "doi");
        titleMap.put("url", "url");
        titleMap.put("梗概", "summary");
        titleMap.put("作者关键词", "author_keyword");
        titleMap.put("索引关键词", "index_keyword");
        titleMap.put("分析序列号", "analysis_serial_number");
        titleMap.put("cas", "cas");
        titleMap.put("商标", "brand");
        titleMap.put("制造商", "manufacturer");
        titleMap.put("资助信息", "funding_info");
        titleMap.put("参考文献", "references");
        titleMap.put("邮寄地址", "postal_addr");
        titleMap.put("编辑", "editor");
        titleMap.put("资助机构", "funding_agent");
        titleMap.put("出版商", "publisher");
        titleMap.put("会议名称", "conference_name");
        titleMap.put("issn", "issn");
        titleMap.put("isbn", "isbn");
        titleMap.put("codes", "coden");
        titleMap.put("pubmed id", "pubmed_id");
        titleMap.put("语言", "language");
        titleMap.put("原出版社地址", "orginal_publication_abbr");
        titleMap.put("论文类型", "paper_type");
        titleMap.put("出版源", "source_of_publication");
        titleMap.put("eid", "eid");
        titleMap.put("u id", "u_id");
        return titleMap;
    }

}
