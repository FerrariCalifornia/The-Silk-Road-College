<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>${customer}${application}</title>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<!-- 强制让360使用webkit内核渲染 -->
<meta name="renderer" content="webkit" />
<meta name='viewport' content='user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height' />
<!-- 优先使用最新版本的ie渲染，优先使用chrome渲染 -->
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="expires" content="0" />
<link rel='icon' href='${base}/images/${favicon!}' type='image/x-icon' />
<link rel='shortcut icon' href='${base}/images/${favicon!}' type='image/x-icon' />
<link href="${base}/css/login.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="${base}/js/jquery.min.js"></script>
<script type="text/javascript" src="${base}/js/login/jquery.tscookie.js"></script>
<script type="text/javascript" src="${base}/js/login/jquery.validation.min.js"></script>
<!--[if lt IE 8]>
		<script type="text/javascript">
		    alert('请您升级到IE8以上浏览器或安装其他浏览器!');
		    window.open("http://www.firefox.com.cn/download/","_self");
		</script>
		<![endif]-->
<style type="text/css">
body {
	background-color: #424242;
	background-image: url(${base}/images/login/${login_bg !'bg_3.jpg'});
	background-repeat: no-repeat;
	background-position: center center;
	background-attachment: fixed;
	background-clip: border-box;
	background-size: 100% auto;
	background-origin: padding-box;
	width: 100%;
	padding: 0;
}

.login-layout .top {
	/*color: ${top_color}; */
	color: rgb(255, 255, 255);
	color: rgba(255,255,255,0.87);
	text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);
	width: 100%;
	height: 60px;
	margin: 0 auto;
	position: relative;
	z-index: 1;
}
</style>
</head>
<body>

	<div class="bg-dot"></div>
	<div class="login-layout">
		<div class="top">
			<!--
			<h5>
				${customer}<em></em>
			</h5>
		-->
			<img src="${base}/images/${logo}"  style="height: 60px;width:auto;" border="0"><h2>${application}</h2>
		</div>
		<div class="box">
			<form name="loginFrom" action="${base}/doLogin.do" method="post">
				${token} <span> <label>账号</label> <input name="username"
					id="username" autocomplete="off" type="text" class="input-text"
					required="" value="" />
				</span> <span> <label>密码</label> <input name="password"
					id="password" class="input-password" autocomplete="off"
					type="password" required="" pattern="[\S]{3}[\S]*"
					title="密码不少于3个字符" value="" />
				</span> <span>
					<div class="code">
						<div class="arrow"></div>
						<div class="code-img">
							<img src="${base}/img.do" name="captchaImage" id="captchaImage"
								border="0">
						</div>
						<a href="JavaScript:void(0);" id="hide" class="close" title="关闭"><i></i></a><a
							href="JavaScript:void(0);"
							onclick="javascript:refreshCaptchaImage();" class="change"
							title="看不清,点击更换验证码"><i></i></a>
					</div> <input name="captcha" id="captcha" type="text" required=""
					class="input-code" id="captcha" placeholder="验证码"
					pattern="[A-z0-9]{4}" title="验证码为4个字符" autocomplete="off" value="" />
				</span> <span><input name="btnSubmit" class="input-button"
					type="submit" value="登录" /></span>
				<% if(allowRegist) {%>
      　         <span><input name="btnRegist" class="input-reg-button" type="button" value="注册" onclick="window.location.href='${base}/app/front/loginuser/index.do';"/></span>
                <% } %>
			</form>
		</div>
		<div class="box" id="lastMsg"></div>
	</div>
	<div class="bottom">
		<h5>${copyright}</h5>
		<h6 title="${company}">
			建设与维护： ${company}
		</h6>
		<h6 title="点击下载浏览器">
			推荐使用IE9及以上的版本、火狐、360极速模式、360兼容模式（IE9及以上内核）、谷歌浏览器，请使用1280*800及以上的分辨率
		</h6>
	</div>
	<script type="text/javascript">
		function refreshCaptchaImage() {
			$("#captchaImage").attr("src",
					"${base}/img.do?t=" + (new Date()).valueOf());
		}
		$().ready(
				function() {
					//随机显示登录背景
					/*
					var randomBg=Math.floor(Math.random()*9+1);
					var bg='url(${base}/images/login/bg_'+randomBg+'.jpg)';
					$("body").css("background-image",bg);
					 */

					var $captcha = $("#captcha");
					var $captchaImage = $("#captchaImage");

					//Hide Show verification code
					$("#hide").click(function() {
						$(".code").fadeOut("slow");
					});
					$captcha.focus(function() {
						$(".code").fadeIn("fast");
					});

					$captchaImage.click(function() {
						$captchaImage.attr("src", "${base}/img.do?t="
								+ (new Date()).valueOf());
					});

					//在主窗口登录系统
					if (top.location != self.location)
						top.location = self.location;
					//输入焦点设定到用户名
					$('#username').focus();
					//$("#captcha").nc_placeholder();
					<% if(has(msg)){ %>
					alert("${msg}");
					<% } %>
				});
	</script>
</body>
</html>