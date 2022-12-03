const bcrypt = require('bcryptjs');

const password = 'yoloswag420';

const salt = bcrypt.genSaltSync(10);
const arr = [];
for(let i = 0; i < 50; i++) {
  
  
  const hashed = bcrypt.hashSync(password, 15)
  
  console.log(hashed)
  arr.push(hashed)
  // bcrypt.genSalt(10, (err, salt) => {
  //   console.log('do somethng 1')
  //   console.log(salt)
  //   bcrypt.hash(password, salt, (err, hash) => {
  //     console.log('do somethng 2')
  //     console.log(hash)
  //     bcrypt.compare(password, hash, (err, value) => {
  //       console.log('do somethng 3')
  //       console.log(value)
  //     })
  //   })
  // })
}

// console.log(arr)

// console.log(bcrypt.compareSync(password, arr[22]))
// console.log(bcrypt.compareSync(password, arr[5]))
// console.log(bcrypt.compareSync(password, arr[7]))
// console.log(bcrypt.compareSync(password, arr[27]))

// console.log(bcrypt.compareSync(password, arr[13]))
// console.log(bcrypt.compareSync(password, arr[7]))
// console.log(bcrypt.compareSync(password, arr[17]))
// console.log(bcrypt.compareSync(password, arr[20]))
// console.log(bcrypt.compareSync(password, arr[43]))

// const result = bcrypt.compareSync(password, hashed)

// console.log(result)



// bcrypt.genSalt(10, (err, salt) => {
//   console.log('do somethng 1')
//   console.log(salt)
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log('do somethng 2')
//     console.log(hash)
//     bcrypt.compare(password, hash, (err, value) => {
//       console.log('do somethng 3')
//       console.log(value)
//     })
//   })
// })