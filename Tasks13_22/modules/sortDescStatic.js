const { Collection } = require("./Collection");
module.exports.sortDescStatic = function (arr, compareFunction) {
  if (compareFunction) return new Collection(arr.sort(compareFunction).reverse());
  if (!compareFunction) return new Collection(arr.sort((a, b) => b - a));
};
