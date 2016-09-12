/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.oarepo  
 * @Title: OaRepo.java  
 * @Description: oa_repo
 * @date 2016-07-30 
 * @since V1.0.0 
 *
 * Modification History:
 * Date         Author      Version     Description
 * -------------------------------------------------------------
 * 2016-07-30   初始化       V1.0.0      新建文件
 */
package cn.edu.xjtu.ikcest.oarepo;

import com.wellbole.core.annotation.Table;
import com.wellbole.core.optlog.Optlogable;
import com.wellbole.core.kit.UuidKit;

/**  
 * @ClassName: OaRepo  
 * @Description: oa_repo 
 * @since V1.0.0  
 */
@Table(value="oa_repo",id="id")
@SuppressWarnings("serial")
public class OaRepo extends OaRepoBase<java.lang.String, OaRepo> implements Optlogable{ 
    /**
     * oa_repo DAO
     */
    public static final OaRepo DAO = new OaRepo();

    /**
     * 表定义
     */
    private static final OaRepoTable OA_REPO = OaRepoTable.me();
    
    /**
     * <p>Title: OaRepo</p>  
     * <p>Description: 默认构造函数</p>  
     * @since V1.0.0
     */
    public OaRepo(){
    }

    @Override
    protected boolean genId(){
        //TODO 添加你的id生成逻辑
        this.setId(UuidKit.generateUuid());
        return true;
    }

    @Override
    public String getModelOptlogStr() {
        return " oa_repo【" + "" + "】";
    }
    
}