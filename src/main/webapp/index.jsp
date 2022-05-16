<html>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<body style="background: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 100%);">
<div style="text-align: center;padding-top: 20%;">
    <h2 style="color: blue;font-style: inherit;font-size: 80px;"><a href="${pageContext.request.contextPath}/customer/showHome">Dai&nbsp;Yin&nbsp; Bao</a></h2>
    <h2 style="color: #16161a;font-style: inherit;font-size: 25px;"><a href="#" id="happy">ZHH<strong id="write" style="color:red;"></strong></a>&nbsp;WN&nbsp FHY  FXK ZLM</h2>

</div >
<script>
    var hap=document.getElementById('happy');
    hap.onclick=function (){
        hap.innerHTML = '<font style="color: red">别瞎点，有病毒！</font>';
   }
</script>
</body>

</html>
