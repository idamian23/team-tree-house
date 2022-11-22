const getRandomNumber = (upper) => {
  const randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
};


/**
 * Calculates and returns the area of a rectangle.
 *
 * @param {number} width - The width of the rectangle.
 * @param {number} length - The length of the rectangle.
 * @param {string} unit - The unit of measurement.
 * @returns {string} The area of the rectangle and unit of measure.
 */
const getArea = (width, length, unit) => {
  const area = width * length;
  return `${area} ${unit}`;
}