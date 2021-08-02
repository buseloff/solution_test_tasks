const { Collection } = require("./Collection");
module.exports.map = function (callback) {
  return new Collection(this.data.map(callback));
};
