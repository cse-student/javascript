//alert message
alert("Check console")

//declaring variables
var a = 10;
var b = 2;
console.log("var a = " + a);
console.log("var b = " + b);

//mathematical operations with variables
var c = a+b;
console.log("var c = a + b = " + c);
c = a*b
console.log("c = a*b = " + c);
c = a/b
console.log("c = a/b = " + c);

//dealing with constants
const d = a/b;
console.log("const d = a/2 = " + d);

console.log("Now trying to modify the const d")
console.log("d = a*b");
try{
    d = a*b;
}
catch(err){
    console.log(err);
    console.log("The value of d cannot be modified as it has been declared as a constant unlike a,b and c as they are variables")
}
