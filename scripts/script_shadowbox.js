var images = []; //Array para almacenar las rutas de las imagenes
var currentImg; //Posicion de la imagen abierta en cada momento

function openBox(imgId, gallery){
	currentImg = imgId-1;
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "../../galleries/"+gallery+".xml", true); //Abro el xml de la galeria correspondiente
	xhttp.send();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4){ //Cuando el xml esta listo empiezo a parsearlo
			var parser = new DOMParser();
			var xmlDoc = parser.parseFromString(xhttp.responseText, "text/xml");
			var imagesXml = xmlDoc.getElementsByTagName('image'); 
			
			//Recorro las imagenes que haya en el xml y añado la ruta de cada una al array images
			for(var i = 0; i < imagesXml.length ; i++){
				images.push('../'+imagesXml[i].getAttribute('file'))
			}

			document.getElementById('shadowbox_img').src = images[currentImg];
			document.getElementById('shadowbox').style.display = "block";
			
		}
		
	}
}

//Incremento la posicion de la imagen actual, si llega al final vuelve a empezar
function nextImg(){
	currentImg++;
	if(currentImg == images.length) currentImg = 0;
	document.getElementById('shadowbox_img').src = images[currentImg];
}

//Decremento la posicion de la imagen actual, si llega al principio vuelve al final
function prevImg(){
	currentImg--;
	if(currentImg == -1) currentImg = images.length -1;
	document.getElementById('shadowbox_img').src = images[currentImg];
}

//Cierro la imagen
function closeBox(){
	document.getElementById('shadowbox').style.display = "none";
}
