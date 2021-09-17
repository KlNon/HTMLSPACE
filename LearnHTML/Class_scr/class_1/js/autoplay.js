var multiImages = document.getElementById("images");//获取轮播图所有图片的信息
var circles = document.getElementById("btns").getElementsByTagName("span");//获取所有按钮的信息
var box = document.getElementById("box_autoplay");//获取轮播图块的信息
var currentIndex = 0;//当前展示的轮播图ID
var preIndex = 0;//上一次展示的轮播图ID
var timer = null;//自动切换

for (let i = 0; i < circles.length; i++) {//对所有的按钮进行初始化
    circles[i].style.backgroundColor="rgb(88, 186, 231)";//规定按钮初始颜色
    circles[i].setAttribute("id", i);//对5个按钮进行id赋值(从0到4)
    circles[i].addEventListener("mouseenter", overCircle);//增加监听器,当鼠标进入
}
//对自动轮播的设置进行初始化
timer = setInterval(nextMove, 3000);//设定延时3秒切换
box.addEventListener("mouseover", function () {
    clearInterval(timer);
    //在鼠标移动到按钮上时清除延时设定
});
box.addEventListener("mouseout", function () {
    timer = setInterval(nextMove, 3000);
    //在鼠标移出按钮上时继续延时设定
});
changeCircleColor(preIndex, currentIndex);//更改按钮的颜色(即初始的时候把按钮的颜色更新为选中状态,只用一次)

//鼠标移动到按钮上时
function overCircle() {
    preIndex = currentIndex;
    currentIndex = parseInt(this.id);//收集当前被选中按钮的id
    // multiImages.style.transition="1.5s";
    changeCircleColor(preIndex, currentIndex);//把被选中和上次选中的按钮的颜色改变
    moveImage();
}

//更改按钮颜色(选中按钮)
function changeCircleColor(preIndex, currentIndex) {
    circles[preIndex].style.backgroundColor="rgb(88, 186, 231)";//上一次选中的按钮的颜色改变回初始值
    circles[currentIndex].style.backgroundColor="rgb(255, 165, 0)";
}

//上一张轮播图
function preMove() {
    preIndex = currentIndex;
    if (currentIndex != 0) {//在当前轮播图播放到第一张的时候返回第五张(从后往前)
        currentIndex--;
    }
    else {
        currentIndex = 4;
    }
    changeCircleColor(preIndex, currentIndex);//改变按钮颜色
    moveImage();//改变当前图片
}

//下一张轮播图
function nextMove() {
    preIndex = currentIndex;
    if (currentIndex != 4) {//在当前轮播图播放到第五张的时候返回第一张(从前往后)
        currentIndex++;
    }
    else {
        currentIndex = 0;
    }
    changeCircleColor(preIndex, currentIndex);//改变按钮颜色
    moveImage();//改变当前图片
}

//移动轮播图到下一张
function moveImage() {
    multiImages.style.left = -currentIndex * 900 + "px";//因为图片大小为900像素,因此直接水平平移900像素
}