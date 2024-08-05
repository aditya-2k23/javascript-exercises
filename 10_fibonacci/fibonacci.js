const fibonacci = function (a) {
  if (a < 0) return "OOPS";
  if (a == 0) return 0;
  if (a == 1) return 1;
  let fib = [0, 1];
  for (let i = 2; i <= a; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib[a];
};

// Do not edit below this line
module.exports = fibonacci;
