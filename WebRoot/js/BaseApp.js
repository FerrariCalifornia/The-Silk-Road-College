/**
 * 设定webix的语言
 */
webix.i18n.setLocale("zh-CN");

if (!window.wellbole) {
	wellbole = {};
}

wellbole.Base = 
	webix.proto({
		name : "Base",
		$init : function() {
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


// 应用定义
wellbole.BaseApp = webix.proto({
	name : "BaseApp",
	onReady : function() {
		this.trigger("uiInit");
		this.initEvent();
		this.trigger("baseAppInit");
		this.trigger("appInit");
		this.trigger("dataInit");
	},
	checkSelectedRow : function(alertFlag, allowMultiselect) {
		var selectIdArray = $$("mainTable").getSelectedId(true,true);
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
		this.on("baseAppInit", function() {
			webix.extend($$("mainTable"), webix.ProgressBar);
		});

		// 打开新建窗口
		this.on("openNewWindow", function() {
			var form = $$("form");
			form.clear();
			form.clearValidation();
			form.setValues(this.defaults.formDefault);

			$$("formWindowHeader").setHTML("新建" + this.defaults.showName);
			// $$("submitButton").enable();
			// 首先卸载原来的事件处理器
			if (this.eventHandler != null) {
				$$("submitButton").detachEvent(this.eventHandler);
			}
			this.eventHandler = $$("submitButton").attachEvent("onItemClick",
					this.action(this.defaults.createAction));
			$$("formWindow").show();
			this.trigger("newWindowOpened");
		});

		// 打开新建子项目窗口
		this.on("openNewChildWindow", function() {
			var rowId = this.checkSelectedRow(true,false);
			if (null == rowId) {
				return;
			}
			var form = $$("form");
			form.clear();
			form.clearValidation();
			form.setValues(this.defaults.formDefault);

			var selectItem = $$("mainTable").getItem(rowId);
			$$("formWindowHeader").setHTML(
					"新建【" + selectItem.value + "】" + this.defaults.showName
							+ "的子项");
			// $$("submitButton").enable();
			// 首先卸载原来的时间处理器
			if (this.eventHandler != null) {
				$$("submitButton").detachEvent(this.eventHandler);
			}

			this.eventHandler = $$("submitButton").attachEvent("onItemClick",
					this.action(this.defaults.createChildAction));
			$$("formWindow").show();
			this.trigger("newWindowOpened");
		});

		// 打开编辑窗口
		this.on("openEditWindow", function() {

			var rowId = this.checkSelectedRow(true,false);
			if (null == rowId) {
				return;
			}

			var form = $$("form");
			form.clear();
			form.clearValidation();

			$$("formWindowHeader").setHTML("修改" + this.defaults.showName);
			// $$("submitButton").enable();
			// 首先卸载原来的时间处理器
			if (this.eventHandler != null) {
				$$("submitButton").detachEvent(this.eventHandler);
			}
			this.eventHandler = $$("submitButton").attachEvent("onItemClick",
					this.action(this.defaults.updateAction));
			$$("formWindow").show();

			// 设定form值
			var item = $$("mainTable").getItem(rowId);
			var defaultData = webix.clone(this.defaults.formDefault);
			webix.extend(defaultData, item, true);
			$$("form").setValues(defaultData);
			this.trigger("editWindowOpened");
		});

		// 删除操作
		this.on("doDelete", function() {
			var rowId = this.checkSelectedRow(true,true);
			if (null == rowId) {
				return;
			}
			var selectItem = $$("mainTable").getItem(rowId);
			//var deleteObjName = "【" + selectItem.value + "】";
			var that = this;
			webix.confirm({
				title : "删除确认",
				ok : "是",
				cancel : "否",
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
								that.trigger("doAfterDelete");
								showDeletedMsg(that.defaults.showName,function(){$$("mainTable").remove(rowId);});
								
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
			var form = $$("form");
			if (form.isDirty()) {
				/*
				if (!form.validate()) {
					webix.alert({
						type : "alert-error",
						title : "检查失败",
						ok : "我知道了",
						text : "请输入标记为红的的必填项"
					});
					return false;
				}*/
				var item = form.getValues();
				// memo暂时设定为属性值
				item.memo = item.value;
				item.parent_id = 0;
				var that = this;
				// ajax更新到后台
				webix.ajax().post(this.defaults.createUrl, item,
						function(text, xml, xhr) {

							// response
							var ret = JSON.parse(text);
							if (ret.ok) {
								$$('formWindow').hide();
								$$("mainTable").clearAll();
								$$("mainTable").load(that.defaults.loadUrl);
								that.trigger("doAfterCreate");
								showCreatedMsg(that.defaults.showName);
							} else {
								webix.alert({
									type : "alert-error",
									title : "新建失败",
									ok : "我知道了",
									text : ret.msg
								});
							}
						});

			} else {
				showNoChangedMsg(this.defaults.showName);
			}
		});

		// 新建操作
		this.on("doCreateChild", function() {
			var form = $$("form");
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
				var rowId = this.checkSelectedRow(false,false);
				var parentItem = $$("mainTable").getItem(rowId);
				var item = form.getValues();
				// memo暂时设定为属性值
				item.memo = item.value;
				item.parent_id = parentItem.id;
				var that = this;
				// ajax更新到后台
				webix.ajax().post(this.defaults.createUrl, item,
						function(text, xml, xhr) {

							// response
							var ret = JSON.parse(text);
							if (ret.ok) {
								$$('formWindow').hide();
								$$("mainTable").clearAll();
								$$("mainTable").load(that.defaults.loadUrl);
								that.trigger("doAfterCreateChild");
								showCreatedMsg(that.defaults.showName);
							} else {
								webix.alert({
									type : "alert-error",
									title : "新建失败",
									ok : "我知道了",
									text : ret.msg
								});
							}
						});

			} else {
				showNoChangedMsg(this.defaults.showName);
			}
		});

		// 更新操作
		this.on("doUpdate", function() {
			var form = $$("form");
			if (form.isDirty()) {
				if (!form.validate()) {
					return false;
				}
				var item = form.getValues();
				var rowId = this.checkSelectedRow(false,false);
				var that = this;
				// ajax更新到后台
				webix.ajax().post(this.defaults.updateUrl, item,
						function(text, xml, xhr) {
							var ret = JSON.parse(text);
							if (ret.ok) {
								$$('formWindow').hide();
								$$("mainTable").updateItem(rowId, item);
								that.trigger("doAfterUpdate");
								showUpdatedMsg(that.defaults.showName);
							} else {
								webix.alert({
									type : "alert-error",
									title : "更新失败",
									ok : "我知道了",
									text : ret.msg
								});
							}
						});
			} else {
				showNoChangedMsg(this.defaults.showName);
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
