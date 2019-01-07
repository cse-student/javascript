function setup() {
  createCanvas(800, 300);
	textAlign(CENTER, CENTER);
	frameRate(10);
}

function draw() {
	background(255);
	var x = mouseX;
	var y = mouseY;
	textSize(20);
	var txt = 'mouseX = ' + x + ' mouseY = ' + y; 
	text(txt, width/2, height/2);
}