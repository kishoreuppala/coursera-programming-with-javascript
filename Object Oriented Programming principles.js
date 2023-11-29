//Example 1
class Animal { /* ...class code here... */ }
var myDog = Object.create(Animal)
console.log (Animal)


//A more common method of creating obbjects from classes is to use the new  keyword. When using a default or empty constructor method, JavaScript implicitly calls the Object superclass to create the instance.
//Example 2
class Animal2 { /* ...class code here... */ }
var myDog = new Animal2()
console.log (myDog)   
console.log (Animal2)   

// console.log("abc".toUpperCase());

const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

// console.log(bicycle.bell()); // "Get away, please"
// console.log(door.bell()); // "Come here, please")

function ringTheBell(thing) {
    console.log(thing.bell())
}

// ringTheBell(bicycle); // Ring, ring! Watch out, please!
// ringTheBell(door); // Ring, ring! Watch out, please!

//concat strings
console.log("abc".concat("def")); // 'abcdef'
//concat arrarys
console.log(["abc"].concat(["def"])); // ['abc', 'def']
//using the + operator on two arrays 
console.log(["abc"] + ["def"]); // ["abcdef"]


class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"