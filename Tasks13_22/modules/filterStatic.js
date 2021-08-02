const { Collection } = require("./Collection");
module.exports.filterStatic = function (arr, callback) {
  return new Collection(arr.filter(callback));
};
