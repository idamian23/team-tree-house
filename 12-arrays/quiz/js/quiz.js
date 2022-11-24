function createListItems(arr) {
    let items = ''
    for (let i = 0; i < arr.length; i++) {
        items += `<li>${arr[i]}</li>`
    }
    return items
}
// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [
    ['An IP address?', '0'],
    ['My name is ?', 'john'],
    ['Month ?', 'nov'],
]

// 2. Store the number of questions answered correctly
let correct = []
let incorrect = []
let correctAnswers = 0
/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for (let i = 0; i < questions.length; i++) {
    let question = questions[i][0]
    let answer = questions[i][1]
    let response = prompt(question)
    if (response.toLowerCase() === answer) {
        correct.push(question)
        correctAnswers++
    } else {
        incorrect.push(question)
    }
}

// 4. Display the number of correct answers to the user
let html = `
<h1>You got ${correctAnswers} points!</h1>
<h2>Questions correct:<h2>
<ol>
${createListItems(correct)}
</ol>

<h2>Questions wrong: </h2>
<ol>
${createListItems(incorrect)}
</ol>
`

document.querySelector('main').innerHTML = html
