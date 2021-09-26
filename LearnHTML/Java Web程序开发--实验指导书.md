[学习Web开发的MDN文档](https://developer.mozilla.org/zh-CN/docs/Learn)
# 实验一：Web客户端技术
## 一．	实验目的
1. 掌握Dreamweaver、Code等工具的使用
2. 熟悉HTML的常用标记
3. 熟悉CSS选择器和常用属性
4. 掌握HTML+CSS+JavaScript的开发基础

## 二．	实验类型：验证型

## 三．	实验学时：4学时

## 四．	实验原理及知识点
1. HTML的常用标记包括文字与段落，建立列表，图片及多媒体文件的使用，建立超链接，建立表单页面
2. 页面的布局
3. 样式语法，样式属性，样式类
4. 脚本语言语法，HTML DOM模型，事件响应模型。
5. 使用jQuery操作DOM
6. Ajax

## 五．实验环境（硬件环境、软件环境）
1. 硬件环境：微型电子计算机Intel Pentium 4 CPU 1.2GHz，512MB RAM及以上
2. 软件环境：
操作系统：Windows 7 以上
Web服务器：Tomcat 8 以上
数据库：MySQL 5 以上
软件工具：Eclipse 4 集成开发工具/IDEA、Chrome浏览器

## 六．	实验内容及步骤
## 书城首页的实现
### 功能：
+ 布局
+ 水平菜单栏
+ 下拉菜单
+ 表格变色
+ 广告页轮播（选做）
### 效果图
![](index.png)
不使用CSS的效果图：![](index-nonCss.png)
### 实现步骤
### 1.创建资源文件夹
![](directory.png)
### 2.布局
#### 1）写出HTML的分层各部分
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>首页</title>
</head>
<body class="main">
	<!-- 1.网上书城顶部 start -->
<div id="divhead">

</div>
	<!-- 网上书城顶部  end -->

	<!--2. 网上书城菜单列表  start -->
<div id="divmenu">

</div>
<div id="divsearch">

</div>
<!-- 网上书城菜单列表  end -->

<!-- 3.网上书城首页轮播图  start -->
<div id="box_autoplay">
	
</div>
<!-- 网上书城首页轮播图  end -->
<!--4. 公告板和本周热卖  start -->
<div id="divcontent">

</div>
<!-- 公告板和本周热卖  end -->	

<!--5. 网上书城底部 start -->
<div id="divfoot">

</div>
	<!-- 网上书城底部  end -->
</body>
</html>
```
#### 2）为每个层布局，定义背景色和大小、定位（宽度、高度、框模型），局部通过table来设置位置
+ divhead 头部区域通过table布局，创建一行两列的表格。
```html
<table cellspacing="0" class="headtable">
	<tr>
		<td>
			<a href="#">
				<img src="images/logo.png" width="200" height="60" border="0" /> 
			</a>
        </td>
        <!--此单元格样式靠右边对齐-->
		<td style="text-align:right">
			<img src="images/cart.gif" width="26" height="23" style="margin-bottom:-4px" />&nbsp;<a href="#">购物车</a> 
			| <a href="#">帮助中心</a> 
			| <a href="#">我的帐户</a>
			| <a href="register.html">新用户注册</a>									 
		</td>		
	</tr>
</table>
<!--main.css中设置的样式-->
#divhead {
	width: 100%;
}
.headtable td {//利用左内边距为135px与前一个单元格隔开
	padding: 10px 50px 25px 135px;
}
```
+ divmenu 菜单项布局
```html
#divmenu {
	width: 100%;
	background-color: #000000;
	}
```
+ divsearch  内部元素用table布局
```html
<div id="divsearch">
<form action="#" id="searchform">
	<table width="100%" border="0" cellspacing="0">
		<tr>
            <!--样式中 右内边距定位-->
			<td style="text-align:right; padding-right:220px">
				Search 
				<input type="text" name="textfield" class="inputtable" id="textfield" value="请输入书名"
				onmouseover="this.focus();"
				onclick="my_click(this, 'textfield');"
				onBlur="my_blur(this, 'textfield');"/> 
				<a href="#">
					<img src="images/serchbutton.gif" border="0" style="margin-bottom:-4px" onClick="search()"/> 
				</a>
			</td>
		</tr>
	</table>
</form>
</div>
```
+ box_autoplay
```html
```
+ divcontent  内部元素用table布局
```html
#divcontent {
	width: 900px;//定义宽度
	background-color: #FCFDEF;
	border: 1px solid #EEEDDB;
	MARGIN-RIGHT: auto;
	MARGIN-LEFT: auto;
}
```
+ divfoot 内部元素用table布局
```html
#divfoot {
	width: 100%;
	clear: both;//规定元素的哪一侧不允许其他浮动元素，清除float
	background-color: #efefef;
	margin-top: 15px;
}
<div id="divfoot">
    <table width="100%" border="0" cellspacing="0" >
        <tr>
            <td rowspan="2" style="width:10%">
                <img src="images/logo.png" width="195" height="50"
                style="margin-left:175px" />
            </td>
            <td style="padding-top:5px; padding-left:50px">
                <a href="#">
                    <font color="#747556"><b>CONTACT US</b></font> 
                </a>
            </td>
        </tr>
        <tr>
            <td style="padding-left:50px">
                <font color="#CCCCCC">
                    <b>COPYRIGHT 2015 &copy; BookStore All Rights RESERVED.</b> 
                </font>
            </td>
        </tr>
    </table>
</div>
```

### 3. 菜单的实现（或用列表项实现）

>>锚伪类
在支持 CSS 的浏览器中，链接的不同状态都可以不同的方式显示，这些状态包括：活动状态，已被访问状态，未被访问状态，和鼠标悬停状态。
a:link {color: #FF0000}		/* 未访问的链接 */
a:visited {color: #00FF00}	/* 已访问的链接 */
a:hover {color: #FF00FF}	/* 鼠标移动到链接上 */
a:active {color: #0000FF}	/* 选定的链接 */

```html
#divmenu a {
    text-decoration: none;
    font-weight: bold;
    font-size: 14px;
    color: #FFFFFF; 
    padding: 10px 10px 10px 10px;//按照上、右、下、左的顺序分别设置各边的内边距
}

#divmenu a:link {
	font-weight: bold;
}

#divmenu a:visited {
	color: #FFFFFF;
}

#divmenu a:hover {
	color: #999999; /*颜色变换*/
}

#divmenu a:active {
	color: #FFFFFF;
}
```
### 4. 下拉菜单
#### 分析
菜单项的显示与隐藏，当鼠标移上则显示，离开则隐藏。
#### 设计
+ 设计两个鼠标事件函数：function show(menu)在鼠标移动上去时显示对应的div，function hide()移出时隐藏所有的div
+ 3个div,分别对应一个菜单项及其子菜单项。
```html
<html>
	<head>
		<title>下拉菜单实例</title>
		<script language="JavaScript">
			function show(menu){
				document.getElementById(menu).style.visibility = "visible";
			}
			function hide(){
				document.getElementById("menu1").style.visibility ="hidden";
				document.getElementById("menu2").style.visibility ="hidden";
				document.getElementById("menu3").style.visibility ="hidden";
			}
		</script>
	</head>
	<body>
		<table>
			<tr bgcolor="#9999ff" align="center">
				<td width="120" onmousemove="show('menu1')" onmouseout="hide()">系列课程</td>
				<td width="120" onmousemove="show('menu2')" onmouseout="hide()">教学课件</td>
				<td width="120" onmousemove="show('menu3')" onmouseout="hide()">课程大纲</td>
			</tr>
		</table>
		<div id="menu1" onmousemove="show('menu1')" onmouseout="hide()" style="background: #9999ff;position:absolute;left:12px;top:38;width:120;visibility: hidden">
			<span>C++程序设计</span><br/>
			<span>Java程序设计</span><br/>
			<span>Python程序设计</span><br/>
		</div>
		<div id="menu2" onmousemove="show('menu2')" onmouseout="hide()" style="background: #9999ff;position:absolute;left:137px;top:38;width:120;visibility: hidden">
			<span>C++课件</span><br/>
			<span>Java课件</span><br/>
			<span>Python课件</span><br/>
		</div>
		<div id="menu3" onmousemove="show('menu3')" onmouseout="hide()" style="background: #9999ff;position:absolute;left:260px;top:38;width:120;visibility: hidden">
			<span>C++大纲</span><br/>
			<span>Java大纲</span><br/>
			<span>Python大纲</span><br/>
		</div>
	</body>
</html>
```
+ 效果图
![](下拉菜单.PNG)

### 5. 表格变色
```html
<html>
	<head>
		<title>变色表格实例</title>
		<script language="JavaScript">
			function change(row){
				document.getElementById(row).style.backgroundColor = '#ccccff';
			}
			function reset(row){
				document.getElementById(row).style.backgroundColor = '';
			}
		</script>
	</head>
	<body>
		<table width='200px' border="1" cellpadding="1" align="center">
			<tr><th>学校</th><th>专业</th><th>人数</th></tr>
			<tr align="center" id="row1" onmouseover="change('row1')" onmouseout="reset('row1')"><td>北大</td><td>数学</td><td>2000</td></tr>
			<tr align="center" id="row2" onmouseover="change('row2')" onmouseout="reset('row2')"><td>清华</td><td>计算机</td><td>5000</td></tr>
			<tr align="center" id="row3" onmouseover="change('row3')" onmouseout="reset('row3')"><td>北邮</td><td>电子工程</td><td>2400</td></tr>
			<tr align="center" id="row4" onmouseover="change('row4')" onmouseout="reset('row4')"><td>复旦</td><td>新闻</td><td>3000</td></tr>
		</table>
	</body>
</html>
```
+ 效果图
![](变色表格.PNG)
### 6. 首页轮播图css和js
#### 轮播图的关键点
#### 1）position定位：这个属性定义建立元素布局所用的定位机制。
参看 https://developer.mozilla.org/zh-CN/docs/Web/CSS/position
任何元素都可以定位，不过绝对（absolute值）或固定元素会生成一个块级框，而不论该元素本身是什么类型。相对定位（relative值）元素会相对于它在正常流中的默认位置偏移。
+ relative值用于 box-autoplay 和 box-autoplay list 两个 div 层。其中 list 作为 其后的列表的容器，设置width、height为一张图片大小，`overflow：hidden`定义溢出元素内容区的内容会如何处理。hidden 值则列表的内容会被修剪，并且其余内容不可见。
+ absolute值：通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。用于 box-autoplay list ul 元素，ul是一个无序表，包含5个列表项，其内容都是图片，每张图片大小`900px*335px`，默认列表项的`display：block`块级元素。因此整个ul的尺寸就是`900px*(335*5)px`。它的top初始值是为0。
 
```html
<!--index.html-->
<div id="box_autoplay">
    <div class="list">
        <ul>
            <li><img src="ad/index_ad1.jpg" width="900" height="335" /></li>
            <li><img src="ad/index_ad2.jpg" width="900" height="335" /></li>
            <li><img src="ad/index_ad3.jpg" width="900" height="335" /></li>
            <li><img src="ad/index_ad4.jpg" width="900" height="335" /></li>
            <li><img src="ad/index_ad5.jpg" width="900" height="335" /></li>
        </ul>
    </div>
</div>

<!--autoplay.css-->
#box_autoplay {
	position:relative;
	width:900px;
	height:335px;
	background:#fff;
}

#box_autoplay .list {
	position:relative;
	width:900px;
	height:335px;
	overflow:hidden;
}
#box_autoplay .list ul {
	position:absolute;//relative效果相同
	top:0;//在js中被重新计算
	left:0;
}
#box_autoplay .list li {
	width:900px;
	height:335px;
	overflow:hidden;
}
```
#### 2）在js中完成的部分（详见autoplay.js的注释）
+ 添加按钮`this.creatBtn()`，为每一张图片配一个访问按钮。
+ 调用`this.toggle()`，清除所有按钮的样式，当前（iNow）按钮的样式设为current样式。
+ 设置定时器 `this.autoTimer`，每3秒将当前图片换为下一张。
+ 设置鼠标在轮播图所在层的out、over事件响应函数--去掉/加上定时器。

>>定义和用法
document.createdocumentfragment()方法创建了一虚拟的节点对象，节点对象包含所有属性和方法。
当你想提取文档的一部分，改变，增加，或删除某些内容及插入到文档末尾可以使用createDocumentFragment() 方法。为了防止文件结构被破坏，createDocumentFragment() 方法可以更安全改变文档的结构及节点。

## 书城注册页面的实现
### 功能
+ 设计一个用户注册的页面
+ 实现表单校验功能
### 效果图
![](register.png)
### 实现步骤
#### 1）创建register.html注册页面
核心代码：（其他与index.html相同）
```html
<!-- 3.网上书城用户注册  start -->
<!--在form的onSubmit事件，返回false时阻止提交-->
<div id="divcontent" align="center">
<form action="registersuccess.html" method="post" onSubmit="return checkForm();">
    <table width="850px" border="0" cellspacing="0">
        <tr>
            <td style="padding: 30px"><h1>新会员注册</h1>
                <table width="70%" border="0" cellspacing="2" class="upline">
                    <tr>
                        <td style="text-align: right; width: 20%">会员邮箱：</td>
                        <td style="width: 40%">
                        <input type="text" class="textinput"  id="email" name="email" onKeyUp="checkEmail();"/>
                        </td>
                        <td colspan="2"><span id="emailMsg"></span><font color="#999999">请输入有效的邮箱地址</font></td>
                    </tr>
                    <tr>
                        <td style="text-align: right">会员名：</td>
                        <td><input type="text" class="textinput"  id="username" name="username" onKeyUp="checkUsername();"/>
                        </td>
                        <td colspan="2"><span id="usernameMsg"></span><font color="#999999">字母数字下划线1到10位, 不能是数字开头</font></td>
                    </tr>
                    <tr>
                        <td style="text-align: right">密码：</td>
                        <td><input type="password" class="textinput"  id="password" name="password" onKeyUp="checkPassword();"/></td>
                        <td><span id="passwordMsg"></span><font color="#999999">密码请设置6-16位字符</font></td>
                    </tr>
                    <tr>
                        <td style="text-align: right">重复密码：</td>
                        <td>
                        <input type="password" class="textinput"  id="repassword" name="repassword" onKeyUp="checkConfirm();"/>
                        </td>
                        <td><span id="confirmMsg"></span>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align: right">性别：</td>
                        <td colspan="2">&nbsp;&nbsp;
                        <input type="radio" name="gender" value="男" checked="checked" /> 男
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" name="gender" value="女" /> 女
                        </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align: right">联系电话：</td>
                        <td colspan="2">
                        <input type="text" class="textinput"
                            style="width: 350px" name="telephone" />
                        </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align: right">个人介绍：</td>
                        <td colspan="2">
                        <textarea class="textarea" name="introduce"></textarea>
                        </td>
                        <td>&nbsp;</td>
                    </tr>
                </table>

                <table width="70%" border="0" cellspacing="0">
                    <tr>
                        <td style="padding-top: 20px; text-align: center">
                            <input type="image" src="images/signup.gif" name="submit" border="0"/>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</form>
</div>
```
#### 2）创建form.js文件，实现表单校验功能
```javascript
//待验证的输入数据
var emailObj;
var usernameObj;
var passwordObj;
var confirmObj;
//对应的提示信息
var emailMsg;
var usernameMsg;
var passwordMsg;
var confirmMsg;

window.onload = function() {	// 页面加载之后, 获取页面中的对象
	emailObj = document.getElementById("email");
	usernameObj = document.getElementById("username");
	passwordObj = document.getElementById("password");
	confirmObj = document.getElementById("repassword");

	emailMsg = document.getElementById("emailMsg");
	usernameMsg = document.getElementById("usernameMsg");
	passwordMsg = document.getElementById("passwordMsg");
	confirmMsg = document.getElementById("confirmMsg");
};
//总入口
function checkForm() {			// 验证整个表单
	var bEmail = checkEmail();
	var bUsername = checkUsername();
	var bPassword = checkPassword();
	var bConfirm = checkConfirm();
	return bUsername && bPassword && bConfirm && bEmail ;	// return false后, 事件将被取消
}
//举例
function checkEmail() {			// 验证邮箱
	var regex = /^[\w-]+@([\w-]+\.)+[a-zA-Z]{2,4}$/;
	var value =emailObj.value;
	var msg = "";
	if (!value)
		msg = "邮箱必须填写：";
	else if (!regex.test(value))
		msg = "邮箱格式不合法：";
	emailMsg.innerHTML = msg;
    // 根据消息结果改变tr(即*Obj.parentNode.parentNode访问的对象)的颜色
	emailObj.parentNode.parentNode.style.color = msg == "" ? "black" : "red";
	return msg == "";
}
```
### 思考题（补充内容）
####1、index.html和 register.html中的公共部分，如何复用？
```html
<!--header.html-->

<!-- 1.网上书城顶部 start -->
<div id="divhead">
	<table cellspacing="0" class="headtable">
		<tr>
			<td>
				<a href="#">
					<img src="images/logo.png" width="200" height="60" border="0" /> 
				</a>
			</td>
			<td style="text-align:right">
				<img src="images/cart.gif" width="26" height="23" style="margin-bottom:-4px" />&nbsp;<a href="#">购物车</a> 
				| <a href="#">帮助中心</a> 
				| <a href="#">我的帐户</a>
				| <a href="register.html">新用户注册</a>							
			 
			</td>		
		</tr>
	</table>
</div>
	<!-- 网上书城顶部  end -->

	<!--2. 网上书城菜单列表  start -->
<div id="divmenu">
		<a href="#">文学</a> 
		<a href="#">生活</a> 
		<a href="#">计算机</a> 
		<a href="#">外语</a> 
		<a href="#">经管</a>
		<a href="#">励志</a> 
		<a href="#">社科</a> 
		<a href="#">学术</a> 
		<a href="#">少儿</a>
		<a href="#">艺术</a> 
		<a href="#">原版</a> 
		<a href="#">科技</a> 
		<a href="#">考试</a> 
		<a href="#">生活百科</a> 
		<a href="#" style="color:#FFFF00">全部商品目录</a>		
</div>
<div id="divsearch">
<form action="#" id="searchform">
	<table width="100%" border="0" cellspacing="0">
		<tr>
			<td style="text-align:right; padding-right:220px">
				Search 
				<input type="text" name="textfield" class="inputtable" id="textfield" value="请输入书名"
				onmouseover="this.focus();"
				onclick="my_click(this, 'textfield');"
				onBlur="my_blur(this, 'textfield');"/> 
				<a href="#">
					<img src="images/serchbutton.gif" border="0" style="margin-bottom:-4px" onClick="search()"/> 
				</a>
			</td>
		</tr>
	</table>
</form>
</div>
<!-- 网上书城菜单列表  end -->

<!--footer.html-->
<!--5. 网上书城底部 start -->
<div id="divfoot">
		<table width="100%" border="0" cellspacing="0" >
			<tr>
				<td rowspan="2" style="width:10%">
					<img src="images/logo.png" width="195" height="50"
					style="margin-left:175px" />
				</td>
				<td style="padding-top:5px; padding-left:50px">
					<a href="#">
						<font color="#747556"><b>CONTACT US</b></font> 
					</a>
				</td>
			</tr>
			<tr>
				<td style="padding-left:50px">
					<font color="#CCCCCC">
						<b>COPYRIGHT 2015 &copy; BookStore All Rights RESERVED.</b> 
					</font>
				</td>
			</tr>
		</table>
	</div>
```
在新建的``myindex.html``页面里通过如下方式引入公共部分。
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>首页</title>
<link rel="stylesheet" href="css/main.css" type="text/css" />
<!-- 导入首页轮播图css和js脚本 -->
<link type="text/css" href="css/autoplay.css" rel="stylesheet" />
<script type="text/javascript" src="js/autoplay.js"></script>
<script type="text/javascript" src="js/jquery.min.js"></script>
    <script>
	$(function(){
          $("#header").load("header.html");
          $("#footer").load("footer.html");
		  })
    </script>
</head>
<body class="main">
<div id="header" file="header.html">需要引入的</div>
<!--页面特殊部分-->
<div id="footer" >需要引入的</div>
</body>
```
####2. 轮播图的其他实现方法
####3. 使用jQuery操作DOM
jQuery是一个Javascript框架，一个轻量级Javascript库，封装了css选择器，操作DOM的方法及jQuery事件等。
+ DOM(Document Object Model)是表示和处理一个HTML文档的模型，即树形结构，每个html元素都是DOM树的节点，操作节点，使得用户页面可以动态发生改变。
+ 大多数DOM事件都有一个等效的jQuery方法。比如ready()方法加载页面，在DOM加载完毕就会触发。常用的写法是 `$(function(){})`
+ 语法：`$(selector).action()`
+ 例子
过滤选择器（：开始），如`:nth-child(odd)`选择父元素下奇元素。`:checked`选择表单元素其属性值为checked的；`:not(selector)`选择“去除所有与给定选择器匹配的元素”。
```html
<!--图片预览与数据删除应用-->
<html>
	<head>
		<title>图片预览与数据删除应用</title>
		<script src="jquery-3.6.0.min.js"></script>
		<style type="text/css">
			table{width:360px; border-collapse: collapse;text-align: center;font-size: 12px;}
			table th,td{border: solid 1px #666;}
			table span{float:left;padding-left: 12px;}
			table th{background-color: #ccc; height: 32px;}
			table img{border:solid 1px #ccc; padding:3px; width:42px; height: 60px;}
			.clsImg{position:absolute; border:solid 1px #ccc; padding:3px;width:85px;height:120px;display: none;}
		</style>
		<script type="text/javascript">
			$(function(){
				$("table tr:nth-child(odd)").css("background-color","#eee");//隔行变色
				//全选复选框单击事件
				$("#chkAll").click(function(){
					$("table tr td input[type=checkbox]").attr("checked",this.checked);
				})
				/*删除按钮单击事件*/
				$("#btnDel").click(function(){
					var intL = $("table tr td input:checked:not('#chkAll')").length;
					if(intL != 0){
						$("table tr td input[type=checkbox]:not('#chkAll')").each(function(index){
							if(this.checked){
								$("table tr[id=" + this.value + "]").remove();
							}
						})
					}
				})
				/*小图片鼠标移动事件*/
				var x=5,y=15;//初始化提示图片的位置
				$("table tr td img").mouseover(function(e){
					$("#imgTip").attr("src",this.src)
								.css({"top":(e.pageY + y)+"px",//设置提示图片的位置
									  "left":(e.pageX + x)+"px"
									  }).show(2000);
								
				})
				$("table tr td img").mouseout(function(){
					$("#imgTip").hide();
				})
			})
		</script>
	</head>
	<body>
		<table>
			<tr><th>选项</th><th>编号</th><th>封面</th><th>购书人</th><th>性别</th><th>单价</th></tr>
			<tr id="1">
				<td><input id="checkbox1" type="checkbox" value="1"</td>
				<td>1001</td><td><img src="img\img01.png"/></td>
				<td>张三</td><td>男</td><td>35.6</td>
			</tr>
			<tr id="2">
				<td><input id="checkbox2" type="checkbox" value="2"</td>
				<td>1002</td><td><img src="img\img02.png"/></td>
				<td>李四</td><td>男</td><td>36.6</td>
			</tr>
			<tr id="3">
				<td><input id="checkbox3" type="checkbox" value="3"</td>
				<td>1003</td><td><img src="img\img03.png"/></td>
				<td>王五</td><td>男</td><td>37.6</td>
			</tr>
		</table>
		<table>
			<tr>
				<td style="text-align:left;height:28px;">
					<span><input id="chkAll" type="checkbox"/>全选</span>
					<span><input id="btnDel" type="button" value="删除" class="btn"/></span>
				</td>
			</tr>
		</table>
		<img id="imgTip" class="clsImg" />
	</body>
</html>
```
+ 效果图
![](图片预览与数据删除.PNG)

####4、Ajax编程技术
###### a)XMLHttpRequest对象：由JavaScript创建
###### b)XLMHttpRequest的方法和属性
###### c)Ajax开发的处理步骤
+ 创建XMLHttpRequest对象
+ 从Web表单中获取数据
+ 设置url
+ 建立到服务器的连接
+ 设置服务器返回数据后浏览器端运行的回调函数
+ 发送请求
+ 在回调函数中，获取服务器的响应数据（text或xml）并显示。
```html
<!--实现级联列表-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta charset="utf-8">
    <title>实现级联列表</title>
    <script type="text/javascript" src="js/ajax.js"></script>
    <script type="text/javascript">
        function refresh(){
            var p = document.getElementById("prov").value;
            var city = document.getElementById("city");
            if(p==""){
                city.options.length=0;
                city.options.add(new Option("--请选择城市--"));
            }else{
            var url = "list";
            var params = "prov="+ p;
            sendRequest(url,params,'post',show);
                            
        }
        }

        function show(){
            var city = document.getElementById("city");
            if(httpRequest.readyState==4){
                if(httpRequest.status == 200){
                    var citylist = httpRequest.responseText.split(",");
                    var citynum = citylist.length;
                    city.options.length=0;
                    for(i=0;i<citynum;i++)
                        city.options.add(new Option(citylist[i]));
               }
            }
        }
    </script>
</head>
<body>
    <form action="">
        省份：<select name="prov" id="prov" onchange="refresh()">
                <option value="">--请选择城市--</option>
                <option value="山东">山东</option>
                <option value="江苏">江苏</option>
                <option value="广东">广东</option>
                </select>
        城市：<select name="city" id="city">
                <option>--请选择城市--</option>
        </select>
    </form>
</body>
</html>
```
```java
package com.dxj.controller;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

@WebServlet("/list")
public class CascadeList extends HttpServlet {
    public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        Map<String,String> pm = new HashMap<String,String>();
        pm.put("山东","济南,青岛,泰安,潍坊,烟台,聊城");
        pm.put("江苏","南京,苏州,无锡,徐州,南通,扬州");
        pm.put("广东","广州,深圳,珠海,汕头,佛山,中山");
        req.setCharacterEncoding("utf-8");
        resp.setCharacterEncoding("utf-8");
        resp.setContentType("text/html,charset='utf-8");
        PrintWriter out = resp.getWriter();
        String prov = req.getParameter("prov");
        out.println(pm.get(prov));
    }
}

```
效果图 
![ajax级联列表](ajax级联列表.PNG)
####5、JSON
+ JSON的基本结构
	- 对象：`{key1:value1,key2:value2,...}`,通过“`对象.key`”获取属性值，属性值可以是数值、字符串、数组、对象等。
	- 数组：`[]`，通过“`数组名[index]`"获取数组元素，元素类型可以是数值、字符串、数值、对象等。
	经过对象和数值两种结构的嵌套可以组成更复杂的数据结构。
+ 在Javascript中使用JSON：JSON是JavaScript的原生格式，不需要特殊的工具包。当服务器端返回JSON字符串时，浏览器端需要将JSON字符串(有"")转换为JSON对象(无"")，常用方法：`JSON.parse(JsonStr)`.
+ Java对象与JSON的转化
	- pom.xml 增加 fastjson依赖。
```xml
<dependency>
      <groupId>com.alibaba</groupId>
      <artifactId>fastjson</artifactId>
      <version>1.2.58</version>
</dependency>
```
+	- 常用方法：
```java
//Java对象转换成String类型的JSON字符串
JSONObject.toJSONString(Java对象)
 //String类型的JSON字符串转换成Java对象
JSONObject.toJavaObject(JSON字符串,Java对象.class)
 //Json字符串转换成JSONObject对象
JSONObject.parseObject(JSON字符串)
 //JSON字符串转换成Java对象
JSONObject.parseObject(JSON字符串,Java对象.class)
```
####6、jQuery框架中的Ajax方法
+ post方法：以post方式从服务器请求数据。格式为：`$.post(url,data,callback)`
+ 例子：基于Ajax+jQuery的添加表格记录
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>基于ajax+jquery的记录添加</title>
    <script src="js/jquery-3.6.0.min.js"></script>
    <script>
        function add(){
            $.post("add",$("#form1").serialize(),function(data){
                $("#result").text(data);
            });
        }
    </script>
</head>
<body>
    <form id="form1" method="post">
        username:<input type="text" name="userName" id="userName" />
        password:<input type="password" name="password" id="password"/>
        <input type="button" value="添加记录" onclick="add()" />
      </form>
<div id="result"></div>
</body>
</html>
```
```java
package com.dxj.controller;

import com.alibaba.fastjson.JSON;
import com.dxj.po.Student;
import com.dxj.po.UserInfo;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/add")
public class Add extends HttpServlet {
    public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        req.setCharacterEncoding("utf-8");
        resp.setCharacterEncoding("utf-8");
        resp.setContentType("text/html,charset='utf-8");

        String userName = req.getParameter("userName");
        String password = req.getParameter("password");
        UserInfo userInfo = new UserInfo();
        userInfo.setUserName(userName);
        userInfo.setPassword(password);

        //fastjson中 List 转 JSONArray
        PrintWriter out = resp.getWriter();
        out.print(JSON.toJSONString(userInfo));
    }
}
```
+ $.post()提交表单：
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<meta content-type="text/html" charset="utf-8">

<head>
  <!-- <script src="js/jquery-3.6.0.min.js"></script> -->
  <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script type="text/javascript">
    // 脚本在html前面的话，需要把访问dom元素的代码放到 `$().ready()` 里面，不然访问不到元素
    $().ready(() => {
      // 这里不是查找提交按钮，而是查找表单
      $("#loginForm").submit((evt) => {
        $.post("user/login",
          {
            // 这些通过 id 查找文本框，但对应的文本框没有指明id
            userName: $("#userName").val(),
            password: $("#password").val()
          },
          function (data, status) {
            alert(status);
          });

        // 这代码是必需的，不然html form会自动提交
        evt.preventDefault();
      });
    })
  </script>
</head>

<body>
  <h2>login</h2>
  <form id="loginForm" method="post">
    username:<input type="text" name="userName" id="userName" />
    password:<input type="password" name="password" id="password"/>
    <input type="submit" id="submit" value="login" />
  </form>
</body>

</html>
```

# 实验二：Web服务器端技术
## 一．	实验目的
1. 掌握在Eclipse中配置Tomcat服务器的方法
2. 掌握Servlet的工作原理及运行和配置方法
3. 掌握Servlet获取请求参数的方法、Servlet实现转发请求的方法
4. 熟悉使用Session对象实现购物车和用户登录功能
5. 熟悉JSP指令和隐式对象的使用
6. 熟悉JSTL中常用的Core标签库
7. 掌握使用Filter实现用户自动登录和实现统一全站编码以及监听器监听域对象的生命周期的属性变更
8. 掌握JDBC操作数据库的步骤
9. 熟悉通过数据源获取数据库连接的方法
10. 熟悉使用JSP Model2的思想开发程序

## 二．	实验类型：验证型

## 三．	实验学时：12学时

## 四．	实验原理及知识点
1. Servlet的生命周期方法
2. 请求和响应对象的含义和应用、Servlet获取请求参数的方法、	Servlet实现转发请求的方法
3. Cookie对象和Session对象的使用
4. JSP的基本语法
5. JavaBean、EL表达式和JSTL标签库
6. Filter过滤器、Listener监听器
7. JDBC的常用API
8. 数据库连接池
9. MVC设计模式

## 五．实验环境（硬件环境、软件环境）
1. 硬件环境：微型电子计算机Intel Pentium 4 CPU 1.2GHz，512MB RAM及以上
2. 软件环境：
操作系统：Windows 7 以上
Web服务器：Tomcat 8 以上
数据库：MySQL 5 以上
软件工具：Eclipse 4 集成开发工具/IDEA、Chrome浏览器

## 六．	实验内容及步骤
### 1. 使用Eclipse新建Web工程，新建一个Servlet，在客户端输出 Hello World，跟踪生命周期三个阶段
```java
/*文件3-1、3-2*/

```
![运行结果截图1...N]()
### 2. 使用Eclipse新建Web工程，完成Servlet的配置
```java
/*任务3-1、3-2（文件3-4）*/

```
![运行结果截图1...N]()
### 3. 获取Servlet的编码配置信息
```java
/*文件3-5、测一测4*/

```
![运行结果截图1...N]()

### 4. Servlet获取请求参数，解决请求参数中文乱码问题（5分）
```java
/*文件4-13、4-14、任务4-3*/

```
![运行结果截图1...N]()
### 5. 请求重定向、RequestDispatcher实现转发并利用request传递数据（5分）
```java
/*文件4-1、任务4-1、文件4-8、4-9、文件4-16、4-17、4-18、4-19*/

```
![运行结果截图1...N]()


### 6. 使用Filter实现用户自动登录（5分）、统一全站编码（5分）
```java
/*任务8-1、任务8-2*/

```
![运行结果截图1...N]()

### 7. 监听三个域的对象属性变更（5分）
```java
/*任务8-3*/

```
![运行结果截图1...N]()
### 8. Session实现用户登录（5分）、实现购物车（5分）
```java
/*任务5-3、任务5-2*/

```
![运行结果截图1...N]()

### 9. 用JSP技术重写书城首页、注册页面（5分）
```java
/*任务6-1、6-2*/

```
![运行结果截图1...N]()

### 10. 编写书城注册页面的处理registerhandler.jsp，数据封装成JavaBean，并利用JSTL输出用户信息，保存此JavaBean实例以便后续使用。（5分）
```java
/*任务6-2、register.html
、registerhandler.jsp(参考第7章PPT)
*/

```
![运行结果截图1...N]()

### 11. 使用JDBC完成数据的增删改查（5分）
```java
/*任务9*/

```
![运行结果截图1...N]()

### 12. 按照Model2思想实现用户注册功能（10分）
```java
/*任务11*/

```
![运行结果截图1...N]()

