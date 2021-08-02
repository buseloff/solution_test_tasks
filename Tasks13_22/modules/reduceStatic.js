const { Collection } = require("./Collection");

module.exports.reduceStatic = function (arr, callback, initialValue) {
  if (initialValue) return new Collection(arr.reduce(callback, initialValue));
  if (!initialValue) return new Collection(arr.reduce(callback));
};
