//if else statement
var age = 44;
if (age >= 65)
console.log("You get your income from your pension");
else if (age < 65 && age >= 18)
console.log("Each month you get a salary");
else if (age < 18)
console.log("You get an allowance");
else
console.log("The value of the age variable is not numerical");

//switch case
let day = "Friday";
switch(day) {
    case 'Sunday': 
        console.log("Today is Sunday");
        break;
    case 'Monday':
        console.log("Today is Monday");
        break;
    case 'Tuesday':
        console.log("Today is Tuesday");
        break;
    case 'Wednesday':
        console.log("Today is Wednesday");
        break;
    case 'Thursday':
        console.log("Today is Thursday");
        break;
    case 'Friday':
        console.log("Today is Friday");
        break;
    default:
        console.log("There is no such day")
        break;
}
