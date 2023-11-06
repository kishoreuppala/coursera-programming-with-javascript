var user = {}; //create an object

//creating an object with properties and their values
var assistantManagers = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

var tables = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}

console.log(tables);//display the object in the developer console

console.log(tables.color); // 'brown'

var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}

//other way
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000}
house.windows = 10;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}

house.windows = 11;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 11}
