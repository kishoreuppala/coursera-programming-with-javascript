console.log('Hello');
//Because the console.log() function is built so as to not have the explicitly set return value, it gets the default return value of undefined.

//below code doesn't return the value of undefined:
function consoleLog(val) {
    console.log(val)
    return val
}

//Example1
//function that returns a double of a number
function doubleIt(num) {
    return num * 2
}
//objectMaker() function with any value
function objectMaker(val) {
    return {
        prop: val
    }
}
//call function
objectMaker(20);


//Example2
doubleIt(10).toString();
//combine my custom function calls as follows:
objectMaker( doubleIt(100) );