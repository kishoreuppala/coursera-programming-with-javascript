//Example
const currencyInfo = {
    [
        USD: {
            // ...
        },
        GBP: {
            // ...
        },
        EUR: {
            // ...
        }
    ]
}

//Some examples of JSON strings

//with a single key-value pair:
'{"color":"red"}' 

//a bit more complex JSON object:
'{"color":"red", "nestedObject": { "color": "blue" } }' 

//It's also possible to have a JSON string encoding just an array:
'["one", "two", "three"]'   //The above JSON string encodes an array holding three items, three values of the string data type. Obviously, just like objects, arrays can nest other simple or complex data structures.

//For example:
'[{ "color": "blue" }, {"color: "red"}]'

