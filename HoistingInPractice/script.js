'use strict'

// console.log(me)
// console.log(job)
// console.log(year)

var me = 'colton'
let job = 'unemployed'
const year = 1991

console.log(addDecl(2, 2))
// console.log(addExp(2, 2))
// console.log(addArror(2, 2))

//Function Declaration
function addDecl(a, b) {
  return a + b
}
//Function Expression
const addExp = function (a, b) {
  return a + b
}
//Arrow function
const addArror = (a, b) => a + b

if (!numProd) deleteShoppingCart()

var numProd = 10

function deleteShoppingCart() {
  console.log('All products deleted')
}
