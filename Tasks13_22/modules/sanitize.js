const { Collection } = require("./Collection");

module.exports.sanitize = function (callback) {
  this.data = this.data.filter(callback);
  return new Collection(this.data);
};
