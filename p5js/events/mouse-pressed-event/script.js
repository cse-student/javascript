var toggle = true;
function setup() {
  createCanvas(800, 300);
	textAlign(CENTER, CENTER);
	frameRate(10);
}

function draw() {
	if (toggle === true){
		fill(255);
		background(0);
	}
	else{
		fill(0);
		background(255);
	}
	textSize(20);
	var txt = 'Click on canvas to toggle color'
	text(txt, width/2, height/2);
}

function mousePressed(){
	toggle = !toggle;
}