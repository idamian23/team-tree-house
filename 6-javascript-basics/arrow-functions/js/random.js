/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

 Math.floor(Math.random() * (6 - 1 + 1)) + 1;

 function getRandomNumber(lower, upper = 100){
    if(isNaN(lower) || isNaN(upper)){
        throw Error("Insert valid data!");
    }else if(lower > upper){
        throw Error("Upper must be higher than lower");
    }else 
        return Math.floor(Math.random() * (upper - lower + 1 )) + lower;
 }

 // Call the function and pass it different values
 
 
 