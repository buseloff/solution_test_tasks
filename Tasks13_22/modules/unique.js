const { Collection } = require("./Collection");
module.exports.unique = function () {
  return new Collection(Array.from(new Set(this.data)));
};
