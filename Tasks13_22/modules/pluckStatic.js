const { Collection } = require("./Collection");
const { getStatic } = require("./getStatic");
module.exports.pluckStatic = function (arr, path) {
  let slice_data = [];
  arr.forEach((item) => {
    if (typeof item === "object") {
      if (getStatic(item, path) || getStatic(item, path) == 0) {
        slice_data.push(getStatic(item, path));
      }
    }
  });
  return new Collection(slice_data);
};
