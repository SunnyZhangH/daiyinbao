<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<!--<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />-->
<title>首页</title>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/admin_style/css/reset.css" />
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/admin_style/css/style.css" />
<style type="text/css">
	frame{border: none;}
</style>
</head>
 <frameset noresize="noresize" frameborder="no">
    <frameset cols="240,*" style="border: 0;" framespacing="0" frameborder="no">
        <frame src="${pageContext.request.contextPath}/jsp/reception/normal_admin/admin_left.jsp" noresize="noresize" frameborder="0">
        <frame name="right" frameborder="0" src="${pageContext.request.contextPath}/jsp/reception/normal_user/user_index1.jsp">
    </frameset>
 </frameset>
<script type="text/javascript" src="${pageContext.request.contextPath}/admin_style/js/jquery.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/admin_style/js/jquery.nicescroll.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/admin_style/js/index.js"></script>
</html>
