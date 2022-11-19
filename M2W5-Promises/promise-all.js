const functions = require('./helper/promise-generator')

const returnPromise = functions.returnPromise;
const failPromise = functions.returnRejectedPromise;

const foodOrder1 = returnPromise("Fries", 1000)
const foodOrder2 = returnPromise("Burger", 2000)
const foodOrder3 = returnPromise("Sunday", 3000)
const foodOrder4 = failPromise("Bad food", 500)

const promiseArr = [foodOrder1, foodOrder2, foodOrder3, foodOrder4];

Promise.all(promiseArr).then(data => {
  console.log(data)
})
.catch(err => {
  console.log("Something in the food order went wrong")
  console.log(err)
})