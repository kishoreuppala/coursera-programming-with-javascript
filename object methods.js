//example of adding properties and methods to an object
var car = {};
car.mileage = 99999;
car.color = "green";
console.log(car);
car.turnTheKey = function() { //called as method
    console.log("The engine is running.")
}
car.lightsOn = function() { //called as method
    console.log("The lights are on")
}
car.turnoffkey = function() {
    console.log("The engine is stopped.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()
car.turnoffkey();