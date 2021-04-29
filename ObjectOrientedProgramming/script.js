'use strict'
const Person = function (firstName, birthYear) {
  this.firstName = firstName
  this.birthYear = birthYear
  //Never do this.
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear)
  // }
}

const colton = new Person('Colton', 1991)
console.log(colton)

const matilda = new Person('Matilda', 2012)
const jack = new Person('Jack', 1938)
console.log(matilda, jack)

console.log(colton instanceof Person)

//Prototypes
console.log(Person.prototype)

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear)
}

colton.calcAge()
console.log(colton.__proto__)
console.log(colton.__proto__ === Person.prototype)

Person.prototype.species = 'Homo Sapiens'
console.log(colton.species, matilda.species)

console.log(colton.hasOwnProperty('firstName'))
console.log(colton.hasOwnProperty('species'))

console.log(colton.__proto__)
console.log(colton.__proto__.__proto__)
console.log(colton.__proto__.__proto__.__proto__)

console.dir(Person.prototype.constructor)

const arr = [2, 3, 4, 6, 6, 4, 3, 6, 7]
console.log(arr.__proto__)
console.log(arr.__proto__.__proto__)

Array.prototype.unique = function () {
  return [...new Set(this)]
}

console.log(arr.unique())
