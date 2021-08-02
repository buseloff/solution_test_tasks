module.exports.get = function (path) {
  const regex = /(\d|\w)+/gi;

  let routesArr = path.match(regex);
  let dataFromArray = this.data;
  routesArr.forEach((item) => (dataFromArray = dataFromArray[`${item}`]));
  return dataFromArray;
};
