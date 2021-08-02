const { Collection } = require("./Collection");
module.exports.make = function (array) {
  return new Collection(array);
};
