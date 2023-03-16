const sumAll = function(num1, num2) {
  if (num1 < 0 ||
     num2 < 0 ||
     typeof num1 !== 'number' ||
     typeof num2 !== 'number'
     ) return 'ERROR'

  const start = Math.min(num1, num2);
  const end = Math.max(num1, num2);

  let sum = 0;
  for(let i = start; i <= end; i++){
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
