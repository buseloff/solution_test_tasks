module.exports.toQueryString = function () {
  return Object.keys(this.data)
    .map((key) => key + "=" + this.data[key])
    .join("&");
};
