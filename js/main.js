// Copyright© 2024 By SouthAki All Rights Reserved.

function getMultiLine(f) {
    var lines = f.toString();
    return lines.substring(lines.indexOf("/*") + 3, lines.lastIndexOf("*/"));
}
//字符画不能随意缩进，不然显示会错位
var console_text = function () {
    /* 
  _________              __  .__        _____   __   .__ 
 /   _____/ ____  __ ___/  |_|  |__    /  _  \ |  | _|__|
 \_____  \ /  _ \|  |  \   __\  |  \  /  /_\  \|  |/ /  |
 /        (  <_> )  |  /|  | |   Y  \/    |    \    <|  |
/_______  /\____/|____/ |__| |___|  /\____|__  /__|_ \__|
        \/                        \/         \/     \/   
    
%c 致每一个在奔赴自己人生的我们:
    这是一个最好的时代，
    科技的发展给予了每个人创造价值的可能性；
    这也是一个最充满想象的时代，
    每一位心怀梦想的人，终会奔向星辰大海。
                   
                       Copyright© 2024 By SouthAki All Rights Reserved.
    */
}
console.log(getMultiLine(console_text), 'color:black;font-size:16px;font-style:italic');

// 浏览器搞笑标题
// start
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/images/icon.webp");
        document.title = '╭(°A°`)╮ 你为什么走了,记得回来哦 ~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/images/icon.webp");
        document.title = '(ฅ>ω<*ฅ) 谢谢来访 ~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
// end

// 禁止右键菜单
// 最好别用
document.oncontextmenu = function () { return false; };
// 禁止文字选择
document.onselectstart = function () { return false; };
// 禁止复制
document.oncopy = function () { return false; };
// 禁止剪切
document.oncut = function () { return false; };
// 阻止F12
// window.onkeydown = window.onkeyup = window.onkeypress = function (event) {
//     // 判断是否按下F12，F12键码为123
//     if (event.keyCode = 123) {
//         event.preventDefault() // 阻止默认事件行为
//         window.event.returnValue = false
//     }
// }

// --------------------

// 业务逻辑
// 打印页面相关信息（代码更新时间）
let date = new Date();
let a = 'background: #606060; color: #fff; border-radius: 3px 0 0 3px;'
let b = 'background: #1475B2; color: #fff; border-radius: 0 3px 3px 0;'
console.log(`%c Now Time : %c ${date} `, a, b);
/* 样式代码 */
var styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgb(244,167,89);
`
var styleTitle2 = `
font-style: oblique;
font-size:14px;
color: rgb(244,167,89);
font-weight: 400;
`
var styleContent = `
color: rgb(30,152,255);
`

/* 内容代码 */
var title1 = '🗺️🧭 南秋SouthAki '
var title2 = '一个全栈开发者的个人主页'

// => 读取配置型（在配置文件里配置这些会变动的网址）
var offiUrl = 'https://southaki.top'
var content = `
版 本 号：2.0.0    【南秋SouthAki】
编译日期：2024-02-10 19:39:39 
版权声明：
Copyright© 2024 By SouthAki All Rights Reserved.
该项目已经选择开源,遵守GPL开源协议
项目可在Github上下载到源码,除商用外,准许任何形式的使用.
让我们拥抱开源的星辰大海  -- SouthAki
 
🏠官网:  ${offiUrl}
`
console.log(`%c${title1} %c${title2}
%c${content}`, styleTitle1, styleTitle2, styleContent)

var truecount = 0;
// 时间函数
// start
function updateTime() {
    var nowDate = new Date();
    // console.log(nowDate);
    var nowHour = nowDate.getHours();
    var nowMinute = nowDate.getMinutes();
    // console.log(nowHour, nowMinute);
    var a = Math.floor(nowHour / 10)
    // console.log(a);
    var b = nowHour % 10
    // console.log(b);
    var c = Math.floor(nowMinute / 10)
    // console.log(c);
    var d = nowMinute % 10
    // console.log(d);
    var arr = [a, b, c, d];
    var timelist = document.querySelectorAll(".timelist");
    // console.log(timelist);
    for (var i = 0; i < timelist.length; i++) {
        timelist[i].innerHTML = arr[i];
    }
    // requestAnimationFrame()方法 :是浏览器提供的一个用于执行动画的api,它在浏览器每次重绘之前执行指定的代码,这个可以实现高精度的时间自动刷新,而且能保证精度,不过要考虑浏览器兼容问题
    requestAnimationFrame(updateTime);
    truecount = 1;
}
if (truecount == 0) {
    updateTime();
}
else {
    setTimeout(updateTime, 29000);
}
// end

// 设置框弹出
// start
var setting = document.getElementById("setting");
var settingBox = document.getElementById("settingBox");
// console.log(setting);
// console.log(settingBox);
setting.onmouseover = function () {
    // settingBox.style.display = "block";
    settingBox.style.visibility = "visible";
    settingBox.style.opacity = "1";
}
setting.onmouseout = function () {
    // settingBox.style.display = "none";
    settingBox.style.visibility = "hidden";
    settingBox.style.opacity = "0";
}
settingBox.onmouseover = function () {
    settingBox.style.visibility = "visible";
    settingBox.style.opacity = "1";
}
settingBox.onmouseout = function () {
    settingBox.style.visibility = "hidden";
    settingBox.style.opacity = "0";
}
// end

// 底部计时器
// start
var BootDate = new Date("2023/10/02 09:00:00");
function ShowRunTime(id) {
    var NowDate = new Date();
    var RunDateM = parseInt(NowDate - BootDate);
    var RunDays = Math.floor(RunDateM / (24 * 3600 * 1000));
    var RunHours = Math.floor(RunDateM % (24 * 3600 * 1000) / (3600 * 1000));
    var RunMinutes = Math.floor(RunDateM % (24 * 3600 * 1000) % (3600 * 1000) / (60 * 1000));
    var RunSeconds = Math.round(RunDateM % (24 * 3600 * 1000) % (3600 * 1000) % (60 * 1000) / 1000);
    var t = Math.trunc(234e8 + (NowDate - BootDate) / 1e3 * 17);
    var a = (t / 1496e5).toFixed(6);
    var RunTime = RunDays + "天" + RunHours + "时" + RunMinutes + "分" + RunSeconds + "秒";
    document.getElementById(id).innerHTML = "开始逐光之旅的第：" + RunTime + "，愿在年少时期，你能路过我生命" + "<br>" + "现在旅行者一号距离地球" + t + "千米，约为" + a + "个天文单位🚀";
}
setInterval("ShowRunTime('RunTime')", 1000);
// end


// 侧边栏点击收起事件
// start
// 找到侧边栏所有元素
var sidebarRight = document.querySelector(".sideBar-right");
// console.log(sidebar);
// 找到需要点击的icon,响应鼠标点击事件
var arrowIconBox = document.querySelector(".arrow-icon-box");
// console.log(arrowIconBox);

// 鼠标点击事件
arrowIconBox.onclick = function () {
    // console.log("点击了");
    // dom对象.classList.toggle("指定类名") 有这个指定类名就会帮我们删除这个类名,如果没有这个指定类名,就会帮我们创建类名
    sidebarRight.classList.toggle("folding");
    swal("如果还要我的联系方式的话,点击右边的小图标哦", "(❁´◡`❁)");
}

function executeQQSwal() {
    swal('这是我的QQ号', '1337141536--(❁´◡`❁)');
}

function executeTwSwal() {
    swal('这是我的twitter', 'https://twitter.com/SouthAki_Edge');
}

function executeBilibiliSwal() {
    window.location.href = "https://space.bilibili.com/347987209";
}
// end

// 实现页面滚动的时候,顶部导航栏改变背景颜色
// --start--
// 获取页面可视区高度
var viewHeight = document.documentElement.clientHeight;
// console.log(viewHeight);
// 计算可视化区域高度的一半
var viewHeightHalf = viewHeight / 2;
// 获取sideBar
var sideBar = document.querySelector(".sideBar");

// 监听网页的滚动
// window.onscroll 这是一个Windows的监听页面变化的方法
window.onscroll = function () {
    // 获取页面滚动条的距离
    var scrollTop = window.pageYOffset;

    // 判断当前垂直滚动的距离是否大于可视化高度的一半
    if (scrollTop > viewHeightHalf) {
        // 如果当前垂直滚动的距离大于可视化高度的一半,则,侧边栏透明度为1,否则为0
        sidebarRight.style.opacity = "1";
    }
    else {
        sidebarRight.style.opacity = "0";
    }

    // 顶部导航栏在滚动的时候要变色,建议使用背景颜色变化
    if (scrollTop > viewHeightHalf) {
        sideBar.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    }
    else {
        sideBar.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    }

}

// 点击测试区回到置顶
alphaReturntop.onclick = function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

// 点击返回置顶按钮回到置顶
returnTop.onclick = function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

// 点击右下角个人图片
// start
var personalInformationButtonImg = document.querySelector("#personalInformationButtonImg");
// console.log(personalInformationButtonImg);
var personalQuotes = document.querySelector("#personalQuotes");
// console.log(personalQuotes);
var mask = document.querySelector("#mask");
// console.log(mask);
var close = document.querySelector("#close");
// console.log(close);

personalInformationButtonImg.onclick = function () {
    mask.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    personalQuotes.style.visibility = "visible";
    personalQuotes.style.opacity = "1";
    mask.style.visibility = "visible";
    mask.style.opacity = "1";
    document.body.style.overflow = 'hidden'
}

close.onclick = function () {
    mask.style.backgroundColor = "rgba(0, 0, 0, 0)";
    personalQuotes.style.visibility = "hidden";
    personalQuotes.style.opacity = "0";
    mask.style.visibility = "hidden";
    mask.style.opacity = "0";
    document.body.style.overflow = 'visible'
}

// end

let network = 'background: #606060; color: #fff; border-radius: 3px 0 0 3px;'
let network2 = 'background: orange; color: #fff; border-radius: 0 3px 3px 0;'
console.log(`%c 网盾星球 : %c 提供高防CDN服务 `, network, network2);

var nightMode = document.querySelector("#nightMode");
var mask = document.querySelector("#mask");
// console.log(nightMode);
nightMode.onclick = function () {
    if (nightMode.checked) {
        mask.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        mask.style.zIndex = 10000;
        mask.style.visibility = "visible";
        mask.style.opacity = "1";
    }
    else {
        mask.style.backgroundColor = "rgba(0, 0, 0, 0)";
        mask.style.zIndex = 0;
        mask.style.visibility = "hidden";
        mask.style.opacity = "0";
    }
}

// 小工具的js部分
// start
// 计数器
var personalTools = 0;

// 这个是待开发的页面
var display = document.getElementById("display");
var AlphaPersonalToolsLi = document.getElementById("AlphaPersonalToolsLi");
// 这个是显示IP相关信息的页面
var IPaddressDisplay = document.getElementById("IPaddressDisplay");
var IPpersonalToolsLi = document.getElementById("IPpersonalToolsLi");
// 这个是计算器的页面
var calulatorDisplay = document.getElementById("calculatorDisplay");
var calulatorPersonalToolsLi = document.getElementById("calculatorPersonalToolsLi");
// 这个是网速显示的页面
var networkSpeedDetection = document.getElementById("networkSpeedDetection");
var networkPersonalToolsLi = document.getElementById("networkPersonalToolsLi");
var networkSpeedDetectionDisplay = document.getElementById("networkSpeedDetectionDisplay");
// console.log(networkSpeedDetectionDisplay);
// 下面这个方法是调用浏览器自带的API,显示网络的相关信息
// console.log(navigator.connection)
// navigator有另外的一个方法,是用来显示网络时候在线
// 这个是一个布尔值,true代表在线,false代表离线
// console.log(navigator.onLine);


// 网速显示的函数
// start
function getNetworkInfo() {
    let info;
    if (navigator.onLine) {
        info = {
            type: navigator.connection.effectiveType,
            rtt: navigator.connection.rtt,
            downlink: navigator.connection.downlink
        };
    }
    else {
        info = {
            type: "offline"
        };
    }
    return info;
}

function updateInfo() {
    const info = getNetworkInfo();
    const card = networkSpeedDetection;
    if (info.type === "offline") {
        card.innerHTML = '<p><strong>网络状态: </strong>离线</p>' +
            '<p><strong>延迟: </strong>离线</p>' +
            '<p><strong>带宽: </strong>离线</p>';
        networkSpeedDetection.style.backgroundColor = "lightpink";
        card.classList.add("off");
    } else {
        card.innerHTML = `<p><strong>网络状态: </strong>${info.type}</p>` +
            `<p><strong>延迟: </strong>${info.rtt}ms</p>` +
            `<p><strong>带宽: </strong>${info.downlink}Mb/s</p>`;
        networkSpeedDetection.style.backgroundColor = "lightblue";
        card.classList.remove("off");
    }
}

updateInfo();

// 发生网络切换的时候,进行刷新
window.addEventListener("online", updateInfo);
window.addEventListener("offline", updateInfo);
// 监听网络状态变化
navigator.connection.addEventListener("change", updateInfo);
// 定时刷新网络状态
setInterval(updateInfo, 10000);
// end

// 这里是IP显示的函数
IPpersonalToolsLi.onmouseover = function () {
    IPaddressDisplay.style.display = "block";
    display.style.display = "none";
    calulatorDisplay.style.display = "none";
    networkSpeedDetectionDisplay.style.display = "none";
}
IPpersonalToolsLi.onmouseout = function () {
    if (personalTools != 1) {
        IPaddressDisplay.style.display = "none";
        display.style.display = "block";
        networkSpeedDetectionDisplay.style.display = "none";
    }
}

// 这个是计算器的函数调用
calulatorPersonalToolsLi.onmouseover = function () {
    calulatorDisplay.style.display = "block";
    display.style.display = "none";
    IPaddressDisplay.style.display = "none";
    networkSpeedDetectionDisplay.style.display = "none";
}
calulatorPersonalToolsLi.onmouseout = function () {
    if (personalTools != 1) {
        calulatorDisplay.style.display = "none";
        display.style.display = "block";
        IPaddressDisplay.style.display = "none";
        networkSpeedDetectionDisplay.style.display = "none";

    }
}

// 这个是网速检测函数的调用
networkPersonalToolsLi.onmouseover = function () {
    networkSpeedDetectionDisplay.style.display = "block";
    display.style.display = "none";
    IPaddressDisplay.style.display = "none";
    calulatorDisplay.style.display = "none";
    personalTools = 1;
}
networkPersonalToolsLi.onmouseout = function () {
    if (personalTools != 1) {
        networkSpeedDetectionDisplay.style.display = "none";
        display.style.display = "block";
        IPaddressDisplay.style.display = "none";
        calulatorDisplay.style.display = "none";
    }
}

calulatorPersonalToolsLi.onclick = function () {
    calulatorDisplay.style.display = "block";
    display.style.display = "none";
    personalTools = 1;
}

IPpersonalToolsLi.onclick = function () {
    IPaddressDisplay.style.display = "block";
    display.style.display = "none";
    personalTools = 1;
}

networkPersonalToolsLi.onclick = function () {
    networkSpeedDetectionDisplay.style.display = "block";
    display.style.display = "none";
    personalTools = 1;
}
AlphaPersonalToolsLi.onclick = function () {
    IPaddressDisplay.style.display = "none";
    display.style.display = "block";
    personalTools = 0;
}
// end

// 个人小工具计算器的JavaScript实现
// start
// 我的解决思路,先是全局找遍id是calculatorli的元素
var calulator = document.querySelectorAll("#calculatorli");
var calculatorDisplayValue = document.getElementById("calculatorDisplayValue");
var str = "";

// 为每个 div 元素添加点击事件监听器
calulator.forEach(function (div) {

    div.addEventListener('click', function () {
        // 获取被点击 div 元素的文本内容
        var content = div.textContent;
        // 输出到控制台
        // console.log(content);
        str += content;
        calculatorDisplayValue.textContent = str;
    });
});
// end

// 生成随机种子图片链接
// 随机数范围在200-1000之间
var photosMainBox = document.getElementById("photosMainBox");
function randomNum() {
    var num = Math.floor(Math.random() * 800 + 200);
    return num;
}

for (var i = 0; i < 100; i++) {
    // var seed = randomNum();
    var seed2 = randomNum();
    var str = '';
    str += '<img src="https://picsum.photos/' + 200 + '/' + seed2 + '.webp?random=' + i + '"></img>'
    photosMainBox.innerHTML += str;
}