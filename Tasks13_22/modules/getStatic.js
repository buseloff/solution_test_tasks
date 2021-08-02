module.exports.getStatic = function (arr, path) {
  const regex = /(\d|\w)+/gi;
  let routesArr = path.match(regex);
  let dataFromArray = arr;
  routesArr.forEach((item) => (dataFromArray = dataFromArray[`${item}`]));
  return dataFromArray;
};
