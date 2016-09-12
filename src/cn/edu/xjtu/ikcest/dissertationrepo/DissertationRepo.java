/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.dissertationrepo  
 * @Title: DissertationRepo.java  
 * @Description: dissertation_repo
 * @date 2016-07-30 
 * @since V1.0.0 
 *
 * Modification History:
 * Date         Author      Version     Description
 * -------------------------------------------------------------
 * 2016-07-30   初始化       V1.0.0      新建文件
 */
package cn.edu.xjtu.ikcest.dissertationrepo;

import com.wellbole.core.annotation.Table;
import com.wellbole.core.optlog.Optlogable;
import com.wellbole.core.kit.UuidKit;

/**  
 * @ClassName: DissertationRepo  
 * @Description: dissertation_repo 
 * @since V1.0.0  
 */
@Table(value="dissertation_repo",id="id")
@SuppressWarnings("serial")
public class DissertationRepo extends DissertationRepoBase<java.lang.String, DissertationRepo> implements Optlogable{ 
    /**
     * dissertation_repo DAO
     */
    public static final DissertationRepo DAO = new DissertationRepo();

    /**
     * 表定义
     */
    private static final DissertationRepoTable DISSERTATION_REPO = DissertationRepoTable.me();
    
    /**
     * <p>Title: DissertationRepo</p>  
     * <p>Description: 默认构造函数</p>  
     * @since V1.0.0
     */
    public DissertationRepo(){
    }

    @Override
    protected boolean genId(){
        //TODO 添加你的id生成逻辑
        this.setId(UuidKit.generateUuid());
        return true;
    }

    @Override
    public String getModelOptlogStr() {
        return " dissertation_repo【" + "" + "】";
    }
    
}