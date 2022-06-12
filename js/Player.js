class Player{
    constructor(){
        //设置p1的属性
        this.p1x = 300;
        this.p1y = 300;
        this.p1img = okList[4];
        this.p1width = this.p1img.width;
        this.p1height = this.p1img.height;
        this.p1speed = 5;
        this.p1rightimg = okList[3];
        this.p1leftimg = okList[2];
        this.p1upimg = okList[4];
        this.p1downimg = okList[1];
        this.p1indexImage = 0;

        //绘制p2的属性
        this.p2x = 50000;
        this.p2y = 300;
        this.p2img = okList[8];
        this.p2width = this.p2img.width;
        this.p2height = this.p2img.height;
        this.p2speed = 5;
        this.p2rightimg = okList[7];
        this.p2leftimg = okList[6];
        this.p2upimg = okList[8];
        this.p2downimg = okList[5];
        this.p2indexImage = 0;

        //头像属性
		this.p1headImg = okList[9];
        this.p2headImg = okList[10];
		this.headWidth = 70;
		this.headHeight = 70;
		this.p1hp = 50;
        this.p2hp = 80;
		this.totalhp = 100;

    }

    draw(cxt){
        //每一次移动都重新绘制一次
        this.move();
        this.drawp1Head(cxt);
        this.drawp2Head(cxt);
        cxt.drawImage(this.p1img, this.p1x, this.p1y, this.p1width, this.p1height);
        cxt.drawImage(this.p2img, this.p2x, this.p2y, this.p2width, this.p2height);
    }

    move(){
        //p1按键控制
		//思路  先从keyset中获取方向
		if(keySet.has(65)){
			//向左 x变小
			this.p1x -= this.p1speed;
			this.p1img = this.p1leftimg;
		}else if(keySet.has(68)){
			//向右 x变大
			this.p1x += this.p1speed;
			this.p1img = this.p1rightimg;
		}else if(keySet.has(87)){
			//向上 y变小
			this.p1y -= this.p1speed;
            this.p1img = this.p1upimg;
		}else if(keySet.has(83)){
			//向下 y变大
			this.p1y += this.p1speed;
            this.p1img = this.p1downimg;
		}

        //p2按键控制
        if(keySet.has(37)){
			//向左 x变小
			this.p2x -= this.p2speed;
			this.p2img = this.p2leftimg;
		}else if(keySet.has(39)){
			//向右 x变大
			this.p2x += this.p2speed;
			this.p2img = this.p2rightimg;
		}else if(keySet.has(38)){
			//向上 y变小
			this.p2y -= this.p2speed;
            this.p2img = this.p2upimg;
		}else if(keySet.has(40)){
			//向下 y变大
			this.p2y += this.p2speed;
            this.p2img = this.p2downimg;
		}

		//考虑边界问题
        //p1边界
		if(this.p1x<0){
			this.p1x = 0;
		}
		if(this.p1x > screen.availWidth - this.p1width){
			this.p1x = screen.availWidth - this.p1width;
		}
		if(this.p1y < 0){
			this.p1y = 0;
		}
		if(this.p1y >= 600 - this.p1height){
			this.p1y = 600 - this.p1height;
		}

        //p2边界
        if(this.p2x<0){
			this.p2x = 0;
		}
		if(this.p2x > screen.availWidth - this.p2width){
			this.p2x = screen.availWidth - this.p2width;
		}
		if(this.p2y < 0){
			this.p2y = 0;
		}
		if(this.p2y >= 600 - this.p2height){
			this.p2y = 600 - this.p2height;
		}
	}
    //定义一个函数，用于绘制headImg和血量
	drawp1Head(cxt){
        //绘制p1头像
		cxt.drawImage(this.p1headImg, 10, 10, this.headWidth, this.headHeight);

		//绘制p1血条
		cxt.strokeStyle = "white";
		cxt.strokeRect(this.headWidth + 20, 20, 200, 20);
		cxt.fillStyle = "red";
		cxt.fillRect(this.headWidth + 20, 20, this.p1hp/this.totalhp*200, 20);
    	}
    drawp2Head(cxt){
        //绘制p2头像
        cxt.drawImage(this.p2headImg, screen.availWidth-this.headWidth, 10, this.headWidth, this.headHeight);

        //绘制p2血条
        cxt.strokeStyle = "white";
		cxt.strokeRect(1250, 20, 20, 20);
		cxt.fillStyle = "red";
		cxt.fillRect(1250, 20, this.p2hp/this.totalhp*200, 20);
    }
}
