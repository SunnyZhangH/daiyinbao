<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2022/5/13
  Time: 10:57
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Title</title>

</head>
<body style="background-color:#dae8de" id="beijingse">
<div style="text-align: center;padding-top: 17%;">
    <div><strong style="color: green;font-style: inherit;font-size: 30px;text-align: center" id="time"></strong></div>
    <div><h2 style="color: blue;font-style: inherit;font-size: 50px;text-align: center">贷银宝系统</h2></div>
    <div style="">
    账号:&nbsp;<input type="text" style="height: 30px" placeholder="&nbsp;请输入账号" ></br></br>
    密码:&nbsp;<input type="password" style="height: 30px" placeholder="&nbsp;请输入密码" id="pasdWriter"><span id="wenzi" style="color: black;font-family: 宋体;font-size: 12px;"></span></br></br>

    验证:&nbsp;<input type="text" style="height: 30px" placeholder="&nbsp;请输入验证"></br></br>
    </div>
<a href="cunqian_user/cunqian_user.jsp">登录</a> &nbsp;&nbsp;<a href="user_register.jsp">注册</a>

</div>







<script>
    var biaodan=document.getElementById('pasdWriter');
    var wenzi=document.getElementById('wenzi');
    var color=document.getElementById('color');
    biaodan.onblur=function (){
        //根据表单值的长度
        if (this.value.length<6||this.value.length>10){
            wenzi.innerText='不合规范';
            wenzi.style.color='red';
        }else {
            wenzi.innerText='符合规范';
            wenzi.style.color='green';
        }
    }

</script>

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
