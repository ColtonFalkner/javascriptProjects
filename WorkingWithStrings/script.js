'use strict'
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'

const airline = 'TAP Air Portugal'
let plane = 'A320'

//To get character at a position
console.log(plane[0])
console.log(plane[2])
console.log(plane[3])
console.log('B737'[0])

//Reading length of string
console.log(airline.length)
console.log('B737'.length)

//String Methods (strings are also zero-based)
console.log(airline.indexOf('r'))
console.log(airline.lastIndexOf('r'))
console.log(airline.indexOf('Portugal'))

//Slice Method
console.log(airline.slice(4))
console.log(airline.slice(4, 7))
const air = airline.slice(4, 7)
console.log(air)
console.log(air.length)

//Extracting a part of a string without knowing its length
console.log(airline.slice(0, airline.indexOf(' '))) //for the first word
console.log(airline.slice(airline.lastIndexOf(' ') + 1)) //for the second word

//To start indexing and return from the end
console.log(airline.slice(-2))
console.log(airline.slice(1, -1))

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1)
  if (s === 'B' || s === 'E') console.log('This is a middle seat. 😥')
  else console.log('You got lucky.')
}

checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')

//Change Case
console.log(airline.toLowerCase())
console.log('colton'.toLowerCase())
console.log(airline.toUpperCase())
console.log('colton'.toUpperCase())

//Fix capitalization
let passenger = 'coLtOn' //Colton
let passengerLower = passenger.toLowerCase()
let passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerCorrect)

//Check user imput email (comparing email)
const email = 'hello@colton.com'
const loginEmail = '  Hello@Colton.Com  \n'

const lowerEmail = loginEmail.toLowerCase()
const trimmedEmail = lowerEmail.trim()
console.log(trimmedEmail)

const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(normalizedEmail)

console.log(email === normalizedEmail)

//Replacing
const priceGB = '288,97£'
const priceUS = priceGB.replace('£', '$').replace(',', '.')
console.log(priceUS)

const announcement =
  'All passengers come to boarding door 23. Boarding door 23.'
console.log(announcement.replace('door', 'gate'))
console.log(announcement.replaceAll('door', 'gate'))
console.log(announcement.replace(/door/g, 'gate'))

//Booleans
plane = 'Airbus A320neo'
console.log(plane.includes('A'))
console.log(plane.includes('Boeing'))
console.log(plane.startsWith('A'))
console.log(plane.startsWith('Air'))

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus Family')
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase()
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You will not be able to board the plane.')
  } else {
    console.log('Enjoy your flight.')
  }
}

checkBaggage('I have a laptop, some food, and a pocket Knife.')
checkBaggage('Socks and Camera')
checkBaggage('Got some snacks and a gun for protection.')

//Split
console.log('a+very+nice+string'.split('+'))
console.log('Colton Falkner'.split(' '))

const [firstName, lastName] = 'Colton Falkner'.split(' ')
console.log(firstName)
console.log(lastName)
//Join
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
console.log(newName)

const capitalizeName = function (name) {
  const names = name.split(' ')
  const namesUpper = []
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1))
  }
  console.log(namesUpper.join(' '))
}

capitalizeName('jessica ann smith davis')
capitalizeName('colton falkner')

//Padding a string
const message = 'Go to gate 23.'
console.log(message.padStart(25, '+').padEnd(30, '+'))
console.log('Colton'.padStart(25, '+').padEnd(30, '+'))

//Padding Use Case
const maskCreditCard = function (number) {
  const str = number + ''
  const last = str.slice(-4)
  return last.padStart(str.length, '*')
}

console.log(maskCreditCard(1111222233334444))

//Repeat
const message2 = 'Bad weather... All departures delayed... '
console.log(message2.repeat(5))

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`)
}

planesInLine(5)
planesInLine(3)
planesInLine(12)
