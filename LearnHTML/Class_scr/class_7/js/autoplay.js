var multiImages = document.getElementById("images");//��ȡ�ֲ�ͼ����ͼƬ����Ϣ
var circles = document.getElementById("btns").getElementsByTagName("span");//��ȡ���а�ť����Ϣ
var box = document.getElementById("box_autoplay");//��ȡ�ֲ�ͼ�����Ϣ
var currentIndex = 0;//��ǰչʾ���ֲ�ͼID
var preIndex = 0;//��һ��չʾ���ֲ�ͼID
var timer = null;//�Զ��л�

for (let i = 0; i < circles.length; i++) {//�����еİ�ť���г�ʼ��
    circles[i].style.backgroundColor="rgb(88, 186, 231)";//�涨��ť��ʼ��ɫ
    circles[i].setAttribute("id", i);//��5����ť����id��ֵ(��0��4)
    circles[i].addEventListener("mouseenter", overCircle);//���Ӽ�����,��������
}
//���Զ��ֲ������ý��г�ʼ��
timer = setInterval(nextMove, 3000);//�趨��ʱ3���л�
box.addEventListener("mouseover", function () {
    clearInterval(timer);
    //������ƶ�����ť��ʱ�����ʱ�趨
});
box.addEventListener("mouseout", function () {
    timer = setInterval(nextMove, 3000);
    //������Ƴ���ť��ʱ������ʱ�趨
});
changeCircleColor(preIndex, currentIndex);//���İ�ť����ɫ(����ʼ��ʱ��Ѱ�ť����ɫ����Ϊѡ��״̬,ֻ��һ��)

//����ƶ�����ť��ʱ
function overCircle() {
    preIndex = currentIndex;
    currentIndex = parseInt(this.id);//�ռ���ǰ��ѡ�а�ť��id
    // multiImages.style.transition="1.5s";
    changeCircleColor(preIndex, currentIndex);//�ѱ�ѡ�к��ϴ�ѡ�еİ�ť����ɫ�ı�
    moveImage();
}

//���İ�ť��ɫ(ѡ�а�ť)
function changeCircleColor(preIndex, currentIndex) {
    circles[preIndex].style.backgroundColor="rgb(88, 186, 231)";//��һ��ѡ�еİ�ť����ɫ�ı�س�ʼֵ
    circles[currentIndex].style.backgroundColor="rgb(255, 165, 0)";
}

//��һ���ֲ�ͼ
function preMove() {
    preIndex = currentIndex;
    if (currentIndex != 0) {//�ڵ�ǰ�ֲ�ͼ���ŵ���һ�ŵ�ʱ�򷵻ص�����(�Ӻ���ǰ)
        currentIndex--;
    }
    else {
        currentIndex = 4;
    }
    changeCircleColor(preIndex, currentIndex);//�ı䰴ť��ɫ
    moveImage();//�ı䵱ǰͼƬ
}

//��һ���ֲ�ͼ
function nextMove() {
    preIndex = currentIndex;
    if (currentIndex != 4) {//�ڵ�ǰ�ֲ�ͼ���ŵ������ŵ�ʱ�򷵻ص�һ��(��ǰ����)
        currentIndex++;
    }
    else {
        currentIndex = 0;
    }
    changeCircleColor(preIndex, currentIndex);//�ı䰴ť��ɫ
    moveImage();//�ı䵱ǰͼƬ
}

//�ƶ��ֲ�ͼ����һ��
function moveImage() {
    multiImages.style.left = -currentIndex * 900 + "px";//��ΪͼƬ��СΪ900����,���ֱ��ˮƽƽ��900����
}