'use strict'

// let age = 30
// let oldAge = age
// age = 31

// console.log(age)
// console.log(oldAge)

// const me = {
//   name: 'Colton',
//   age: 30,
// }

// const friend = me
// friend.age = 27

// console.log(me)
// console.log(friend)

let lastName = 'Williams'
let oldLastName = lastName
lastName = 'Davis'

console.log(lastName)
console.log(oldLastName)

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
}

const marriedJessica = jessica
marriedJessica.lastName = 'Davis'

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
}

const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = 'Davis'

console.log('Before Marriage:', jessica2)
console.log('After Marriage:', jessicaCopy)
