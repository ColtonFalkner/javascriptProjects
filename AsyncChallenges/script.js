'use strict'

const btn = document.querySelector('.btn-country')
const countriesContainer = document.querySelector('.countries')
//1. Create a function 'whereAmI' which takes as inputs a latitude adn longitude.

//2. do 'reverse geocoding' of the provided coordinates. Use this api https://geocode.xyz.api fetch format: https:geocode.xyz/52.508,13.381?geoit=json
//use the fetch api and promises, don't use that block

//3. once you have the data, take a look at it in the console to see all the attributes that you revieced. then, using this data, log a message like this to the console 'You are in Berlin, Germany'

//4. Chain a .catch method to the end of the promise chain and log errors to the console.

//5. create a meaningful error message for yourself

//6. use the received data to render a country.

//7. render the country and catch any errors

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

const whereAmI = function (lat, long) {
  fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
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
      console.log(`${err.message}`)
    })
    .finally(() => (countriesContainer.style.opacity = 1))
}

whereAmI(52.508, 13.381)
whereAmI(19.037, 72.873)
whereAmI(-33.933, 18.474)
