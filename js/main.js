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

// 侧边栏点击收起事件
// start
// 找到侧边栏所有元素
var sidebar = document.querySelector(".sideBar");
// console.log(sidebar);
// 找到需要点击的icon,响应鼠标点击事件
var arrowIconBox = document.querySelector(".arrow-icon-box");
// console.log(arrowIconBox);

// 鼠标点击事件
arrowIconBox.onclick = function () {
    // console.log("点击了");
    // dom对象.classList.toggle("指定类名") 有这个指定类名就会帮我们删除这个类名,如果没有这个指定类名,就会帮我们创建类名
    sidebar.classList.toggle("folding");
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
// 获取header
var header = document.querySelector(".header");
// 监听网页的滚动
// window.onscroll 这是一个Windows的监听页面变化的方法
window.onscroll = function () {
    // 获取页面滚动条的距离
    var scrollTop = window.pageYOffset;

    // 这是测试
    // console.log(viewHeightHalf);
    // console.log(scrollTop);

    // 判断当前垂直滚动的距离是否大于可视化高度的一半
    if (scrollTop > viewHeightHalf) {
        // 如果当前垂直滚动的距离大于可视化高度的一半,则,侧边栏透明度为1,否则为0
        sidebar.style.opacity = "1";
    }
    else {
        sidebar.style.opacity = "0";
    }

    // 顶部导航栏在滚动的时候要变色,建议使用背景颜色变化
    if (scrollTop > 0) {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    }
    else {
        header.style.backgroundColor = "rgba(17, 17, 17, 0.75)";
    }
}
// --end--

// 相册功能实现区域
// start
const poker = {
    imgs: [],
    img_index: 0,
    poker_eles: {},
    transform_datas: [
        "rotate(-10deg)",
        "rotate(-6deg) translate(35%, -12%)",
        "rotate(-2deg) translate(65%, -19%)",
        "rotate(2deg) translate(95%, -26%)",
        "rotate(6deg) translate(125%, -23%)",
    ],
    init() {
        this.poker_eles = [...document.getElementsByClassName("poker")];
        this.poker_eles.forEach((ele, index) => {
            ele.nums = index;
        });
    },
    move() {
        this.poker_eles.map((ele) => {
            let nums = ele.nums;
            if (nums + 1 >= this.poker_eles.length) {
                nums = 0;
                ele.style.transition = "";
            } else {
                nums += 1;
                ele.style.transition = "transform 0.3s ease";
            }
            ele.style.zIndex = nums;
            ele.style.transform = this.transform_datas[nums];
            ele.nums = nums;
        });
    },
};
poker.init();
// 初始化
Promise.all(poker.imgs.map(img => img.decode())).then(() => {
    poker.move();
});
// end

alphaReturntop.onclick = function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

// 实现点击个人图层, 显示弹出层, 并且实现点击关闭按钮, 可以隐藏弹出层
// --start--
// 获取personalBox的对象
var personalBox = document.querySelector(".personalBox");
// console.log(personalBox);
// 获取.personalBox-info对应的dom对象
var personalBoxInfo = document.querySelector(".detail-content");
// console.log(personalBoxInfo);
// 获取关闭按钮的对象
var personalBoxInfoClose = document.querySelector(".personalBox-info-close");
// console.log(personalBox-info-close);

// 给tips绑定鼠标点击事件
personalBox.onclick = function () {
    // 显示适龄提示弹出
    personalBox.style.zIndex = "100";
    personalBoxInfo.style.opacity = "1";
    // /* 背景遮罩 */
    personalBoxInfo.style.background = "rgba(0,0,0,0.7)";
    // 设置body对象的css样式overflow="hidden"
    document.body.style.overflow = "hidden";
    // 上面那个是阻止默认滚动行为
}

// 给关闭按钮设置鼠标点击事件
personalBoxInfoClose.onclick = function () {
    // console.log("点击了关闭按钮");
    // 隐藏适龄提示弹出
    personalBox.style.zIndex = "22";
    personalBoxInfo.style.opacity = "0";
    // 设置body对象的css样式overflow=""
    document.body.style.overflow = "";
}

personalBoxInfo.onclick = function (e) {
    // e是js事件触发以后产生的一个事情对象
    // e.target可以获取当前触发事件的目标对象
    // console.log(e.target);

    // 判断当前触发事件的目标对象是否含有class类名
    // console.log(e.target.classList.contains(""));
    // 获取的值是布尔类型
    if (e.target.classList.contains("personalBox-info")) {
        // 隐藏适龄提示弹出层
        personalBox.style.zIndex = "22";
        personalBoxInfo.style.opacity = "0";
        // 设置body对象的css样式overflow:""
        document.body.style.overflow = "";
    }
}
// --end--

// 顶部导航栏的搜索框
// start
var myinput = document.querySelector("#myinput");
var mybtn = document.querySelector("#mybtn");

// 添加事件监听器, 当输入发生的时候触发
myinput.addEventListener("input", function () {
    var myinputValue = myinput.value;
    mybtn.href = "https://www.bing.com/search?q=" + myinputValue;
})
// end