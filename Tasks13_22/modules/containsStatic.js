module.exports.containsStatic = function  array_contains(arr, search) {
  let isFind;
  try {
    for (let key in arr) {
      if (search.test(arr[key])) {
        isFind = true;
        return;
      } else if (typeof arr[key] === "object") {
        array_contains(arr[key], search);
      }
    }
  } catch (e) {
    for (let key in arr) {
      if (search == arr[key]) {
        isFind = true;
        return;
      } else if (typeof arr[key] === "object") {
        array_contains(arr[key], search);
      }
    }
  } finally {
    if (!isFind) {
      return false;
    }
    return isFind;
  }
};
