const inStock = [
    'pizza',
    'cookies',
    'eggs',
    'apples',
    'milk',
    'cheese',
    'bread',
    'lettuce',
    'carrots',
    'broccoli',
    'potatoes',
    'crackers',
    'onions',
    'tofu',
    'limes',
    'cucumbers',
]
const search = prompt('Search for a product.')
let message
if (!search) {
    message = `${inStock.join(', ')}`
} else if (inStock.includes(search.toLowerCase())) {
    message = `<strong>Yes,we have ${search}! It's in stock at index : ${inStock.indexOf(
        search.toLowerCase()
    )}<strong>`
} else {
    message = `<strong>No, we don't have ${search}!<strong>`
}

console.log((document.querySelector('main').innerHTML = `<p>${message}</p>`))
