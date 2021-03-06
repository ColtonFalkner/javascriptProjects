'use strict'
/* Parsing
console.log(23 === 23.0)
console.log(1.0 + 2.0)
console.log(0.1 + 0.2)
console.log(0.1 + 0.2 === 0.3)
//plus symbol type conversion
console.log(Number('23'))
console.log(+'23')

//Parsing
console.log(Number.parseInt('30px'))
console.log(Number.parseInt('e23'))

console.log(Number.parseFloat(' 2.5rem '))
//isNaN
console.log(Number.isNaN(20))
console.log(Number.isNaN('20'))
console.log(Number.isNaN(+'20X'))
console.log(Number.isNaN(23 / 0))
//isFinite
console.log(Number.isFinite(20))
console.log(Number.isFinite('20'))
console.log(Number.isFinite('20x'))
console.log(Number.isFinite(23 / 0))
//isInteger
console.log(Number.isInteger(23))
console.log(Number.isInteger(23.0))
console.log(Number.isInteger(23 / 0))
*/
/*
//Math and Rounding
console.log(Math.sqrt(25))
console.log(25 ** (1 / 2))
console.log(8 ** (1 / 3))

console.log(Math.max(4, 15, 146))
console.log(Math.max(4, 15, '146', 23, 4))
console.log(Math.max(4, 15, '146px', 23, 4))

console.log(Math.min(4, 15, 146, 23, 4))

console.log(Math.PI)
console.log(Math.PI * Number.parseFloat('10px') ** 2)

console.log(Math.trunc(Math.random() * 6) + 1)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1)
console.log(randomInt(10, 20))

//Rounding Integers
console.log(Math.trunc(23.3))

console.log(Math.round(23.4))
console.log(Math.round(23.9))

console.log(Math.ceil(23.9))
console.log(Math.ceil(23.9))

console.log(Math.floor(23.9))
console.log(Math.floor(23.9))

console.log(Math.trunc(-23.9))
console.log(Math.floor(-23.9))

//Rounding Decimals
console.log((2.7).toFixed(0))
console.log((2.7).toFixed(4))
console.log(+(2.75).toFixed(3))
*/
/*
//Remainder Operator
console.log(5 % 2)
console.log(5 / 2) // 5 = 2 * 2 + 1

console.log(8 % 3)
console.log(8 / 3) // 8 = 2 * 3 + 2

console.log(6 % 2)

const isEven = (n) => n % 2 === 0
console.log(isEven(2), isEven(8), isEven(23), isEven(1245))
*/
/*
//BigInt
console.log(2 ** 52 - 1)
console.log(Number.MAX_SAFE_INTEGER)

console.log(2340958723045987230459872309587235987n)
console.log(BigInt(2340958723045987230459872309587235987))
*/
/*
//Dates
// const now = new Date()
// console.log(now)

// console.log(new Date('Mon Apr 19 2021 15:33:50'))

// console.log(new Date('December 24, 2015'))
// console.log(new Date('2019-11-18T21:31:17.178Z'))

// console.log(new Date(2037, 10, 19, 15, 23, 5))
// console.log(new Date(0))
// console.log(new Date(3 * 24 * 60 * 60 * 1000))

const future = new Date(2037, 10, 19, 15, 23)
console.log(future)
console.log(future.getFullYear())
//Dont Use
// console.log(future.getYear())
console.log(future.getDate())
console.log(future.getMonth())
console.log(future.getDay())
console.log(future.getHours())
console.log(future.getMinutes())
console.log(future.getSeconds())
console.log(future.toISOString())
console.log(future.getTime())
//Retuns timestamp for current moment
console.log(Date.now())

future.setFullYear(2040)
console.log(future)
*/
//Calculations with Dates
// const future = new Date(2037, 10, 19, 15, 23)
// console.log(+future)

// const calcDaysPast = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)

// const days1 = calcDaysPast(new Date(2037, 3, 14), new Date(2037, 3, 24))
// console.log(days1)
/*
const num = 3884764.23
const options = {
  style: 'currency',
  unit: 'percent',
  currency: 'EUR',
  useGrouping: true,
}
//US
console.log(new Intl.NumberFormat('en-US', options).format(num))
//Germany
console.log(new Intl.NumberFormat('de-DE', options).format(num))
//Syria
console.log(new Intl.NumberFormat('ar-SY', options).format(num))
//Local Browser
console.log(new Intl.NumberFormat(navigator.language, options).format(num))
*/
/*
//Set Timeout

const ingredients = ['olive', 'spinach']
const pizzaTimer = setTimeout(
  (ing1, ing2) =>
    console.log(`Here is your pizza with ${ing1} and ${ing2}. ????`),
  3000,
  ...ingredients
)
console.log('Waiting...')

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer)
*/
// //SetInterval
// setInterval(() => {
//   const now = new Date()
//   console.log(now)
// }, 1000)
