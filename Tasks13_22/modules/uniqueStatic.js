const { Collection } = require("./Collection");
module.exports.uniqueStatic = function (arr) {
  return new Collection(Array.from(new Set(arr)));
};
