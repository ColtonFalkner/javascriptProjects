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

const dogsJulia = [3, 5, 2, 12, 7]
const dogsKate = [4, 1, 15, 8, 3]

const checkDogs = function (dogsJulia, dogsKate) {
  const newJuliaDogs = dogsJulia.slice(1, 3)
  console.log(newJuliaDogs)
  const fixedArray = newJuliaDogs.concat(dogsKate)
  console.log(fixedArray)
  fixedArray.forEach((dog, i) => {
    if (dog >= 3) {
      console.log(`Dog #${i + 1} is an adult and is ${dog} years old.`)
    } else {
      console.log(`Dog #${i} is a puppy and is ${dog} years old..`)
    }
  })
}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
