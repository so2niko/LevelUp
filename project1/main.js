const place = document.querySelectorAll('.place')
const variables = document.querySelectorAll('.variables')
const COLORS = ['red', 'blue', 'yellow', 'green', 'purple', 'pink', 'white', 'grey', 'brown']

for (let i = 0; i < COLORS.length; i++) {
    variables[i].style.backgroundColor = COLORS[i];
}

function randomColorNumber() {
    return COLORS[Math.trunc(Math.random() * COLORS.length)]
}

const randomLine = {
    0: randomColorNumber(),
    1: randomColorNumber(),
    2: randomColorNumber(),
    3: randomColorNumber(),
}

// for (let i = 0; i < variables.length; i++) {
// variables[i].addEventListener('click', (event) => {
//     place[0].style.backgroundColor = variables[i].style.backgroundColor
// }, {once: true})
// variables[i].removeEventListener('click')
        
// }

variables[0].addEventListener('click', (event) => {
    place[0].style.backgroundColor = variables[0].style.backgroundColor
    place[0].classList.add('checked')
})

if (place[0].classList.contains('checked')) {
    variables[0].removeEventListener('click')
}


// variables[0].addEventListener('click', (event) => {
//     place[1].style.backgroundColor = variables[0].style.backgroundColor
// })
// // variables[0].removeEventListener('click')

// variables[1].addEventListener('click', (event) => {
//     place[0].style.backgroundColor = variables[1].style.backgroundColor
// }, {once: true})
// // variables[1].removeEventListener('click')

// variables[2].addEventListener('click', (event) => {
//     place[0].style.backgroundColor = variables[2].style.backgroundColor
// }, {once: true})

variables[1].addEventListener('click', (event) => {
    place[0].style.backgroundColor = variables[1].style.backgroundColor
    place[0].classList.add('checked')
})

if (place[0].classList.contains('checked')) {
    variables[0].removeEventListener('click', (event) => {
        place[1].style.backgroundColor = variables[0].style.backgroundColor
    })
}