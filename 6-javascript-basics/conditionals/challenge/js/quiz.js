/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let correct = 0;

// 2.= correct + 1re the rank of a player
let rank = "";

// 3. Select the <main> HTML element
const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
let q1 = "What are you learning now?";
let q2 = "Do you know JS?";
let q3 = "Greater or Lower?";
let q4 = "World CUP?";
let q5 = "JS or Python?";

let a1 = prompt(q1);

if(a1.toLowerCase() == 'javascript'){
  correct += 1;
}

let a2 = prompt(q2);
if(a2.toLowerCase() == "yes"){
  correct = correct + 1;
}
console.log(correct);
let a3 = prompt(q3);
if(a3.toLowerCase() == "greater"){
  correct = correct + 1;
}
console.log(correct);
let a4 = prompt(q4);
if(a4.toLowerCase() == 'qatar'){
  correct = correct + 1;
}
console.log(correct);
let a5 = prompt(q5);
if(a5.toLowerCase() == "js"){
  correct = correct + 1;
}


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
correct = 2;
if(correct == 5){
  rank = "gold";
}else if (correct >= 3) {
  rank = "silver";
} else if(correct >= 1 ){
  rank = 'bronze';
}else{
  rank = "none";
}

// 6. Output results to the <main> element
main.innerHTML= `<h2>You got ${correct} out of 5 questions correct.</h2> \ <p>Crown earned: <strong> ${rank}</strong></p>`;
