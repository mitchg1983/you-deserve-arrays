const prompt = require('prompt-sync')();

inp = prompt ('Enter an array: ');

inp = JSON.parse(inp);

console.log (inp);

console.log (inp.length);

if (inp.length >= 10) {
    console.log ('Wow, this is a long list...')
}

if (inp.length < 10) {
    console.log ('What a nice short list.')
}