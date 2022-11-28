function sayHi() {
    console.log('Hello')
}

function hiAndBye(func) {
    func()
    console.log('Bye')
}

;(function (func) {
    func()
    console.log('Bye')
})(sayHi)

//  -----SELF INVOKING FUNCTION -----
// ;(function (str) {
//     console.log(`Hello ${str}`)
// })('Motherfucker')
