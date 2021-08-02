module.exports.avgStatic = function (arr, skipNaN = false) {
  let filteredArray = arr.filter((item) => typeof item === "number");
  if (skipNaN) {
    return (
      filteredArray.reduce((prev, current) => prev + current, 0) / arr.length
    ).toFixed(2);
  }
  return (
    filteredArray.reduce((prev, current) => prev + current, 0) /
    filteredArray.length
  ).toFixed(2);
};
