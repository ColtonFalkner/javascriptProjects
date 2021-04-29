'use strict'
//Challenge 1
//1. Use a constructor function to implement a 'Car'. It has a 'make' and a 'speed' property. the Speed property is the current speed of the car in km/h

//2.Implement an 'accelerate' method that will increases the car's speed by 10, and log the new speed to the console.

//3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console.

//4. Create 2 'Car' objects and experimenting with calling the accelerate and brake multiple times on each one.

const Car = function (make, speed) {
  ;(this.make = make), (this.speed = speed)
}

Car.prototype.accelerate = function () {
  this.speed += 10
  console.log(`${this.make} is going at ${this.speed} km/h`)
}

Car.prototype.brake = function () {
  this.speed -= 5
  console.log(`${this.make} is going at ${this.speed} km/h`)
}

const car1 = new Car('BMW', 120)
const car2 = new Car('Mercedes', 95)
console.log(car1)
console.log(car2)
car1.accelerate()
car1.accelerate()
car1.accelerate()
car1.brake()
car1.brake()
car1.brake()
car2.accelerate()
car2.accelerate()
car2.accelerate()
car2.brake()
car2.brake()
car2.brake()
