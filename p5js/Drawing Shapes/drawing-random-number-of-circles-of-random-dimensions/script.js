var circleSizes = [];

function setup() {
	createCanvas(800,800);	
	var numberOfCircles = int(random(10,500));
	console.log(numberOfCircles);
	for (var i = 0; i < numberOfCircles; i++){
		var circleSize = int(random(10,500));
		circleSizes.push(circleSize)
	}
}

function draw() {
	background(220);
	fill(237, 34, 93);
	strokeWeight(2);
	for (var i = 0; i < circleSizes.length; i++){
		ellipse(width/2, height/2, circleSizes[i], circleSizes[i]);
	}
}