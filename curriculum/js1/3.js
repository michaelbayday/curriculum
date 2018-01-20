const solution = (x, count = 0, str = '') => {
  if (x === count) {
   return str;
  };
  return solution(x, count + 1, `${str}hello`);
};

module.exports = {
  solution,
};
