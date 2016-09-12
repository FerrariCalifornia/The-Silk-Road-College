/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.patentrepo  
 * @Title: PatentRepo.java  
 * @Description: patent_repo
 * @date 2016-07-30 
 * @since V1.0.0 
 *
 * Modification History:
 * Date         Author      Version     Description
 * -------------------------------------------------------------
 * 2016-07-30   初始化       V1.0.0      新建文件
 */
package cn.edu.xjtu.ikcest.patentrepo;

import com.wellbole.core.annotation.Table;
import com.wellbole.core.optlog.Optlogable;
import com.wellbole.core.kit.UuidKit;

/**  
 * @ClassName: PatentRepo  
 * @Description: patent_repo 
 * @since V1.0.0  
 */
@Table(value="patent_repo",id="id")
@SuppressWarnings("serial")
public class PatentRepo extends PatentRepoBase<java.lang.String, PatentRepo> implements Optlogable{ 
    /**
     * patent_repo DAO
     */
    public static final PatentRepo DAO = new PatentRepo();

    /**
     * 表定义
     */
    private static final PatentRepoTable PATENT_REPO = PatentRepoTable.me();
    
    /**
     * <p>Title: PatentRepo</p>  
     * <p>Description: 默认构造函数</p>  
     * @since V1.0.0
     */
    public PatentRepo(){
    }

    @Override
    protected boolean genId(){
        //TODO 添加你的id生成逻辑
        this.setId(UuidKit.generateUuid());
        return true;
    }

    @Override
    public String getModelOptlogStr() {
        return " patent_repo【" + "" + "】";
    }
    
}