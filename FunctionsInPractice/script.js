'use strict'

const colton = {
  firstName: 'Colton',
  year: 1991,
  calcAge: function () {
    console.log(this)
    console.log(2037 - this.year)
  },

  greet: () => console.log(`Hey ${this.firstName}`),
}

console.log(colton.greet())
