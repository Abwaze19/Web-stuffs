function doFirst(){
	var post = document.getElementById('post');
	post.addEventListener('click', savePost, false);
}
function savePost(){
	username = document.getElementById('username').value;
	comment = document.getElementById('comment').value;
	sessionStorage.setItem(username,comment);
	
	display(username);
}
function display(username){
	right = document.getElementById('right');
	comment = sessionStorage.getItem(username);
	right.innerHTML = username + "<br>"+comment;
}
window.addEventListener('load', doFirst, false);