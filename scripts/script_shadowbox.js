var currentImg;
var images = [];

function openBox(imgId, gallery){
	currentImg = imgId-1;
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "../../galleries/"+gallery+".xml", true);
	xhttp.send();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4){
			var parser = new DOMParser();
			var xmlDoc = parser.parseFromString(xhttp.responseText, "text/xml");
			var imagesXml = xmlDoc.getElementsByTagName('image');
			for(var i = 0; i < imagesXml.length ; i++){
				images.push('../'+imagesXml[i].getAttribute('file'))
			}

			document.getElementById('shadowbox_img').src = images[currentImg];
			document.getElementById('shadowbox').style.display = "block";
			
		}
		
	}
}

function nextImg(){
	currentImg++;
	if(currentImg == images.length) currentImg = 0;
	document.getElementById('shadowbox_img').src = images[currentImg];
}

function prevImg(){
	currentImg--;
	if(currentImg == -1) currentImg = images.length -1;
	document.getElementById('shadowbox_img').src = images[currentImg];
}

function closeBox(){
	document.getElementById('shadowbox').style.display = "none";
}