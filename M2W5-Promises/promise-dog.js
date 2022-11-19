const axios = require("axios")

axios.get('https://dog.ceo/api/breeds/image/random').then(data => {
  // console.log(data.data)
  return data.data
})
.then(data => {
  console.log(data)
})