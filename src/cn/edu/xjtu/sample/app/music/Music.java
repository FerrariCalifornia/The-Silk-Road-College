/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.sample.app.music  
 * @Title: Music.java  
 * @Description: music list
 * @date 2016-07-20 
 * @since V1.0.0 
 *
 * Modification History:
 * Date         Author      Version     Description
 * -------------------------------------------------------------
 * 2016-07-20   初始化       V1.0.0      新建文件
 */
package cn.edu.xjtu.sample.app.music;

import com.wellbole.core.annotation.Table;
import com.wellbole.core.optlog.Optlogable;

/**  
 * @ClassName: Music  
 * @Description: music list 
 * @since V1.0.0  
 */
@Table(value="app_music",id="id")
@SuppressWarnings("serial")
public class Music extends MusicBase<java.lang.Long, Music> implements Optlogable{ 
    /**
     * music list DAO
     */
    public static final Music DAO = new Music();

    /**
     * 表定义
     */
    private static final MusicTable MUSIC = MusicTable.me();
    
    /**
     * <p>Title: Music</p>  
     * <p>Description: 默认构造函数</p>  
     * @since V1.0.0
     */
    public Music(){
    }


    @Override
    public String getModelOptlogStr() {
        return " music list【" + "" + "】";
    }
    
}