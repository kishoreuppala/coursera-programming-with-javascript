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

