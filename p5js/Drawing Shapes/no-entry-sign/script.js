var count = 0;

function setup() {
  createCanvas(800, 300);
	rectMode(CENTER);
}

function draw() {	
  background(0);
	var x = width/2 //+ count;
	var y = height/2;
	var size = 200 //+ count
		
	//circle
	fill(237, 34, 93);
	noStroke();
	ellipse(x, y, size, size);
	
	//rectangle
	fill(255);
	rect(x, y, size*.75, size*0.15);
	
}