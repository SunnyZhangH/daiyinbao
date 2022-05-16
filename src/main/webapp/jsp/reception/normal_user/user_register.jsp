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
<body style="background: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 100%);" id="bjs">
<div style="text-align: center;padding-top: 10%;" >
  <div><strong style="color: green;font-style: inherit;font-size: 30px;text-align: center" id="time"></strong></div>
  <div><h2 style="color: blue;font-style: inherit;font-size: 50px;text-align: center" id="bt">贷银宝系统</h2></div>

  <form action="${pageContext.request.contextPath}/customer/addCustomer" method="post">
    <div style="">
      <font id="xingming" style="color: black;font-family: 宋体;">姓名:</font> <input type="text" style="height: 30px" placeholder="&nbsp;请输入真实姓名" name="customerName" id="XM"></br></br>
      <font id="wenzi" style="color: black;font-family: 宋体;">密码:</font>&nbsp;<input type="password" style="height: 30px" placeholder="&nbsp;请输入6-10位密码" id="pasdWriter" name="customerPwd" ></br></br>
      性别: <select style="width: 170px;height: 30px" name="customerSex">
      <option value="1">男</option>
      <option value="0">女</option>
    </select></br></br>
      <font id="nianling" style="color: black;font-family: 宋体;">年龄:</font> <input type="number" style="height: 30px" placeholder="&nbsp;请输入年龄" name="customerAge" id="NL"></br></br>
      <font id="dianhua" style="color: black;font-family: 宋体;">电话:</font> <input type="text" style="height: 30px" placeholder="&nbsp;请输入11位电话" name="customerTel" id="DH"></br></br>
      <font id="shenfen" style="color: black;font-family: 宋体;">身份:</font> <input type="text" style="height: 30px" placeholder="&nbsp;18位身份证号" name="customerCardID" id="SF"></br></br>
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
      alert('请输入6-10位密码');
    }else {
      wenzi.innerText='密码:';
      wenzi.style.color='green';
        document.getElementById('anniu').disabled=true;
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
<script>
  var nianLingColor=document.getElementById('nianling');
  var nianLingWrite=document.getElementById('NL');

  nianLingWrite.onblur=function (){
    if (this.value>90||this.value<18){
      nianLingColor.innerText='年龄:';
      nianLingColor.style.color='red';
      alert('年龄不能大于90岁或者小于18岁');
      document.getElementById('anniu').disabled=true;
    }else {
      nianLingColor.innerText='年龄:';
      nianLingColor.style.color='green';
    }
  }
</script>
<script>
  var dianHuaColor=document.getElementById('dianhua');
  var dianHuaWrite=document.getElementById('DH');

  dianHuaWrite.onblur=function (){
    if (this.value.length<11||this.value.length>11){
      dianHuaColor.innerText='电话:';
      dianHuaColor.style.color='red';
      document.getElementById('anniu').disabled=true;
    }else {
      dianHuaColor.innerText='电话:';
      dianHuaColor.style.color='green';
    }
  }
</script>
<script>
  var shenFenColor=document.getElementById('shenfen');
  var shenFenWrite=document.getElementById('SF');

  shenFenWrite.onmouseleave=function (){
    if (this.value.length<18||this.value.length>18){
      shenFenColor.innerText='身份:';
      shenFenColor.style.color='red';
      document.getElementById('anniu').disabled=true;
      alert('请输入18位身份证数字');
    }else {
      shenFenColor.innerText='身份:';
      shenFenColor.style.color='green';
      document.getElementById('anniu').disabled=false;
    }
  }
</script>
<script>
  var xingmMngWrite= document.getElementById('XM');
  var xingmingColor=document.getElementById('xingming');
  var anNiu=document.getElementById('anniu');
    xingmMngWrite.onblur=function (){
    if (this.value.length>0){
      xingmingColor.innerText='姓名:';
      xingmingColor.style.color='green';
  }else {
      xingmingColor.innerText='姓名:';
      xingmingColor.style.color='red';
      document.getElementById('anniu').disabled=true;
    }
  }


</script>
</body>
</html>
