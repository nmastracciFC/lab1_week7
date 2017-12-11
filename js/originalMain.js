(function () {

const httpRequest = new XMLHttpRequest();
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
var F55 = document.querySelector("#F55"),
	F56 = document.querySelector("#F56"),
	F58 = document.querySelector("#F58");

// var thumbImg = document.querySelectorAll(".thumbInfo img");
var thumbImg = document.querySelectorAll(".data-ref");
console.log(thumbImg);


	
function getCarData(){
	//make an AJAX call to the DB; handel errors first
	if(!httpRequest) {
		alert('give up browser too old');
		return false
	}

	httpRequest.onreadystatechange = processRequest;
	httpRequest.open('GET', './includes/functions.php?carModel=' + this.id);
	httpRequest.send();

}

function processRequest() {
    let reqIndicator = document.querySelector('.request-state');
    reqIndicator.textContent = httpRequest.readyState;

    	// debugger;
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) { // 200 means everything is awesome
        // debugger;
        let data = JSON.parse(httpRequest.responseText);

        processCarData(data);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }





function processCarData(data){
	//destructuring asignment
	const{ modelName, pricing, modelDetails} = data;
	

	let model = document.querySelector(".modelName").textContent = modelName;
	let price = document.querySelector(".priceInfo").textContent = pricing;
	let details = document.querySelector(".modelDetails").textContent = modelDetails;


	// console.log("clicked");
	// var objectIndex = carData[this.id];
	// console.log(objectIndex);
//loop through all of the images in the array and give them the low-opacity class
	thumbImg.forEach(function(image, index){
		image.classList.add("nonActive");
	})
//on the image you clicked take the class off
//template string will look at whatever is in our model field 
	document.querySelector(`#${data.model}`).classList.remove("nonActive");
//change the markup to have different words from the objects
	// model.firstChild.nodeValue = objectIndex.modelName;
	// price.firstChild.nodeValue = objectIndex.price;
	// details.firstChild.nodeValue = objectIndex.description;
}



thumbImg.forEach(function(image, index){
	image.addEventListener("click", getCarData, false);
});

})();
