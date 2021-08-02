const { Collection } = require("./Collection");
module.exports.fillStatic = function (length, value) {
  return new Collection(new Array(length).fill(value));
};
