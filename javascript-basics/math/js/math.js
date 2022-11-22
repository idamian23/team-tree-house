const secondsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

const secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;


console.log(`There are ${secondsPerDay} seconds in a day.`);

const yearsAlive = secondsPerDay * daysPerWeek * weeksPerYear * 28;
console.log(`I've been alive for more than ${yearsAlive} seconds.`);