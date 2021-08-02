const { Collection } = require("./Collection");
module.exports.findStatic = function (arr, search) {
  let filteredItems = [];
  try {
    filteredItems = arr.filter((item) => search.test(item));
  } catch (e) {
    filteredItems = arr.filter((item) => item == search);
  } finally {
    if (filteredItems.length == 0) {
      return null;
    }
    return new Collection(filteredItems);
  }
};
