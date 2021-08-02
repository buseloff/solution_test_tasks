const { Collection } = require("./Collection");
module.exports.sortDesc = function (compareFunction) {
  if (compareFunction) {
    this.data.sort(compareFunction).reverse();
    return this;
  }
  if (!compareFunction) {
    this.data = this.data.sort((a, b) => b - a);
    return this;
  }
};
