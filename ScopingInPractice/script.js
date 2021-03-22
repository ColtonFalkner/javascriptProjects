'use strict'

function calcAge(birthYear) {
  const age = 2037 - birthYear
  console.log(firstName)

  function printAge() {
    let output = `You are ${age}, born in ${birthYear}.`
    console.log(output)

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true
      const firstName = 'Crampton'
      output = 'new OUtput'
      const str = `Oh, and you're a millenial, ${firstName}`
      console.log(str)

      function add(a, b) {
        return a + b
      }

      console.log(add(2, 4))
    }
    // console.log(millenial)
    console.log(output)
  }
  printAge()

  return age
}

const firstName = 'Colton'

calcAge(1991)
