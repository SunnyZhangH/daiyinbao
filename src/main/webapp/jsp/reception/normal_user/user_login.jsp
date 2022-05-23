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
         .oText{};
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
         .button.gray{
             color: #8c96a0;
             text-shadow:1px 1px 1px #fff;
             border:1px solid #dce1e6;
             box-shadow: 0 1px 2px #fff inset,0 -1px 0 #a8abae inset;
             background: -webkit-linear-gradient(top,#f2f3f7,#e4e8ec);
             background: -moz-linear-gradient(top,#f2f3f7,#e4e8ec);
             background: linear-gradient(top,#f2f3f7,#e4e8ec);
         }

    </style>
</head>
<body id="beijingse" style="background: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 100%);">
<div  style="width:100%;height: 100%" >
<div style="text-align: center;padding-top: 10%;">
    <div ><strong style="color: green;font-style: inherit;font-size: 30px;text-align: center" id="time"></strong></div>
    <div><h2 style="color: blue;font-style: inherit;font-size: 50px;text-align: center">贷银宝系统</h2></div>
    <div><h2 style="color: green;font-style: inherit;font-size: 18px;text-align: center">用户登录</h2></div>
    <form action="${pageContext.request.contextPath}/customer/customerLogin" method="post">
        <div style="">

            <font id="zhangHao">账号:</font>&nbsp;<input type="text" style="height: 35px;border-radius:10px;border:3px solid #8bdb74;" placeholder="&nbsp;请输入账号" name="customerCardID" id="ZH"></br></br>
            <font id="wenzi">密码:</font></font>&nbsp;<input type="password" style="height: 35px;border-radius:10px;border:3px solid #8bdb74;" placeholder="&nbsp;请输入密码" id="pasdWriter" name="customerPwd"></br></br>
            <font id="yanZheng" >验证:</font>&nbsp;<input type="text"  style="height:35px;border-radius:10px;border:3px solid #8bdb74;" id="ZY" placeholder="&nbsp;请输入验证码:${uuid}   "></br></br>
        </div>
        <input type="submit" id="anniu" value="登录" class="button">&nbsp;&nbsp; </br></br>
        <a href="${pageContext.request.contextPath}/Admin/adminLogin" >管理员登录</a>&nbsp;
    </form>
</div>

<script type="text/javascript">
        var uuidWriter=document.getElementById('ZY');
        var getUuid=document.getElementById('ZY');
        var uuidColor=document.getElementById('yanZheng');
        uuidWriter.onmouseleave=function (){
            var a=this.value;
            if (a=='${uuid}'){
                uuidColor.innerText='验证:';
                uuidColor.style.color='green';
                document.getElementById('anniu').disabled=false;
            }else {
                uuidColor.innerText='验证:';
                uuidColor.style.color='red';
                document.getElementById('anniu').disabled=true;
            }
        }

</script>

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

        }
    }
</script>
</script>
<script >
        var zhangHaoWrite=document.getElementById('ZH');
        var zhangHaoColor=document.getElementById('zhangHao');
        zhangHaoWrite.onblur=function (){
            if (this.value.length<0||this.value.length>0){
                zhangHaoColor.innerText='账号:';
                zhangHaoColor.style.color='green';

            }else {
                zhangHaoColor.innerText='账号:';
                zhangHaoColor.style.color='red';
                document.getElementById('anniu').disabled=true;
            }
        }

</script>

<script>
    var date = new Date();
    var hours = date.getHours();
    if (hours < 12) {
        document.getElementById('time').innerHTML = '-早上好-';
        document.getElementById('beijingse').style.backgroundColor='#b8d7ee';
    } else if (hours < 18) {
        document.getElementById('time').innerText = '-下午好-';
        document.getElementById('beijingse').style.backgroundColor='#f1a58e';
    } else {
        document.getElementById('time').innerHTML = '-晚上好-';
     /*   document.getElementById('time').style.color='#dee839';
        document.getElementById('zh').style.color='#dee839';
        document.getElementById('wenzi').style.color='#dee839';
        document.getElementById('yz').style.color='#dee839';
        document.getElementById('anniu').style.color='#ef0808';
        document.getElementById('zc').style.color='#dee839';
        document.getElementById('beijingse').style.backgroundColor='#0a0a0a';*/
    }
</script>

</div>
</body>
</html>
