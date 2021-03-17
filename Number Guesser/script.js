'use strict'
let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number'
  } else if (guess === secretNumber) {
    //When Player Wins
    document.querySelector('.message').textContent = '🎉 Correct Number!!'
    document.querySelector('.number').textContent = secretNumber

    document.querySelector('body').style.backgroundColor = '#60b447'
    document.querySelector('.number').style.width = '30rem'
  } else if (guess > secretNumber) {
    if (score > 1) {
      //when guess is too high
      document.querySelector('.message').textContent = 'Too High!'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = '😩 You Lose!'
      document.querySelector('.score').textContent = 0
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      //when guess is too low
      document.querySelector('.message').textContent = 'Too Low!'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = '😩 You Lose!'
      document.querySelector('.score').textContent = 0
    }
  }
})
//Reset The Game
document.querySelector('.again').addEventListener('click', () => {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1

  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.score').textContent = score
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''

  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
})
