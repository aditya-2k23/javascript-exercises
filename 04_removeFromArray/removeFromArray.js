const removeFromArray = function (array) {
  let args = Array.from(arguments);
  args.shift();
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!args.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
