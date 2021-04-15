'use strict'

let arr = ['a', 'b', 'c', 'd', 'e']
/*
//SLICE
arr.slice(2)
console.log(arr.slice(2))
console.log(arr.slice(2, 4))

//will always return the last element
console.log(arr.slice(-1))
console.log(arr.slice(1, -2))

//SPLICE
// arr.splice(2)
console.log(arr)
//remove the last element
arr.splice(-1)
arr.splice(1, 2)
console.log(arr)

//Reverse
arr = ['a', 'b', 'c', 'd', 'e']
const arr2 = ['j', 'i', 'h', 'g', 'f']
console.log(arr2.reverse())
//Concat
const letters = arr.concat(arr2)
console.log(letters)

//Join
console.log(letters.join('-'))

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
//Looping over arrays
//for (const movement of movements)
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} - You deposited ${movement}.`)
  } else {
    console.log(`Movement ${i + 1} - You withdrew ${Math.abs(movement)}`)
  }
}
console.log('----------------------------')
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1} - You deposited ${movement}.`)
  } else {
    console.log(`Movement ${index + 1} - You withdrew ${Math.abs(movement)}`)
  }
})
*/
/* For each with maps and sets
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
])

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`)
})

//With a set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
console.log(currenciesUnique)
//second argument will be the same as the first- set it to '_'(throwaway in javascript) if you want the entire thing
currenciesUnique.forEach(function (key, value, set) {
  console.log(`${key}: ${value}`)
})
*/

//Challenge 1

// const dogsJulia = [3, 5, 2, 12, 7]
// const dogsKate = [4, 1, 15, 8, 3]

// const checkDogs = function (dogsJulia, dogsKate) {
//   const newJuliaDogs = dogsJulia.slice(1, 3)
//   console.log(newJuliaDogs)
//   const fixedArray = newJuliaDogs.concat(dogsKate)
//   console.log(fixedArray)
//   fixedArray.forEach((dog, i) => {
//     if (dog >= 3) {
//       console.log(`Dog #${i + 1} is an adult and is ${dog} years old.`)
//     } else {
//       console.log(`Dog #${i} is a puppy and is ${dog} years old.`)
//     }
//   })
// }
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])

// //Map

// //more in line with functional programming - better for modern javascript
// const movementsUSD = movements.map((mov) => mov * eurToUsd)

// console.log(movements)
// console.log(movementsUSD)

// const movementsUSDfor = []
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd)
// console.log(movementsUSDfor)

// const movementDescriptions = movements.map((mov, i, array) => {
//   if (mov > 0) {
//     return `Movement ${i + 1} - You deposited ${mov}.`
//   } else {
//     return `Movement ${i + 1} - You withdrew ${Math.abs(mov)}`
//   }
// })

// console.log(movementDescriptions)

//Filter
// const deposits = movements.filter(function (mov) {
//   return mov > 0
// })
// console.log(movements)
// console.log(deposits)

// const withdrawals = movements.filter(function (mov) {
//   return mov < 0
// })

// console.log(withdrawals)
/*
//Reduce
console.log(movements)

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   return acc + cur
// }, 0)

const balance = movements.reduce((acc, cur) => acc + cur, 0)
console.log(balance)

let balance2 = 0
for (const mov of movements) {
  balance2 += mov
}
console.log(balance2)

//get max value with reduce
const max = movements.reduce(function (acc, mov) {
  if (acc > mov) {
    return acc
  } else {
    return mov
  }
}, movements[0])

console.log(max)
*/
/* Coding Challenge #2
const dogsJulia = [5, 2, 4, 1, 15, 8, 3]
const dogsKate = [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
  const adults = humanAges.filter((age) => age >= 18)
  console.log(adults)
  console.log(humanAges)

  const average = adults.reduce((acc, cur) => acc + cur, 0) / adults.length
  return average
}
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])

console.log(avg1)
console.log(avg2)

*/
// const eurToUSD = 1.1

// const totalDeposits = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * eurToUSD)
//   .reduce((acc, mov) => acc + mov, 0)

// console.log(totalDeposits)

/* Challenge # 3
const calcAverageHumanAge = (ages) =>
ages
.map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
.filter((age) => age >= 18)
.reduce((acc, age, i, arr) => acc + age / arr.length, 0)

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])

const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])

console.log(avg1, avg2)
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

const firstWithdrawal = movements.find((mov) => mov < 0)
console.log(firstWithdrawal)
