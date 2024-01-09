//forEach() method
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);


//filter
//filters your arrays based on a specific test
const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})


//map
//used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter. 
array1 = [0,10,20,30,40,50];
array1.map(function(num) {
    return num / 10;
})


//Working with Objects in JavaScript
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);

droneKeys.forEach(function(key) {
    result.push(key, drone[key])
    console.log(drone[key]);
})
console.log("Converted object into Array:" + result);


//Working with Maps in JavaScript
new Map();  //To make a new Map

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner up");
bestBoxers.set(3, "The third place");
// console.log(bestBoxers);
//To get a specific value, you need to use the get() method
console.log(bestBoxers.get(1)); // 'The Champion'


//Working with Sets in JavaScript
//To build a new set, you can use the Set constructor
new Set();
// quickly filter an array for unique members
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);