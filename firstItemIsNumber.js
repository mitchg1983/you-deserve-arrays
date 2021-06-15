const prompt = require('prompt-sync')();

inp = prompt ('Enter an array: ');

const inpArr = JSON.parse(inp);

console.log (inp);

console.log (inpArr);

const isNumber = typeof (inpArr[1]);

console.log (inpArr[1]);

console.log (isNumber);

if (isNumber != 'number') {
    console.log ('This is not a number');
}

else if (isNumber === 'number') {
    console.log ('This is a', isNumber);
}