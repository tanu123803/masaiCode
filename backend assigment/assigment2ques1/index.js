const boxen = require("boxen");


const message = "I am using my first external module!";
const title = "Hurray!!!";

const classicBox = boxen(`${title}\n${message}`, {
  padding: 1,
  margin: 1,
  borderStyle: "classic"
});
const singleDoubleBox = boxen(`${title}\n${message}`, {
  padding: 1,
  margin: 1,
  borderStyle: "singleDouble"
});
const roundBox = boxen(`${title}\n${message}`, {
  padding: 1,
  margin: 1,
  borderStyle: "round"
});

console.log(classicBox);
console.log(singleDoubleBox);
console.log(roundBox);