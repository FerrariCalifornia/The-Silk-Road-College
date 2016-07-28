/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.sample.app.school  
 * @Title: School.java  
 * @Description: school
 * @date 2016-07-20 
 * @since V1.0.0 
 *
 * Modification History:
 * Date         Author      Version     Description
 * -------------------------------------------------------------
 * 2016-07-20   初始化       V1.0.0      新建文件
 */
package cn.edu.xjtu.sample.app.school;

import com.wellbole.core.annotation.Table;
import com.wellbole.core.optlog.Optlogable;

/**  
 * @ClassName: School  
 * @Description: school 
 * @since V1.0.0  
 */
@Table(value="app_school",id="id")
@SuppressWarnings("serial")
public class School extends SchoolBase<java.lang.Long, School> implements Optlogable{ 
    /**
     * school DAO
     */
    public static final School DAO = new School();

    /**
     * 表定义
     */
    private static final SchoolTable SCHOOL = SchoolTable.me();
    
    /**
     * <p>Title: School</p>  
     * <p>Description: 默认构造函数</p>  
     * @since V1.0.0
     */
    public School(){
    }


    @Override
    public String getModelOptlogStr() {
        return " school【" + "" + "】";
    }
    
}