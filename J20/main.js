const IMG = document.querySelector('.img');
const firstName = document.querySelector('.first');
const lastName = document.querySelector('.last');
const city = document.querySelector('.city');
const country = document.querySelector('.country');
const email = document.querySelector('.email');
const age = document.querySelector('.age');

const xhr = new XMLHttpRequest()
xhr.open(
  'GET',
  'https://randomuser.me/api/',
)
xhr.responseType = 'json'
xhr.send()

xhr.onload = function () {
    const response = xhr.response

    email.innerHTML = response.results[0].email
    firstName.innerHTML = response.results[0].name.first
    lastName.innerHTML = response.results[0].name.last
    age.innerHTML = response.results[0].dob.age
    country.innerHTML = response.results[0].location.country
    city.innerHTML = response.results[0].location.city
    IMG.src = response.results[0].picture.large

    console.log(response.results[0])
    
}


