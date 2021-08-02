const { Collection } = require("./Collection");
module.exports.filter = function (callback) {
  return new Collection(this.data.filter(callback));
};
