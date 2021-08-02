module.exports.toQueryStringStatic = function (arr) {
  return Object.keys(arr)
    .map((key) => key + "=" + arr[key])
    .join("&");
};
