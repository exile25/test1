// let currentIndex = 0;
// const images = document.querySelectorAll('.carousel-image');
// const totalImages = images.length;

// function showNextImage() {
//     currentIndex = (currentIndex + 1) % totalImages; // 计算下一个索引
//     const offset = -currentIndex * 100; // 每张图片的宽度为100%
//     document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`; // 移动轮播图
// }

// script.js

// script.js

document.addEventListener('DOMContentLoaded', function () {
    // 选择叠加层和目标 section
    const overlay = document.querySelector('.overlay');
    const targetSection = document.querySelector('#section1');

    // 检查元素是否存在
    if (!overlay) {
        console.error('无法找到 .overlay 元素');
        return;
    }

    if (!targetSection) {
        console.error('无法找到 #section1 元素');
        return;
    }

    // 选项配置
    const options = {
        root: null, // 视口
        rootMargin: '0px',
        threshold: 0.5 // 当 section1 一半出现在视口中时触发
    };

    // 回调函数
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 当 section1 在视口中时，隐藏叠加层
                overlay.classList.add('hidden');
                console.log('section1 进入视口，隐藏叠加层');
            } else {
                // 当 section1 不在视口中时，显示叠加层
                overlay.classList.remove('hidden');
                console.log('section1 离开视口，显示叠加层');
            }
        });
    };

    // 创建观察者
    const observer = new IntersectionObserver(callback, options);

    // 观察目标 section
    observer.observe(targetSection);
});





/*滚动*/
// 滚动时改变导航栏背景
window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "rgba(31, 100, 202)"; // 滚动后背景颜色
        navbar.style.opacity = "0.9"; // 滚动后透明度
        navbar.style.boxShadow='0 2px 5px rgb(255, 255, 255)' // 滚动后boxshadow颜色

    } else {
        navbar.style.backgroundColor = "rgba(82, 149, 249, 0)"; // 初始背景颜色
        navbar.style.opacity = "1"; // 初始透明度
        navbar.style.boxShadow = 'none'; // 初始boxshadow颜色

    }
};


// 为 .text-mobile2 添加可见性
window.addEventListener('scroll', function(){
    const e = document.querySelector('.text-mobile2');
    const position = e.getBoundingClientRect();
    if(position.top < window.innerHeight && position.bottom >= 0) {
        e.classList.add('visible');
    } else {
        e.classList.remove('visible');
    }
});

// 为 .text-mobile1 添加可见性
window.addEventListener('scroll', function(){
    const e = document.querySelector('.text-mobile1');
    const position = e.getBoundingClientRect();
    if(position.top < window.innerHeight && position.bottom >= 0) {
        e.classList.add('visible');
    } else {
        e.classList.remove('visible');
    }
});



/*section介绍的渐变效果*/
window.addEventListener('scroll', function() {
    const paragraphs = document.querySelectorAll('p'); // 获取所有的<p>元素
    paragraphs.forEach(function(paragraph) {
        const position = paragraph.getBoundingClientRect();

        // 当<p>出现于视口中时，添加visible类
        if (position.top < window.innerHeight && position.bottom >= 0) {
            paragraph.classList.add('visible');
        } else {
            paragraph.classList.remove('visible'); // 当完全离开视口时，移除visible类
        }
    });
});


/* 云图 */
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

// 文本信息数组，包含文本的内容和点击后的链接
const textData = [
    { text: '狂犬病', link: 'cloudText/狂犬病.html' ,color: '#688fe2' ,fontSize:'50'},
    { text: '中国天眼', link: 'https://example.com/page2', color: '#b9b5ff' ,fontSize:'50'},
    { text: '无偿献血', link: 'https://example.com/page3' , color: '#bfe2ff',fontSize:'50'},
    { text: '新能源汽车', link: 'https://example.com/page4', color: '#9069ea',fontSize:'50' },
    { text: '头孢配酒', link: 'https://example.com/page4', color: '#c2d3f9' ,fontSize:'50'},
    { text: '取消中考', link: 'https://example.com/page4', color: '#c0f7f9',fontSize:'50' },
    { text: '地震', link: 'https://example.com/page4', color: '#abe9fc' ,fontSize:'50'},
    { text: '三星堆', link: 'https://example.com/page4', color: '#f47c7a',fontSize:'80' },
    { text: '劳动补贴', link: 'https://example.com/page4', color: '#f49973' ,fontSize:'80'},
    { text: '文物被盗', link: 'https://example.com/page4', color: '#b4b2f4' ,fontSize:'50'},
    { text: '唐山打人', link: 'https://example.com/page4', color: '#9db7f9' ,fontSize:'50'},
    { text: '高考泄题', link: 'https://example.com/page4', color: '#f27b8f' ,fontSize:'80'},
    { text: '太空授课', link: 'https://example.com/page4', color: '#baa4f9' ,fontSize:'50'},
    { text: '猴痘', link: 'https://example.com/page4', color: '#90f4f4' ,fontSize:'50'},
    { text: '食品安全', link: 'https://example.com/page4', color: '#c0d2f9' ,fontSize:'50'},
    { text: '猫一杯', link: 'https://example.com/page4', color: '#7998e5' ,fontSize:'50'},
    { text: '胖猫', link: 'https://example.com/page4', color: '#7392ef' ,fontSize:'50'},
    { text: '高价寻狗', link: 'https://example.com/page4', color: '#79b1e0',fontSize:'50' },
    { text: '粉色头发', link: 'https://example.com/page4', color: '#a4adf2' ,fontSize:'50'},

];

// 存储所有文本对象的信息
const cloudTexts = [];

// 初始化文本对象
function init() {
    textData.forEach((data) => {
        const fontSize = parseInt(data.fontSize, 10);
        const textWidth = ctx.measureText(data.text).width;
        const padding = 50;
        const speed = Math.random() * 0.3 + 0.3; // 速度介于0.3到0.6之间
        const textObj = {
            text: data.text,
            x: Math.random() * (canvas.width - fontSize-padding*2-100)+padding, // 确保文本不超出画布右边界
            y: Math.random() * (canvas.height  - fontSize-padding*2-100)+padding,// 确保文本不超出画布底部
            dx: speed, // X方向初始速度
            dy: -speed, // Y方向初始速度 (向上移动)
            fontSize: fontSize,

            color:data.color,
            link: data.link,
            paused: false,  // 标志文本是否暂停
            originalDx: speed,  // 保存原始的dx
            originalDy: -speed   // 保存原始的dy
        };
        cloudTexts.push(textObj);
    });

    // 每帧更新
    requestAnimationFrame(update);
}

// 更新动画
function update() {
    // 清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 更新每个文本的位置并绘制
    cloudTexts.forEach((textObj) => {
        if (!textObj.paused) {
            textObj.x += textObj.dx;
            textObj.y += textObj.dy;

            // 碰到右上角：反向移动
            if (textObj.x + ctx.measureText(textObj.text).width >= canvas.width ||  textObj.y <= textObj.fontSize) {
                textObj.dx = -Math.abs(textObj.dx); // X 方向反向（确保是负数）
                textObj.dy = Math.abs(textObj.dy);  // Y 方向反向（确保是正数）
            }

            // 碰到左下角：反向移动
            if (textObj.x <= 0 || textObj.y + textObj.fontSize >= canvas.height) {
                textObj.dx = Math.abs(textObj.dx);  // X 方向正向
                textObj.dy = -Math.abs(textObj.dy); // Y 方向负向
            }
        }

        // 绘制文本
        ctx.font = `${textObj.fontSize}px SimHei`; // 设置字体
        ctx.fillStyle =textObj.color; // 设置文本颜色
        ctx.fillText(textObj.text, textObj.x, textObj.y);
    });

    // 下一帧
    requestAnimationFrame(update);
}

// 处理点击事件
canvas.addEventListener('click', function (event) {
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    // 检查点击是否落在某个文本上
    cloudTexts.forEach((textObj) => {
        if (clickX >= textObj.x && clickX <= textObj.x + ctx.measureText(textObj.text).width &&
            clickY >= textObj.y - textObj.fontSize && clickY <= textObj.y) {
            // 如果点击到文本，跳转到对应的链接
            window.open(textObj.link, '_blank');
        }
    });
});

// 处理鼠标移动事件
canvas.addEventListener('mousemove', function (event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // 检查鼠标是否悬停在某个文本上
    cloudTexts.forEach((textObj) => {
        if (mouseX >= textObj.x && mouseX <= textObj.x + ctx.measureText(textObj.text).width &&
            mouseY >= textObj.y - textObj.fontSize && mouseY <= textObj.y) {
            // 如果鼠标悬停，暂停该文本
            if (!textObj.paused) {
                textObj.paused = true;
                textObj.originalDx = textObj.dx;  // 只在第一次暂停时保存速度
                textObj.originalDy = textObj.dy;
                textObj.dx = 0;
                textObj.dy = 0;
            }
        } else {
            // 如果鼠标移开，恢复该文本的运动（如果是暂停状态）
            if (textObj.paused) {
                textObj.paused = false;
                textObj.dx = textObj.originalDx;
                textObj.dy = textObj.originalDy;
            }
        }
    });
});

// 启动动画
init();


/*图片滚动播放器*/
const scrollWrapper = document.querySelector('.scroll-wrapper');

// 鼠标进入停止滚动
scrollWrapper.addEventListener('mouseenter', () => {
    scrollWrapper.style.animationPlayState = 'paused';
});

// 鼠标离开继续滚动
scrollWrapper.addEventListener('mouseleave', () => {
    scrollWrapper.style.animationPlayState = 'running';
});
