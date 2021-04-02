'use strict'

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'

const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun']

const openingHours = {
  //destructured from array
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
}

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 enhanced object literals
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    )
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`)
  },
  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng, otherIng)
  },
}

const question = new Map([
  ['question', 'what is the best programming language in the world? '],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Incorrect'],
])

console.log(question)
//Converting Map to Object
console.log(Object.entries(openingHours))
const hoursMap = new Map(Object.entries(openingHours))
console.log(hoursMap)
//Iterables
//Quiz app
console.log(question.get('question'))
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`)
}

// const answer = Number(prompt('Your answer.'))
// console.log(answer)

// console.log(question.get(question.get('correct') === answer))

//Converting a map back to an array
console.log([...question])
console.log(question.entries())
console.log([...question.keys()])
console.log([...question.values()])
// // Maps - Fundamentals
// const rest = new Map()
// //To Add
// rest.set('name', 'Classico Italiano')
// rest.set(1, 'Firenze, Italy')
// rest.set(2, 'Lisbon, Portugal')
// console.log(rest)
// //Additions can be chained
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open.')
//   .set(false, 'We are closed')
// console.log(rest)

// // console.log(rest.get('name'))
// // console.log(rest.get(true))

// const time = 21
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')))
// //To check what if something is in a map
// console.log(rest.has('categories'))

// rest.delete(2)

// //You can use arrays or objects as map keys
// // rest.clear()
// const arr = [1, 2]
// rest.set(arr, 'Test')
// console.log(rest)
// //before setting the array to a variable, using the get method will result in undefined
// console.log(rest.get(arr))

// rest.set(document.querySelector('body'), 'body')
// console.log(rest)

/////////////////////////
/////////////////////////
/////////////////////////

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ])
// console.log(ordersSet)

// console.log(new Set('Colton'))
// //To see how big a set is
// console.log(ordersSet.size)
// //To See if something is in a set
// console.log(ordersSet.has('Pizza'))
// console.log(ordersSet.has('Bread'))
// //To add something
// ordersSet.add('Garlic Bread')
// ordersSet.add('Garlic Bread')
// console.log(ordersSet)
// //To Delete something
// ordersSet.delete('Garlic Bread')
// console.log(ordersSet)
// //to loop through
// for (const order of ordersSet) console.log(order)

// //Use Case  - it's normal use is to remove duplicates from arrays

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
// const staffUnique = [...new Set(staff)]
// console.log(staffUnique)
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// )

// console.log(new Set('ColtonFalkner').size)
