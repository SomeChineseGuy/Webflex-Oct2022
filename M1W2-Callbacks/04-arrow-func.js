const sayHello = function(names) {
  console.log(`hello ${names}`);
}

const sayHello2 = (names) => console.log(`Hey ${names}`)

sayHello('Joe');
sayHello2('Ryan');

const obj = {
  count: 0,
  increase:  () => {
    return this.count + 1
  }
} 

console.log(obj.count)
console.log(obj.increase())