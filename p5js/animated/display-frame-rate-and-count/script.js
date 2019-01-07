function setup() {
	createCanvas(800, 400);
  frameRate(60);
	textAlign(CENTER, CENTER);
}

function draw() {
  var fps = parseInt(frameRate(), 10);
	var fc = frameCount
	background(220);
	fill(237, 34, 93);
	textSize(36);
	text('frame rate = ' + fps, width/2, height*.25);
	text('frame count = ' + fc, width/2, height*.75);
}