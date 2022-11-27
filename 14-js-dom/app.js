// const body = document.body

// body.addEventListener('click', () => {
//     body.innerHTML = `<h1>Hello, world!<h1>`
// })
const headline = document.getElementById('headline')
const btnCreate = document.querySelector('.btn-main')
// const items = document.getElementsByTagName('li')
// const highlights = document.getElementsByClassName('highlight')
const items = document.querySelectorAll('li')
const highlights = document.querySelectorAll('.highlight')
const btnToggle = document.querySelector('.btn-toggle')
const btnRemove = document.querySelector('.btn-remove')

for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = 'skyblue'
    items[i].style.color = 'orchid'
}

for (const highlight of highlights) {
    highlight.style.backgroundColor = 'cornsilk'
}

// btn_main.addEventListener('click', () => {
//     if (headline.style.border == '') {
//         headline.style.border = 'solid 2px red'
//         headline.className = 'grow'
//         headline.style.fontSize = '3em'
//         btn_main.style.backgroundColor = 'tomato'
//     } else {
//         headline.style.border = ''
//         btn_main.style.backgroundColor = '#34baec'
//         headline.style.fontSize = '2.5em'
//     }
// })

btnCreate.addEventListener('click', () => {
    const input = document.querySelector('.input-main')
    const list = document.querySelector('ul')
    list.insertAdjacentHTML('afterbegin', `<li>${input.value}</li>`)

    input.value = ''
})

btnToggle.addEventListener('click', () => {
    const listContainer = document.querySelector('.list-container')

    if (listContainer.style.display === 'none') {
        btnToggle.textContent = 'Hide list'
        listContainer.removeAttribute('style')
    } else {
        btnToggle.textContent = 'Show list'
        listContainer.style.display = 'none'
    }

    //listContainer.style.display = 'block' ? 'none' : 'block'
})

btnRemove.addEventListener('click', () => {
    const lastItem = document.querySelector('li:last-child')
    lastItem.remove()
})
