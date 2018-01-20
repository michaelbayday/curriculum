/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (a, b, count = 0) => {
  if (count === a) {
    return;
  };
  b();
  return solution(a, b, count + 1);
};

module.exports = {
  solution,
};
