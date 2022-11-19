const functions = require('./helper/promise-generator')

const returnPromise = functions.returnPromise;


const apples = returnPromise(9, 2000);
const pears = returnPromise(10, 2000);

console.log(apples)

const four = 4

// apples.then((data) => {
//   console.log(data)
//   return data
// }).then(data => {
//   console.log(data + four)
//   console.log(data)
// })


apples.then(data => {
  pears.then(data => {
    return data
  })
  return data
})

