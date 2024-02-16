//Pre-requisites
//Check node and npm are installed: node --version;npm --version;
//Check jest is installed: jest --version
//Before installing jest, npm init -y ( to add a package.json file)
//npm install --save-dev jest (to install jest for this project instead of globally on the machine)
const { default: TestRunner } = require('jest-runner');
const addFive = require('./addFive');

test ('Returns the number plus 5', ()=>{
    // expect (addFive(1)).toBe(6);
    expect (addFive(5)).toBe(10);
})
//To run : npm run test