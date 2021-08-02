module.exports.avg = function (skipNaN = false) {
  let filteredArray = this.data.filter((item) => typeof item === "number");
  if (skipNaN) {
    return (
      filteredArray.reduce((prev, current) => prev + current, 0) /
      this.data.length
    ).toFixed(2);
  }
  return (
    filteredArray.reduce((prev, current) => prev + current, 0) /
    filteredArray.length
  ).toFixed(2);
};
