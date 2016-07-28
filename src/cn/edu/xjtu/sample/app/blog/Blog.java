/**
 * Copyright (C) 2016 西安交通大学数据与信息中心
 * @Package cn.edu.xjtu.ic.web.app.blog  
 * @Title: Blog.java  
 * @Description: 博客
 * @date 2016-07-18 
 * @since V1.0.0 
 *
 * Modification History:
 * Date         Author      Version     Description
 * -------------------------------------------------------------
 * 2016-07-18   初始化       V1.0.0      新建文件
 */
package cn.edu.xjtu.sample.app.blog;

import java.util.List;

import com.jfinal.plugin.sqlbuilder.buidler.SelectBuilder;
import com.jfinal.plugin.sqlbuilder.model.AutoCacheable;
import com.wellbole.core.annotation.Table;
import com.wellbole.core.optlog.Optlogable;

/**  
 * @ClassName: Blog  
 * @Description: 博客 
 * @since V1.0.0  
 */
@Table(value="app_blog",id="id")
@SuppressWarnings("serial")
public class Blog extends BlogBase<java.lang.Long, Blog> implements Optlogable, AutoCacheable{ 
    /**
     * 博客 DAO
     */
    public static final Blog DAO = new Blog();

    /**
     * 表定义
     */
    private static final BlogTable BLOG = BlogTable.me();
    
    /**
     * <p>Title: Blog</p>  
     * <p>Description: 默认构造函数</p>  
     * @since V1.0.0
     */
    public Blog(){
    }


    @Override
    public String getModelOptlogStr() {
        return " 博客【" + this.getTitle() + "】";
    }
    
    public static List<Blog> findLastFiveBlog(String username){
    	SelectBuilder sql = new SelectBuilder();
    	sql.select()
    		  .from(BLOG)
    		  .where(BLOG.POST_BY.eq(username))
    		  .orderBy(BLOG.POST_BY.desc())
    		  .limit(5);
    	return Blog.DAO.find(sql);
    }
    
}