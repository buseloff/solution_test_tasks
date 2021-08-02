module.exports.indexOfStatic = function (arr, searchElement, fromIndex) {
  if (fromIndex) return arr.indexOf(searchElement, fromIndex);
  if (!fromIndex) return arr.indexOf(searchElement);
};
