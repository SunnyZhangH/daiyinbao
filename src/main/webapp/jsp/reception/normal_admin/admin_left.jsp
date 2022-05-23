<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
	<head>
		<title></title>
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/admin_style/css/reset.css" />
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/admin_style/css/style.css" />
		<script type="text/javascript" src="${pageContext.request.contextPath}/admin_style/js/jquery.min.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/admin_style/js/jquery.nicescroll.min.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/admin_style/js/index.js"></script>
	</head>

	<body  style="margin:0px;padding:0px">
		<div id="menu">
			<a href="${pageContext.request.contextPath}/jsp/reception/normal_admin/user_index.jsp" class="topLogo">
				<img src="${pageContext.request.contextPath}/admin_style/images/logo.png">
			</a>
			<ul>
				
				<li class="on"><a href="${pageContext.request.contextPath}/jsp/reception/normal_admin/index1.html" target="right"><i class="ico1"></i>用户首页</a></li>
				<li><a href="${pageContext.request.contextPath}/jsp/reception/normal_admin/2information.html" target="right"><i class="ico2"></i>获取信息</a></li>
				<li><a href="${pageContext.request.contextPath}/jsp/reception/normal_admin/3project_list.html" target="right"><i class="ico3"></i>项目列表</a></li>
				<li><a href="${pageContext.request.contextPath}/jsp/reception/normal_admin/7butt.html" target="right"><i class="ico4"></i>专属对接</a></li>
				<li><a href="${pageContext.request.contextPath}/jsp/reception/normal_admin/11blacklist.html" target="right"><i class="ico5"></i>卡商黑名单</a></li>
				<li><a href="${pageContext.request.contextPath}/jsp/reception/normal_admin/12detail.html" target="right"><i class="ico6"></i>明细统计</a></li>
				<li><a href="${pageContext.request.contextPath}/jsp/reception/normal_admin/16money.html" target="right"><i class="ico7"></i>充值/提现</a></li>
				<li><a href="${pageContext.request.contextPath}/jsp/reception/normal_admin/19personal.html" target="right"><i class="ico8"></i>个人中心</a></li>
				<li><a href="${pageContext.request.contextPath}/jsp/reception/normal_admin/21integra.html" target="right"><i class="ico9"></i>积分说明</a></li>
				<li><a href="${pageContext.request.contextPath}/jsp/reception/normal_admin/22API.html" target="right"><i class="ico10"></i>API开发文档</a></li>
				<li><a href="${pageContext.request.contextPath}/jsp/reception/normal_admin/23help.html" target="right"><i class="ico11"></i>帮助中心</a></li>
				<li><a href="${pageContext.request.contextPath}/jsp/reception/normal_admin/24client.html" target="right"><i class="ico12"></i>客户端下载</a></li>
			</ul>
		</div>
		<!--Menu End!-->
	</body>

</html>
