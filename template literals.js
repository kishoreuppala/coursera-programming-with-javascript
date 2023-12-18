let greet = "Hello";
let place = "world";
console.log(`${greet} ${place} !`);
console.log(greet + " " + place + " !"); //display both variables without using template literals

// Additionally, the reason why it's possible to interpolate variables in template literals is because this syntax actually allows for expression evaluation. 
console.log(`${1 + 1 + 1 + 1 + 1} stars!`);
console.log(`Sum : ${2 + 3}`);