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
window.onkeydown = window.onkeyup = window.onkeypress = function (event) {
    // 判断是否按下F12，F12键码为123
    if (event.keyCode = 123) {
        event.preventDefault() // 阻止默认事件行为
        window.event.returnValue = false
    }
}

// --------------------

// 业务逻辑
var nowDate = new Date();
console.log(nowDate);
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

// 顶部导航栏的搜索框
// start
var myinput = document.querySelector("#myinput");
var mybtn = document.querySelector("#mybtn");

// 添加事件监听器, 当输入发生的时候触发
myinput.addEventListener("input", function () {
    var myinputValue = myinput.value;
    mybtn.href = "https://www.bing.com/search?q=" + myinputValue;
})

var search = document.querySelector("#search");
var searchForm = document.querySelector("#searchForm");
var searchcount = 0
// console.log(searchForm);
// console.log(search);
// 点击事件
search.onclick = function () {
    // searchForm.style.visibility = "visible";
    if (searchcount == 0) {
        searchForm.style.display = "block";
        searchcount = 1;
    }
    else {
        searchForm.style.display = "none";
        searchcount = 0;
    }
}
// end

// 设置框弹出
// start
var setting = document.getElementById("setting");
var settingBox = document.getElementById("settingBox");
// console.log(setting);
// console.log(settingBox);
setting.onmouseover = function () {
    settingBox.style.display = "block";
}
setting.onmouseout = function () {
    settingBox.style.display = "none";
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