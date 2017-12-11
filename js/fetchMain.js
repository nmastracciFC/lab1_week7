(function () {

const httpRequest = new XMLHttpRequest();

// var thumbImg = document.querySelectorAll(".thumbInfo img");
var thumbImg = document.querySelectorAll(".data-ref");
console.log(thumbImg);

function getCarData(){
	const url = './includes/functions.php?carModel=' + this.id;
//the fetch API uses new Javascript Promise API
	fetch(url) //do an ajax call with fetch
		.then((resp) => resp.json()) //response is JSON object
		.then((data) => {processCarData(data);}) //call the process function
		.catch(function(error) {
			//catches any error and reports it to the database
			console.log(error);
		});
}


function processCarData(data){
	//destructuring asignment
	const{ modelName, pricing, modelDetails} = data;
	

	let model = document.querySelector(".modelName").textContent = modelName;
	let price = document.querySelector(".priceInfo").textContent = pricing;
	let details = document.querySelector(".modelDetails").textContent = modelDetails;

//loop through all of the images in the array and give them the low-opacity class
	thumbImg.forEach(function(image, index){
		image.classList.add("nonActive");
	})
//on the image you clicked take the class off
//template string will look at whatever is in our model field 
	document.querySelector(`#${data.model}`).classList.remove("nonActive");
	
}



thumbImg.forEach(function(image, index){
	image.addEventListener("click", getCarData, false);
});

})();
