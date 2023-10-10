const prompt = require("prompt-sync")();

let numbers = prompt().split(" ").map(Number)
let inpt = numbers.map((n) => {
    if (n > 0) {
        return -n;
    } else {
        return Math.abs(n);
    }
});
console.log(inpt)