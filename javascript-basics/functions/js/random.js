function getRandom(upper){
    const randomNumber = Math.floor( Math.random() * upper ) + 1;
    return randomNumber;
}

const dieRoll = getRandom(10);
console.log(dieRoll);

