const stringToShout = prompt("What do you want to shout?");
const shout = stringToShout.toUpperCase();
const shoutMesage = `<h2>The message to shout is: ${shout}!!</h2>`;

document.querySelector('main').innerHTML = shoutMesage;