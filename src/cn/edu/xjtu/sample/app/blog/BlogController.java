/**
 * Copyright (C) 2016 西安交通大学数据与信息中心
 * @Package cn.edu.xjtu.ic.web.app.blog  
 * @Title: BlogController.java  
 * @Description: 博客 Controller类 
 * @date 2016-07-18 
 * @since V1.0.0 
 *
 * Modification History:
 * Date         Author      Version     Description
 * -------------------------------------------------------------
 * 2016-07-18   初始化       V1.0.0      新建文件
 */
package cn.edu.xjtu.sample.app.blog;

import java.util.Date;
import java.util.Map;

import org.apache.shiro.authz.annotation.RequiresAuthentication;
import org.apache.shiro.authz.annotation.RequiresPermissions;

import com.jfinal.aop.Before;
import com.jfinal.core.param.Param;
import com.jfinal.kit.StrKit;
import com.jfinal.log.Log;
import com.jfinal.plugin.activerecord.tx.Tx;
import com.jfinal.plugin.sqlbuilder.buidler.SelectBuilder;
import com.jfinal.upload.UploadFile;
import com.wellbole.core.ajax.AjaxReturn;
import com.wellbole.core.annotation.MappingTo;
import com.wellbole.core.model.SimpleUser;
import com.wellbole.data.reader.DataReader;
import com.wellbole.data.reader.DataTable;
import com.wellbole.data.reader.excel.ExcelDataReader;
import com.wellbole.web.core.controller.SqlBuilderBaseCrudController;
import com.wellbole.web.core.upload.UploadResult;
import com.wellbole.web.sys.user.UserTable;

/**  
 * @ClassName: BlogController  
 * @Description: 博客Controller    
 * @since V1.0.0  
 */
@RequiresAuthentication
@RequiresPermissions({ "app:blog" })
@MappingTo("/app/blog")
public class BlogController extends SqlBuilderBaseCrudController<java.lang.Long,Blog> {
    
    private static final Log LOG = Log.getLog(BlogController.class);

    private static final BlogTable BLOG = BlogTable.me();
    private static final UserTable USER = UserTable.me();
    
    public BlogController(){
        //设定是否支持自动添加操作日志
        this.setSupportAutoAddOptlog(true);
        //自动填充
        this.setAutoSetDictCodes(new String[]{"type_code"});
        this.setSupportPager(true);
    }

    @Override
    protected Blog getDaoModel() {
        return Blog.DAO;
    }
    
    

    @Override
	protected AjaxReturn beforeCreate(Blog m) {
    	SimpleUser suer = this.getOptUser();
    	m.setPostBy(suer.getUsername());
    	m.setPostAt(new Date());
		return super.beforeCreate(m);
	}

	@Override
    protected java.lang.Long getParaId() {
        return this.getParaToLong("id");
    }

    @Override
    public void index() {
        this.render("/cn/edu/xjtu/sample/app/blog/tpl/index.tpl");
    }

    @Override
    protected SelectBuilder beforeList(SelectBuilder sql) {
        String keyword=this.getPara("keyword");
        LOG.info("keyword="+keyword);
        if(StrKit.notBlank(keyword)){
            sql.and(BLOG.TITLE.like("%"+keyword+"%"));
        }
        sql.and(BLOG.POST_BY.eq("admin"));
		sql.orderBy(BLOG.POST_BY.desc());
		//sql.limit(5);
		
		sql.select(USER.MOBILE,USER.ORG_PATH);
		sql.join(USER).on(BLOG.POST_BY.eq(USER.USERNAME));
		
        return sql;
    }

    public void downloadTemplate(){
        this.renderFile("博客.xls");
    }
    
    @Before({Tx.class})
    public void uploadFile(){
        //SimpleUser optUser = this.getOptUser();
        UploadFile file = this.getFile("upload");
        LOG.info("uploadFile fileName=" + file.getFileName());
        LOG.info("uploadFile originalFileName=" + file.getOriginalFileName());
        DataReader reader = new ExcelDataReader("app_blog", file.getFile(), Blog.DAO.getTitleMap());
        DataTable dataTable = reader.read();
        int importNum = 0;
        int existsNum = 0;
        if (dataTable.getSize() > 0) {
            for(Map<String, Object> row : dataTable.getRows()){
                Blog item = new Blog();
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
    
    public void findLastFiveBlog(@Param(value="username",defaultValue="admin") String un){
    	this.renderJson(Blog.findLastFiveBlog(un));
    }
}