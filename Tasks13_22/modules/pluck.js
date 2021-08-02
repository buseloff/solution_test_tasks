const { Collection } = require("./Collection");
const { getStatic } = require("./getStatic");
module.exports.pluck = function (path) {
  let slice_data = [];
  this.data.forEach((item) => {
    if (typeof item === "object") {
      if (getStatic(item, path) || getStatic(item, path) == 0) {
        slice_data.push(getStatic(item, path));
      }
    }
  });
  return new Collection(slice_data);
};
