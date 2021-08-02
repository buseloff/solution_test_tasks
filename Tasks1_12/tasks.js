"use strict";
let testData = [
  1,
  2,
  1990,
  85,
  24,
  "Vasya",
  "colya@example.com",
  "Rafshan",
  "ashan@example.com",
  true,
  false,
];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];
let testData3 = [
  {
    name: "Vasya",
    email: "vasya@example.com",
    age: 20,
    skills: {
      php: 0,
      js: -1,
      madness: 10,
      rage: 10,
    },
  },
  {
    name: "Dima",
    email: "dima@example.com",
    age: 34,
    skills: {
      php: 5,
      js: 7,
      madness: 3,
      rage: 2,
    },
  },
  {
    name: "Colya",
    email: "colya@example.com",
    age: 46,
    skills: {
      php: 8,
      js: -2,
      madness: 1,
      rage: 4,
    },
  },
  {
    name: "Misha",
    email: "misha@example.com",
    age: 16,
    skills: {
      php: 6,
      js: 6,
      madness: 5,
      rage: 2,
    },
  },
  {
    name: "Ashan",
    email: "ashan@example.com",
    age: 99,
    skills: {
      php: 0,
      js: 10,
      madness: 10,
      rage: 1,
    },
  },
  {
    name: "Rafshan",
    email: "rafshan@example.com",
    age: 11,
    skills: {
      php: 0,
      js: 0,
      madness: 0,
      rage: 10,
    },
  },
];
let testData4 = [
  {
    name: "Vasya",
    email: "vasya@example.com",
    age: 20,
  },
  {
    name: "Dima",
    email: "dima@example.com",
    age: 34,
  },
  {
    name: "Colya",
    email: "colya@example.com",
    age: 46,
  },
  {
    name: "Misha",
    email: "misha@example.com",
    age: 16,
  },
  {
    name: "Ashan",
    email: "ashan@example.com",
    age: 99,
  },
  {
    name: "Rafshan",
    email: "rafshan@example.com",
    age: 11,
  },
  1,
  2,
  1990,
  85,
  24,
  "Vasya",
  "colya@example.com",
  "Rafshan",
  "ashan@example.com",
  true,
  false,
  [
    [
      [
        [
          1,
          2,
          1990,
          85,
          24,
          "Vasya",
          "colya@example.com",
          "Rafshan",
          "ashan@example.com",
          true,
          false,
          [
            {
              name: "Rafshan",
              email: "rafshan@example.com",
              age: 11,
            },
          ],
        ],
      ],
    ],
  ],
];

/*1 (1бал)
Сделать функцию поиска значений в массиве.
Синтаксис: array_find(arr: array, search: string|regex): string|number[]|null*/

function array_find(arr, search) {
  let filteredItems = [];
  try {
    filteredItems = arr.filter((item) => search.test(item));
  } catch (e) {
    filteredItems = arr.filter((item) => item == search);
  } finally {
    if (filteredItems.length == 0) {
      return null;
    }
    return filteredItems;
  }
}
console.log("function array_find");
console.log(array_find(testData, "Rafshan"));
console.log(array_find(testData, /^raf.*/i));
console.log("--------------------------------------------");

/*2 (1бал)
Сделать функцию подсчета среднего значения, с возможностью исключения не числовых значений
Синтаксис: array_avg(arr: array[, skipNaN: bool = false]): number
*/

function array_avg(arr, skipNaN = false) {
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
}
console.log("function array_avg");
console.log(array_avg(testData2));
console.log(array_avg(testData));
console.log(array_avg(testData, true));
console.log("--------------------------------------------");

/*3 (1бал)
Сделать функцию которая разбивает массив на подмассивы указанной длинны.
Синтаксис: array_chunk(arr: array, count: number): any[]
*/
function array_chunk(arr, count) {
  const chunk_array = [];
  for (let i = 0; i < arr.length; i += count) {
    chunk_array.push(arr.slice(i, i + count));
  }
  return chunk_array;
}

console.log("function array_chunk");
console.log(array_chunk(testData2, 2));
console.log("--------------------------------------------");

/*4 (1бал)
Сделать функцию которая обрезает массив до указанного значения.
Синтаксис: array_skip_until(arr: array, value: any): any[]
*/

function array_skip_until(arr, value) {
  let skip_array = [];
  let indexOfValue = arr.indexOf(value);
  if (indexOfValue == -1) {
    return skip_array;
  }
  skip_array = arr.slice(indexOfValue);
  return skip_array;
}

console.log("function array_skip_until");
console.log(array_skip_until(testData, 2));
console.log(array_skip_until(testData, "Rafshan"));
console.log(array_skip_until(testData, "asd"));
console.log("--------------------------------------------");

/*
5 (1бал)
Сделать функцию для проверки существования значения в не нормализированном списке данных.
Синтаксис: array_contains(arr: array, search: string|regex): bool
*/

function array_contains(arr, search) {
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
}

console.log("function array_contains");
console.log(array_contains(testData4, /^raf.*/i));
console.log(array_contains(testData4, /^azaza.*/i));
console.log(array_contains(testData4, "Vasya"));
console.log("--------------------------------------------");

/*6 (1бал)
Сделать функцию для получения данных с массивов по указанному пути (аминь).
Синтаксис: array_get(arr: array, path:string): any*/

function array_get(arr, path) {
  const regex = /(\d|\w)+/gi;
  let routesArr = path.match(regex);
  let dataFromArray = arr;
  routesArr.forEach((item) => (dataFromArray = dataFromArray[`${item}`]));
  return dataFromArray;
  //or return eval("arr" + path);
}

console.log("function array_get");
console.log(array_get(testData4, "[5].name"));
console.log(array_get(testData4, "[17][0][0][0][11][0]"));
console.log(array_get(testData4, '[17][0][0][0][11][0]["name"]'));
console.log("--------------------------------------------");

/*
7 (1бал)
Сделать функцию для поиска значений и пути к нему в не нормализированном списке данных (аминь).
Синтаксис: array_search(arr: array, search: string|regex[, path:string = '']): 
[path: string, value: string|number][]
*/
function array_search(arr, search, path = "", path_map = new Map(), depth = 0) {
  if (path != "" && depth == 0) {
    arr = array_get(arr, path);
  }
  if (depth == 50) {
    return;
  }
  try {
    for (let key in arr) {
      if (search.test(arr[key])) {
        path_map.set(path + "[" + key + "]", arr[key]);
      } else if (typeof arr[key] === "object") {
        array_search(
          arr[key],
          search,
          path + "[" + key + "]",
          path_map,
          ++depth
        );
      }
    }
  } catch (e) {
    for (let key in arr) {
      if (search == arr[key]) {
        path_map.set(path + "[" + key + "]", arr[key]);
      } else if (typeof arr[key] === "object") {
        array_search(
          arr[key],
          search,
          path + "[" + key + "]",
          path_map,
          ++depth
        );
      }
    }
  } finally {
    let result = Array.from(path_map);
    result.forEach(
      (item) =>
        (item[0] = item[0].replace(
          /\[([A-Za-z])+]/gi,
          (match) => `.${match.replace("[", "").replace("]", "")}`
        ))
    );
    return result;
  }
}
 
console.log("function array_search");
console.log(array_search(testData4, /^raf.*/i));
console.log(array_search(testData4, /^raf.*/i, "[17][0][0][0]"));
console.log(array_search(testData4, "Vasya"));
console.log("--------------------------------------------");
/*
8 (1бал)
Создать функцию которая создает объект на основании двух представленных массивов 
используя один как ключи, а другой как значения. Не подходящие ключи массивов должны 
быть исключены.
Синтаксис: array_combine(keys: array, values: array): Object
*/
function array_combine(keys, values) {
  let map_keys_values = new Map();
  let created_object;

  let filtered_keys = keys.filter(
    (item) => typeof item === "string" || typeof item === "number"
  );

  for (let i = 0; i < filtered_keys.length; i++) {
    map_keys_values.set(filtered_keys[i], values[i]);
  }
  created_object = Object.fromEntries(map_keys_values);
  return created_object;
}
console.log("function array_combine");
console.log(array_combine(testData, testData2));
console.log("--------------------------------------------");
/*
9 (1бал)
Создать функцию которая нормализует данные в массиве исключая или преобразуя не подходящие.
Доступные шаблоны: 
'string' => строки, 
'number' => числа, 
'int' => целые числа, 
'float' => числа с плавающей точкой, 
'bool' => true | false, 
'function' => функция, 
'array' => массив, 
Object => объект {name: 'string'}
Синтаксис: array_normalize(arr: array, shema: string|Object[, transform: bool = false]): any[]
*/
function array_normalize(arr, shema, transform = false) {
  /*const removeProps = (object, keys) => {
    return Object.entries(object).reduce(
      (a, [key, value]) =>
        keys.indexOf(key) === -1 ? { ...a, [key]: value } : a,
      {}
    );
  };*/
  const without = (object, keys) =>
    keys.reduce((o, k) => {
      const { [k]: _, ...p } = o;
      return p;
    }, object);

  let schema = shema;

  if (transform) {
    switch (schema) {
      case "string":
        return arr.filter(
          (item) => typeof item === "string" || typeof item === "number"
        );
      case "number":
      case "float":
        return arr.filter((item) => typeof item === "number");
      case "int":
        return arr.filter((item) => Number.isInteger(item));
      case "bool":
        return arr.filter((item) => typeof item === "boolean");
      case "function":
        return arr.filter((item) => typeof item === "function");
      case "array":
        return arr.filter((item) => Array.isArray(item));
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
          return result;
        }
      }
    }
  }

  switch (schema) {
    case "string":
      return arr.filter((item) => typeof item === "string");
    case "number":
      return arr.filter((item) => typeof item === "number");
    case "int":
      return arr.filter((item) => Number.isInteger(item));
    case "float":
      return arr.filter((item) => Number(item) === item && item % 1 !== 0);
    case "bool":
      return arr.filter((item) => typeof item === "boolean");
    case "function":
      return arr.filter((item) => typeof item === "function");
    case "array":
      return arr.filter((item) => Array.isArray(item));
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
        return result;
      }
    }
  }
}
console.log("function array_normalize");
console.log(array_normalize(testData4, "string"));
console.log(array_normalize(testData4, "string", true));
console.log(array_normalize(testData4, { age: "float" }));
console.log(array_normalize(testData4, { age: "float" }, true));
console.log("--------------------------------------------");
/*
10 (1бал)
Сделать функцию которая сможет делать срез данных с ассоциативного массива.
Синтаксис: array_pluck(arr: array, path: string): any[]
*/
function array_pluck(arr, path) {
  let slice_data = [];
  arr.forEach((item) => {
    if (typeof item === "object") {
      if (array_get(item, path) || array_get(item, path) == 0) {
        slice_data.push(array_get(item, path));
      }
    }
  });
  return slice_data;
}

console.log("function array_pluck");
console.log(array_pluck(testData3, "name"));
console.log(array_pluck(testData3, "skills.php"));
console.log("--------------------------------------------");
/*
11 (1бал)
Сделать функцию которая возвращает уникальные элементы массива.
Синтаксис: array_unique(arr: array): any[]
*/
function array_unique(arr) {
  return Array.from(new Set(arr));
}

console.log("function array_unique");
console.log(array_unique(testData.concat(testData2)));
console.log("--------------------------------------------");

/*
12 (1бал)
Сделать функцию которая создает массив указанной длинны и заполняет его переданными значениями.
Синтаксис: array_fill(lenght: number, value: any): any[]
*/

function array_fill(length, value) {
  return new Array(length).fill(value);
}

console.log("function array_fill");
console.log(array_fill(5, "string"));
console.log("--------------------------------------------");
