const playlist = [
    'So What',
    'Respect',
    'What a Wonderful World',
    'At Last',
    'Three Little Birds',
    'The Way You Look Tonight',
    'Cool',
]

function createListItems(arr) {
    let items = ''
    for (let i = 0; i < playlist.length; i++) {
        items += `<li>${arr[i]}</li>`
    }
    return items
}

document.querySelector('main').innerHTML = `
<ol>
  ${createListItems(playlist)}
</ol>
`
