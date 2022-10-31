const characters = ['Fry', 'Leela', 'Bender', 'Professor Fransworth'];

const ourMap = (arr, callback) => {
  // Create new Array
  const output = [];
  for(const element of arr) {

    // Take the return Value of the callback
    const returnVal = callback(element)
    output.push(returnVal);
  }
  return output;
}

const newCharacters = ourMap(characters, (character) => { 
  return `Good news, ${character}!`
})

console.log(characters);

console.log(newCharacters);

const nums = [2, 5, 10];

const newNum = ourMap(nums, (num) => 2 * num)

// 2 + 2 - 5 + 10
// 2 + (2 - 5) + 10