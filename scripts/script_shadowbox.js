var currentImg;
function openBox(imgId, gallery){
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "../../galleries/"+gallery+".xml", true);
	xhttp.send();
	xhttp.onreadystatechange = function(){
		alert(xhttp.responseText);
	}
}

function nextImg(){

}

function prevImg(){

}

function closeBox(){

}