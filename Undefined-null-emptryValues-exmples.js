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

//another example - function to add two numbers with try and catch block
function addTwoNums(a,b) 
{
    try {
        console.log(a + b);
    }
    catch(err) {
        console.log(err);
    }
}
addTwoNums(5,5);

//Same above example with additional info
function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works")