'use strict'

const btn = document.querySelector('.btn-country')
const countriesContainer = document.querySelector('.countries')

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
  </div>
  </article>
  `

  countriesContainer.insertAdjacentHTML('beforeend', html)
  // countriesContainer.style.opacity = 1
}

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg)

  // countriesContainer.style.opacity = 1
}

///////////////////////////////////////
// function getCountryData(country) {
//   const request = new XMLHttpRequest()

//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`)
//   request.send()

//   request.addEventListener('load', function () {
//     console.log(this.responseText)

//     const [data] = JSON.parse(this.responseText)
//     console.log(data)

//     const html = `
//   <article class="country">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)} people</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
//   </div>
//   </article>
//   `

//     countriesContainer.insertAdjacentHTML('beforeend', html)
//     countriesContainer.style.opacity = 1
//   })
// }
// getCountryData('usa')
/////////////////////////////////////////////////////////////

// function getCountryAndNeighbor(country) {
//   //AJAX call country 1
//   const request = new XMLHttpRequest()

//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`)
//   request.send()

//   request.addEventListener('load', function () {
//     // console.log(this.responseText)

//     const [data] = JSON.parse(this.responseText)
//     console.log(data)
//     //render country 1
//     renderCountry(data)
//     //Get neighbor country(ies)
//     const [neighbor] = data.borders

//     if (!neighbor) return

//     const request2 = new XMLHttpRequest()
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbor}`)
//     request2.send()
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText)
//       console.log(data2)
//       renderCountry(data2, 'neighbour')
//     })
//   })
// }
// getCountryAndNeighbor('usa')

// const request = fetch('https:restcountries.eu/rest/v2/name/portugal')
// console.log(request)

// const getCountryData = function (country) {
//   fetch(`https:restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response)
//       return response.json()
//     })
//     .then(function (data) {
//       console.log(data)
//       renderCountry(data[0])
//     })
// }

// const getCountryData = function (country) {
//   fetch(`https:restcountries.eu/rest/v2/name/${country}`)
//     .then((response) => {
//       console.log(response)

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`)

//       return response.json()
//     })
//     .then((data) => {
//       renderCountry(data[0])
//       const neighbour = data[0].borders[0]

//       if (!neighbour) return

//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data, 'neighbour'))
//     .catch((err) => {
//       console.error(`${err} Done Fucked Up`)
//       renderError(`Something Went Wrong || ${err.message}`)
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1
//     })
// }

const getJSON = function (url, errorMsg = 'Something Went Wrong') {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`)

    return response.json()
  })
}

const getCountryData = function (country) {
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country Not Found'
  )
    .then((data) => {
      renderCountry(data[0])
      const neighbour = data[0].borders[0]

      if (!neighbour) throw new Error('No Neighbor Found!!')

      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Neighbor Not Found'
      )
    })
    .then((data) => renderCountry(data, 'neighbour'))
    .catch((err) => {
      console.error(`${err}`)
      renderError(`Something Went Wrong || ${err.message}`)
    })
    .finally(() => {
      countriesContainer.style.opacity = 1
    })
}

// btn.addEventListener('click', function () {
//   getCountryData('usa')
// })

// getCountryData('usa')
// getCountryData('ffff')

// console.log('Test Start')
// setTimeout(() => console.log('0 sec timer'), 0)
// Promise.resolve('Resolved Promise 1').then((res) => console.log(res))
// console.log('Test End')

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening 🔮')
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 💰')
//     } else {
//       reject(new Error('You lost your money 💩'))
//     }
//   }, 2000)
// })
// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err))

// //Promisifying setTimeout

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000)
//   })
// }

// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds')
//     return wait(1)
//   })
//   .then(() => console.log('I waited for 1 second'))

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // )

    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

// getPosition().then((pos) => console.log(pos))

const whereAmI = function () {
  getPosition()
    .then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    })

    .then((res) => {
      // console.log(response)
      return res.json()
    })
    .then((data) => {
      console.log(data)
      console.log(`You are in ${data.city}, ${data.country}`)

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`)
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not Found! ${res.status}`)

      return res.json()
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => {
      console.error(`${err.message}`)
    })
    .finally(() => (countriesContainer.style.opacity = 1))
}

btn.addEventListener('click', whereAmI)
