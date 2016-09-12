/**
 * Copyright (C) 2016 西安交通大学
 * @Package cn.edu.xjtu.ikcest.crawlerrepo  
 * @Title: CrawlerRepoController.java  
 * @Description: crawler_repo Controller类 
 * @date 2016-07-30 
 * @since V1.0.0 
 *
 * Modification History:
 * Date         Author      Version     Description
 * -------------------------------------------------------------
 * 2016-07-30   初始化       V1.0.0      新建文件
 */
package cn.edu.xjtu.ikcest.crawlerrepo;

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
 * @ClassName: CrawlerRepoController  
 * @Description: crawler_repoController    
 * @since V1.0.0  
 */
@RequiresAuthentication
@RequiresPermissions({ "crawlerRepo" })
@MappingTo("/crawlerRepo")
public class CrawlerRepoController extends SqlBuilderBaseCrudController<java.lang.String,CrawlerRepo> {
    
    private static final Log LOG = Log.getLog(CrawlerRepoController.class);

    private static final CrawlerRepoTable CRAWLER_REPO = CrawlerRepoTable.me();
    
    public CrawlerRepoController(){
        //设定是否支持自动添加操作日志
        this.setSupportAutoAddOptlog(true);
        //自动填充
        //this.setAutoSetDictCodes(new String[]{"",""});
        this.setSupportPager(true);
    }

    @Override
    protected CrawlerRepo getDaoModel() {
        return CrawlerRepo.DAO;
    }

    @Override
    protected java.lang.String getParaId() {
        return this.getPara("id");
    }

    @Override
    public void index() {
        this.render("/cn/edu/xjtu/ikcest/crawlerrepo/tpl/index.tpl");
    }

    @Override
    protected SelectBuilder beforeList(SelectBuilder sql) {
        String keyword=this.getPara("keyword");
        LOG.info("keyword="+keyword);
        if(StrKit.notBlank(keyword)){
            //sql.and(CRAWLER_REPO.NAME.like("%"+keyword+"%"));
        }
        return sql;
    }

    public void downloadTemplate(){
        this.renderFile("crawler_repo.xls");
    }
    
    @Before({Tx.class})
    public void uploadFile(){
        //SimpleUser optUser = this.getOptUser();
        UploadFile file = this.getFile("upload");
        LOG.info("uploadFile fileName=" + file.getFileName());
        LOG.info("uploadFile originalFileName=" + file.getOriginalFileName());
        DataReader reader = new ExcelDataReader("crawler_repo", file.getFile(), CrawlerRepo.DAO.getTitleMap());
        DataTable dataTable = reader.read();
        int importNum = 0;
        int existsNum = 0;
        if (dataTable.getSize() > 0) {
            for(Map<String, Object> row : dataTable.getRows()){
                CrawlerRepo item = new CrawlerRepo();
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
    @Override
    protected AjaxReturn beforeCreate(CrawlerRepo m) {
    	// TODO Auto-generated method stub
    	m.setCreatedAt(new Date().getTime());
    	return super.beforeCreate(m);
    }
}