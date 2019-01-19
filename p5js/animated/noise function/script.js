function setup() {
	createCanvas(800, 300);
}

function draw() {	
	background(0);
	
	fill(255);
	noStroke();
	var diameter = 50;
	
	for(var i = 0; i < width/ diameter; i++){
		for(var j = 0; j < height / diameter; j++){
			ellipse(
			diameter / 2 + i * diameter,
			diameter / 2 + j * diameter,
			diameter * noise(frameCount / 100 + i + j),
			diameter * noise(frameCount / 100 + i + j)
			);
		}
	}
}