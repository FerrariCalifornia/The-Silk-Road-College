/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.uruniversity  
 * @Title: URUniversity.java  
 * @Description: u_r_university
 * @date 2016-07-30 
 * @since V1.0.0 
 *
 * Modification History:
 * Date         Author      Version     Description
 * -------------------------------------------------------------
 * 2016-07-30   初始化       V1.0.0      新建文件
 */
package cn.edu.xjtu.ikcest.uruniversity;

import com.wellbole.core.annotation.Table;
import com.wellbole.core.optlog.Optlogable;
import com.wellbole.core.kit.UuidKit;

/**  
 * @ClassName: URUniversity  
 * @Description: u_r_university 
 * @since V1.0.0  
 */
@Table(value="u_r_university",id="id")
@SuppressWarnings("serial")
public class URUniversity extends URUniversityBase<java.lang.String, URUniversity> implements Optlogable{ 
    /**
     * u_r_university DAO
     */
    public static final URUniversity DAO = new URUniversity();

    /**
     * 表定义
     */
    private static final URUniversityTable U_R_UNIVERSITY = URUniversityTable.me();
    
    /**
     * <p>Title: URUniversity</p>  
     * <p>Description: 默认构造函数</p>  
     * @since V1.0.0
     */
    public URUniversity(){
    }

    @Override
    protected boolean genId(){
        //TODO 添加你的id生成逻辑
        this.setId(UuidKit.generateUuid());
        return true;
    }

    @Override
    public String getModelOptlogStr() {
        return " u_r_university【" + "" + "】";
    }
    
}