var r = document.getElementById('r');
var g = document.getElementById('g');
var b = document.getElementById('b');
var redVal = document.getElementById('red');
var greenVal = document.getElementById('green');
var blueVal = document.getElementById('blue');
var mixedColor = document.getElementById('mixedColor');
function changeRedValue(currentValue){
	redVal.innerHTML = currentValue;
	r.innerHTML = currentValue;
	mixedColor.style.backgroundColor = "rgb("+r.innerHTML+","+g.innerHTML+","+b.innerHTML+")";
}
function changeGreenValue(currentValue){
	greenVal.innerHTML = currentValue;
	g.innerHTML = currentValue;
	mixedColor.style.backgroundColor = "rgb("+r.innerHTML+","+g.innerHTML+","+b.innerHTML+")";
}
function changeBlueValue(currentValue){
	blueVal.innerHTML = currentValue;
	b.innerHTML = currentValue;
	mixedColor.style.backgroundColor = "rgb("+r.innerHTML+","+g.innerHTML+","+b.innerHTML+")";
}

