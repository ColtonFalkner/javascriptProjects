'use strict'

const colton = {
  firstName: 'Colton',
  year: 1991,
  calcAge: function () {
    // console.log(this)
    // console.log(2037 - this.year)

    const self = this
    const isMillenial = function () {
      console.log(self)
      console.log(self.year >= 1981 && self.year <= 1996)
    }
    isMillenial()
  },

  greet: () => console.log(`Hey ${this.firstName}`),
}

colton.calcAge()

const addExpr = function (a, b) {
  console.log(arguments)
  return a + b
}
addExpr(2, 5)
addExpr(2, 5, 8, 12)

var addArrow = (a, b) => {
  console.log(arguments)
  a + b
}

addArrow(1, 2)
