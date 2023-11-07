//Math.ceil() - rounds up to the closest integer 
console.log(Math.ceil(10.10));
//Math.ceil() - rounds up to the closest integer 
console.log(Math.ceil(10.10));
//Math.round() - rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer
console.log(Math.round(10.10));
console.log(Math.round(10.50));
//Math.trunc() - trims the decimal, leaving only the integer
console.log(Math.trunc(10.10));
//Math.pow(2,3) - calculates the number 2 to the power of 3, the result is 8 
console.log(Math.pow(10,10));
//Math.sqrt(16) - calculates the square root of 16, the result is 4
console.log(Math.sqrt(100));
//Math.cbrt(8) - finds the cube root of 8, the result is 2 
console.log(Math.cbrt(1000));
//Math.abs(-10) - returns the absolute value, the result is 10 
console.log(Math.abs(-10));
//Logarithmic methods: Math.log(), Math.log2(), Math.log10() 
//Math.min(9,8,7) returns 7, Math.max(9,8,7) returns 9.
console.log(Math.min(10,20,30));
//Trigonometric methods: Math.sin(), Math.cos(), Math.tan(), etc.


//Math.random - Generates a number between 0 and 0.99
console.log(Math.random());
//Ceil method - Rounds a decimal up to the nearest integer
console.log(Math.ceil(0.0001));
console.log(Math.ceil(0.5));
console.log(Math.ceil(2.99));

var decimal = Math.random() * 10;	//Get randon no between 0 and 0.99
var rounded = Math.ceil(decimal);	//Round up the value
console.log(rounded);
