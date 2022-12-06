const breakfastPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (order) {
            resolve('Come and get it!')
        } else {
            reject(Error('Problem with your order!'))
        }
    }, 3000)
})
const order = false
console.log(breakfastPromise)
breakfastPromise
    .then((val) => console.log(val))
    .catch((err) => console.log(err))
