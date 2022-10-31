const naming = "Alvin";

console.log(naming + " how are you?");

sayHello("Steve");

// function declaration
function sayHello(name) {
  console.log(`Hello ${name}`);
}

// Function Expression
const sayHello2 = function(name) {
  return `Hello ${name}`;
}

sayHello2("Joe");

const sum = 2 + 2;

console.log(sayHello2("Joe") + " How are you?");

// console.log(typeof sayHello2("Joe"))

const sam = sayHello2("Sam")
console.log(sam)

const sam2 = sayHello2;

console.log(sam2("Sam2"))
