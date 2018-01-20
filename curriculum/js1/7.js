/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, divisor = 2, prime = false) => {
  if (a === 2 || a === divisor) {
    prime = true;
    return prime;
  };
  if (a === 1 || a % divisor === 0) {
    return prime;
  };
  return solution(a, divisor + 1, prime);
};

module.exports = {
  solution,
};
