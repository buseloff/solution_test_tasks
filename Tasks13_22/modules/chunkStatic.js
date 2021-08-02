const { Collection } = require("./Collection");
module.exports.chunkStatic = function (arr, count) {
  const chunk_array = [];
  for (let i = 0; i < arr.length; i += count) {
    chunk_array.push(new Collection(arr.slice(i, i + count)));
  }
  return chunk_array;
};
