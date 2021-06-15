const prompt = require('prompt-sync')();

inp = prompt ('Enter an array: ');

inp = JSON.parse(inp);

console.log (inp);

const stringTest = typeof inp[2];

console.log (stringTest);

if (stringTest === 'string') {
    const output = inp[2];
    console.log (output[1]);
}

else {
    console.log ('Error, pleae try again.');
}