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
const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1)
