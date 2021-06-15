const prompt = require('prompt-sync')();

inp = prompt ('Enter an array: ');

inp = JSON.parse(inp);

console.log (inp);

console.log (inp.length);

if (inp.length < 4) {
    console.log (inp[inp.length - 1])
}

if (inp.length >= 4) {
    console.log (inp[3])
}