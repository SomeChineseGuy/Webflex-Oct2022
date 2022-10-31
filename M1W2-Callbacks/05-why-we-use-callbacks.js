const colours = ['red', 'blue', 'green'];

console.log(colours)

// for(const colour of colours) {
//   console.log(`${colour} is my least faourite colour`);
// }

// funciton loops over array

const loopThroughArr = (arr, callback) => {
  for(element of arr) {
    callback(element)
  }
}

const doOnEveryItem = (item) => {
  console.log(`${item} is my least favourite colour`);
}

const numArr = [1, 2, 3];

loopThroughArr(colours, doOnEveryItem)

loopThroughArr(numArr, (item) => {
  console.log(item + 1)
})

const names = ['Joe', 'ryan', 'steve']

loopThroughArr(names, (item)=> {
  console.log(`${item}, how are you?`) 
})