//arrays
function listArrayItems(ar) {
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, ar[i])
        }
    }
}

var colors = ['red', 'black', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

//practicing with functions
function letterFinder(word,match)
{
   for (let i=0;i<=word.length;i++)
   {
       if (word[i] == match)
       {
           console.log('Found the', match, 'at', i);
       }
       else
       {
           console.log('---No match found at', i);
       }
   } 
}

letterFinder("test","t");

// output
// Found the t at 0
// ---No match found at 1
// ---No match found at 2
// Found the t at 3
// ---No match found at 4
