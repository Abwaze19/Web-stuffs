//function to start the game
var myGamePiece;
var myShooter;
var shootBallLeft;
var shootBallRight;
function startGame(){
	myGameArea.start();
	myShooter = new drawShooter(340,520);
	myGamePiece = new component(15,20,(canvas.width)*0.04,(canvas.height)*0.04,'#005555',0);
	shootBallLeft = new circle(320,450,(canvas.height)/2,0);
	shootBallRight = new circle(360,450,(canvas.height)/2,0);
}
//object for the game area
var context;
move = 340;
var myGameArea = {
	//create a canvas object
	canvas : document.getElementById("canvas"),
	// function to start the game
	start : function(){
		//set the canvas width
		canvas.width = 700;
		//set the canvas height
		canvas.height = 500;
		//call the getContext object 
		context = canvas.getContext('2d');
		//call the updateGame function every 1second
		this.interval = setInterval(updateGame,3000);
		this.bullet = setInterval(updateCircle,30);
		this.shooter = setInterval(updateShooter,30);
		window.addEventListener('keydown',function(event){
			myGameArea.key = event.keyCode;
		});
		window.addEventListener('keyup',function(event){
			myGameArea.key = false;
		});
	},
	//function to clear the screen
	clear : function(){
		context.clearRect(0,0,canvas.width,canvas.height);
	}
};
//constructor that will create component
function component(x,y,width,height,color,create){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.create = create;
	this.update = function(val){
		var move = 0;
		var step = 0;
		for (var i = 0; i < this.create; i++) {
			for(var j = 0; j < val; j++){
				draw = context;
				draw.fillStyle = color;
				draw.translate(move,step);
				draw.fillRect(this.x,this.y,this.width,this.height);
				draw.translate(-move,-step);
				move += 35;
			}
			if(i == 12){
				break;
			}
			move = 0;
			step += 30;
		}
	}
}
//constructor that will create a small circle
function circle(x,y,radius,step){
	this.x = x;
	this.y = y;
	this.step = step;
	this.moveX = 0;
	this.moveY = 0;
	this.radius = radius * 0.04;
	this.update = function(){
		var shoot = canvas.getContext('2d');
		shoot.beginPath();
		shoot.arc(this.x,this.y,this.radius,0,2*Math.PI);
		shoot.fillStyle = 'orange';
		shoot.fill();
	},
	this.move = function(){
		this.x += this.moveX;
		this.y += this.moveY;
	}
}
//constructor that will create a shooter
function drawShooter(x,y){
	this.x = x;
	this.y = y;
	this.moveX = 0;
	this.update = function(){
		var circle = context;
		circle.beginPath();
		var radius = canvas.height/2;
		radius = radius * 0.2;
		circle.arc(this.x,this.y,radius,0,2*Math.PI);
		circle.fillStyle = '#005555';
		circle.fill();
	},
	this.move = function(){
		this.x += this.moveX;
	},
	this.clear = function(){
		circle.beginPath();
		circle.arc(0,0,0,0);
		circle.fill();
	}
}
//function to update game
function updateGame(){
	myGamePiece.create += 1; 
	myGamePiece.update(19);
}
//function to update shooter
function updateCircle(){
	myGameArea.clear();
	shootBallLeft.moveX = 0;
	shootBallRight.moveX = 0;
	shootBallLeft.moveY = 0;
	shootBallRight.moveY = 0;
	if(myGameArea.key === 39){
		shootBallLeft.moveX += 10;
		shootBallRight.moveX += 10;
	}
	if(myGameArea.key === 37){
		shootBallLeft.moveX -= 10;
		shootBallRight.moveX -= 10;
	}
	if(myGameArea.key === 32){
		shootOut.create();
		
	}
	shootBallLeft.move();
	shootBallRight.move();
	shootBallLeft.update();
	shootBallRight.update();
}
//function to update draw shooter
function updateShooter(){
	//myGameArea.clear();
	myShooter.moveX = 0;
	if(myGameArea.key === 39){
		myShooter.moveX += 10;
	}
	if(myGameArea.key === 37){
		myShooter.moveX -= 10;
	}
	myShooter.move();
	myShooter.update();
}
//function to shoot
var shootOut = {
	create : function(){
		alert(6);
		
	},
	update : function(){
		newShootLeft.y_left += 10;
		newShootRight.y_right += 10;
	}
};
