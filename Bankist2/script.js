'use strict'

//Modal Window
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.btn--close-modal')
const btnsOpenModal = document.querySelectorAll('.btn--show-modal')
//Scroll
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')
//Page nav

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
})

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect()

  console.log(e.target.getBoundingClientRect())

  console.log('Current Scroll (X/Y)', window.pageXOffset, window.pageYOffset)

  console.log(
    'height/width',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  )
  section1.scrollIntoView({ behavior: 'smooth' })
})

//Page Nav
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault()

//     const id = this.getAttribute('href')
//     console.log(id)
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
//   })
// })
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target)
  e.preventDefault()

  //matching strat
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href')
    console.log(id)
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }
})

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/*
console.log(document.documentElement)
console.log(document.head)
console.log(document.body)

const header = document.querySelector('.header')
const allSection = document.querySelectorAll('.section')

document.getElementById('section--1')
const allButtons = document.getElementsByTagName('btn')

const message = document.createElement('div')
message.classList.add('cookie-message')
message.textContent = 'We use Cookies for improved functionality and analytics.'
message.innerHTML =
  'We use Cookies for improved functionality and analytics. <button class = "btn btn--close-cookie"> Got it! </button>'

header.prepend(message)
header.append(message)
// header.append(message.cloneNode(true))
// header.before(message)
// header.after(message)

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove()
  })

//Styles
message.style.backgroundColor = '#37383d'
message.style.width = '120%'

console.log(message.style.color)
console.log(message.style.backgroundColor)

console.log(getComputedStyle(message).color)

message.style.height =
  parseFloat(getComputedStyle(message).height, 10) + 40 + 'px'

// document.documentElement.style.setProperty('--color-primary', 'orangered')

//Attributes
const logo = document.querySelector('.nav__logo')
console.log(logo.alt)
console.log(logo.className)

logo.alt = 'beautiful minimalist logo'

//Non-Standard Attributes
console.log(logo.designer)
console.log(logo.getAttribute('designer'))
logo.setAttribute('company', 'bankist')

console.log(logo.src)
console.log(logo.getAttribute('src'))

const link = document.querySelector('.nav__link--btn')
console.log(link.href)
console.log(link.getAttribute('href'))

console.log(logo.dataset.versionNumber)
*/

// window.scrollTo(
//   s1coords.left + window.pageXOffset,
//   s1coords.top + window.pageYoffset
// )

// window.scrollTo({
//   left: s1coords.left + pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: 'smooth',
// })

// const h1 = document.querySelector('h1')
// const alertH1 = function (e) {
//   alert('addEventListener: FUCK')

//   h1.removeEventListener('mouseenter', alertH1)
// }

// h1.addEventListener('mouseenter', alertH1)
// //doesn't remove the event, just prevents it from happening again
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1, 3000))

// h1.addEventListener('mouseenter', function (e) {
//   // alert('addEventListener: FUCK')
// })

// h1.onmouseenter = function (e) {
//   alert('addEventListener: FUCK')
// }

// // rgb(255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min)
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
// console.log(randomColor())

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor()
// })
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor()
// })
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor()
// })
