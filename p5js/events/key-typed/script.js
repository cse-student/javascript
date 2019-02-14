var txt = 'Key code of key pressed is ';
var code = '';
var txt2 = 'Key pressed is ';
var keypress = ''
function setup() {
  createCanvas(800, 300);
	textAlign(CENTER, CENTER);
	frameRate(10);
}

function draw() {
	background(255);
	textSize(20);
	text(txt + code, width/2, height/2);
	text(txt2 + keypress, width/2, height/2 + 20);
}

function keyTyped(){
	code = keyCode;
	keypress = key;
}