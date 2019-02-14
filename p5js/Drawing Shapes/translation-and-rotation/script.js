var circleSizes = [];

function setup() {
	createCanvas(800,800);	
	rectMode(CENTER);
	noStroke();
	angleMode(DEGREES);
}

function draw() {
	background(220);
	fill(250);	
	
	translate(width/2, height/2);	
	push();
	rotate(45);
	rect(0, 0, 200, 200);
	pop();
	//The push and pop functions are used to limit the rotation to only the shapes drawn between the push and pop function
	
	fill(0);
	rect(0, 0, 50, 50);
}