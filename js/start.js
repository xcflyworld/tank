// 根据id找到画布
var c = document.getElementById("game");
// 给画布设置宽度
c.width = screen.availWidth;
// 获取画笔
var cxt = c.getContext("2d");
//定义一个set集合，用于存储用户按下的按键，便于在hero中获取这个keycode
var keySet = new Set();
//定义一个容器，用于存储小兵
var enemyList=[];
//函数的作用：添加小兵
function addEnemy(){
	if(enemyList.length<6){
		var count=enemyList.length;//当前小兵的个数
		var addNum=6-count;//需要新增的小兵个数
		for (var i=0;i<addNum;i++){
			//创建一个小兵对象
			var e=new Enemy();
			enemyList.push(e);//把小兵装入到容器中
		}
	}
}
function startGame(){
    console.info("游戏开始了！")
	//创建一个游戏背景对象
	//var 自定义变量名 = new 类名
	var bg = new Background();
	//对象名（实参）
	bg.draw(cxt);

	var player = new Player();
	player.draw(cxt); 
	
    var enemy = new Enemy();
	enemy.draw(cxt);
	
	// keydown 按键按下
	document.onkeydown=function(event){
		var code = event.keyCode;
		console.info("按下" + code);
		keySet.add(code);
		console.info(keySet);
	}
	//keyup 按键松开
	document.onkeyup=function(event){
		var code = event.keyCode;
		console.info("松开" + code);
		keySet.delete(code);
	}

    //定时器，每隔20毫秒重新绘制一次背景和英雄
	setInterval(function(){
		bg.draw(cxt);
		player.draw(cxt);
		//先装小兵
		addEnemy();
		//绘制小兵
		for (var i=0;i<enemyList.length;i++){
			   var e=enemyList[i];
		    e.draw(cxt);
		    e.drawHead(cxt);
		}
	},20)
}