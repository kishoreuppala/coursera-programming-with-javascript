//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 5; secondNum++) {
        console.log("First Number: ",firstNum + ", " + "Second Number: ",secondNum);
    }
}


// second example
var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-family: Helvetica;font-size: 30px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

for (var i = 1; i <= 10; i++) {
    if(i == 1) 
    {
        console.log("Gold medal")
    } 
    else if (i == 2) 
    {
        console.log("Silver medal")
    } 
    else if (i == 3) 
    {
        console.log("Bronze medal")
    } 
    else 
    {
        //this block will run if no condition matches
        console.log(i)
    }
}

// Example 4 with switch
for (var i = 1; i <= 10; i++) 
{
    switch(i) 
    {
        case 1:
            console.log("Gold medal")
            break
        case 2:
            console.log("Silver medal")
            break
        case 3:
            console.log("Bronze medal")
            break
        default:
            //this block will run if no condition matches
            console.log(i)
    }
}

