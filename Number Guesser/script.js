'use strict'
let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)

  if (!guess) {
    displayMessage('⛔️ No Number')
  } else if (guess === secretNumber) {
    //When Player Wins
    displayMessage('🎉 Correct Number!!')
    document.querySelector('.number').textContent = secretNumber

    document.querySelector('body').style.backgroundColor = '#60b447'
    document.querySelector('.number').style.width = '30rem'

    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }
  }
  //When guess is different.
  else if (guess !== secretNumber) {
    if (score > 1) {
      //when guess is too high
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!')

      score--
      document.querySelector('.score').textContent = score
    } else {
      displayMessage('😩 You Lose!')
      document.querySelector('.score').textContent = 0
    }
  }
})
//Reset The Game
document.querySelector('.again').addEventListener('click', () => {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1

  displayMessage('Start guessing...')
  document.querySelector('.score').textContent = score
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''

  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
})
