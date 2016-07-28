/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.sample.app.music  
 * @Title: MusicController.java  
 * @Description: music list Controller类 
 * @date 2016-07-20 
 * @since V1.0.0 
 *
 * Modification History:
 * Date         Author      Version     Description
 * -------------------------------------------------------------
 * 2016-07-20   初始化       V1.0.0      新建文件
 */
package cn.edu.xjtu.sample.app.music;

import java.util.Date;
import java.util.Map;

import org.apache.shiro.authz.annotation.RequiresAuthentication;
import org.apache.shiro.authz.annotation.RequiresPermissions;

import com.jfinal.aop.Before;
import com.jfinal.kit.StrKit;
import com.jfinal.log.Log;
import com.jfinal.plugin.activerecord.tx.Tx;
import com.jfinal.plugin.sqlbuilder.buidler.SelectBuilder;
import com.jfinal.upload.UploadFile;
import com.wellbole.core.ajax.AjaxReturn;
import com.wellbole.core.annotation.MappingTo;
import com.wellbole.web.core.controller.SqlBuilderBaseCrudController;
import com.wellbole.core.annotation.MappingTo;
import com.wellbole.core.model.SimpleUser;
import com.wellbole.data.reader.DataReader;
import com.wellbole.data.reader.DataTable;
import com.wellbole.data.reader.excel.ExcelDataReader;
import com.wellbole.web.core.upload.UploadResult;

/**  
 * @ClassName: MusicController  
 * @Description: music listController    
 * @since V1.0.0  
 */
@RequiresAuthentication
@RequiresPermissions({ "app:music" })
@MappingTo("/app/music")
public class MusicController extends SqlBuilderBaseCrudController<java.lang.Long,Music> {
    
    private static final Log LOG = Log.getLog(MusicController.class);

    private static final MusicTable MUSIC = MusicTable.me();
    
    public MusicController(){
        //设定是否支持自动添加操作日志
        this.setSupportAutoAddOptlog(true);
        //自动填充
        //this.setAutoSetDictCodes(new String[]{"",""});
        this.setSupportPager(true);
    }

    
    
    @Override
    protected Music getDaoModel() {
        return Music.DAO;
    }

    
//    
//    @Override
//    protected AjaxReturn beforeCreate(Music m) {
//    	// TODO Auto-generated method stub
//    	SimpleUser user = this.getOptUser();
//    	m.setName(user.getUsername());
//    	
//    	return super.beforeCreate(m);
//    }
    
    @Override
    protected java.lang.Long getParaId() {
        return this.getParaToLong("id");
    }

    @Override
    public void index() {
        this.render("/cn/edu/xjtu/sample/app/music/tpl/index.tpl");
    }

    @Override
    protected SelectBuilder beforeList(SelectBuilder sql) {
        String keyword=this.getPara("keyword");
        LOG.info("keyword="+keyword);
        if(StrKit.notBlank(keyword)){
            //sql.and(MUSIC.NAME.like("%"+keyword+"%"));
        }
        return sql;
    }

    public void downloadTemplate(){
        this.renderFile("music list.xls");
    }
    
    @Before({Tx.class})
    public void uploadFile(){
        //SimpleUser optUser = this.getOptUser();
        UploadFile file = this.getFile("upload");
        LOG.info("uploadFile fileName=" + file.getFileName());
        LOG.info("uploadFile originalFileName=" + file.getOriginalFileName());
        DataReader reader = new ExcelDataReader("app_music", file.getFile(), Music.DAO.getTitleMap());
        DataTable dataTable = reader.read();
        int importNum = 0;
        int existsNum = 0;
        if (dataTable.getSize() > 0) {
            for(Map<String, Object> row : dataTable.getRows()){
                Music item = new Music();
                item.safeSetAttrs(row);
                //空行检查
                //判断是否已经导入了。
                //item.setOptUser(optUser);
                item.save();
                importNum++;
            }
        }
        String msg = "成功导入" + importNum + "条";
        if(existsNum > 0){
            msg +=",重复记录" + existsNum + "条";
        }
        UploadResult ret = UploadResult.makeOk().setCode(200).setMsg(msg);
        this.renderJson(ret);
    }
}