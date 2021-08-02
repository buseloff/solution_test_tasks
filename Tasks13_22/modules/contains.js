module.exports.contains = function  array_contains(search) {
  let isFind;
  try {
    for (let key in this.data) {
      if (search.test(this.data[key])) {
        isFind = true;
        return;
      } else if (typeof this.data[key] === "object") {
        array_contains(this.data[key], search);
      }
    }
  } catch (e) {
    for (let key in this.data) {
      if (search == this.data[key]) {
        isFind = true;
        return;
      } else if (typeof this.data[key] === "object") {
        array_contains(this.data[key], search);
      }
    }
  } finally {
    if (!isFind) {
      return false;
    }
    return isFind;
  }
};
