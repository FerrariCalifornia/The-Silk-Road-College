/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.ebookrepo  
 * @Title: EbookRepo.java  
 * @Description: ebook_repo
 * @date 2016-07-30 
 * @since V1.0.0 
 *
 * Modification History:
 * Date         Author      Version     Description
 * -------------------------------------------------------------
 * 2016-07-30   初始化       V1.0.0      新建文件
 */
package cn.edu.xjtu.ikcest.ebookrepo;

import com.wellbole.core.annotation.Table;
import com.wellbole.core.optlog.Optlogable;
import com.wellbole.core.kit.UuidKit;

/**  
 * @ClassName: EbookRepo  
 * @Description: ebook_repo 
 * @since V1.0.0  
 */
@Table(value="ebook_repo",id="id")
@SuppressWarnings("serial")
public class EbookRepo extends EbookRepoBase<java.lang.String, EbookRepo> implements Optlogable{ 
    /**
     * ebook_repo DAO
     */
    public static final EbookRepo DAO = new EbookRepo();

    /**
     * 表定义
     */
    private static final EbookRepoTable EBOOK_REPO = EbookRepoTable.me();
    
    /**
     * <p>Title: EbookRepo</p>  
     * <p>Description: 默认构造函数</p>  
     * @since V1.0.0
     */
    public EbookRepo(){
    }

    @Override
    protected boolean genId(){
        //TODO 添加你的id生成逻辑
        this.setId(UuidKit.generateUuid());
        return true;
    }

    @Override
    public String getModelOptlogStr() {
        return " ebook_repo【" + "" + "】";
    }
    
}