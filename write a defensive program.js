//Code to be fixed with Defensive measures
function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at: ', i)
        }
    }
}

//Defensive code
function letterFinder(word, match) {
    var conditional = typeof(word) == 'string' && word.length >= 2;
    var conditional2 = typeof(match) == 'string' && match.length == 1;
    if (conditional && conditional2)
    {
        for(var i = 0; i < word.length; i++) 
        {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at: ', i)
        }
        }
    }
    else
    {
        console.log("Please pass correct arguments to the function.");
    }
}

//Test failure
// letterFinder(5,5);

//success test
letterFinder("cat", "c");