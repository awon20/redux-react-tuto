import { compose, pipe } from "lodash/fp";
const _ = require("lodash");

function greeting(fnMessage) {
  console.log(fnMessage());
}

// Higher order function
function sayHello() {
  // return "Hello, world!";
  return function () {
    return "Hello, world!";
  };
}
let fn = sayHello;
fn();
setTimeout(() => console.log("Hello, world!"), 1000);

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
