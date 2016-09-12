/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.urconference  
 * @Title: URConference.java  
 * @Description: u_r_conference
 * @date 2016-07-30 
 * @since V1.0.0 
 *
 * Modification History:
 * Date         Author      Version     Description
 * -------------------------------------------------------------
 * 2016-07-30   初始化       V1.0.0      新建文件
 */
package cn.edu.xjtu.ikcest.urconference;

import com.wellbole.core.annotation.Table;
import com.wellbole.core.optlog.Optlogable;
import com.wellbole.core.kit.UuidKit;

/**  
 * @ClassName: URConference  
 * @Description: u_r_conference 
 * @since V1.0.0  
 */
@Table(value="u_r_conference",id="name")
@SuppressWarnings("serial")
public class URConference extends URConferenceBase<java.lang.String, URConference> implements Optlogable{ 
    /**
     * u_r_conference DAO
     */
    public static final URConference DAO = new URConference();

    /**
     * 表定义
     */
    private static final URConferenceTable U_R_CONFERENCE = URConferenceTable.me();
    
    /**
     * <p>Title: URConference</p>  
     * <p>Description: 默认构造函数</p>  
     * @since V1.0.0
     */
    public URConference(){
    }

    @Override
    protected boolean genId(){
        //TODO 添加你的id生成逻辑
        this.setId(UuidKit.generateUuid());
        return true;
    }

    @Override
    public String getModelOptlogStr() {
        return " u_r_conference【" + "" + "】";
    }
    
}