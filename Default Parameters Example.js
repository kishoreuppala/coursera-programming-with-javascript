//with no default parameter
function noDefaultParams(number) {
    console.log('Result:', number * number)
}
noDefaultParams(); // Result: NaN

//with default parameter
function noDefaultParams2(number = 10) {
    console.log('Result:', number * number)
}
noDefaultParams2(); // Result: 100


//Example
class NoDefaultParams3 {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}

//This example might highlight the reason sometimes weird error messages appear
var fail = new NoDefaultParams3(1,2,3,false);
fail.calculate(); // 'The value of bool1 is incorrect'


//Above example can be improved as follows, with default parameters:
class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6

//pass values instead of using default 
var better2 = new WithDefaultParams();
better2.num1 = 10;
better2.num2 = 10;
better2.num3 = 10;
better2.calculate(); // Result: 6