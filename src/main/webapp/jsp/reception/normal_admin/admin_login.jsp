<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>登录</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/admin_style/login.css" />
</head>
<body style=" background:linear-gradient(
                     #59b8f1 50%, #f7f9fa 90%);
             height: 100%;">
    <div class="div_top">贷银宝后台管理系统1.0</div>
    <div class="login">
        <div class="message">管理人员登录</div>
        <div id="darkbannerwrap"></div>
        <form action="${pageContext.request.contextPath}/Admin/adminIndex" method="post">
        <input name="username" placeholder="用户名/身份证号" id="userName"  type="text" >
        <hr class="hr15">
        <input name="password" placeholder="密码"  type="password" id="pass">
        <hr class="hr15">
        <input name="password" placeholder="验证码"  type="password" >
        <hr class="hr15">
        <select name="testAdminType" id="adminType">
                <option value="919" id="shenHeYuan" >审核员</option>
                <option value="929" id="yeWuYuan" >业务员</option>
                <option value="949" id="chaoJi">超级管理员</option>

        </select>
        <hr class="hr15">

        <input value="登录" style="width: 100%;" type="submit" id="login_btn" onclick="loginType()">
        <hr class="hr20">
        </form>
        <div  style="text-align: center;">
        <a onclick="alert('密码已经重置，请联系管理员')">忘记密码</a>
        </div>
    </div>
    <div class="copyright">创作者时间:&nbsp;<span style="color: #f77118">2022 </span> ZH&nbsp;WN&nbsp;FHY&nbsp;FXK&nbsp;ZLM</div>
    <script src="${pageContext.request.contextPath}/admin_style/jquery-2.2.0.min.js"></script>
    <script src="${pageContext.request.contextPath}/admin_style/layer_v2.1/layer/layer.js"></script>
    <script src="${pageContext.request.contextPath}/admin_style/common.js"></script>
    <script src="${pageContext.request.contextPath}/admin_style/index.js"></script>
<%--    <script>
        function Click(){
            var user = $("#userName").val();
            if(user == "决策人"){
                window.location.href = 'index.html?num=0'
            }else if(user == "公安用户"){
                window.location.href = 'index.html?num=1'
            }else if(user == "非公安用户"){
                window.location.href = 'index.html?num=2'
            }else if(user == "管理员"){
                window.location.href = 'index.html?num=3'
            } else if (user == "admin") {
                window.location.href = 'index.html?num=4'
            }else{
                alert("请输入正确的用户")
            }
        }
    </script>--%>

</body>
</html>
