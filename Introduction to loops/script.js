alert("Check the console to see output results");
//Simple loop
console.log('Simple loop output:');
for(var i = 0; i < 10; i++){
	console.log('i = ' + i);
}

//Nested loop
console.log('Nested loop output:');
for (var i = 0; i < 5; i++){
	console.log('i = ' + i);
	for (var j = 5; j < 10; j++){
		console.log('j = '+ j);
		console.log('i * j = ' + i * j);
	}
}