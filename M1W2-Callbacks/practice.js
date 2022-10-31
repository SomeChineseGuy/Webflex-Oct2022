// const runMyFunc = (callback) => {
//   callback();
// }

// runMyFunc(() => {
//   console.log('Hello everyone!')
// });


// const moreCallbacks = (arr, callback) => {
//   for(const element of arr) {
//     callback(element);
//   }
// }

// const nums = [1, 2, 3];

// moreCallbacks(nums, (num) =>{
//   console.log(num * 5)
// })

// const names = ['Steve', 'Joe', 'Ryan'];

// moreCallbacks(names, (item) => {
//   console.log(`Hello, ${item}`)
// })

// moreCallbacks([5, 6, 10], (num) => {
//   console.log(num * 10)
// })


// const ourMap = (arr, callback) => {
//   const newArr = []
//   for(element of arr) {
//     const returnVal = callback(element)
//     newArr.push(returnVal)
//   }
//   return newArr;
// }

// const numArr = [1, 2, 3];

// const newNumArr = ourMap(numArr, (num) => {
//   return num + 10
// })

// console.log(newNumArr);

// const sum = (num1, num2) => {
//   return num1 + num2
// }

// const ten = sum(5, 5)

// console.log(sum(4, 6) + 10)



// const sum = (num1, num2) => {
//   return num1 + num2
// }

// const ten = sum(6, 4);

// const newSum = sum;

// const newNum = newSum(4, 9);

// const newCallback = (callback) => {
//   callback(4, 6)
// }

// newCallback(sum);

// const newerNum = sum();
// console.log(newCallback(sum))

// console.log(newCallback(sum))


// const numArr = [1,2,3,4]

// const newMap = (arr, callback) => {
//   const output = []
//   for(const element of arr) {
//     const returnVal = callback(element)
//     output.push(returnVal)
//   }

//   return output;
// }

// const newArr = newMap(numArr, (element) => {
//   return element * 10
// })

// console.log(newArr)

// const sum = (num1, num2) => {
//   // console.log(num1 + num2)
//   return num1 + num2
// }

// console.log(sum(2, 5) + 10)
// console.log(names)

// const names = "alvin";


const findKey = (obj, callback) => {
  for(const element in obj) {    
    if(callback(obj[element])) return element;    
  }
  return false;
}
  
const key = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4)

// console.log(key)

// const day = (weather) => {
//   if(weather === 'cloudy') {
//     console.log('Rain is coming')
//     console.log('Rain is coming')
//     console.log('Rain is coming')
//     console.log('Rain is coming')
//   } else {
//     console.log('check weather')
//     console.log('check weather')
//     console.log('check weather')
//     console.log('check weather')
//   }

//   weather === 'cloudy' ? console.log('Rain is coming') : console.log('Check weather')

//   weather === 'cloudy' && console.log('Rain is coming')
// }

// day('cloudy')

const letterPositions = function(sentence) {
  const results = {};
  const letterArr = sentence.split('')

  for(let i = 0; i < letterArr.length; i++) {
    // console.log(letterArr[i], i)
    console.log(results[letterArr[i]])
    if(results[letterArr[i]] !== undefined) {
      
      // console.log('Fire')
      results[letterArr[i]] = i
      // console.log(results)
    } else {
      // console.log('water')
      results[letterArr[i]] += i
    }
  }

  // for(const i of sentence) {
  //   console.log(sentence.indexOf([i]))
  //   if(i !=== "") {
  //     results[i]
  //   }
  // }

  return results;
};


console.log(letterPositions("lighthouse in the house"));
