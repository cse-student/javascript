function setup() {
	createCanvas(800,500);	
}

function draw() {
	background(220);
	rectMode(CENTER);
	//Circle 01
	fill(0);
	stroke(75);
	rect(width/2, height/2, 200, 100);
	
	//Circle 02
	stroke(0);
	fill(255, 53, 139);
	rect(width/2, height/2, 100, 50);
}