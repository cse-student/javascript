//Object definition
var person = {
//Setting object properties
name: 'Sam',
role: 'Student',
field: 'CS',
print: function(){
	console.log(`My name is ${this.name} and I'm a ${this.field} ${this.role}`)
	}
};

//Printing object
console.log(person);
//Accessing object properties
console.log(`Name: ${person.name}`);
console.log(`Role: ${person.role}`);
console.log(`Field: ${person.field}`);

//Using number as property name
//You cannot simply use assign a property using a number as name as the previous ones (person.1='test' will give an error)
//The way to do so is as follows:
person[1] = 'foo';
console.log(person);

//Adding a property with property as the value of a variable:
var property = 'age';
person[property] = 20;
console.log(person);
console.log(`${property}: ${person[property]}`);
person.print();