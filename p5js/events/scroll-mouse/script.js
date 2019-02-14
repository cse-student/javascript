var txt = 'Scroll to move text';
var pos = 0
function setup() {
  createCanvas(800, 300);
	textAlign(CENTER, CENTER);
	frameRate(10);
}

function draw() {
	background(255);
	textSize(20);
	text(txt, width/2, pos);
}

function mouseWheel(){
	pos += event.delta;
}