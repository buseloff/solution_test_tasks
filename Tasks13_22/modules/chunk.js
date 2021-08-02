const { Collection } = require("./Collection");
module.exports.chunk = function (count) {
  const chunk_array = [];
  for (let i = 0; i < this.data.length; i += count) {
    chunk_array.push(new Collection(this.data.slice(i, i + count)));
  }
  return chunk_array;
};
