let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages; // 计算下一个索引
    const offset = -currentIndex * 100; // 每张图片的宽度为100%
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`; // 移动轮播图
}

// 每3秒切换到下一张图片
setInterval(showNextImage, 3000);



document.getElementById('scrollButton').onclick = function() {
    document.getElementById('section1').scrollIntoView({ 
        behavior: 'smooth' 
    });
};


/*云图*/
const canvas = document.getElementById('animationCanvas');
    const ctx = canvas.getContext('2d');

    // 图片信息数组，包含图片的路径和点击后的链接
    const imagesData = [
        { src: 'img/yun.png', link: 'https://example.com/page1' },
        { src: 'img/yun.png', link: 'https://example.com/page2' },
        { src: 'img/yun.png', link: 'https://example.com/page3' }
    ];

    // 存储所有图片对象的信息
    const cloudImages = [];

    // 初始化图片对象
    function init() {
        imagesData.forEach((data) => {
            const img = new Image();
            img.src = data.src;
            img.onload = () => {
                const speed = Math.random() * 0.3 + 0.3; // 速度介于1到1.5之间，确保图片运动平滑
                const imgObj = {
                    image: img,
                    x: Math.random() * (canvas.width / 4), // 从左下随机位置开始
                    y: canvas.height - img.height,  // 图片从画布底部开始
                    dx: speed, // X方向初始速度
                    dy: -speed, // Y方向初始速度 (向上移动)
                    width: img.width,
                    height: img.height,
                    link: data.link,
                    paused: false,  // 标志图片是否暂停
                    originalDx: speed,  // 保存原始的dx
                    originalDy: -speed   // 保存原始的dy
                };
                cloudImages.push(imgObj);
            };
        });

        // 每帧更新
        requestAnimationFrame(update);
    }

    // 更新动画
    function update() {
        // 清空画布
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 更新每个图片的位置并绘制
        cloudImages.forEach((imgObj) => {
            if (!imgObj.paused) {
                imgObj.x += imgObj.dx;
                imgObj.y += imgObj.dy;

                // 碰到右上角：反向移动
                if (imgObj.x + imgObj.width >= canvas.width || imgObj.y <= 0) {
                    imgObj.dx = -Math.abs(imgObj.dx); // X 方向反向（确保是负数）
                    imgObj.dy = Math.abs(imgObj.dy);  // Y 方向反向（确保是正数）
                }

                // 碰到左下角：反向移动
                if (imgObj.x <= 0 || imgObj.y + imgObj.height >= canvas.height) {
                    imgObj.dx = Math.abs(imgObj.dx);  // X 方向正向
                    imgObj.dy = -Math.abs(imgObj.dy); // Y 方向负向
                }
            }

            // 绘制图片
            ctx.drawImage(imgObj.image, imgObj.x, imgObj.y);
        });

        // 下一帧
        requestAnimationFrame(update);
    }

    // 处理点击事件
    canvas.addEventListener('click', function (event) {
        const rect = canvas.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;

        // 检查点击是否落在某个图片上
        cloudImages.forEach((imgObj) => {
            if (clickX >= imgObj.x && clickX <= imgObj.x + imgObj.width &&
                clickY >= imgObj.y && clickY <= imgObj.y + imgObj.height) {
                // 如果点击到图片，跳转到对应的链接
                window.open(imgObj.link, '_blank');
            }
        });
    });

    // 处理鼠标移动事件
    canvas.addEventListener('mousemove', function (event) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        // 检查鼠标是否悬停在某个图片上
        cloudImages.forEach((imgObj) => {
            if (mouseX >= imgObj.x && mouseX <= imgObj.x + imgObj.width &&
                mouseY >= imgObj.y && mouseY <= imgObj.y + imgObj.height) {
                // 如果鼠标悬停，暂停该图片
                if (!imgObj.paused) {
                    imgObj.paused = true;
                    imgObj.originalDx = imgObj.dx;  // 只在第一次暂停时保存速度
                    imgObj.originalDy = imgObj.dy;
                    imgObj.dx = 0;
                    imgObj.dy = 0;
                }
            } else {
                // 如果鼠标移开，恢复该图片的运动（如果是暂停状态）
                if (imgObj.paused) {
                    imgObj.paused = false;
                    imgObj.dx = imgObj.originalDx;
                    imgObj.dy = imgObj.originalDy;
                }
            }
        });
    });

    // 启动动画
    init();
