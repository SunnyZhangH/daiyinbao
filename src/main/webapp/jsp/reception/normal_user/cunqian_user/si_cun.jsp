<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2022/5/13
  Time: 11:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body style="background-color:#dae8de;text-align: center;" >
<div><strong style="color: green;font-style: inherit;font-size: 30px;text-align: center" id="time"></strong></div>
<div><h2 style="color: blue;font-style: inherit;font-size: 50px;text-align: center">贷银宝系统</h2></div>
<div style="background: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 100%);">

    <div style="width: 300px;height: 300px; background-color: whitesmoke;float: left;margin-left: 30px;"><p>项目一</p></div>
    <div style="width: 300px;height: 300px; background-color: whitesmoke;float: left;margin-left: 30px;"><p>项目二</p></div>
    <div style="width: 300px;height: 300px; background-color: whitesmoke;float: left;margin-left: 30px;"><p>项目三</p></div>
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
