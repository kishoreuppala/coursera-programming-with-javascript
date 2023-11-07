//Strings cheat sheet
var greet = "Hello,  ";
var place = "World"

console.log(greet.length); // 8

//charAt() method - To read each individual character at a specific index in a string
console.log(greet.charAt(0)); // 'H'

//concat() method joins two strings
console.log("Hello Wo".concat("rl").concat("d!")); // 'Hello World!'

//indexOf returns the location of the first position that matches a character
"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2

//split method chops up the string into an array of sub-strings
"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']
console.log("ho-ho-ho".split("-"));

//methods to change the casing of strings
greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "


