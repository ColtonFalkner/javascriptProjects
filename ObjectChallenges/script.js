'use strict'
//Challenge 1
//1. Use a constructor function to implement a 'Car'. It has a 'make' and a 'speed' property. the Speed property is the current speed of the car in km/h

//2.Implement an 'accelerate' method that will increases the car's speed by 10, and log the new speed to the console.

//3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console.

//4. Create 2 'Car' objects and experimenting with calling the accelerate and brake multiple times on each one.

// const Car = function (make, speed) {
//   ;(this.make = make), (this.speed = speed)
// }

// Car.prototype.accelerate = function () {
//   this.speed += 10
//   console.log(`${this.make} is going at ${this.speed} km/h`)
// }

// Car.prototype.brake = function () {
//   this.speed -= 5
//   console.log(`${this.make} is going at ${this.speed} km/h`)
// }

// const car1 = new Car('BMW', 120)
// const car2 = new Car('Mercedes', 95)
// console.log(car1)
// console.log(car2)
// car1.accelerate()
// car1.accelerate()
// car1.accelerate()
// car1.brake()
// car1.brake()
// car1.brake()
// car2.accelerate()
// car2.accelerate()
// car2.accelerate()
// car2.brake()
// car2.brake()
// car2.brake()

//Challenge 2

//1. Re-Create Challenge #1, but this time using an ES6 Class (call it CarCl)

//2. Add a getter called speedUS which returns the current speed in mph (divide by 1.6)

//3. Add a setter called 'speedUS' which sets the current speed in mph (but convertse it to km/h before storing the value, by multiplying the input by 1.6)

//4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter

class CarCl {
  constructor(make, speed) {
    this.make = make
    this.speed = speed
  }

  accelerate() {
    this.speed += 10
    console.log(`${this.make} is going at ${this.speed} km/h`)
  }

  brake() {
    this.speed -= 5
    console.log(`${this.make} is going at ${this.speed} km/h`)
  }

  get speedUS() {
    return this.speed / 1.6
  }

  set speedUS(speed) {
    this.speed = speed * 1.6
  }
}

const car1 = new CarCl('Ford', 120)
console.log(car1)
console.log(car1.speedUS)
car1.accelerate()
car1.brake()
car1.speedUS = 50
console.log(car1)
