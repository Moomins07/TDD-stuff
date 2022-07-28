const allSums = [];
const initialValue = 0;
let sumTotal;

let sumTotalFunc = function () {
  sumTotal = allSums.reduce(function (acc, curr) {
    acc += curr;
    return acc;
  }, initialValue);
};

const sumAll = function (minNumber, maxNumber) {
  if (minNumber < maxNumber) {
    for (let i = minNumber; i <= maxNumber; i++) {
      allSums.push(...[i]);
    }
    sumTotalFunc();
    return sumTotal;
  } else if (minNumber > maxNumber) {
    for (let i = minNumber; i >= maxNumber; i--) {
      allSums.push(...[i]);
    }
    sumTotalFunc();
    return sumTotal;
  } else if (minNumber < 0 || maxNumber < 0) {
    return "ERROR";
  } else if (minNumber !== typeof Number && maxNumber !== typeof Number) {
    return "ERROR";
  }
};

// Do not edit below this line

module.exports = sumAll;
