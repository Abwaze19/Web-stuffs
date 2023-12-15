function dragOver(event){
	event.preventDefault();
}

function dragStart(event){
	event.dataTransfer.setData("text",event.target.id);
}

function drop(event){
	event.preventDefault();
	var data = event.dataTransfer.getData("text");
	event.target.appendChild(document.getElementById(data));
}
