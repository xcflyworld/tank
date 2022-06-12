class Enemy{
	constructor(){
		this.x=screen.availWidth;//小兵默认初始位置最右边
		this.y=parseInt(Math.random()*300)+180;//随机的
		this.imgList=okList[12];//包括30，不包括46
		this.width=70;//小兵图片宽度
		this.height=70;//小兵图片高度
		this.speed=parseInt(Math.random()*2)+1;//让小兵移动速度不一致
		this.headWidth=70;
		this.hp=90;
		this.totalHp=100;
		this.leftImgs = [
			okList[12],
			okList[12],
			okList[12],
			okList[12]
		];
		this.imgIndex=0;
		this.currentImgs = this.leftImgs;
	}
	//自己绘制自己的函数
	draw(ctx){
		this.move();
		ctx.drawImage(this.leftImgs[parseInt(this.imgIndex)],
		this.x,this.y,this.width,this.height);
	}
	//小兵移动函数
	move(){
		//让小兵从右往左移动，x坐标变小
		this.x-=this.speed;
		//判断小兵的x坐标
		if(this.x<0){
			//说明移动到屏幕最左边
			var index = enemyList.indexOf(this);
			//从数组中删除(从索引为index开始删除1个)
			enemyList.splice(index,1);
		}
		this.currentImgs = this.leftImgs;
			this.imgIndex += 0.8;
			if(this.imgIndex >= this.leftImgs.length){
				this.imgIndex = 0;
		}
	}
	drawHead(ctx){
		ctx.strokeStyle="white";
		ctx.strokeRect(this.x,this.y-20,100,10);
		ctx.fillStyle="red";
		ctx.fillRect(this.x,this.y-20,100,10);
	}
}