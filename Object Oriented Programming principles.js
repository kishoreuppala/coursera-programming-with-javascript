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

