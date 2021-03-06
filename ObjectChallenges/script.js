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
    return this
  }

  get speedUS() {
    return this.speed / 1.6
  }

  set speedUS(speed) {
    this.speed = speed * 1.6
  }
}

// const car1 = new CarCl('Ford', 120)
// console.log(car1)
// console.log(car1.speedUS)
// car1.accelerate()
// car1.brake()
// car1.speedUS = 50
// console.log(car1)

//Challenge 3

//1. USe a constructor function and implement an Electric Car (called 'EV') as a child class of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property).

//2. Implement a chargeBattery method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'

//3. IMplement an 'accelerate' method that will increase the car's speed by 20 and decrease the charge by 1%. then log a message like this 'Tesla is going at 140 km/h, with a charge of 22%

//4. Create an electric car object and experiment with calling 'accerlerate' 'brake' and 'chargeBattery' (charge to 90%.) Notice what happens when you 'accerlerate'

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed)
//   this.charge = charge
// }

// EV.prototype = Object.create(Car.prototype)

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo
// }

// EV.prototype.accelerate = function () {
//   this.speed += 20
//   this.charge--
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%.`
//   )
// }

// const tesla = new EV('Tesla', 120, 23)
// console.log(tesla)
// tesla.accelerate()
// tesla.accelerate()
// tesla.accelerate()
// tesla.chargeBattery(90)
// console.log(tesla)
// tesla.accelerate()
// tesla.brake()
// tesla.brake()
// tesla.brake()
// tesla.brake()

//Challenge 4
//1. Re-create challenge #3, but this time using ES6 classes: create an "EVCL" child class fo the CarCL class

//2. Make the charge property private

//3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class.

class EVCl extends CarCl {
  #charge

  constructor(make, speed, charge) {
    super(make, speed)
    this.#charge = charge
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo
    return this
  }

  accelerate() {
    this.speed += 20
    this.#charge--
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%.`
    )
    return this
  }
}

const rivian = new EVCl('Rivian', 120, 23)
console.log(rivian)
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate()
