const { Collection } = require("./Collection");
module.exports.skipUntil = function (value) {
  let skip_array = [];
  let indexOfValue = this.data.indexOf(value);
  if (indexOfValue == -1) {
    return new Collection(skip_array);
  }
  skip_array = this.data.slice(indexOfValue);
  return new Collection(skip_array);
};
