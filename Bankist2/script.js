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
const nav = document.querySelector('.nav')
//Tabbed Component
const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')
//Scroll Nav
const header = document.querySelector('.header')
const navHeight = nav.getBoundingClientRect().height

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
  // console.log(e.target)
  e.preventDefault()

  //matching strat
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href')
    // console.log(id)
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }
})

//Tabbed Component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab')

  //Guard Clause
  if (!clicked) return
  //Remove active tab and active content
  tabs.forEach((t) => t.classList.remove('operations__tab--active'))
  tabsContent.forEach((c) => c.classList.remove('operations__content--active'))

  //Active Tab
  clicked.classList.add('operations__tab--active')
  //Active Content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active')
})

//Menu Fade Animation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target
    const siblings = link.closest('.nav').querySelectorAll('.nav__link')
    const logo = link.closest('.nav').querySelector('img')

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this
    })
    logo.style.opacity = this
  }
}
//Passing an "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5))
nav.addEventListener('mouseout', handleHover.bind(1.0))

//Sticky Nav
// const initialCoords = section1.getBoundingClientRect()

// window.addEventListener('scroll', function (e) {
//   // console.log(window.scrollY)

//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky')
//   else nav.classList.remove('sticky')
// })
// //Intersection API
// const obsCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry)
//   })
// }

// const obsOptions = {
//   root: null,
//   threshhold: [0, 0.2],
// }

// const observer = new IntersectionObserver(obsCallback, obsOptions)
// observer.observe(section1)

const stickyNav = function (entries) {
  const [entry] = entries
  // console.log(entry)
  if (!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky')
}
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
})
headerObserver.observe(header)

//Reveal Sections
const allSections = document.querySelectorAll('.section')

const revealSection = function (entries, obersver) {
  const [entry] = entries

  if (!entry.isIntersecting) return

  entry.target.classList.remove('section--hidden')
  obersver.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
})
allSections.forEach(function (section) {
  sectionObserver.observe(section)
  section.classList.add('section--hidden')
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
// //Traversing the DOM
// //MOVing downward
// const h1 = document.querySelector('h1')
// console.log(h1.querySelectorAll('.highlight'))
// console.log(h1.childNodes)
// console.log(h1.children)
// h1.firstElementChild.style.color = 'white'
// h1.lastElementChild.style.color = 'black'

// //Moving Upwards
// console.log(h1.parentNode)
// console.log(h1.parentElement)

// h1.closest('.header').style.background = 'var(--gradient-secondary)'

// //Going Sideways
// console.log(h1.previousElementSibling)
// console.log(h1.nextElementSibling)

// console.log(h1.previousSibling)
// console.log(h1.nextSibling)

// console.log(h1.parentElement.children)
// ;[...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)'
// })
