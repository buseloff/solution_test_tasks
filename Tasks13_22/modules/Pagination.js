const { Collection } = require("./Collection");
function Pagination(collection, limit) {
  this._pages = [];
  this._length = 0;
  this._cursor = 1;

  if (!(collection instanceof Collection)) {
    throw new Error("Parameter must have type of Collection!!!");
  }

  if (!Number.isInteger(limit) || limit < 0) {
    throw new Error("Parameter must have type of integer >= 0!!!");
  }

  for (let i = 0; i < collection.length; i += limit) {
    this._pages.push(new Collection(collection.data.slice(i, i + limit)));
  }
  this._length = this._pages.length;

  Object.defineProperty(this, "cursor", {
    get() {
      return this._cursor;
    },
  });
}

Pagination.make = function (collection, limit) {
  return new Pagination(collection, limit);
};

Pagination.prototype.page = function (number) {
  return this._pages[number - 1];
};

Pagination.prototype.count = function () {
  return this._length;
};

Pagination.prototype.paginate = function (limit) {
  let concatArray = [];
  this._pages.forEach((element) => {
    concatArray = concatArray.concat(element.data);
  });

  let pages = [];
  for (let i = 0; i < concatArray.length; i += limit) {
    pages.push(concatArray.slice(i, i + limit));
  }
  return new Pagination(new Collection(pages), limit);
};

module.exports.Pagination = Pagination;
