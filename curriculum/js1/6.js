/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a, divisor = 2, sum = 0) => {
  if (divisor === a) {
    return sum;
  }
  if (a % divisor === 0) {
    return solution(a, divisor + 1, sum = sum + divisor);
  };
  return solution(a, divisor + 1, sum);
};

module.exports = {
  solution,
};
