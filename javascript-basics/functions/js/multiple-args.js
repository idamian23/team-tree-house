function getArea(length, width, unit){
    const area = length * width;
    return `${area} ${unit}`;
}

console.log(getArea(5,8.5, "mp"));