let obj = {
  username: "Steve",
  age: 10,
  isCool: true,
  favFood: ['pizza', 'burger'],
  username: "sally"
}

console.log(obj);

let obj2 = {
  ...obj,
  username: 'Ryan'
}

// obj2.username = "Ryan"

console.log(obj)
console.log(obj2)

// let arr = ['red','green', 'blue']
// let arr2 = [...arr, 'pink']
// console.log(arr);
// console.log(arr2);







// let num = 1;
// console.log(num)

// let num2 = num;
// num2 = 5

// console.log(num);
// console.log(num2);