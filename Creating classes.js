class Train {
    /*First of all, notice that there is no function keyword. Also, notice that the keyword constructor is used to define this function. You give your constructor function parameters inside an opening and closing parenthesis, just like in regular functions. 
    The names of parameters are color and lightsOn. */
    constructor(color,lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}
var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}

// var mySecondTrain = new Train('blue', false);
// var myThirdTrain = new Train('yellow', false);
// console.log(mySecondTrain);
// console.log(myThirdTrain);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}


//To inherit from one class to a new sub-class, JavaScript provides the extends keyword
class HighSpeedTrain extends Train {
}

