package cn.edu.xjtu.sample;

import com.jfinal.kit.Prop;
import com.jfinal.kit.PropKit;
import com.jfinal.plugin.activerecord.dialect.PostgreSqlDialect;
import com.jfinal.plugin.druid.DruidPlugin;
import com.wellbole.core.cg.CodeGeneraterManager;
import com.wellbole.core.cg.CodeGeneraterType;

public class CgMain {
    private CgMain(){
        
    }

    public static void main(String[] args) throws Exception {
        Prop db = PropKit.use("database.properties");
        String poolType = "sample";
        
        DruidPlugin druid = new DruidPlugin(
                db.get(poolType + ".dataSource.url"), 
                db.get(poolType + ".dataSource.username"), 
                db.get(poolType + ".dataSource.password"), 
                db.get(poolType + ".dataSource.driverClass"));
        //解密密码
        //druid.setFilters("config");
        druid.start();
        //"sys_role_welcome",
        String[] skipTables = { "sys_dict", "sys_dict_type", "sys_optlog", "sys_resource", "sys_role_resource", "sys_role" , "sys_user_role", "sys_version", "sys_setting",  "sys_file","sys_org","sys_message","sys_user","sys_tag","sys_tag_obj" };
        //String[] skipTables = {};
        String packageUrl = "cn.edu.xjtu.sample";
        String company = "西安交通大学";
        CodeGeneraterManager cgm = new CodeGeneraterManager(CodeGeneraterType.SQLBUIlDER, druid,new PostgreSqlDialect(), packageUrl);
        cgm.setCompany(company);
        cgm.addExcludedTable(skipTables);
        cgm.setAllowTableNamePrefixes("app_");
        //cgm.addIncludeTable("app_blog");
        cgm.generate("*");
        druid.stop();
    }

}
