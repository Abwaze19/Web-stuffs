function doFirst(){
	a = document.getElementById("canvas");
	canvas = a.getContext("2d");
	image = new Image();
	image.src = "12.jpg";
	window.addEventListener("mousemove", images, false);
}
function images(img){
	canvas.clearRect(0,0,600,400);
	x = img.clientX;
	y = img.clientY;
	canvas.drawImage(image,x-50,y-50,100,100);
}
window.addEventListener("load", doFirst, false);