// import lodash a A modern JavaScript utility library
// delivering modularity, performance & extras.

const _ = require("lodash");

let numbers = [1, 2, 3, 4, 5];

let res = numbers.map((number) => number * 2);
console.log(res);

const numbers = [1, 2, 3];

// adding
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log(added);

// removing
const removed = numbers.filter((n) => n !== 2);
console.log(removed);
// updating
const updated = numbers.map((n) => (n === 2 ? 20 : n));
console.log(updated);
