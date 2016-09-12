/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.urwrittenby  
 * @Title: URWrittenBy.java  
 * @Description: u_r_written_by
 * @date 2016-07-30 
 * @since V1.0.0 
 *
 * Modification History:
 * Date         Author      Version     Description
 * -------------------------------------------------------------
 * 2016-07-30   初始化       V1.0.0      新建文件
 */
package cn.edu.xjtu.ikcest.urwrittenby;

import com.wellbole.core.annotation.Table;
import com.wellbole.core.optlog.Optlogable;
import com.wellbole.core.kit.UuidKit;

/**  
 * @ClassName: URWrittenBy  
 * @Description: u_r_written_by 
 * @since V1.0.0  
 */
@Table(value="u_r_written_by",id="author_id,literature_id")
@SuppressWarnings("serial")
public class URWrittenBy extends URWrittenByBase<java.lang.String, URWrittenBy> implements Optlogable{ 
    /**
     * u_r_written_by DAO
     */
    public static final URWrittenBy DAO = new URWrittenBy();

    /**
     * 表定义
     */
    private static final URWrittenByTable U_R_WRITTEN_BY = URWrittenByTable.me();
    
    /**
     * <p>Title: URWrittenBy</p>  
     * <p>Description: 默认构造函数</p>  
     * @since V1.0.0
     */
    public URWrittenBy(){
    }

    @Override
    protected boolean genId(){
        //TODO 添加你的id生成逻辑
        this.setId(UuidKit.generateUuid());
        return true;
    }

    @Override
    public String getModelOptlogStr() {
        return " u_r_written_by【" + "" + "】";
    }
    
}