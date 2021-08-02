const { Collection } = require("./Collection");
module.exports.sort = function (compareFunction) {
  if (compareFunction) {
    this.data.sort(compareFunction);
    return this;
  }
  if (!compareFunction) {
    this.data = this.data.sort((a, b) => a - b);
    return this;
  }
};
