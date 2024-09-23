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