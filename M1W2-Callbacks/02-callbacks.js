const runMyFunc = function(callback) {
  callback();
}

const sayHello = function(names) {
  return `Hello ${names}`;
}

const sumOfNum = function () {
  return 2 + 2
}

console.log(runMyFunc(sayHello));
console.log(runMyFunc(sumOfNum));
// Don't want to call a function with the params
// console.log(runMyFunc(sayHello("Ryan")));

// `Hello ryan`()
