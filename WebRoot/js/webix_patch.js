/**
 * 选中每页的数据，最顶上
 */
webix.ui.datafilter.pageMasterCheckbox ={
	getValue:function(){},
	setValue:function(){},
	getHelper:function(node, config){
		return {
			check:function(){ config.checked = false; node.onclick(); },
			uncheck:function(){ config.checked = true; node.onclick(); },
			isChecked:function(){ return config.checked; }
		};
	},
	refresh:function(master, node, config){
		node.onclick = function(){
			this.getElementsByTagName("input")[0].checked = config.checked = !config.checked;
			var column = master.getColumnConfig(config.columnId);
			var checked = config.checked ? column.checkValue : column.uncheckValue;
			var data = master.data;
			for(var index = data.$min; index <= data.$max; index++){
				var rowId = data.order[index];
				var obj = data.pull[rowId];
				if(obj){
					obj[config.columnId] = checked;
					master.callEvent("onCheck", [obj.id, config.columnId, checked]);
					data.callEvent("onStoreUpdated", [obj.id, obj, "save"]);
				}
			}
			master.refresh();
		};
	},
	render:function(master, config){ 
		return "<input type='checkbox' "+(config.checked?"checked='1'":"")+">"; 
	}
};

/**
 * 增加遍历每页的数据
 */
webix.extend(webix.ui.datatable, {
	pageEachRow:function(handler){
		var order = this.data.order;
		for (var i=this.data.$min; i<this.data.$max; i++)
			handler.call(this, order[i]);
	}
});

/**
 * 文件上传
 */

webix.type(webix.ui.list, {
    name:"wellboleUploaderList",
    template:function(f,type){
        var html = "<div class='wellboleUploaderList-overall'><div class='wellboleUploaderList-name'>"+f.name+"</div>";
        //var uploader =  webix.$$(this.config.uploader);
        //多文件状态下，允许删除
        //var allowDelete =uploader.multiple;
        //若只支持单文件，则不允许删除
       // if(allowDelete){
         //   html += "<div class='remove_file'><span style='color:#AAA' class='cancel_icon'></span></div>";
       // }
        //alert(f.status);
        //var uploader =  webix.$$(type.config.uploader);
        html += "<div class='wellboleUploaderList-status'>";
        html += "<div class='wellboleUploaderList-progress "+f.status+"' style='width:"+(f.status == 'transfer'||f.status=="server"?f.percent+"%": "0px")+"'></div>";
        html += "<div class='wellboleUploaderList-message "+ f.status+"'>"+type.status(f)+"</div>";
        html +=  "</div>";
        var sizeArray = f.sizetext.split(' ');
        if(sizeArray != null && sizeArray[0] !=null && parseFloat(sizeArray[0]) == sizeArray[0] ){
        	var doneSize = 0;
        	if(webix.notNull(f.percent)){
        		doneSize = parseFloat(sizeArray[0]) * f.percent /100;
        	}
	        var doneSizeText = ""+Math.round(doneSize*100)/100 + " " + sizeArray[1];
	        html += "<div class='wellboleUploaderList-size'>"+ doneSizeText + "/" +  f.sizetext+"</div></div>";
        }else{
        	html += "<div class='wellboleUploaderList-size'>0/" +  f.sizetext+"</div></div>";
        }
        return html;
     },
    status:function(f){
        var messages = {
            server: "文件上传完成",
            error: "发生错误，请重试",
            client: "准备上传",
            transfer:  f.percent+"%"
        };
        if(f.percent == 100 && f.status == 'transfer'){
        	return "上传即将结束，请稍后……";
        }
        return messages[f.status]

    },
    on_click:{
        "remove_file":function(ev, id){
            $$(this.config.uploader).files.remove(id);
        }
    },
    height: 35
});

/**
 * 扩展数据检查规则
 */
webix.extend(webix.rules, {
	/**
	 * 去掉两侧空格
	 */
	_trim : function(value){
		return value.replace(/^\s*/,"").replace(/\s*$/,"");
	},
	/**
	 * 是否匹配某个正则表达式
	 */
	isPattern: function(pattern, value){
		return pattern.test(webix.rules._trim(value));
	},
	
	/**
	 * 是否匹配某个正则表达式(允许为空)
	 */
	isPatternNullable: function(pattern, value){
		var v = webix.rules._trim(value);
		if(webix.isNull(v)){
			return true;
		}
		return pattern.test(v);
	},
	
	isEmailNullable: function(value){
		return webix.rules.isPatternNullable(/^[^@]+@[^@]+\.[^@]+$/,value);
	},
	
	/**
	 * 判断是否是自然数
	 */
	isNaturalNumber: function(value){
		var intValue = parseInt(value);
		return (intValue == value && intValue >=0);
	},
	
	/**
	 * 判断是否是自然数(允许为空)
	 */
	isNaturalNumberNullable: function(value){
		var v = webix.rules._trim(value);
		if(webix.isNull(v)){
			return true;
		}
		return webix.rules.isNaturalNumber(v);
	},
	/**
	 * 判断是否是身份证号
	 */
	isIdCard: function(value){
		var v = webix.rules._trim(value);
		//1.为空较验
		if(v==""){
			return false;
		}
		//长度及格式验证
		if(!(/^\d{17}(\d|x|X)$/i.test(v))){
			return false;
		}
		//省份代码检查
		var provinceCode=parseInt(v.substr(0,2));
		if(provinceCode<11||provinceCode>91){
			return false;
		}
		//出生日期检查
		var birthday=v.substr(6,8);
		if(!new Date(birthday.substr(0,4)+'/'+birthday.substr(4,2)+'/'+birthday.substr(6,2))){
			return false;
		}
		//校验码验证
		v=v.replace(/x$/i,'a');
		v=v.replace(/X$/i,'a');
		var verifyCode=0;
		for(var i=17;i>=0;i--){
			verifyCode+=(Math.pow(2,i)%11)*parseInt(v.charAt(17-i),11);
		}
		if(verifyCode%11!=1){
			return false;
		}
		return true;
	},
	
	/**
	 * 判断是否是身份证号(允许为空)
	 */
	isIdCardNullable: function(value){
		var v = webix.rules._trim(value);
		if(webix.isNull(v)){
			return true;
		}
		return webix.rules.isIdCard(v);
	},
	/**
	 * 国内手机号码
	 */
	isMobile: function(value){
		return webix.rules.isPattern(/(^0?[1][34578][0-9]{9}$)/,value);
	},
	
	/**
	 * 国内手机号码(允许为空)
	 */
	isMobileNullable: function(value){
		return webix.rules.isPatternNullable(/(^0?[1][34578][0-9]{9}$)/,value);
	},
	
	/**
	 * 国内座机
	 */
	isTel: function(value){
		return webix.rules.isPattern(/(^((0[0-9]{3})?(0[12][0-9])?-?)?\d{6,8}$)|(^0?[1][358][0-9]{9}$)/,value);
	},
	
	/**
	 * 国内座机(允许为空)
	 */
	isTelNullable: function(value){
		return webix.rules.isPatternNullable(/(^((0[0-9]{3})?(0[12][0-9])?-?)?\d{6,8}$)|(^0?[1][358][0-9]{9}$)/,value);
	},
	
	/**
	 * 邮政编码
	 */
	isZip: function(value){
		return webix.rules.isPattern(/^[0-9]\d{6}$/,value);
	},
	
	/**
	 * 邮政编码(允许为空)
	 */
	isZipNullable: function(value){
		return webix.rules.isPatternNullable(/^[0-9]\d{6}$/,value);
	},
	
	/**
	 * QQ
	 */
	isQq: function(value){
		return webix.rules.isPattern(/^[1-9]\d{4,8}$/,value);
	},
	
	/**
	 * QQ(允许为空)
	 */
	isQqNullable: function(value){
		return webix.rules.isPatternNullable(/^[1-9]\d{4,8}$/,value);
	},
	/**
	 * 中文字符
	 */
	isZhCn: function(value){
		return webix.rules.isPattern(/^[\u4e00-\u9fa5]+$/,value);
	},
	/**
	 * 中文字符(允许为空)
	 */
	isZhCnNullable: function(value){
		return webix.rules.isPatternNullable(/^[\u4e00-\u9fa5]+$/,value);
	},
	/**
	 * IP地址
	 */
	isIp: function(value){
		return webix.rules.isPattern(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,value);
	},
	/**
	 * IP地址(允许为空)
	 */
	isIpNullable: function(value){
		return webix.rules.isPatternNullable(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,value);
	},
	/**
	 * Url
	 */
	isUrl: function(value){
		return webix.rules.isPattern(/^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i,value);
	},
	/**
	 * Url
	 */
	isUrlNullable: function(value){
		return webix.rules.isPatternNullable(/^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i,value);
	},
	/**
	 * 是验证码吗
	 */
	isCaptcha : function(value){
		//"3", "4", "5", "6", "7", "8", "9", "A", "B", "D", "E", "F", "H", "J", "K", "M", "N", "P",  "R", "S", "T", "U", "V", "W", "X", "Y"
		return webix.rules.isPattern(/^[3456789ABDEFHJKMNPRSTUVWXY]{4}$/,value);
	},
	/**
	 * 以字母开头，允许下划线，数字，字母
	 */
	isUsername: function(value){
		return webix.rules.isPattern(/^[a-zA-Z]{1}[a-zA-Z0-9_]*$/g,value);
	},
	/**
	 * 最小／最大长度
	 */
	isUsernameWinLen: function(value, minLen, maxLen){
		var ret =  webix.rules.isPattern(/^[a-zA-Z]{1}[a-zA-Z0-9_]*$/g,value);
		if(ret){
			//正则成功，匹配长度
			var v = webix.rules._trim(value);
			if(webix.isNull(v)){
				return false;
			}
			//长度检查
			var len = v.length;
			if(len < minLen || len > maxLen){
				return false;
			}
		}
		return ret;
	}
});

/**
 * 判断是否为空
 */
webix.isNull = function(obj){
	if(typeof(obj)=='undefined'||obj==null||(obj+"")==""){
		return true;
	}else{
		return false;
	}
};

/**
 * 判读是否为空
 */
webix.notNull = function(obj){
	if(typeof(obj)=='undefined'||obj==null||(obj+"")==""){
		return false;
	}else{
		return true;
	}
};

webix.protoUI({
	name : "datasuggest",
	defaults : {
		type : "dataview",
		fitMaster : false,
		width : 0,
		body : {
			xCount : 3,
			autoheight : true,
			select : true
		}
	},
	$init : function() {
		this.attachEvent('onValueSuggest', function(data) {
			webix.delay(function() {
				webix.callEvent("onEditEnd", []);
			});
		});
	}
}, webix.ui.suggest);

webix.protoUI({
	name : "gridsuggest",
	defaults : {
		type : "datatable",
		fitMaster : false,
		width : 0,
		body : {
			navigation : true,
			autoheight : true,
			autowidth : true,
			select : true
		},
		filter : function(item, value) {
			var text = this.config.template(item);
			if (text.toString().toLowerCase().indexOf(
					value.toLowerCase()) === 0)
				return true;
			return false;
		}
	},
	$init : function(obj) {
		if (!obj.body.columns)
			obj.body.autoConfig = true;
		if (!obj.template)
			obj.template = webix.bind(this._getText, this);

		this.attachEvent('onValueSuggest', function() {
			webix.delay(function() {
				webix.callEvent("onEditEnd", []);
			});
		});
	},

	_getText : function(item, common) {
		var grid = this.getBody();
		var value = this.config.textValue || grid.config.columns[0].id;
		return grid.getText(item.id, value);
	}
}, webix.ui.suggest);


webix.protoUI({
	name : "treesuggest",
	defaults : {
		type : "tree",
		fitMaster : false,
		width : 0,
		body : {
			navigation : true,
			header : false,
			borderless : true,
			select : true
		},
		filter : function(item, value) {
			var text = this.config.template(item);
			if (text.toString().toLowerCase().indexOf(
					value.toLowerCase()) === 0)
				return true;
			return false;
		}
	},
	$init : function(obj) {
		obj.body.autoConfig = true;
		if (!obj.template)
			obj.template = webix.bind(this._getText, this);

		this.attachEvent('onValueSuggest', function() {
			webix.delay(function() {
				webix.callEvent("onEditEnd", []);
			});
		});
	},
	_getText : function(item, common) {
		var tree = this.getBody();
		return value = tree.getItem(item.id).value;
	}
}, webix.ui.suggest);

webix.protoUI({
	name:"treetablesuggest",
	defaults:{
		type:"treetable",
		fitMaster:false,
		width:0,
		body:{
			navigation:true,
			header:false,
			borderless:true,
			select:true,
			on:{'onBeforeSelect':function(item){
				if(item.data){
					//非叶子节点不能选择
					return false;
				}
				return true;
			}}
		},
		filter:function(item, value){
			var text = this.config.template(item);
			if (text.toString().toLowerCase().indexOf(value.toLowerCase())===0) return true;
				return false;
		}
	},
	$init:function(obj){
		if (!obj.body.columns)
			obj.body.autoConfig = true;
		if (!obj.template)
			obj.template = webix.bind(this._getText, this);
		this.attachEvent('onValueSuggest', function(){
           	webix.delay(function(){
           		webix.callEvent("onEditEnd",[]);
            });
        });
	},
	
	getValue:function(){
		var item = this.getList().getSelectedItem();
		if(webix.isNull(item)){
			return "";
		}
		if(item.hasChildren){
			return "";
		}
		if(item.value){
			return item.value;
		}
		return "";
	},
	
	setValue:function(value){
		var list = this.getList();
		if(value){
			list.data.each(function(obj){
				if(obj.value == value){
					list.select(obj.id);
	                list.showItem(obj.id);
				}
			});
        }else{
            list.unselect();
            list.showItem(list.getFirstId());
        }
	},
	
	_getText:function(item, common){
		return item.value;
	}
}, webix.ui.suggest);


webix.protoUI({
    name:"tagsinput",
    $init:function(config){
        this.$view.className = "webix_el_box";
        this.$view.innerHTML ='<div class="webix_inp_static" tabindex="0" onclick="" style="width:' + this.$width+ 'px;height:'+this.$height+'px;text-align: left;height:auto"><ul class="webix_multicombo_listbox" style="line-height:30px"><li class="webix_multicombo_value" style="line-height:24px;" value="9"><span>The Dark Knight</span><span class="webix_multicombo_delete">x</span></li></ul></div>';
    },
    defaults:{
        height:50,
        items:webix.toArray([])
    },
    getVisibleCount:function(){
        return Math.floor(this._content_height / this.type.height);
    },
    
    data_setter:function(value){
        this.config.items=webix.toArray(value);
        this.render();
    },
    
    __isExist:function(user){
    	var parentId = user.parentId;
    	var userType = user.type;
    	var ret = false;
    	this.config.items.each(function(item){
    		if(user.id == item.id){
    			ret =  true;
    		}
    		if(userType == "notifyUser" || userType == "org" || userType == "groups"){
    			if(parentId == item.id){
    				//包含了。
    				ret =  true;
    			}
    		}
    		//
    		if(userType == "notifyUser" || userType == "org" ){
    			//局部包含
    			if(item.type == "org"){
    				if(user.org_path.indexOf(item.org_path) === 0){
    					ret =  true;
            		}
    			}
    		}
        });
    	return ret;
    },
    
    clearAll:function(){
    	this.config.items=webix.toArray();
        this.render();
    },
    
    addTag:function(tag){
    	var that = this;
    	var tagArray = webix.toArray([]);
    	//不是数组的转化成数组
    	if(!webix.isArray(tag)){
    		tagArray.push(tag);
    	}else{
    		tagArray = tag;
    	}
    	//统一处理
    	var addOk = false;
    	tagArray.each(function(item){
    		if(!that.__isExist(item)){
    			that.config.items.push(item);
    			addOk = true;
    		}
        });
    	this.render();
    	return addOk;
    },
    
    
    $getSize:function(){
        return [1,100000,this.config.height,this.config.width,1];
    },
    
    template_setter:function(value){
        this.type.template=webix.template(value);
    },
    
    type:{
        template:webix.template.empty,
        templateStart:webix.template.empty,
        templateEnd:webix.template.empty
    },
    render:function(){
    	this.$view.className = "webix_el_box";
    	var bodyStart = '<div class="webix_inp_static" tabindex="0" onclick="" style="width:' + this.$width+ 'px;height:'+this.$height+'px;text-align: left;height:auto"><ul class="webix_multicombo_listbox" style="line-height:30px">';
    	var bodyEnd   = '</ul></div>';
    	var body = "";
    	var that = this;
    	var index = 0;
    	this.config.items.each(function(item){
    		var content = that.type.template(item);
    		if(null == item ){
    			reutrn;
    		}
    		var id = item.id||webix.uid();
    		body = body + '<li class="webix_multicombo_value" style="line-height:24px;" index="'+index+'"><span>'+content+'</span><span class="webix_multicombo_delete">X</span></li>';
    		index = index + 1;
    	});
        this.$view.innerHTML =bodyStart + body + bodyEnd;
    },
    
    on_click: {
        "webix_multicombo_delete": function(e,view,node){
            var index;
            if(node && (index = node.parentNode.getAttribute("index"))){
                //this._removeValue(index);
            	this.config.items.removeAt(index);
                this.render();
            }
            return false;
        }
    },
    
    _removeValue:function(index){
    	var findIndex = -1;
    	var index = 0;
    	this.config.items.each(function(item){
    		if(item.id == id){
    			findIndex = index;
    		}
    		index = index + 1;
        });
        
    	if( findIndex >  -1){
    		this.config.items.removeAt(findIndex);
    	}
    },

    $setSize:function(x,y){ 
        if (webix.ui.view.prototype.$setSize.call(this,x,y)){
        	this.$view.childNodes[0].style.width = this.$width +"px";
            this.$view.childNodes[0].style.height = this.$height+"px";
        }
    }, 
    getValue:function(){
    	var ret = "";
    	var isFirst = true;
    	this.config.items.each(function(item){
    		//第一个不需要加，
    		if(isFirst){
    			isFirst = false;
    			ret = item.id;
    		}else{
    			ret = ret + "," + item.id;
    		}
        });
        return ret;
    },
}, webix.MouseEvents, webix.EventSystem, webix.ui.view);

webix.addPrefix=function(prefix, obj){
	var newObj = {};
	for(var p in obj){
		if(typeof(obj[p]) !="function"){ 
			newObj[prefix+p]=obj[p];
		} 
	}
	return newObj;
};

webix.removePrefix=function(prefix, obj){
	var newObj = {};
	var prefixLen = prefix.length;
	for(var p in obj){
		if(typeof(obj[p]) !="function"){ 
			newObj[p.substring(prefixLen)]=obj[p];
		} 
	}
	return newObj;
};

