(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
var F55 = document.querySelector("#F55"),
	F56 = document.querySelector("#F56"),
	F58 = document.querySelector("#F58");

// var thumbImg = document.querySelectorAll(".thumbInfo img");
var thumbImg = document.querySelectorAll(".data-ref");
console.log(thumbImg);

var modelName = document.querySelector(".modelName"),
	price = document.querySelector(".priceInfo"),
	details = document.querySelector(".modelDetails");
	
function action(){
	console.log("clicked");
	var objectIndex = carData[this.id];
	console.log(objectIndex);
//loop through all of the images in the array and give them the low-opacity class
	thumbImg.forEach(function(image, index){
		image.classList.add("nonActive");
	})
//on the image you clicked take the class off
	this.classList.remove("nonActive");

	modelName.firstChild.nodeValue = objectIndex.model;
	price.firstChild.nodeValue = objectIndex.price;
	details.firstChild.nodeValue = objectIndex.description;


}


thumbImg.forEach(function(image, index){
	image.addEventListener("click", action, false);
});

// F55.addEventListener("click", action, false);

})();
