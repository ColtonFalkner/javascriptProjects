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
//Looping Objects: Object Keys, Values, and Entries
//For property Names
const properties = Object.keys(openingHours)
console.log(properties)

let openStr = `We are open on ${properties.length} days: `

for (const day of properties) {
  openStr += `${day}, `
}

console.log(openStr)

//For Property Values
const values = Object.values(openingHours)
console.log(values)

//Entire Object
const entries = Object.entries(openingHours)
// console.log(entries)

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`)
}

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

// //Optional Chaining
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open)
// }
// //With Optional Chaining
// console.log(restaurant.openingHours.mon?.open)
// console.log(restaurant.openingHours?.mon?.open)

// const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun']

// for (const day of days) {
//   // console.log(day)
//   const open = restaurant.openingHours[day]?.open ?? 'closed'
//   console.log(`On ${day}, we open at ${open}`)
// }
// //Optional Chaining with Methods
// console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist")
// console.log(restaurant.orderRisotto?.(0, 1) ?? "Method doesn't exist")

// //Optional Chaining with Arrays
// const users = [{ name: 'Colton', email: 'email@email.com' }]
// console.log(users[0]?.name ?? 'User array empty')

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

// if (restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open)
// }

// if (restaurant.openingHours.fri) {
//   console.log(restaurant.openingHours.fri.open)
// }

// //The For Of Loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// for (const item of menu) console.log(item)
// //old school way
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`)
// }
// //destructured
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`)
// }
///////////////////////////////////////////////

// //Logical Operators Expanded
// console.log(3 || 'Colton')
// console.log('' || 'Colton')
// console.log(true || 0)
// console.log(undefined || null)

// console.log(undefined || 0 || '' || 'hello' || 23 || null)

// restaurant.numGuests = 0
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
// console.log(guests1)
// //Nullish: null and undefined (not 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10
// console.log(guestCorrect)

// const guests2 = restaurant.numGuests || 10
// console.log(guests2)

// console.log(0 && 'Colton')
// console.log(7 && 'colton')
// console.log('Hello' && 23 && null && 'Colton')

// //Practical Example (avoiding an if statement)
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach')
// }
// //This is nuts. How does this work.
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')

// //////////////////////
// //REST Operator
// //for the array
// const [a, b, ...others] = [1, 2, 3, 4, 5]
// console.log(a, b, others)

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ]
// console.log(pizza, risotto, otherFood)

// //For Objects
// const { sat, ...weekdays } = restaurant.openingHours
// console.log(sat, weekdays)

// //For Functions
// const add = function (...numbers) {
//   let sum = 0
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i]
//   console.log(sum)
// }
// add(2, 3)
// add(5, 3, 2, 7)
// add(3, 2, 4, 56, 6, 7, 5)

// const x = [23, 5, 7]
// add(...x)

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')
/////////////////////////////////////////////////////////////
//The Spread Operator (IS on the RIGHT)
//Real World Example
// const ingredients = [
//   prompt("Let's make pasta! Igredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ]
// console.log(ingredients)
// restaurant.orderPasta(...ingredients)

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// })

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// })

// const arr = [7, 8, 9]
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
// console.log(badNewArr)

// const newArr = [1, 2, ...arr]
// console.log(newArr)

// console.log(...newArr)

// const newMenu = [...restaurant.mainMenu, 'Gnocchi']
// console.log(newMenu)

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu]
// console.log(mainMenuCopy)

// //Join two or more arrays
// const joinedArray = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(joinedArray)

// //Iterables
// const str = 'Colton'
// const letters = [...str, '', 'F.']
// console.log(letters)

// //Spreadable objects
// const newRestaurant = { foundingYear: 1998, ...restaurant, founder: 'Guiseppe' }
// console.log(newRestaurant)

// //Soft copy objects
// const restaurantCopy = { ...restaurant }
// restaurantCopy.name = 'Ristorante Roma'
// console.log(restaurantCopy.name, restaurant)
// //Destructuring Objects

// const { name, openingHours, categories } = restaurant
// console.log(name, openingHours, categories)

// //Destructuring and naming own variable
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant
// console.log(restaurantName, hours, tags)

// //Destructuring and assigning default values
// const { menu = [], starterMenu: starters = [] } = restaurant
// console.log(menu, starters)

// //Mutating Variables
// let a = 111
// let b = 222

// const obj = { a: 23, b: 8, c: 13 }
// ;({ a, b } = obj)
// console.log(a, b)

// //Nested Objects
// const {
//   fri: { open, close },
// } = openingHours
// console.log(open, close)

// //Destructuring arrays
// const arr = [2, 3, 4]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// const [x, y, z] = arr
// console.log(x, y, z)

// // let [main, , secondary] = restaurant.categories

// console.log(restaurant.order(2, 0))

// const [starter, main] = restaurant.order(2, 0)
// console.log(starter, main)

// const nested = [2, 4, [5, 6]]
// // const [i, , j] = nested
// // console.log(i, j)
// //destructuring nested array
// const [i, , [j, k]] = nested
// console.log(i, j, k)

// //setting default values
// const [p = 1, q = 1, r = 1] = [8, 9]
// console.log(p, q, r)
