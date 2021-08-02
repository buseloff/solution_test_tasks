const { Collection } = require("./Collection");
module.exports.transform = function (callback) {
  this.data = this.data.map(callback);
  return new Collection(this.data);
};
