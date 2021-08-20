const _ = require("lodash");

// Higher order function is compose
const transform = compose(wrapInDiv, toLowerCase, trim);
// immutability
const person = {
  name: "John",
  address: {
    country: "United States",
    city: "New Orleans",
  },
};
// const updated = Object.assign({}, person, { name: "Bob", age: 30 });
const updated = {
  ...person,
  address: { ...person.address, city: "Paris" },
  name: "Bob",
};
updated.address.country = "France";
console.log(person);
