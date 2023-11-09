//Usage of typeof operator

// var test = typeof('what is my datatype?');  //string

// var test = typeof(10);

// var test = typeof(3.14);

// var test = typeof(true);

// var test = typeof(false);

// var test = typeof(1 < 2); //boolean

// var test = typeof([1,2,3,4]);

// var test = typeof({firstProperty: 1});

var test = typeof(function abc() {console.log('abc');});

console.log("My data type is: " + test);