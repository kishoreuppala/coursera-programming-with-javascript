// Constructors
console.log(Math.pow(2,5)); // --> 32

function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function () {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
console.log(kiwiIcecream); // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
console.log(appleIcecream); // --> Icecream {flavor: 'apple', meltIt: ƒ}

//string constructor
let apple = new String("apple");
console.log(apple); // --> String {'apple'}

let pear = "pear";
console.log(pear); // --> "pear"

//RegExp constructor
console.log("abcd".match(/d/)); // ['d', index: 3, input: 'abcd', groups: undefined]
console.log("abcd".match(/a/)); // ['a', index: 0, input: 'abcd', groups: undefined]

date = new Date();
error = new Error();
map = new Map();
promise = new Promise();
set = new Set();
weakset = new WeakSet();
weakmap = new WeakMap();