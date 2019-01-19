function setup() {
	createCanvas(800, 300);
	textAlign(CENTER, CENTER);
	frameRate(1);
}

function draw() {	
	background(0);
	var ran = random();
	
	fill(255);
	textSize(25);	
	text(ran, width/2, height/2);
}