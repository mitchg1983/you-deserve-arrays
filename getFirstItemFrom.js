const prompt = require('prompt-sync')();

inp = prompt ('Enter an array: ');

inp = JSON.parse(inp);

console.log (inp[0]);