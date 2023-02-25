/* 
  Create a function that takes a string and returns an object with each letter being a key and the value is the amount of times the letters appear. Do not count spaces but you can count symbols 

  letterCount("Hey everyone")
  {
    h: 1,
    e: 4,
    y: 2,
    v: 1,
    r: 1,
    o: 1,
    n: 1
  }

*/

const letterCount = (str) => {
  // const arr = str.toLowerCase().split('')
  const arr = str.toLowerCase().replace(/\s/g, "").split('')
  // let obj = {}
  // for(let i = 0; i < arr.length; i++) {
  //   if(arr[i] !== ' ') {
  //     obj[arr[i]] ? obj[arr[i]] += 1 : obj[arr[i]] = 1 
  //   }
  // }
  // return obj

  // arr.forEach(ele => {
  //   console.log(ele);
  //   obj[ele] ? obj[ele] += 1 : obj[ele] = 1 
  // })

  // arr.map(ele => {
  //   console.log(ele);  
  //   ele !== ' ' && obj[ele] ? obj[ele] += 1 : obj[ele] = 1 
  // })

  // return arr.reduce((obj, ele) => {
  //   obj[ele] ? obj[ele] += 1 : obj[ele] = 1
  //   return obj
  // }, {})

  return arr.reduce((obj, ele) => {
    // obj[ele] ? obj[ele] += 1 : obj[ele] = 1
    obj[ele] = (obj[ele] || 0) + 1
    return obj
  }, {})

  // return obj
}

console.log(letterCount("Let's all go out for burgers and other foods that I know and can think of"));