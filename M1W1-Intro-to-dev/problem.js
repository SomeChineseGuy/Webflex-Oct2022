// console.log(process.argv);

const commandLineArguments = process.argv;

const sliced = commandLineArguments.slice(2);

// console.log(sliced);

function sumOfArr(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    const num = Number(arr[i]);
    if(typeof num === 'number' && num >= 0 && num % 1 === 0) {      
      sum += num;
    }
  }
  return sum
}

const four = 4;
console.log(four + 6)

sumOfArr(sliced);

console.log(sumOfArr(sliced) + 10)