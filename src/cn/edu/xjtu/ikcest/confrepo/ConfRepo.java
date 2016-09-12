/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.confrepo  
 * @Title: ConfRepo.java  
 * @Description: conf_repo
 * @date 2016-07-30 
 * @since V1.0.0 
 *
 * Modification History:
 * Date         Author      Version     Description
 * -------------------------------------------------------------
 * 2016-07-30   初始化       V1.0.0      新建文件
 */
package cn.edu.xjtu.ikcest.confrepo;

import com.wellbole.core.annotation.Table;
import com.wellbole.core.optlog.Optlogable;
import com.wellbole.core.kit.UuidKit;

/**  
 * @ClassName: ConfRepo  
 * @Description: conf_repo 
 * @since V1.0.0  
 */
@Table(value="conf_repo",id="id")
@SuppressWarnings("serial")
public class ConfRepo extends ConfRepoBase<java.lang.String, ConfRepo> implements Optlogable{ 
    /**
     * conf_repo DAO
     */
    public static final ConfRepo DAO = new ConfRepo();

    /**
     * 表定义
     */
    private static final ConfRepoTable CONF_REPO = ConfRepoTable.me();
    
    /**
     * <p>Title: ConfRepo</p>  
     * <p>Description: 默认构造函数</p>  
     * @since V1.0.0
     */
    public ConfRepo(){
    }

    @Override
    protected boolean genId(){
        //TODO 添加你的id生成逻辑
        this.setId(UuidKit.generateUuid());
        return true;
    }

    @Override
    public String getModelOptlogStr() {
        return " conf_repo【" + "" + "】";
    }
    
    
}