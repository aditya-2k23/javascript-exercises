const palindromes = function (str) {
  let reg = /[\W_]/g;
  let lowRegStr = str.toLowerCase().replace(reg, '');
  let reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
};

// Do not edit below this line
module.exports = palindromes;
