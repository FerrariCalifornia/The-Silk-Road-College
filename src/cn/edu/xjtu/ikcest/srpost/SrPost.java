/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.srpost  
 * @Title: SrPost.java  
 * @Description: sr_post
 * @date 2016-07-30 
 * @since V1.0.0 
 *
 * Modification History:
 * Date         Author      Version     Description
 * -------------------------------------------------------------
 * 2016-07-30   初始化       V1.0.0      新建文件
 */
package cn.edu.xjtu.ikcest.srpost;

import com.wellbole.core.annotation.Table;
import com.wellbole.core.optlog.Optlogable;
import com.wellbole.core.kit.UuidKit;

/**  
 * @ClassName: SrPost  
 * @Description: sr_post 
 * @since V1.0.0  
 */
@Table(value="sr_post",id="id")
@SuppressWarnings("serial")
public class SrPost extends SrPostBase<java.lang.String, SrPost> implements Optlogable{ 
    /**
     * sr_post DAO
     */
    public static final SrPost DAO = new SrPost();

    /**
     * 表定义
     */
    private static final SrPostTable SR_POST = SrPostTable.me();
    
    /**
     * <p>Title: SrPost</p>  
     * <p>Description: 默认构造函数</p>  
     * @since V1.0.0
     */
    public SrPost(){
    }

    @Override
    protected boolean genId(){
        //TODO 添加你的id生成逻辑
        this.setId(UuidKit.generateUuid());
        return true;
    }

    @Override
    public String getModelOptlogStr() {
        return " sr_post【" + "" + "】";
    }
    
}