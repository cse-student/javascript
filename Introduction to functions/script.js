//function declaration
function addition(x, y){
	result = x + y;
	return result;
}

function subtraction(x, y){
	result = x - y;
	return result;
}

function print(x, y, result, operator){
	console.log(`x ${operator} y = ${result}`);
}

//function call
var x = 2;
var y = 1;
console.log(`x = ${x}`);
console.log(`y = ${y}`);
var result1 = (addition(x,y));
var result2 = (subtraction(x,y));
print(x, y, result1, '+');
var result2 = (subtraction(x,y));
print(x, y, result2, '-');