const prompt = require('prompt-sync')();

inp = prompt ('Enter an array: ');

inp = JSON.parse(inp);

console.log (inp);

console.log (inp.length);

const output = Number(inp.length);

console.log (output);

console.log (inp[inp.length -1]);

//console.log (
//    inp[
//        output]
//);