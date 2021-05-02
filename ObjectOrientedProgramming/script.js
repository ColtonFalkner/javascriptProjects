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
//constructor functions
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName
//   this.birthYear = birthYear
// }

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear)
// }

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear)
//   this.course = course
// }

// Student.prototype = Object.create(Person.prototype)

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}.`)
// }

// const mike = new Student('Mike', 2020, 'Computer Science')
// console.log(mike)
// mike.introduce()
// mike.calcAge()
// console.log(mike.__proto__)
// console.log(mike instanceof Student)

// console.log(mike.__proto__)
// Student.prototype.constructor = Student

//Inheritance between ES6 Classes
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

// class StudentCL extends PersonCL {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear)
//     this.course = course
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}.`)
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     )
//   }
// }

// const martha = new StudentCL('Martha Jones', 2012, 'Computer Science')
// console.log(martha)
// martha.introduce()
// martha.calcAge()

//Inheritance with Object.Create

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

// const StudentProto = Object.create(PersonProto)
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear)
//   this.course = course
// }

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`)
// }

// const jay = Object.create(StudentProto)
// jay.init('Jay', 2010, 'Computer Science')
// console.log(jay)
// jay.introduce()
// jay.calcAge()

class Account {
  //Public Field
  locale = navigator.language

  //Private Fields
  #movements = []
  #pin

  constructor(owner, currency, pin) {
    this.owner = owner
    this.currency = currency
    //protected property
    this.#pin = pin
    // this._movements = []
    // this.locale = navigator.language

    console.log(`Thanks for opening an account, ${this.owner}!`)
  }
  //Public Methods
  //Public Interface
  getMovements() {
    return this.#movements
  }

  deposit(val) {
    this.#movements.push(val)
  }

  withdraw(val) {
    this.deposit(-val)
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val)
      console.log(`Loan Approved`)
    }
  }

  //Private Methods
  #approveLoan(val) {
    return true
  }
}

const acc1 = new Account('Colton', 'USD', 1111)
console.log(acc1)
// //Dont' do this
// acc1.movements.push(250)
// acc1.movements.push(-150)
console.log(acc1)
acc1.deposit(250)
acc1.withdraw(140)
acc1.requestLoan(1000)
acc1.#approveLoan(2000)
console.log(acc1.getMovements())

// console.log(acc1.#movements)
