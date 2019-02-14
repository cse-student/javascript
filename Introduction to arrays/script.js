//Instantiating an empty array
var arr = [];
//Adding values to arr
arr.push(1);
arr.push('Hello world');
arr.push({'course':'computer science engineering'});
console.log(arr);

//Instantiating an array with values
var arr2 = [1,2,3,4,5];
console.log(`arr2: ${arr2}`);
//Reading from array
console.log(arr2[0]);	
//Modyfing the first element of the array
arr2[0] = 0;
console.log(arr2[0]);
//Iterating through an array
for (var i = 0; i < arr2.length; i++){
	console.log(`element at pos ${i} of array arr2 is ${arr2[i]}`);
}