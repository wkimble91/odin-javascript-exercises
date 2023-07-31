const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function (arr) {
  let sum = 1;
  for (i = 0; i < arr.length; i++) {
    sum *= arr[i];
  }
  return sum;
};

const power = function (base, power) {
  return base ** power;
};

const factorial = function (num) {
  if (num == 0) return 1;

  let sum = 1;
  for (i = 0; i < num; i++) {
    sum *= num - i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
