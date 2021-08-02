const { Collection } = require("./Collection");
module.exports.mapStatic = function (arr, callback) {
  return new Collection(arr.map(callback));
};
