const { Collection } = require("./Collection");
module.exports.fill = function (length, value) {
  this.data = new Array(length).fill(value);
  return this;
};
