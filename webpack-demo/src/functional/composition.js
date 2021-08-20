import { compose, pipe } from "lodash/fp";
const _ = require("lodash");

// non-functional programming (nFP)
let input = "   JavaScript  ";
let output = "<div>" + input.trim() + "</div>";

// functional programming (FP)
const trim = (str) => str.trim();
// const wrapInDiv = (str) => `<div>${str}</div>`;
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

const toLowerCase = (str) => str.toLowerCase();
const transform = pipe(trim, toLowerCase, wrap("span"));
console.log(transform(input));
// function composition in FP
const result = wrapInDiv(toLowerCase(trim(input)));
