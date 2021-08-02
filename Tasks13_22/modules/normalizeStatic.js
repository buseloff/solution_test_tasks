const { Collection } = require("./Collection");
module.exports.normalizeStatic = function (arr, shema, transform = false) {
  const without = (object, keys) =>
    keys.reduce((o, k) => {
      const { [k]: _, ...p } = o;
      return p;
    }, object);

  let schema = shema;

  if (transform) {
    switch (schema) {
      case "string":
        return new Collection(
          arr.filter(
            (item) => typeof item === "string" || typeof item === "number"
          )
        );
      case "number":
      case "float":
        return new Collection(arr.filter((item) => typeof item === "number"));
      case "int":
        return new Collection(arr.filter((item) => Number.isInteger(item)));
      case "bool":
        return new Collection(arr.filter((item) => typeof item === "boolean"));
      case "function":
        return new Collection(arr.filter((item) => typeof item === "function"));
      case "array":
        return new Collection(arr.filter((item) => Array.isArray(item)));
      default: {
        if (typeof schema === "object") {
          let result = [];
          arr = arr.filter((item) => {
            if (typeof item === "object" && !Array.isArray(item)) {
              let key = Object.keys(schema)[0];
              if (item.hasOwnProperty(key)) {
                switch (Object.values(schema)[0]) {
                  case "string":
                    return (
                      typeof item[key] === "string" || typeof item === "number"
                    );
                  case "number":
                  case "float":
                    return typeof item[key] === "number";
                  case "int":
                    return Number.isInteger(item[key]);
                  case "bool":
                    return typeof item[key] === "boolean";
                  case "function":
                    return typeof item[key] === "function";
                  case "array":
                    return Array.isArray(item[key]);
                }
              }
            }
          });

          arr.forEach((item) => {
            let keys = Object.keys(item).filter(
              (item) => item !== Object.keys(schema)[0]
            );
            result.push(without(item, keys));
          });
          return new Collection(result);
        }
      }
    }
  }

  switch (schema) {
    case "string":
      return new Collection(arr.filter((item) => typeof item === "string"));
    case "number":
      return new Collection(arr.filter((item) => typeof item === "number"));
    case "int":
      return new Collection(arr.filter((item) => Number.isInteger(item)));
    case "float":
      return new Collection(
        arr.filter((item) => Number(item) === item && item % 1 !== 0)
      );
    case "bool":
      return new Collection(arr.filter((item) => typeof item === "boolean"));
    case "function":
      return new Collection(arr.filter((item) => typeof item === "function"));
    case "array":
      return new Collection(arr.filter((item) => Array.isArray(item)));
    default: {
      if (typeof schema === "object") {
        let result = [];
        arr = arr.filter((item) => {
          if (typeof item === "object" && !Array.isArray(item)) {
            let key = Object.keys(schema)[0];
            if (item.hasOwnProperty(key)) {
              switch (Object.values(schema)[0]) {
                case "string":
                  return typeof item[key] === "string";
                case "number":
                  return typeof item[key] === "number";
                case "int":
                  return Number.isInteger(item[key]);
                case "float":
                  return Number(item[key]) === item[key] && item[key] % 1 !== 0;
                case "bool":
                  return typeof item[key] === "boolean";
                case "function":
                  return typeof item[key] === "function";
                case "array":
                  return Array.isArray(item[key]);
              }
            }
          }
        });

        arr.forEach((item) => {
          let keys = Object.keys(item).filter(
            (item) => item !== Object.keys(schema)[0]
          );
          result.push(without(item, keys));
        });
        return new Collection(result);
      }
    }
  }
};
