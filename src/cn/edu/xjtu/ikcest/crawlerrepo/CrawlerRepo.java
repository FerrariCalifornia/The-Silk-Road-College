/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.crawlerrepo  
 * @Title: CrawlerRepo.java  
 * @Description: crawler_repo
 * @date 2016-07-30 
 * @since V1.0.0 
 *
 * Modification History:
 * Date         Author      Version     Description
 * -------------------------------------------------------------
 * 2016-07-30   初始化       V1.0.0      新建文件
 */
package cn.edu.xjtu.ikcest.crawlerrepo;

import com.wellbole.core.annotation.Table;
import com.wellbole.core.optlog.Optlogable;
import com.wellbole.core.kit.UuidKit;

/**  
 * @ClassName: CrawlerRepo  
 * @Description: crawler_repo 
 * @since V1.0.0  
 */
@Table(value="crawler_repo",id="id")
@SuppressWarnings("serial")
public class CrawlerRepo extends CrawlerRepoBase<java.lang.String, CrawlerRepo> implements Optlogable{ 
    /**
     * crawler_repo DAO
     */
    public static final CrawlerRepo DAO = new CrawlerRepo();

    /**
     * 表定义
     */
    private static final CrawlerRepoTable CRAWLER_REPO = CrawlerRepoTable.me();
    
    /**
     * <p>Title: CrawlerRepo</p>  
     * <p>Description: 默认构造函数</p>  
     * @since V1.0.0
     */
    public CrawlerRepo(){
    }

    @Override
    protected boolean genId(){
        //TODO 添加你的id生成逻辑
        this.setId(UuidKit.generateUuid());
        return true;
    }

    @Override
    public String getModelOptlogStr() {
        return " crawler_repo【" + "" + "】";
    }
    
}