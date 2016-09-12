/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.srnewsresult  
 * @Title: SrNewsResult.java  
 * @Description: sr_news_result
 * @date 2016-07-30 
 * @since V1.0.0 
 *
 * Modification History:
 * Date         Author      Version     Description
 * -------------------------------------------------------------
 * 2016-07-30   初始化       V1.0.0      新建文件
 */
package cn.edu.xjtu.ikcest.srnewsresult;

import com.wellbole.core.annotation.Table;
import com.wellbole.core.optlog.Optlogable;
import com.wellbole.core.kit.UuidKit;

/**  
 * @ClassName: SrNewsResult  
 * @Description: sr_news_result 
 * @since V1.0.0  
 */
@Table(value="sr_news_result",id="id")
@SuppressWarnings("serial")
public class SrNewsResult extends SrNewsResultBase<java.lang.String, SrNewsResult> implements Optlogable{ 
    /**
     * sr_news_result DAO
     */
    public static final SrNewsResult DAO = new SrNewsResult();

    /**
     * 表定义
     */
    private static final SrNewsResultTable SR_NEWS_RESULT = SrNewsResultTable.me();
    
    /**
     * <p>Title: SrNewsResult</p>  
     * <p>Description: 默认构造函数</p>  
     * @since V1.0.0
     */
    public SrNewsResult(){
    }

    @Override
    protected boolean genId(){
        //TODO 添加你的id生成逻辑
        this.setId(UuidKit.generateUuid());
        return true;
    }

    @Override
    public String getModelOptlogStr() {
        return " sr_news_result【" + "" + "】";
    }
    
}