const names = "Alvin";

console.log("Alvin")
console.log(names)


const runMyFunc = function(anotherFunc) {
  anotherFunc("Steve")
}

const hello = function(names) {
  return `hello ${names}`
}

console.log(runMyFunc(hello))

console.log(runMyFunc(function(name) {
  return `Hello ${name}`
}))

setTimeout(function () {
  console.log("Hey")
}, 5000)

setTimeout(console.log("Hey"), 5000)

