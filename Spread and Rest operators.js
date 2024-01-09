//Join arrays, objects using the rest operator
const fruits = ['apple', 'banana', 'orange']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array


//join objects using rest operator
const flying = { wings: 2, engines:2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, engines:2, wheels: 4}


//spread operator - Add new members to arrays without using the push() method
let veggies = ['onion', 'tomato'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);


//Using the spread operator - Convert a string to an array
const greeting = "Hello World";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o',' ', 'W', 'o','r', 'l', 'd']


//Using the spread operator -  copy an object into a completely separate object
const car1 = {
    speed: 300,
    color: 'red'
}
const car2 = {...car1}

car1.speed = 400;
console.log("Car1 Speed: " + car1.speed, ", Car2 Speed: " + car2.speed)


//Using the spread operator - copy an array into a completely separate array
const fruits1 = ['apples', 'guava']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2);


//another spread example
const animals = ['Lion','Tiger'];
const birds = ['Parrot','crow'];
//spread operator
const animals2 = [...animals, 'Rhyno', 'Fox'];
console.log("Copied existing arrary to new array list of items: " + animals2);
//rest operator - concatenation
const animalsBirds = [...animals, birds];
console.log("Concatenated List: " + animalsBirds);