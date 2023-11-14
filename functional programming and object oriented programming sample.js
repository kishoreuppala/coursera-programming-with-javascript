//functional programming
function getTotal(a,b) {
    return a + b
}
var num1 = 5;
var num2 = 5;
var total = getTotal(num1, num2);
console.log(total);

//another example
function getDistance(mph, h) {
    return mph * h
}
var mph = 10;
var h = 5;
var distance = getDistance(mph, h);
console.log(distance); // <====== THIS HERE!



//object-oriented programming (OOP)
//creating an object
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

//First-class functions
function addTwoNums(a, b) {
    console.log(a + b)
}
function randomNum() {
    return Math.floor((Math.random() * 10) + 2);
}
function specificNum() { return 50 };
var useRandom = true;
var getNumber;
if(useRandom) {
    getNumber = randomNum()
} else {
    getNumber = specificNum()
}
addTwoNums(getNumber, getNumber);

//Higher-order functions
function addTwoNums2(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}
addTwoNums2(specificNum, specificNum); // returned number is 100
addTwoNums2(specificNum, randomNum); // returned number is 50 + some random number


//Pure functions
function addTwoNums(a, b) {
    console.log(a + b)
}
addTwoNums(5,5); // 10