/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.srtopicsresult  
 * @Title: SrTopicsResult.java  
 * @Description: sr_topics_result
 * @date 2016-07-30 
 * @since V1.0.0 
 *
 * Modification History:
 * Date         Author      Version     Description
 * -------------------------------------------------------------
 * 2016-07-30   初始化       V1.0.0      新建文件
 */
package cn.edu.xjtu.ikcest.srtopicsresult;

import com.wellbole.core.annotation.Table;
import com.wellbole.core.optlog.Optlogable;
import com.wellbole.core.kit.UuidKit;

/**  
 * @ClassName: SrTopicsResult  
 * @Description: sr_topics_result 
 * @since V1.0.0  
 */
@Table(value="sr_topics_result",id="id")
@SuppressWarnings("serial")
public class SrTopicsResult extends SrTopicsResultBase<java.lang.String, SrTopicsResult> implements Optlogable{ 
    /**
     * sr_topics_result DAO
     */
    public static final SrTopicsResult DAO = new SrTopicsResult();

    /**
     * 表定义
     */
    private static final SrTopicsResultTable SR_TOPICS_RESULT = SrTopicsResultTable.me();
    
    /**
     * <p>Title: SrTopicsResult</p>  
     * <p>Description: 默认构造函数</p>  
     * @since V1.0.0
     */
    public SrTopicsResult(){
    }

    @Override
    protected boolean genId(){
        //TODO 添加你的id生成逻辑
        this.setId(UuidKit.generateUuid());
        return true;
    }

    @Override
    public String getModelOptlogStr() {
        return " sr_topics_result【" + "" + "】";
    }
    
}