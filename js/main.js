

var Products = [
	["Mouse CoinRoad 350 x" , "mouse"],
	["Microphone CoinRoad 350 150Gh" , "microphone"],
	["Keyboard SHMarket 350 Y bn" , "keyboard"],
	["Microphone CoinRoad 350 150Gh" , "microphone"],
	["screen CoinRoad 1080x540 fullHD" , "screen"],
	["Microphone CoinRoad 350 150Gh" , "microphone"],
];

function showProducts() {
	for (var i = 0; i < Products.length; i++) {
		document.write(`<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">`);
		document.write(`<div class="card-product">`);
		document.write(`<h4>${Products[i][0]}</h4>`);
		document.write(`<img class="img-responsive center-block" src="img/${Products[i][1]}.jpg">`);
		document.write(`<div class="visit">`);
		document.write(`<button>Add To See Later</button>`);
		document.write(`<button>Read More</button>`);
		document.write(`</div>`);
		document.write(`</div>`);
		document.write(`</div>`);
	}
}



