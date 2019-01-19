//alert message
//Constructor function definition
function Person(){
//Setting object properties
this.name= '',
this.role= '',
this.field= '',
this.print= function(){
	console.log(`My name is ${this.name} and I'm a ${this.field} ${this.role}`)
	}
};

//Instantiating new object
var sam = new Person();

//Setting properties value
sam.name = 'Sam';
sam.role = 'Student';
sam.field = 'CS';

//Printing object
console.log(sam);

//Accessing object properties
console.log(`Name: ${sam.name}`);
console.log(`Role: ${sam.role}`);
console.log(`Field: ${sam.field}`);

//calling object method
sam.print();