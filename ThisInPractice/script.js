'use strict'

console.log(this)

const calcAge = function (birthYear) {
  console.log(2037 - birthYear)
  console.log(this)
}

calcAge(1991)

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear)
  console.log(this)
}

calcAgeArrow(1991)

const colton = {
  year: 1991,
  calcAge: function () {
    console.log(this)
    console.log(2037 - this.year)
  },
}

colton.calcAge()

const matilda = {
  year: 2017,
}

matilda.calcAge = colton.calcAge
matilda.calcAge()
