//ReferenceError: thrown when, one tries to use variables that haven't been declared anywhere
console.log(name);

//SyntaxError: Any kind of invalid JavaScript code will cause it
// var var1 "there's no assignment operator here";
// const a 10;

//TypeError:  thrown when, for example, trying to run a method on a non-supported data type.
"text string".pop() // Uncaught TypeError: "text string".pop is not a function

//RangeError: thrown when we're giving a value to a function, but that value is out of the allowed range of acceptable input values.
//example of converting an everyday Base 10 number (a number of the common decimal system) to a Base 2 number (i.e binary number).
(10).toString(2); // '1010'

/* The value of 2 when passed to the toString() method, is like saying to JavaScript: "convert the value of 10 of the Base 10 number system, to its counter-part in the Base 2 number system".
JavaScript obliges and "translates" the "regular" number 10 to its binary counter-part. */

