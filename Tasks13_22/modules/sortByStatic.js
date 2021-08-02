const { Collection } = require("./Collection");
module.exports.sortByStatic = function (arr, column, compareFunction) {
  const sort_by = function (field, reverse, primer) {
    let key = primer
      ? function (x) {
          return primer(x[field]);
        }
      : function (x) {
          return x[field];
        };

    reverse = !reverse ? 1 : -1;

    return function (a, b) {
      return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
    };
  };

  if (compareFunction)
    return new Collection(arr.sort(sort_by(column, false)));
  if (!compareFunction) return new Collection(arr.sort(sort_by(column, false)));
};
