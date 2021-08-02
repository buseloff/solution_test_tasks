const { Collection } = require("./Collection");
const { Pagination } = require("./Pagination");

module.exports.paginate = function (limit) {
  return new Pagination(new Collection(this.data), limit);
};
