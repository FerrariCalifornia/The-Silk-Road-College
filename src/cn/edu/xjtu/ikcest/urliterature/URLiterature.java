/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.urliterature  
 * @Title: URLiterature.java  
 * @Description: u_r_literature
 * @date 2016-07-30 
 * @since V1.0.0 
 *
 * Modification History:
 * Date         Author      Version     Description
 * -------------------------------------------------------------
 * 2016-07-30   初始化       V1.0.0      新建文件
 */
package cn.edu.xjtu.ikcest.urliterature;

import com.wellbole.core.annotation.Table;
import com.wellbole.core.optlog.Optlogable;
import com.wellbole.core.kit.UuidKit;

/**  
 * @ClassName: URLiterature  
 * @Description: u_r_literature 
 * @since V1.0.0  
 */
@Table(value="u_r_literature",id="id")
@SuppressWarnings("serial")
public class URLiterature extends URLiteratureBase<java.lang.String, URLiterature> implements Optlogable{ 
    /**
     * u_r_literature DAO
     */
    public static final URLiterature DAO = new URLiterature();

    /**
     * 表定义
     */
    private static final URLiteratureTable U_R_LITERATURE = URLiteratureTable.me();
    
    /**
     * <p>Title: URLiterature</p>  
     * <p>Description: 默认构造函数</p>  
     * @since V1.0.0
     */
    public URLiterature(){
    }

    @Override
    protected boolean genId(){
        //TODO 添加你的id生成逻辑
        this.setId(UuidKit.generateUuid());
        return true;
    }

    @Override
    public String getModelOptlogStr() {
        return " u_r_literature【" + "" + "】";
    }
    
}