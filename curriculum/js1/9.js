/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a) => {
  let remainder = a % 7;
  return a + 7 - remainder;
};

module.exports = {
  solution,
};
