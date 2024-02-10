// TO get output of the below code
// Run it on browser developer code (or) In browser --> right click --> inspect --> console --> type code.

'{"greeting":"Hello"}';
const jsonStr = '{"greeting":"hello"}'
//convert to JSON
JSON.parse(jsonStr)

const aPlainObj = JSON.parse(jsonStr);
aPlainObj.greeting = 'hi'
aPlainObj

const data = {
    firstName: "Uppala",
    lastName: "Kishore",
    greetings: "Hello"
}
//Convert above object to JSON
JSON.stringify(data);