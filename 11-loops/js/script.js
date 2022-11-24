const getRandomNumber = function () {
    return Math.floor(Math.random() * 256)
}

const getColor = function () {
    return `rgb( ${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()} )`
}

let html = ''
let randomRGB

for (let i = 1; i <= 10; i++) {
    randomRGB = getColor()
    html += `<div style="background-color: ${randomRGB}">${i}</div>`
    document.querySelector('main').innerHTML = html
}
