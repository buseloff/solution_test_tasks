const { Collection } = require("./Collection");
module.exports.skipUntilStatic = function (arr, value) {
  let skip_array = [];
  let indexOfValue = arr.indexOf(value);
  if (indexOfValue == -1) {
    return new Collection(skip_array);
  }
  skip_array = arr.slice(indexOfValue);
  return new Collection(skip_array);
};
