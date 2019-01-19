function setup() {
	createCanvas(1500,500);	
}

function draw() {
	background(220);
	rectMode(CENTER);
	noStroke();
	
	var rectDimension = 50;
	for (var i = 0; i < width; i++){
	fill(0);
	stroke(75);
	rect(i * rectDimension + rectDimension /2
		,i * rectDimension + rectDimension /2
		, rectDimension, rectDimension);
	}
}