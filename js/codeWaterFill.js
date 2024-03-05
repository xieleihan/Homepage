// Copyright© 2024 By SouthAki All Rights Reserved.

// // 业务逻辑代码
// 获取canvas元素
const cvs = document.getElementById("bg");

// 获取窗口尺寸 防止失真
const width = window.innerWidth * devicePixelRatio;
const height = window.innerHeight * devicePixelRatio;

// 设置canvas尺寸为窗口尺寸
cvs.width = width;
cvs.height = height;

// 获取绘制上下文
const ctx = cvs.getContext("2d");
// 字体大小
const fontSize = 20 * devicePixelRatio;

// 随机颜色生成
function getRandomColor() {
    const fontColor = [
        '#33b5e5',
        '#0099cc',
        '#aa66cc',
        '#9933cc',
        '#99cc00',
        '#669900',
        '#ffbb33',
        '#ff8800',
        '#ff4444',
        '#cc0000',
    ];
    return fontColor[Math.floor(Math.random() * fontColor.length)]
}

// 随机文字
function getRandomChar() {
    // 随机字符,但是采用一个有名的句子,确保26个字母都可以被随机到
    const str = 'the quick brown fox jumps over the lazy dog';
    return str[Math.floor(Math.random() * str.length)];
}

// 列宽
const columnWidth = fontSize;
// 列数
const columnCount = Math.floor(width / columnWidth);
// 每一列下一个文字是第几个
const nextChar = new Array(columnCount).fill(0);

// 画一行文字
function draw() {
    // 画布背景
    ctx.fillStyle = 'rgba(240,240,240,0.1)';
    ctx.fillRect(0, 0, width, height);
    for (let i = 0; i < columnCount; i++) {
        // 画一个字符
        // 颜色 字符 字体 位置
        ctx.fillStyle = getRandomColor();
        const char = getRandomChar();
        ctx.font = `${fontSize}px "Roboto Mono"`;
        const x = i * columnWidth;
        const s = nextChar[i];
        const y = (s + 1) * fontSize;
        ctx.fillText(char, x, y);
        if (y > height && Math.random() > 0.99) {
            nextChar[i] = 0;
        }
        nextChar[i]++;
    }
}

draw();
setInterval(draw, 30);

// 实现无限视差效果
// var codeWaterFill = document.getElementById("codeWaterFill")
// var codeWaterFillTitle = document.getElementById("codeWaterFillTitle");

// window.onscroll = function () {
//     // 获取页面滚动条的距离
//     var scrollTop = window.pageYOffset;
//     var returnScroll = 0;

//     if (scrollTop > 8100 && returnScroll == 0) {
//         codeWaterFillTitle.style.fontSize = "40px";
//         returnScroll = 1;
//     }
//     else {
//         codeWaterFillTitle.style.fontSize = "50px";
//     }
// }

window.onscroll = function () {
    var codeWaterFill = document.getElementById("codeWaterFill");
    var codeWaterFillTitle = document.getElementById("codeWaterFillTitle");

    // 获取 codeWaterFill 元素相对于视口的位置信息
    var rect = codeWaterFill.getBoundingClientRect();

    // 如果 codeWaterFill 元素的顶部在可视窗口的顶部范围内，执行函数
    if (rect.top <= 0) {
        codeWaterFillTitle.style.fontSize = "40px";
    } else {
        codeWaterFillTitle.style.fontSize = "50px";
    }
}