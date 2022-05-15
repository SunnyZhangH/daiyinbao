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
<body style="background-color:#dae8de;" id="bjs">
<div style="text-align: center;padding-top: 10%;" >
  <div><strong style="color: green;font-style: inherit;font-size: 30px;text-align: center" id="time"></strong></div>
  <div><h2 style="color: blue;font-style: inherit;font-size: 50px;text-align: center" id="bt">贷银宝系统</h2></div>

  <form action="${pageContext.request.contextPath}/customer/addCustomer" method="post">
    <div style="">
      账号:&nbsp;<input type="text" style="height: 30px" placeholder="&nbsp;请输入账号" name="customerCardID"></br></br>
      <font id="wenzi" style="color: black;font-family: 宋体;">密码:</font>&nbsp;<input type="password" style="height: 30px" placeholder="&nbsp;请输入6-10位密码" id="pasdWriter" name="customerPwd"></br></br>
      姓名: <input type="text" style="height: 30px" placeholder="&nbsp;请输入真实姓名" name="customerName"></br></br>

      性别: <select style="width: 170px;height: 30px" name="customerSex">
      <option value="1">男</option>
      <option value="0">女</option>
    </select></br></br>
      年龄: <input type="number" style="height: 30px" placeholder="&nbsp;请输入年龄" name="customerAge"></br></br>
      电话: <input type="number" style="height: 30px" placeholder="&nbsp;请输入11位电话" name="customerTel"></br></br>

    </div>
    <input type="submit" id="anniu" value="注册">
  </form>

</div>






<%--密码校验--%>
<script>
  var biaodan=document.getElementById('pasdWriter');
  var wenzi=document.getElementById('wenzi');
  var color=document.getElementById('color');
  biaodan.onblur=function (){
    //根据表单值的长度
    if (this.value.length<6||this.value.length>10){
      wenzi.innerText='密码:';
      wenzi.style.color='red';
      document.getElementById('anniu').disabled=true;
    }else {
      wenzi.innerText='密码:';
      wenzi.style.color='green';
        document.getElementById('anniu').disabled=false;
    }
  }
</script>

<%--根据时间修改问候语--%>
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
