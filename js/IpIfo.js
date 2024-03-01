// Copyright© 2024 By SouthAki All Rights Reserved.

function getIpInfo() {
    // 这里需将地址前面的当前年份根据需要进行更改
    var path = 'https://2024.ipchaxun.com/';
    if (path !== undefined) {
        var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
        httpRequest.open('GET', path, true);//第二步：打开连接 将请求参数写在url中 ps:"./Ptest.php?name=test&nameone=testone"
        httpRequest.send();//第三步：发送请求 将请求参数写在URL中
        /**
        * 获取数据后的处理程序
        */
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                var info = httpRequest.responseText;//获取到json字符串，还需解析
                var obj = JSON.parse(info)
                const ip = obj.ip;
                document.getElementById("userAgentIp").innerHTML = obj.ip;
                document.getElementById("userAgentCountry").innerHTML = obj.data[0];
                document.getElementById("userAgentRegion").innerHTML = obj.data[1];
                document.getElementById("userAgentCity").innerHTML = obj.data[2];
                document.getElementById("userAgentIsp").innerHTML = obj.data[4];
            }
        };
    } else {
        console.log('获取信息失败');
    }
    var uaInfo = navigator.userAgent;
    document.getElementById("userAgent").innerHTML = uaInfo;
}
getIpInfo();