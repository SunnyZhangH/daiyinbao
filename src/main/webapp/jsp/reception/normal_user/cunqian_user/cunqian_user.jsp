<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2022/5/13
  Time: 11:00
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Title</title>
</head>
<body style="background: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 100%);">

<div style="text-align: center;padding-top: 15%;">
    <div><strong style="color: green;font-style: inherit;font-size: 30px;text-align: center" id="time"></strong></div>
    <div><h2 style="color: blue;font-style: inherit;font-size: 50px;text-align: center">贷银宝系统</h2></div>
<%--<h2 style="color: blue;font-style: inherit;font-size: 30px;"><a href="huo_cun.jsp">活期</a>&nbsp;&nbsp;<a href="si_cun.jsp">死期</a>&nbsp;&nbsp; <a href="#">存借</a></h2>--%>
    <c:forEach items="${goodsTypeInfoList}" var="type">
        <a href="${pageContext.request.contextPath}/goodType/findTypeById?typeId=${type.typeId}"><p style="color: #6262cd;font-style: inherit;font-size: 30px;">${type.typeName}</p></a>
    </c:forEach>
</div>

<script>
    var date = new Date();
    var hours = date.getHours();
    if (hours < 12) {
        document.getElementById('time').innerHTML = '-早上好-';

    } else if (hours < 18) {
        document.getElementById('time').innerText = '-下午好-';
    } else {
        document.getElementById('time').innerHTML = '-晚上好-';

    }
</script>
</body>
</html>
