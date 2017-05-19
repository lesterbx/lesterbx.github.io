var images = ["../images/index_backgrounds/background01.jpg", "../images/index_backgrounds/background02.jpg", "../images/index_backgrounds/background03.jpg"];
var reviews = [{
					text: "I had the best experience, they have a great attention to detail, our special day was even more special, great food, and also they has the best energy, they will make you feel like royalty, thank you so much for taking care of us! ",
					author: "Marco C."
				},
				{
					text: "I seriously don't know how I would've made it through this whole stressful wedding process without them! They are amazing at what they do!",
					author: "Sharon N."
				},
				{
					text: "It's been about a month since my wedding day and I still get people commenting about how perfect that day was. I can easily say without a doubt that if I didn't work with MyEvents my special day wouldn't have gone as smoothly and looked as amazing.",
					author: "Ariana E."
				}];



var i = 1;
function changeImage(){
	document.body.style.backgroundImage = "url("+"'"+images[i]+"')";
	i++;
	if(i == images.length) i = 0;
}

var j = 1;
function changeReview(){
	document.getElementById("reviews").style.opacity = 0;
	setTimeout(function(){
		document.getElementById("review_text").innerHTML = reviews[j].text;
		document.getElementById("review_author").innerHTML = reviews[j].author;
		document.getElementById("reviews").style.opacity = 0.9;
	},2000)
	j++;
	if(j == reviews.length) j = 0;
}

window.onload = function(){
	setInterval(changeImage, 15000);
	setInterval(changeReview, 15000);
}