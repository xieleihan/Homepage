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
        $('[rel="icon"]').attr('href', "/images/地球.webp");
        document.title = '╭(°A°`)╮ 你为什么走了,记得回来哦 ~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/images/地球.webp");
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

// 个人About
// start
var aboutClose = document.querySelector("#close");
var about = document.querySelector("#about");
var mask = document.querySelector("#mask");
var personalInformationButton = document.querySelector("#personalInformationButton");
var footerAbout = document.querySelector("#footerAbout");
// console.log(aboutClose);
// console.log(about);
// console.log(mask);
// console.log(personalInformationButton);
personalInformationButton.onclick = function () {
    about.style.visibility = "visible";
    about.style.opacity = "1";
    mask.style.visibility = "visible";
    mask.style.opacity = "1";
}

footerAbout.onclick = function () {
    about.style.visibility = "visible";
    about.style.opacity = "1";
    mask.style.visibility = "visible";
    mask.style.opacity = "1";
}

aboutClose.onclick = function () {
    about.style.visibility = "hidden";
    about.style.opacity = "0";
    mask.style.visibility = "hidden";
    mask.style.opacity = "0";
}
// end

// 搜索框
// start
var myinput = document.querySelector("#myinput");
var mybtn = document.querySelector("#mybtn");

mybtn.onclick = function () {
    var myinputValue = myinput.value;
    window.location.href = "https://www.bing.com/search?q=" + myinputValue;
}
// end