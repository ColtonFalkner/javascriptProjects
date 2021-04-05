'use strict'
/* Setting Default Params
const bookings = []
//ES6 method allows you to set default values in the parameters
const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  // ES5 Method
  // numPassenger = numPassenger || 1
  // price = price || 199
  const booking = {
    flightNum,
    numPassenger,
    price,
  }
  console.log(booking)
  bookings.push(booking)
}

createBooking('LH123')
createBooking('LH123', 2, 800)
createBooking('LH123', 2)
//to skip a param
createBooking('LH123', undefined, 1000)
*/

/* Passing Arguments by Ref vs Value
const flight = 'LH234'
const colton = {
  name: 'Colton Falkner',
  passport: 1234567890,
}

const checkIn = function (flightNum, passenger) {
  ;(flightNum = 'LH999'), (passenger.name = 'Mr. ' + passenger.name)

  if (passenger.passport === 1234567890) {
    alert('Check in')
  } else {
    alert('Wrong Passport')
  }
}

// checkIn(flight, colton)
console.log(flight)
console.log(colton)

// //Is the same as doing...
// const flightNum = flight
// const passenger = colton

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000)
}
newPassport(colton)
console.log(colton)
checkIn(flight, colton)
*/
/* Functions Calling Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase()
}

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ')
  return [first.toUpperCase(), ...other].join(' ')
}

const transformer = function (str, fn) {
  console.log(`Original String: ${str}`)
  console.log(`Transformed string: ${fn(str)}`)

  console.log(`Transformed by ${fn.name}`)
}

transformer('Javascript is the best!', upperFirstWord)
transformer('Javascript is the best!', oneWord)

const highFive = function () {
  console.log("You've been high fived")
}

document.body.addEventListener('click', highFive)
;['Colton', 'Hunter', 'Falkner'].forEach(highFive)
*/

/* Functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`)
  }
}

const greeterHey = greet('Hey')
greeterHey('Colton')
greeterHey('Hunter')
//neat syntax here
greet('hello')('Colton')

const greet2 = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`)
  }
}

const greet3 = (greeting) => (name) => console.log(`${greeting} ${name}`)
greet2('Sup')('My Dude')
greet3('YOOOOOOO')('my Guy')
*/

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    )
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
  },
}

lufthansa.book(239, 'Colton')
lufthansa.book(635, 'John Smith')
console.log(lufthansa.bookings)

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
  book() {},
}

const book = lufthansa.book
//won't work
// book(23, 'Sarah Williams')
//this keyword needs to be set explicitly

book.call(euroWings, 23, 'Sarah Williams')
console.log(euroWings)

book.call(lufthansa, 239, 'Mary Cooper')
console.log(lufthansa)

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
}

book.call(swiss, 583, 'Mary Cooper')
console.log(swiss)

//Apply Method
const flightData = [583, 'George Cooper']
book.apply(swiss, flightData)
console.log(swiss)

book.call(swiss, ...flightData)

//Bind Method
const bookEw = book.bind(euroWings)
bookEw(23, 'Steven Wonderful')

const bookLH = book.bind(lufthansa)
const bookSW = book.bind(swiss)

//setting bind to a specific argument/parameter
const bookEW23 = book.bind(euroWings, 23)
bookEW23('Pete')
bookEW23('Dale Cooper')

//bind with event listeners
lufthansa.planes = 300
lufthansa.buyPlane = function () {
  console.log(this)

  this.planes++
  console.log(this.planes)
}
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

//Partial Application with Bind.
const addTax = (rate, value) => value + value * rate

console.log(addTax(0.1, 200))

const addVAT = addTax.bind(null, 0.23)

console.log(addVAT(100))

const tax = function (rate) {
  return function (value) {
    return value + value * rate
  }
}

const addVAT2 = tax(0.23)
console.log(addVAT2(100))
console.log(addVAT2(23))

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`)
//   }
// }
