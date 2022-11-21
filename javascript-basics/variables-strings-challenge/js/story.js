// 1. Declare variables and capture input.
let adv = prompt("adv: ");
let noun = prompt("noun: ");
let verb = prompt("verb: ");

// 2. Combine the input with other words to create a story.
let story = `<p>${noun} ${verb} ${adv}</p>`;

// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = story;