/**
 * 更新履历
 * v3.4 2016-01-25 新增／更新时，锁定提交按钮，避免重复提交。
 */

/**
 * 设定webix的语言
 */
webix.i18n.setLocale("zh-CN");

if (!window.wellbole) {
	wellbole = {};
}

//包含动画的窗口
webix.protoUI({
	  name:"AnimatedWindow", 
	  $init:function(){
	    this.$ready.push(function(){
	      this.attachEvent("onShow", function(){
	        this.$view.className = this.$view.className.split("animated")[0] + " animated fadeIn";  
	      })
	      this.attachEvent("onHide", function(){
	        this.$view.style.display = "block";
	        this.$view.className += " animated fadeOut";  
	      })
	    });
	  }
	}, webix.ui.window);


wellbole.Base = 
	webix.proto({
		name : "Base",
		$init : function(config) {
			if (!this.defaults) {
				this.defaults = {
					formDefault : {}
				    ,createAction : "doCreate"
				    ,createChildAction:"doCreateChild"
				    ,updateAction : "doUpdate"
				    ,deleteAction : "doDelete"
				};
				this.eventHandler = null;
			}
			// webix.extend(this, webix.EventSystem);
		},
		trigger : function(name) {
			this.callEvent(name, arguments);
		},
		on : function(name, code) {
			this.attachEvent(name, code);
		},
		action : function(name) {
			var data = arguments;
			var that = this;
			return function() {
				that.trigger(name, data);
			};
		}
}, webix.EventSystem);


/**
 * 不包含表单，仅仅包含列表的应用。
 */
wellbole.BaseDatatableOnlyApp = webix.proto({
	name : "BaseDatatableOnlyApp",
	$init:function(config){ 
		this.defaults.mainTableId = "mainTable";
	},
	onReady : function() {
		this.trigger("uiInit");
		this.initEvent();
		this.trigger("baseAppInit");
		this.trigger("appInit");
		this.trigger("dataInit");
	},
	checkSelectedRow : function(alertFlag, allowMultiselect) {
		var selectIdArray = $$(this.defaults.mainTableId).getSelectedId(true,true);
		//判断是否进行了选择，
		if (0 === selectIdArray.length) {
			if (true == alertFlag) {
				showUnSelectedMsg(this.defaults.showName);
			}
			return null;
		}
		//判断是否允许选择多行
		if (selectIdArray.length > 1 &&  allowMultiselect != true) {
			//不允许选择多行，但是却选择了多行，报错
			showSelecteOneMsg(this.defaults.showName);
			return null;
		}
		//进行结果返回
		if(true === allowMultiselect){
			return selectIdArray;
		}else{
			return selectIdArray[0];
		}
		return selectIdArray;
	},
	initEvent : function() {
		var that = this;
		this.on("baseAppInit", function() {
			webix.extend($$(that.defaults.mainTableId), webix.ProgressBar);
		});
	},
	utils : {}
}, wellbole.Base);


/**
 * 包含仅包含修改表单定义，不包括列表，新建等。
 */
// 应用定义
wellbole.BaseUpdateOnlyApp = webix.proto({
	name : "BaseUpdateOnlyApp",
	$init:function(config){ 
		this.defaults.formId = "form";
		this.defaults.formWindowHeaderId = "formWindowHeader";
		this.defaults.submitButtonId = "submitButton";
		this.defaults.formWindowId = "formWindow";
	},
	onReady : function() {
		this.initEvent();
		this.trigger("appInit");
		this.trigger("dataInit");
	},
	initEvent : function() {
		var that = this;

		// 打开编辑窗口
		this.on("openEditWindow", function() {

			var rowId = that.checkSelectedRow(true,false);
			if (null == rowId) {
				return;
			}

			var form = $$(that.defaults.formId);
			form.clear();
			form.clearValidation();

			$$(that.defaults.formWindowHeaderId).setHTML("修改" + that.defaults.showName);
			// $$("submitButton").enable();
			// 首先卸载原来的时间处理器
			if (that.eventHandler != null) {
				$$(that.defaults.submitButtonId).detachEvent(that.eventHandler);
			}
			that.eventHandler = $$(that.defaults.submitButtonId).attachEvent("onItemClick",
					that.action(that.defaults.updateAction));
			$$(that.defaults.formWindowId).show();

			// 设定form值
			that.defaults.lastRowId = rowId;
			var item = $$(that.defaults.mainTableId).getItem(rowId);
			var defaultData = webix.clone(that.defaults.formDefault);
			webix.extend(defaultData, item, true);
			$$(that.defaults.formId).setValues(defaultData);
			that.trigger("editWindowOpened");
		});

		// 更新操作
		this.on("doUpdate", function() {
			var form = $$(that.defaults.formId);
			if (form.isDirty()) {
				if (!form.validate()) {
					return false;
				}
				that.trigger("doBeforeUpdate");
				var item = form.getValues();
				var rowId = that.checkSelectedRow(false,false);
				$$(that.defaults.submitButtonId).disable();
				// ajax更新到后台
				webix.ajax().post(that.defaults.updateUrl, item,
						function(text, xml, xhr) {
							var ret = JSON.parse(text);
							if (ret.ok) {
								if(that.defaults.hiddenAfterUpdated){
									$$(that.defaults.formWindowId).hide();
								}
								if(that.defaults.reloadMainTableAfterUpdated){
									$$(that.defaults.mainTableId).updateItem(rowId, item);
								}
								that.trigger("doAfterUpdate");
								showUpdatedMsg(that.defaults.showName);
								$$(that.defaults.submitButtonId).enable();
							} else {
								webix.alert({
									type : "alert-error",
									title : "更新失败",
									ok : "我知道了",
									text : ret.msg
								});
								that.trigger("doUpdateFail");
								$$(that.defaults.submitButtonId).enable();
							}
						});
			} else {
				showNoChangedMsg(that.defaults.showName);
			}
		});
	},
	utils : {}
}, wellbole.Base);




/**
 * 包含列表，新建表单，修改表单，修改表单定义。
 */
// 应用定义
wellbole.BaseApp = webix.proto({
	name : "BaseApp",
	$init:function(config){ 
		this.defaults.mainTableId = "mainTable";
		this.defaults.formId = "form";
		this.defaults.formWindowHeaderId = "formWindowHeader";
		this.defaults.submitButtonId = "submitButton";
		this.defaults.formWindowId = "formWindow";
		this.defaults.lastInsertId = 0;
		this.defaults.hiddenAfterCreated = true;
		this.defaults.hiddenAfterUpdated = true;
		this.defaults.reloadMainTableAfterCreated = true;
		this.defaults.reloadMainTableAfterUpdated = true;
		this.defaults.lastRowId = 0;
	},
	onReady : function() {
		this.trigger("uiInit");
		this.initEvent();
		this.trigger("baseAppInit");
		this.trigger("appInit");
		this.trigger("dataInit");
	},
	checkSelectedRow : function(alertFlag, allowMultiselect) {
		var selectIdArray = $$(this.defaults.mainTableId).getSelectedId(true,true);
		//判断是否进行了选择，
		if (0 === selectIdArray.length) {
			if (true == alertFlag) {
				showUnSelectedMsg(this.defaults.showName);
			}
			return null;
		}
		//判断是否允许选择多行
		if (selectIdArray.length > 1 &&  allowMultiselect != true) {
			//不允许选择多行，但是却选择了多行，报错
			showSelecteOneMsg(this.defaults.showName);
			return null;
		}
		//进行结果返回
		if(true === allowMultiselect){
			return selectIdArray;
		}else{
			return selectIdArray[0];
		}
		return selectIdArray;
	},
	initEvent : function() {
		var that = this;
		this.on("baseAppInit", function() {
			webix.extend($$(that.defaults.mainTableId), webix.ProgressBar);
		});
		
		this.on("openShowWindow", function(eventName, formData) {
			var item = null;
			if(webix.notNull(formData)){
				//指定了参数
				item = formData;
			}else{
				//没有指定。
				var rowId = that.checkSelectedRow(true,false);
				if (null == rowId) {
					return;
				}
				item = $$(that.defaults.mainTableId).getItem(rowId);
			}
			var form = $$(that.defaults.formId);
			form.clear();
			$$(that.defaults.formWindowId).show();

			// 设定form值
			that.defaults.lastRowId = rowId;
			var defaultData = webix.clone(that.defaults.formDefault);
			webix.extend(defaultData, item, true);
			form.setValues(defaultData);
			form.disable();
			$$(that.defaults.submitButtonId).hide();
			that.trigger("showWindowOpened");
		});

		// 打开新建窗口
		this.on("openNewWindow", function(eventName,formData) {
			var form = $$(that.defaults.formId);
			form.clear();
			form.clearValidation();
			var defaultData = webix.clone(that.defaults.formDefault);
			if(webix.notNull(formData)){
				webix.extend(defaultData, formData, true);
			}
			form.setValues(defaultData);
			$$(that.defaults.submitButtonId).show();
			form.enable();
			if(!that.defaults.useTextTitle){
				$$(that.defaults.formWindowHeaderId).setHTML("新建" + that.defaults.showName);
			}
			// $$("submitButton").enable();
			// 首先卸载原来的事件处理器
			if (that.eventHandler != null) {
				$$(that.defaults.submitButtonId).detachEvent(that.eventHandler);
			}
			that.eventHandler = $$(that.defaults.submitButtonId).attachEvent("onItemClick",
					that.action(that.defaults.createAction));
			$$(that.defaults.formWindowId).show();
			that.trigger("newWindowOpened");
		});

		// 打开新建子项目窗口
		this.on("openNewChildWindow", function() {
			var rowId = that.checkSelectedRow(true,false);
			if (null == rowId) {
				return;
			}
			var form = $$(that.defaults.formId);
			form.clear();
			form.clearValidation();
			form.setValues(that.defaults.formDefault);
			$$(that.defaults.submitButtonId).show();
			form.enable();

			var selectItem = $$(that.defaults.mainTableId).getItem(rowId);
			if(!that.defaults.useTextTitle){
				$$(that.defaults.formWindowHeaderId).setHTML(
					"新建【" + selectItem.value + "】" + that.defaults.showName
							+ "的子项");
			}
			// $$("submitButton").enable();
			// 首先卸载原来的时间处理器
			if (that.eventHandler != null) {
				$$(that.defaults.submitButtonId).detachEvent(that.eventHandler);
			}

			that.eventHandler = $$(that.defaults.submitButtonId).attachEvent("onItemClick",
					that.action(that.defaults.createChildAction));
			$$(that.defaults.formWindowId).show();
			that.trigger("newWindowOpened");
		});

		// 打开编辑窗口
		this.on("openEditWindow", function() {
			var rowId = that.checkSelectedRow(true,false);
			if (null == rowId) {
				return;
			}
			var form = $$(that.defaults.formId);
			form.clear();
			form.clearValidation();
			$$(that.defaults.submitButtonId).show();
			if(!that.defaults.useTextTitle){
				$$(that.defaults.formWindowHeaderId).setHTML("修改" + that.defaults.showName);
			}
			// $$("submitButton").enable();
			// 首先卸载原来的时间处理器
			if (that.eventHandler != null) {
				$$(that.defaults.submitButtonId).detachEvent(that.eventHandler);
			}
			that.eventHandler = $$(that.defaults.submitButtonId).attachEvent("onItemClick",
					that.action(that.defaults.updateAction));
			$$(that.defaults.formWindowId).show();

			// 设定form值
			that.defaults.lastRowId = rowId;
			var item = $$(that.defaults.mainTableId).getItem(rowId);
			var defaultData = webix.clone(that.defaults.formDefault);
			webix.extend(defaultData, item, true);
			form.setValues(defaultData);
			form.enable();
			that.trigger("editWindowOpened");
		});

		// 删除操作
		this.on("doDelete", function() {
			var rowId = that.checkSelectedRow(true,true);
			if (null == rowId) {
				return;
			}
			var selectItem = $$(that.defaults.mainTableId).getItem(rowId);
			//var deleteObjName = "【" + selectItem.value + "】";
			webix.confirm({
				title : "删除确认",
				cancel : "否",
				ok : "是",
				type : "confirm-warning",
				text : "你确定要删除该条记录吗?\n若记录有包含子记录，则所有子记录也将被删除!",
				callback : function(result) { // setting callback
					if (true == result) {
						// ajax更新后台
						webix.ajax().post(that.defaults.deleteUrl, {
							id : selectItem.id
						}, function(text, xml, xhr) {
							var ret = JSON.parse(text);
							if (ret.ok) {
								that.trigger("doAfterDelete",selectItem);
								showDeletedMsg(that.defaults.showName,function(){$$(that.defaults.mainTableId).remove(rowId);});
								
							} else {
								webix.alert({
									type : "alert-error",
									title : "删除失败",
									ok : "我知道了",
									text : ret.msg
								});
							}
						});
					}
				}
			});
		});

		// 新建操作
		this.on("doCreate", function() {
			var form = $$(that.defaults.formId);
			if (form.isDirty()) {
				if (!form.validate()) {
					webix.alert({
						type : "alert-error",
						title : "检查失败",
						ok : "我知道了",
						text : "请输入标记为红的的必填项"
					});
					return false;
				}
				//新建前
				var item = form.getValues();
				$$(that.defaults.submitButtonId).disable();
				// ajax更新到后台
				webix.ajax().post(that.defaults.createUrl, item,
						function(text, xml, xhr) {

							// response
							var ret = JSON.parse(text);
							if (ret.ok) {
								if(that.defaults.hiddenAfterCreated){
									$$(that.defaults.formWindowId).hide();
								}
								if(that.defaults.reloadMainTableAfterCreated){
									//$$(that.defaults.mainTableId).clearAll();
									//$$(that.defaults.mainTableId).load(that.defaults.loadUrl);
									that.trigger("doRefresh");
								}
								that.defaults.lastInsertId = ret.data;
								//新建成功,data中存储的是id
								item.id = ret.data;
								that.trigger("doAfterCreate",item);
								showCreatedMsg(that.defaults.showName);
								$$(that.defaults.submitButtonId).enable();
							} else {
								webix.alert({
									type : "alert-error",
									title : "新建失败",
									ok : "我知道了",
									text : ret.msg
								});
								//新建失败
								that.trigger("doCreateFail",item);
								$$(that.defaults.submitButtonId).enable();
							}
						});

			} else {
				showNoChangedMsg(that.defaults.showName);
			}
		});

		// 新建操作
		this.on("doCreateChild", function() {
			var form = $$(that.defaults.formId);
			if (form.isDirty()) {
				
				if (!form.validate()) {
					webix.alert({
						type : "alert-error",
						title : "检查失败",
						ok : "我知道了",
						text : "请输入标记为红的的必填项"
					});
					return false;
				}
				var rowId = that.checkSelectedRow(false,false);
				if(null == rowId){
					showUnSelectedMsg(this.defaults.showName);
					$$(that.defaults.formWindowId).hide();
				}
				var parentItem = $$(that.defaults.mainTableId).getItem(rowId);
				var item = form.getValues();
				// memo暂时设定为属性值
				//item.memo = item.value;
				item.parent_id = parentItem.id;
				$$(that.defaults.submitButtonId).disable();
				// ajax更新到后台
				webix.ajax().post(that.defaults.createUrl, item,
						function(text, xml, xhr) {

							// response
							var ret = JSON.parse(text);
							if (ret.ok) {
								if(that.defaults.hiddenAfterCreated){
									$$(that.defaults.formWindowId).hide();
								}
								if(that.defaults.reloadMainTableAfterCreated){
									that.trigger("doRefresh");
									//$$(that.defaults.mainTableId).clearAll();
									//$$(that.defaults.mainTableId).load(that.defaults.loadUrl);
								}
								that.defaults.lastInsertId = ret.data;
								//设定id
								item.id = ret.data;
								that.trigger("doAfterCreate",item);
								showCreatedMsg(that.defaults.showName);
								$$(that.defaults.submitButtonId).enable();
							} else {
								webix.alert({
									type : "alert-error",
									title : "新建失败",
									ok : "我知道了",
									text : ret.msg
								});
								that.trigger("doCreateFail",item);
								$$(that.defaults.submitButtonId).enable();
							}
						});

			} else {
				showNoChangedMsg(that.defaults.showName);
			}
		});

		// 更新操作
		this.on("doUpdate", function() {
			var form = $$(that.defaults.formId);
			if (form.isDirty()) {
				if (!form.validate()) {
					return false;
				}
				var item = form.getValues();
				var rowId = that.checkSelectedRow(false,false);
				$$(that.defaults.submitButtonId).disable();
				// ajax更新到后台
				webix.ajax().post(that.defaults.updateUrl, item,
						function(text, xml, xhr) {
							var ret = JSON.parse(text);
							if (ret.ok) {
								if(that.defaults.hiddenAfterUpdated){
									$$(that.defaults.formWindowId).hide();
								}
								if(that.defaults.reloadMainTableAfterUpdated){
									$$(that.defaults.mainTableId).updateItem(rowId, item);
								}
								that.trigger("doAfterUpdate",item);
								showUpdatedMsg(that.defaults.showName);
								$$(that.defaults.submitButtonId).enable();
							} else {
								webix.alert({
									type : "alert-error",
									title : "更新失败",
									ok : "我知道了",
									text : ret.msg
								});
								that.trigger("doUpdateFail",item);
								$$(that.defaults.submitButtonId).enable();
							}
						});
			} else {
				showNoChangedMsg(that.defaults.showName);
			}
		});
	},
	utils : {}
}, wellbole.Base);


/**
 * 显示没有选中记录的消息
 * @param objName 对象名称
 */
function showUnSelectedMsg(objName){
	webix.alert({
		type:"alert-error",
		title: "请选择",
		ok: "我知道了",
		text: "请选择一个【"+objName + "】"
	});
}

function showSelecteOneMsg(objName){
	webix.alert({
		type:"alert-error",
		title: "请选择",
		ok: "我知道了",
		text: "该操作只能选择一个【"+objName + "】"
	});
}


/**
 * 显示数据无变更消息
 * @param objName 对象名称
 */
function showNoChangedMsg(objName){
	webix.alert({
		type:"alert-warning",
		title: "数据没有更新",
		ok: "我知道了",
		text: "【" + objName + "】数据没有更新"
	});
}

/**
 * 显示已删除消息
 * @param objName 对象名称
 */
function showDeletedMsg(objName, callback){
	webix.alert({
		//type:"alert-info",
		title: "删除信息",
		ok: "我知道了",
		text: "删除【" + objName + "】成功",
		callback:callback
	});
}

/**
 * 显示已创建消息
 * @param objName 对象名称
 */
function showCreatedMsg(objName, callback){
	webix.alert({
		//type:"alert-info",
		title: "创建信息",
		ok: "我知道了",
		text: "创建【" + objName + "】成功",
		callback:callback
	});
}

/**
 * 显示已更新消息
 * @param objName 对象名称
 */
function showUpdatedMsg(objName, callback){
	webix.alert({
		//type:"alert-info",
		title: "更新信息",
		ok: "我知道了",
		text: "更新【" + objName + "】成功",
		callback:callback
	});
}
