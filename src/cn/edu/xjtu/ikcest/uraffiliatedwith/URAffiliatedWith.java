/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.uraffiliatedwith  
 * @Title: URAffiliatedWith.java  
 * @Description: u_r_affiliated_with
 * @date 2016-07-30 
 * @since V1.0.0 
 *
 * Modification History:
 * Date         Author      Version     Description
 * -------------------------------------------------------------
 * 2016-07-30   初始化       V1.0.0      新建文件
 */
package cn.edu.xjtu.ikcest.uraffiliatedwith;

import com.wellbole.core.annotation.Table;
import com.wellbole.core.optlog.Optlogable;
import com.wellbole.core.kit.UuidKit;

/**  
 * @ClassName: URAffiliatedWith  
 * @Description: u_r_affiliated_with 
 * @since V1.0.0  
 */
@Table(value="u_r_affiliated_with",id="author_id,university_id")
@SuppressWarnings("serial")
public class URAffiliatedWith extends URAffiliatedWithBase<java.lang.String, URAffiliatedWith> implements Optlogable{ 
    /**
     * u_r_affiliated_with DAO
     */
    public static final URAffiliatedWith DAO = new URAffiliatedWith();

    /**
     * 表定义
     */
    private static final URAffiliatedWithTable U_R_AFFILIATED_WITH = URAffiliatedWithTable.me();
    
    /**
     * <p>Title: URAffiliatedWith</p>  
     * <p>Description: 默认构造函数</p>  
     * @since V1.0.0
     */
    public URAffiliatedWith(){
    }

    @Override
    protected boolean genId(){
        //TODO 添加你的id生成逻辑
        this.setId(UuidKit.generateUuid());
        return true;
    }

    @Override
    public String getModelOptlogStr() {
        return " u_r_affiliated_with【" + "" + "】";
    }
    
}