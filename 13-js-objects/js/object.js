const person = {
    name: 'Eddy',
    city: 'New City',
    age: 37,
    isStudent: true,
    skills: ['javascript', 'html', 'css'],
}

for (let prop in person) {
    console.log(`${prop} : ${person[prop]}`)
}
