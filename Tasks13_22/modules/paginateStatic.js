const { Collection } = require("./Collection");
const { Pagination } = require("./Pagination");

module.exports.paginateStatic = function (arr, limit) {
  return new Pagination(new Collection(arr), limit);
};
