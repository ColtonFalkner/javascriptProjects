'use strict'
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName
//   this.birthYear = birthYear
//   //Never do this.
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear)
//   // }
// }

// const colton = new Person('Colton', 1991)
// console.log(colton)

// const matilda = new Person('Matilda', 2012)
// const jack = new Person('Jack', 1938)
// console.log(matilda, jack)

// console.log(colton instanceof Person)

// //Prototypes
// console.log(Person.prototype)

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear)
// }

// colton.calcAge()
// console.log(colton.__proto__)
// console.log(colton.__proto__ === Person.prototype)

// Person.prototype.species = 'Homo Sapiens'
// console.log(colton.species, matilda.species)

// console.log(colton.hasOwnProperty('firstName'))
// console.log(colton.hasOwnProperty('species'))

// console.log(colton.__proto__)
// console.log(colton.__proto__.__proto__)
// console.log(colton.__proto__.__proto__.__proto__)

// console.dir(Person.prototype.constructor)

// const arr = [2, 3, 4, 6, 6, 4, 3, 6, 7]
// console.log(arr.__proto__)
// console.log(arr.__proto__.__proto__)

// Array.prototype.unique = function () {
//   return [...new Set(this)]
// }

// console.log(arr.unique())

//ES6 Classes
//class expression
// const PersonCL = class {

// }
//class declaration
// class PersonCL {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName
//     this.birthYear = birthYear
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear)
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`)
//   }

//   get age() {
//     return 2037 - this.birthYear
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name
//     else alert(`${name} is not a full name.`)
//   }

//   get fullName() {
//     return this._fullName
//   }

//   static hey() {
//     console.log('Hey there!')
//   }
// }

// const jessica = new PersonCL('Jessica Davis', 1996)
// console.log(jessica)
// // jessica.calcAge()

// // // PersonCL.prototype.greet = function () {
// // //   console.log(`Hey ${this.firstName}`)
// // // }

// // jessica.greet()

// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop()
//   },

//   set latest(mov) {
//     this.movements.push(mov)
//   },
// }

// console.log(account.latest)

// account.latest = 50
// console.log(account.movements)

// console.log(jessica.age)

// // Person.hey = function () {
// //   console.log('Hey there!')
// // }
// // Person.hey()
// // jessica.hey()
// PersonCL.hey()

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear)
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName
//     this.birthYear = birthYear
//   },
// }

// const steven = Object.create(PersonProto)

// console.log(steven)
// steven.name = 'Steven'
// steven.birthYear = 2002

// steven.calcAge()
// console.log(steven.__proto__)
// console.log(steven.__proto__ === PersonProto)

// const sarah = Object.create(PersonProto)

// console.log(sarah)
// sarah.init('Sarah', 1997)
// sarah.calcAge()

/////////////////////////
/////////////////////////
/////////////////////////

//Inheritance Between Classes

const Person = function (firstName, birthYear) {
  this.firstName = firstName
  this.birthYear = birthYear
}

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear)
}

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear)
  this.course = course
}

Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`)
}

const mike = new Student('Mike', 2020, 'Computer Science')
console.log(mike)
mike.introduce()
mike.calcAge()
console.log(mike.__proto__)
console.log(mike instanceof Student)

console.log(mike.__proto__)
Student.prototype.constructor = Student
