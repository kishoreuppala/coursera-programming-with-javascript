var letters = 'xyz'
// console.log(letters.match(/x/));

//produce null value by trying to match a non existing letter
console.log(letters.match(/a/));

//produce underfined value - Example1
var sample;
console.log(sample);
//[OR] Example2
console.log("Kishore"); //will print underfined in the console
//Example3
var property = {
    type: "home",
    cost: 1000
}
console.log(property.address);


//Empty strings
var name = '';
var address = "";

console.log(name, address);


//Reference error will occur when you try to display an underfined variable
console.log(sample2);