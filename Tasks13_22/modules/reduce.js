const { Collection } = require("./Collection");
module.exports.reduce = function (callback, initialValue) {
  if (initialValue)
    return new Collection(this.data.reduce(callback, initialValue));
  if (!initialValue) return new Collection(this.data.reduce(callback));
};
