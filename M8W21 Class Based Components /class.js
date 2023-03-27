const obj = {
  name: 'alvin',
  age: 'unknown'
}

const obj2 = {
  name: 'diogo',
  age: 'unknown',
  sum: function(num1, num2) {
    return num1 + num2 
  }
}

// const cars = class {

// }

class Cars {
  constructor (color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model
  }

  describeCar() {
    return `This is a ${this.color}, ${this.brand} ${this.model}.`
  }
}

const myHonda = new Cars("blue", "Honda", "Civic");

console.log(myHonda);
// console.log(myHonda.describeCar());
// // console.log(myHonda.calRange(100));

class ElectricCar extends Cars {
  constructor(color, brand, model, batteryCapacity) {
    super(color, brand, model)
    this.batteryCapacity = batteryCapacity;
  }

  describeCar() {
    return `This is a ${this.color}, ${this.brand} ${this.model} with a Battery Capacity of ${this.batteryCapacity}.`
  }

  calRange(whPerKM) {
    const range = this.batteryCapacity * 1000 / whPerKM
    return range
  }

  displayRange(whPerKm) {
    const range = this.calRange(whPerKm);
    return `The range is ${range}KM`
  }
}


const myTesla = new ElectricCar('silver', 'Tesla', 'Modal X', 75)
console.log(myTesla);
console.log(myTesla.describeCar());
console.log(myTesla.displayRange(100));