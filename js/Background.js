class Background{
	//定义构造函数， 作用 创建对象
	constructor(){
		this.x = 0;
		this.y = 0;
		this.img = okList[0];
		this.width = screen.availWidth;
		this.height = 600;
	}
	//定义一个函数，用于绘制自己
	//cxt就是画笔对象
	draw(cxt){
		cxt.drawImage(this.img, this.x, this.y, this.width, this.height);
		
	}
}