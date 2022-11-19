
const functions = require('./helper/promise-generator')

const returnPromise = functions.returnPromise;
const falsePromise = functions.returnRejectedPromise;


// const failPromise = falsePromise("Something went wrong", 1000);
const correctPromise = returnPromise("This is working", 1000)

// correctPromise.then(data => {
//   console.log(data)
//   return data;
// })
// .then(data => {
//   console.log(data)
//   return data;
// })
// .then(data => {
//   console.log(data)
//   return falsePromise("We failed", 1000);
// })
// .then(data => {
//   console.log(data)
//   return data;
// })
// .then(data => {
//   console.log(data)
//   return data;
// })
// .catch(err => {
//   console.log(err)
// })


// const getUserData = returnPromise("New User data", 1000)

// getUserData.then(data => {
//   console.log(data)
//   return data
// })
// .then(data => {
//   console.log(data)
//   return data;
// })
// .then(data => {
//   console.log(data)
//   return falsePromise("We failed", 1000);
// })
// .then(data => {
//   console.log(data)
//   return data;
// })
// .then(data => {
//   console.log(data)
//   return data;
// })
// .catch(err => {
//   console.log("Error with getting user data")
//   console.log(err)
// })

// const getTableData = returnPromise("New Table info", 3000)

// getTableData.then(data => {
//   console.log(data)
//   return data
// })
// .then(data => {
//   console.log(data)
//   return data;
// })
// .then(data => {
//   console.log(data)
//   return falsePromise("We failed", 1000);
// })
// .then(data => {
//   console.log(data)
//   return data;
// })
// .then(data => {
//   console.log(data)
//   return data;
// })
// .catch(err => {
//   console.log("Error with getting table data")
//   console.log(err)
// })

let num = 7;


// const getALOTofDATA = async () => {


//   try {
//     const await data1 = "String"
//     const await data2 = "String"
//     const await data3 = "String"
//     const await data4 = "String"
//     const await data5 = "String"
//   } catch {
//     console.log("ONEE of the data didn't work")
//   }
// }

// try {
//   if(num > 9) {
//     console.log("Greater than 9")
//   } else {
    
//     throw new Error("Something went wrong")
//   }
// } catch {
//   console.log(Error)
// }