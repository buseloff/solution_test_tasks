const { Collection } = require("./Collection");
module.exports.sortStatic = function (arr, compareFunction) {
  if (compareFunction) return new Collection(arr.sort(compareFunction));
  if (!compareFunction) return new Collection(arr.sort((a, b) => a - b));
};
