














const input = document.querySelector('.input')
const clear = document.querySelector('.div4')
const plusMinus = document.querySelector('.div10')
const percent = document.querySelector('.div16')
const divide = document.querySelector('.div22')
const seven = document.querySelector('.div5')
const eight = document.querySelector('.div11')
const nine = document.querySelector('.div17')
const multiply = document.querySelector('.div23')
const four = document.querySelector('.div6')
const five = document.querySelector('.div12')
const six = document.querySelector('.div18')
const minus = document.querySelector('.div24')
const one = document.querySelector('.div7')
const second = document.querySelector('.div13')
const three = document.querySelector('.div19')
const plus = document.querySelector('.div25')
const zero = document.querySelector('.div14')
const dot = document.querySelector('.div20')
const equal = document.querySelector('.div26')


let result = ''
let calc = 0

seven.addEventListener('click', (event) => {
    result += 7
    input.innerHTML = result;
    calc = +result
    console.log(result);
    console.log(calc);
})

eight.addEventListener('click', (event) => {
    result += 8
    input.innerHTML = result;
})

nine.addEventListener('click', (event) => {
    result += 9
    input.innerHTML = result;
})

four.addEventListener('click', (event) => {
    result += 4
    input.innerHTML = result;
})

five.addEventListener('click', (event) => {
    result += 5
    input.innerHTML = result;
})

six.addEventListener('click', (event) => {
    result += 6
    input.innerHTML = result;
})

one.addEventListener('click', (event) => {
    result += 1
    input.innerHTML = result;
})

second.addEventListener('click', (event) => {
    result += 2
    input.innerHTML = result;
})

three.addEventListener('click', (event) => {
    result += 3
    input.innerHTML = result;
})

zero.addEventListener('click', (event) => {
    result += 0
    input.innerHTML = result;
})

plus.addEventListener('click', (event) => {
    result += '+'
    input.innerHTML = result;
})

clear.addEventListener('click', (event) => {
    result = ''
    input.innerHTML = result;
})

minus.addEventListener('click', (event) => {
    result += '-'
    input.innerHTML = result;
})

equal.addEventListener('click', (event) => {


})