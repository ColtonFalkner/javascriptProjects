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

btn.addEventListener('click', function () {
  getCountryData()
})

// getCountryData('usa')
// getCountryData('ffff')
