'use strict'

// let arr = ['a', 'b', 'c', 'd', 'e']
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

//Find Method
// const firstWithdrawal = movements.find((mov) => mov < 0)
// console.log(firstWithdrawal)

//Some & Every
// console.log(movements)
// console.log(movements.includes(-130))

// const anyDeposits = movements.some((mov) => mov > 1500)
// console.log(anyDeposits)

// //flat and flatMap
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8]
// console.log(arr.flat())

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8]
// console.log(arrDeep.flat())
// console.log(arrDeep.flat(2))

//Sort
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha']
// console.log(owners.sort())

//Return < 0, a , b (keep order)
//Return > 0, b, a (switch order)
// movements.sort((a, b) => {
//   //Ascending
//   if (a > b) {
//     return 1
//   }
//   if (a < b) {
//     return -1
//   }
// })
// movements.sort((a, b) => a - b)
// console.log(movements)
// movements.sort((a, b) => {
//   //Descending
//   if (a > b) {
//     return -1
//   }
//   if (a < b) {
//     return 1
//   }
// })
// movements.sort((a, b) => b - a)
// console.log(movements)

/* Array.from
const arr = [1, 2, 3, 4, 5, 6, 7]
const x = new Array(7)
console.log(x)
// x.map(x.map(() => 5))
x.fill(1, 3, 5)
console.log(x)

arr.fill(23, 4, 6)
console.log(arr)

//Array.from
const y = Array.from({ length: 7 }, () => 1)
console.log(y)

const z = Array.from({ length: 7 }, (_, i) => i + 1)
console.log(z)

const diceRolls = Array.from(
  { length: 100 },
  (_, i) => (i = Math.floor(Math.random() * 7))
)
console.log(diceRolls)
*/
//////////////// Array Methods Practice //////////////////////
// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// }

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// }

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// }

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// }

// const accounts = [account1, account2, account3, account4]

// //1. Calc how much has been deposited into each in total.

// const bankDepositSum = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0)
// console.log(bankDepositSum)

// //2. how many deposits of at least 1,000

// // const numDeposits1000 = accounts
// //   .flatMap((acc) => acc.movements)
// //   .filter((mov) => mov > 1000).length

// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0)
// console.log(numDeposits1000)

// //3. Create a new object in stead of a number or a string using reduce
// //reduce is the swiss army knife of array methods

// const { deposits, withdrawals } = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur)
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur
//       return sums
//     },
//     { deposits: 0, withdrawals: 0 }
//   )

// console.log(deposits, withdrawals)

// //4. Convert any string in to a title case. (All words are capitalized with some exceptions.)
// // this is a nice title => This Is a Nice Title

// const convertTitleCase = function (title) {
//   const capitalize = (str) => str[0].toUpperCase() + str.slice(1)

//   const exceptions = ['a', 'an ', 'and', 'the', 'but', 'or', 'on', 'with', 'in']

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ')
//   return capitalize(titleCase)
// }

// console.log(convertTitleCase('this is a nice title'))
// console.log(convertTitleCase('this is a LONG title but not too long'))
// console.log(convertTitleCase('and here is another title with an EXAMPLE'))

//Challenge 4
//Julia and Kate are still studying dogs, and this time they are studying if the dogs are eating too much or too little.
//eating too much means taht the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
//eating an okay amount means the dog's current food portion is within a range 10% below the recommended portion

//1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate teh recommended food portion and add it to the object as a new property. Do NOT create a newarray, simply loop over the array .
//Formula: recommendedFood = weight ** 0.75 * 28 (the result is in frams of food and the weight needs to be in kg)

//2. Find sarah's dog and log to the console whether its eating too muhc ot too little. Some dogs have multiple owners , so you need to find sarahs first in the array.

//3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array of owners of dogs that eat too little ('ownersEatTooLittle')

//4. Log a string to the console for each arrat created in 3. "matilda and alice and bobs dogs eat to much" and "Sarah and John and Michael's dogs eat too little"

//5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (boolean value)

//6. Log to the console whether there is any dog eating an okay amount of food (boolean)

//7. Create an array containing the dogs that are eating na okay amount of food (reuse condition in 6)

//8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are insdie the array's objects.)

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
]

//1.
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)))
console.log(dogs)

//2.
const dogSarah = dogs.find((dog) => dog.owners.includes('Sarah'))
console.log(dogSarah)
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
)

//3.
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners)

console.log(ownersEatTooMuch)

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners)

console.log(ownersEatTooLittle)

//4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dog eat too much.`)
console.log(`${ownersEatTooLittle.join(' and ')}'s dog eat too little.`)

//5.
console.log(dogs.some((dog) => dog.curFood === dog.recFood))

//6.
const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1

console.log(dogs.some(checkEatingOkay))

//7.
console.log(dogs.filter(checkEatingOkay))

//8.
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood)
console.log(dogsSorted)
