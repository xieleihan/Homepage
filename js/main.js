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