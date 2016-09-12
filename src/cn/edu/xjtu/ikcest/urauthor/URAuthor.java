/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.urauthor  
 * @Title: URAuthor.java  
 * @Description: u_r_author
 * @date 2016-07-30 
 * @since V1.0.0 
 *
 * Modification History:
 * Date         Author      Version     Description
 * -------------------------------------------------------------
 * 2016-07-30   初始化       V1.0.0      新建文件
 */
package cn.edu.xjtu.ikcest.urauthor;

import com.wellbole.core.annotation.Table;
import com.wellbole.core.optlog.Optlogable;
import com.wellbole.core.kit.UuidKit;

/**  
 * @ClassName: URAuthor  
 * @Description: u_r_author 
 * @since V1.0.0  
 */
@Table(value="u_r_author",id="id")
@SuppressWarnings("serial")
public class URAuthor extends URAuthorBase<java.lang.String, URAuthor> implements Optlogable{ 
    /**
     * u_r_author DAO
     */
    public static final URAuthor DAO = new URAuthor();

    /**
     * 表定义
     */
    private static final URAuthorTable U_R_AUTHOR = URAuthorTable.me();
    
    /**
     * <p>Title: URAuthor</p>  
     * <p>Description: 默认构造函数</p>  
     * @since V1.0.0
     */
    public URAuthor(){
    }

    @Override
    protected boolean genId(){
        //TODO 添加你的id生成逻辑
        this.setId(UuidKit.generateUuid());
        return true;
    }

    @Override
    public String getModelOptlogStr() {
        return " u_r_author【" + "" + "】";
    }
    
}