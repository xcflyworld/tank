//定义容器，存储图片的地址
//存储背景图片的地址
var pathList = ["img/background/bg-img.png"];

//存储玩家1的图片地址
pathList.push("img/player/p1/p1tankD.gif","img/player/p1/p1tankL.gif","img/player/p1/p1tankR.gif","img/player/p1/p1tankU.gif");

//存储玩家2的图片地址
pathList.push("img/player/p2/p2tankD.gif","img/player/p2/p2tankL.gif","img/player/p2/p2tankR.gif","img/player/p2/p2tankU.gif");

//存储头像的图片地址
pathList.push("img/headimg/sqw.jpg","img/headimg/home-bak.jpg");
console.info(pathList);
var list =["D","L","R","U"];
for(var i = 1;i<4;i++){
	for(var j = 0;j<4;j++){
		pathList.push("img/enemy/enemy"+i+list[j]+".gif");
	}
}
//定义一个空容器，存储已经加载好的img
var okList = [];
var loadCount = 0;//加载好一个img就+1

//遍历pathList数组
for (var i = 0; i < pathList.length; i++) {
	var img = new Image();//创建图片对象
	img.src = pathList[i];//给src属性赋值
	okList.push(img);//将加载好的img存入到okList中
	img.onload = function(){
		loadCount++;
		if(loadCount == pathList.length){
			console.info("资源已经加载完成");
			startGame();

		}
	}
}
