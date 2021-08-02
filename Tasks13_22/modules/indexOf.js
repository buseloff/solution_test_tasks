module.exports.indexOf = function (searchElement, fromIndex) {
  if (fromIndex) return this.data.indexOf(searchElement, fromIndex);
  if (!fromIndex) return this.data.indexOf(searchElement);
};
