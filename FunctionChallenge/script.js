'use strict'

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: Javascript', '1: Python', '2. Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')} \n (Write option number.)`
      )
    )
    console.log(answer)
    //Register Answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++

    this.displayResults()
    this.displayResults('string')
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers)
    } else if (type === 'string') {
      console.log(`Poll Results are ${this.answers.join(', ')}`)
    }
  },
}
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll))
//1. Create a method called 'registerNewAnswer' on the 'poll' object. it should do two things: 1.1 display a prompt window for the user to input the number of the selected option && 1.2 Based on the input number, update the 'answers' array property. for exacmple, if the option is 3, increase the value at position 3 of the array by 1. make sure to check if the input is a number and if the number makes sense.

//2. Call this method whenever the user clicks the 'Answer Poll' buttton.

//3. Create a method 'displayResults' which displays that poll resulsts. the mehtod takes a string as an input (called 'type'), which can be either 'string' or 'array'. if type is 'array' simply display the results array as it is, using console.log(). this should be the default option. if type is 'string', display a string like 'poll results are 12, 3, 4 ,1'

//4. Run the display results method at the end of each 'registerNewAnswer' method call.
