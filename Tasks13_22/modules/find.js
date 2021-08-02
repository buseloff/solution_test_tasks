const { Collection } = require("./Collection");
module.exports.find = function (search) {
  let filteredItems = [];
  try {
    filteredItems = this.data.filter((item) => search.test(item));
  } catch (e) {
    filteredItems = this.data.filter((item) => item == search);
  } finally {
    if (filteredItems.length == 0) {
      return null;
    }
    return new Collection(filteredItems);
  }
};
