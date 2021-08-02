module.exports.isEmptyStatic = function (arr) {
  if (Array.isArray(arr) && arr.length) {
    return false;
  }
  return true;
};
