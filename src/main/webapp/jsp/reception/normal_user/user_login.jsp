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
    <style type="text/css">
         .zaoshang{
             background:linear-gradient(
                     #6a6868 0%, #FFF 80%);
             height: 100%;
         }
         .zhongwu{
             background:linear-gradient(
                     #8d8b87 0%, #FFF 80%);
             height: 100%;
         }
         .wansahng{
             background:linear-gradient(
                     rgba(45, 43, 43, 0.93) 0%, #FFF 80%);
             height: 100%;
         }
    </style>
</head>
<body id="beijingse">
<div  style="width: 100%;height: 100%" id="two">
<div style="text-align: center;padding-top: 17%;">
    <div ><strong style="color: green;font-style: inherit;font-size: 30px;text-align: center" id="time"></strong></div>
    <div><h2 style="color: blue;font-style: inherit;font-size: 50px;text-align: center">贷银宝系统</h2></div>
    <div style="">
        <font id="zh">账号:</font>&nbsp;<input type="text" style="height: 30px" placeholder="&nbsp;请输入账号" ></br></br>
    <font id="wenzi" style="color: black;font-family: 宋体;">密码:</font><input type="password" style="height: 30px" placeholder="&nbsp;请输入密码" id="pasdWriter"></br></br>

        <font id="yz">验证:</font>&nbsp;<input type="text" style="height: 30px" placeholder="&nbsp;请输入验证"></br></br>
    </div>
<a href="cunqian_user/cunqian_user.jsp" id="dll">登录</a> &nbsp;&nbsp;<a href="user_register.jsp" id="zc">注册</a>
    <a href="${pageContext.request.contextPath}/goodType/findAllType">登录2</a>


</div>





<script>
    var biaodan=document.getElementById('pasdWriter');
    var wenzi=document.getElementById('wenzi');
    var color=document.getElementById('color');
    biaodan.onblur=function (){
        //根据表单值的长度
        if (this.value.length<6||this.value.length>10){
            wenzi.innerText='密码:';
            wenzi.style.color='red';
        }else {
            wenzi.innerText='密码:';
            wenzi.style.color='green';
        }
    }

</script>
    <p style="color: #6b6b7d"></p>
<script>
    var date = new Date();
    var hours = date.getHours();
    if (hours < 12) {
        document.getElementById('time').innerHTML = '-早上好-';
        onclick=document.getElementById('beijingse').style.backgroundColor='#b8d7ee';
    } else if (hours < 18) {
        document.getElementById('time').innerText = '-下午好-';
        onclick=document.getElementById('beijingse').style.backgroundColor='#f1a58e';
    } else {
        document.getElementById('time').innerHTML = '-晚上好-';
        onclick=document.getElementById('time').style.color='dee839';
        onclick=document.getElementById('zh').style.color='dee839';
        onclick=document.getElementById('wenzi').style.color='dee839';
        onclick=document.getElementById('yz').style.color='dee839';
        onclick=document.getElementById('dll').style.color='dee839';
        onclick=document.getElementById('zc').style.color='dee839';
        onclick=document.getElementById('beijingse').style.backgroundColor='black';
    }



</script>
</div>
</body>
</html>
