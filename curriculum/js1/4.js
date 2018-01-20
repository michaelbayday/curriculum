const solution = (n, str, count = 0, finalStr = '') => {
  if (count === n) {
    return finalStr;
  };
  return solution(n, str, count + 1, finalStr + str);
};

module.exports = {
  solution,
};
