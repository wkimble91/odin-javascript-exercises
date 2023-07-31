const fibonacci = function (num) {
  // fibonacci(4) returns the 4th member of the series: 3  (1, 1, 2, 3)

  if (num <= 0) return 'OOPS';
  if (num == 0) return 0;

  let previousNum = 1;
  let secondPreviousNum = 0;

  for (i = 2; i <= num; i++) {
    let sum = previousNum + secondPreviousNum;
    secondPreviousNum = previousNum;
    previousNum = sum;
  }

  return lastNum;
};

// Do not edit below this line
module.exports = fibonacci;
