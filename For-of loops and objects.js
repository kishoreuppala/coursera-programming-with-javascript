const mycar = {
    engine: true,
    steering: true,
    speed: "slow"
}
const sportsCar = Object.create(mycar);
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);

console.log('--------for-in is unreliable -------');
//for-in iterate over objects and ITS PROTOTYPE
for(prop in sportsCar) {
    console.log(prop);
}
console.log('*', "Iterating over object and its prototype");

console.log('------for-of is reliable------');
//for-of iterate over object's own properties only
for (prop of Object.keys(sportsCar)) {
    console.log(prop + ": " + sportsCar[prop]);
}
console.log('#', "Iterating over object's own properties only!");
