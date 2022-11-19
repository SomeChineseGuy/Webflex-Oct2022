const functions = require('./helper/promise-generator')

const returnPromise = functions.returnPromise;
const failPromise = functions.returnRejectedPromise;

const delay = () => Math.floor(Math.random() * 5000)

const foodOrder1 = returnPromise("Fries", delay())
const foodOrder2 = returnPromise("Burger", delay())
const foodOrder3 = returnPromise("Sunday", delay())
const foodOrder4 = failPromise("Bad food", delay())

const foodOrderArr = [foodOrder1, foodOrder4]

Promise.race(foodOrderArr).then(data => {
  console.log(data)
})
.catch(err => {
  console.log(err)
})