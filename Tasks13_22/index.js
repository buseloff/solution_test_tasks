const { Collection } = require("./modules/Collection");
const { Pagination } = require("./modules/Pagination");

const {
  map,
  make,
  mapStatic,
  filterStatic,
  reduceStatic,
  everyStatic,
  indexOfStatic,
  toJSONstatic,
  toQueryStringStatic,
  isEmptyStatic,
  filter,
  reduce,
  transform,
  sanitize,
  every,
  indexOf,
  toJSON,
  toQueryString,
  toString,
  isEmpty,
  findStatic,
  find,
  avgStatic,
  avg,
  chunkStatic,
  chunk,
  skipUntilStatic,
  skipUntil,
  containsStatic,
  contains,
  getStatic,
  get,
  normalizeStatic,
  normalize,
  pluckStatic,
  pluck,
  uniqueStatic,
  unique,
  fillStatic,
  fill,
  sort,
  sortStatic,
  sortDesc,
  sortDescStatic,
  sortByStatic,
  sortByDescStatic,
  sortBy,
  sortByDesc,
  paginateStatic,
  paginate,
} = require("./modules/index");

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

//Task13
/*Создать конструктор (без использования классов es6) Collection который позволяет манипулировать массивом. 
Все функции должны быть преобразованы в модули СommonJS и подключенный из отдельных файлов Методы которые надо реализовать в коллекции:
 map, filter, reduce - эти методы должны возвращать коллекцию с результатом не меняя старую коллекцию 
 transform, sanitize - преобразует текущую коллекцию (аналоги map, filter) every, indexOf - работают так же как и стандартные методы в массиве
  values, toArray - возвращает array toJSON, toQueryString, toString - возвращает значение в указанном формате 
  isEmpty - проверяет пустая коллекция или нет 
  Статические методы которые надо реализовать в коллекции: make - создает коллекцию на основании переданного массива. 
  map, filter, reduce - эти методы должны возвращать коллекцию с результатом не меняя старую коллекцию every, 
  indexOf - работают так же как и стандартные методы в массиве toJSON, toQueryString - возвращает значение в указанном формате 
  Свойства массива которые надо реализовать в коллекции: lenght*/
Collection.make = make;
Collection.map = mapStatic;
Collection.filter = filterStatic;
Collection.reduce = reduceStatic;
Collection.every = everyStatic;
Collection.indexOf = indexOfStatic;
Collection.toJSON = toJSONstatic;
Collection.toQueryString = toQueryStringStatic;
Collection.isEmpty = isEmptyStatic;

Collection.prototype.map = map;
Collection.prototype.filter = filter;
Collection.prototype.reduce = reduce;
Collection.prototype.transform = transform;
Collection.prototype.sanitize = sanitize;
Collection.prototype.every = every;
Collection.prototype.indexOf = indexOf;
Collection.prototype.toJSON = toJSON;
Collection.prototype.toQueryString = toQueryString;
Collection.prototype.toString = toString;
Collection.prototype.isEmpty = isEmpty;
/*let numbers = Collection.make([1, 2, 3, 4]);
console.log(
  numbers
    .map((item) => item * 2)
    .filter((item) => item > 2)
    .toJSON()
);*/

//Task14
/*
Расширить конструктор Collection методами find, avg, chunk, skip_until, contains, get, normalize, pluck, unique, fill из предыдущих задний.
 Все функции должны быть преобразованы в модули СommonJS и подключенный из отдельных файлов
*/
Collection.find = findStatic;
Collection.avg = avgStatic;
Collection.chunk = chunkStatic;
Collection.skipUntil = skipUntilStatic;
Collection.contains = containsStatic;
Collection.get = getStatic;
Collection.normalize = normalizeStatic;
Collection.pluck = pluckStatic;
Collection.unique = uniqueStatic;
Collection.fill = fillStatic;

Collection.prototype.find = find;
Collection.prototype.avg = avg;
Collection.prototype.chunk = chunk;
Collection.prototype.skipUntil = skipUntil;
Collection.prototype.contains = contains;
Collection.prototype.get = get;
Collection.prototype.normalize = normalize;
Collection.prototype.pluck = pluck;
Collection.prototype.unique = unique;
Collection.prototype.fill = fill;

//Task15
/*
Расширить конструктор Collection методами сортировки: sort | sortDesc - сортирует массив | сортирует массив в обратном порядке sortBy 
| sortByDesc - сортирует массив по ключу | сортирует массив по ключу в обратном порядке Пользователь может передавать свою функцию сравнения значений
*/
Collection.sort = sortStatic;
Collection.sortDesc = sortDescStatic;
Collection.sortBy = sortByStatic;
Collection.sortByDesc = sortByDescStatic;

Collection.prototype.sort = sort;
Collection.prototype.sortDesc = sortDesc;
Collection.prototype.sortBy = sortBy;
Collection.prototype.sortByDesc = sortByDesc;

/*
console.log(
  Collection.make([
    { age: 1 },
    { age: 10 },
    { age: 4 },
    { age: 60 },
  ]).sortByDesc("age")
);
console.log(Collection.sortDesc([1, 10, 4, 60], (a, b) => b - a));
let array1 = new Collection([1, 5, 9, 8, 10, 89, 154]);

console.log(array1.values());*/

//Task16
/*
Создать конструктор Pagination который позволяет получать содержание коллекции постранично. 
make - создает пагинацию page - возвращает указанную страницу paginate - изменяет настройку пагинации count - возвращает количество страниц
Решение находится  в модуле Pagination.js
*/

/*
console.log(
  Pagination.make(Collection.make([1, 2, 3, 4, 5, 6]), 5)
    .page(2)
    .values()
);
let objPagination = Pagination.make(Collection.make([1, 2, 3, 4, 5, 6]), 5);
console.log( objPagination.page(2).values());
console.log(objPagination.paginate(1).page(2));
console.log(objPagination.page(2).values());*/

//Task17
/*
Расширить конструктор Collection добавив метод пагинирования
*/
Collection.paginate = paginateStatic;
Collection.prototype.paginate = paginate;
//console.log(Collection.make([1, 2, 3, 4, 5, 6]).paginate(5).page(2).values());

//Task18
/*
Расширить конструктор Pagination добавив возможность курсорной пагинации current -
возвращает текущую страницу next - возвращает следующую страницу prev - возвращает предыдущую страницу 
first - возвращает первую страницу last - возвращает последнюю страницу reset - устанавливает курсор на первую позицию 
Свойства которые надо реализовать: cursor - readonly свойство которое возвращает текущее положение курсора
*/
Pagination.prototype.current = function () {
  return this.page(this.cursor);
};
Pagination.prototype.next = function () {
  this._cursor = this._cursor + 1;
  if (this._cursor > this._length) {
    this._cursor = this._length;
  }
  return this.page(this.cursor);
};

Pagination.prototype.prev = function () {
  this._cursor = this._cursor - 1;
  if (this._cursor < 1) {
    this._cursor = 1;
  }
  return this.page(this.cursor);
};

Pagination.prototype.first = function () {
  this._cursor = 1;
  return this.page(this.cursor);
};

Pagination.prototype.last = function () {
  this._cursor = this._length;
  return this.page(this.cursor);
};

Pagination.prototype.reset = function () {
  this._cursor = 1;
};
/*
let objPagination = Collection.make([1, 2, 3, 4, 5, 6]).paginate(1);
console.log(objPagination.current().values());
console.log(objPagination.next());
console.log(objPagination.next());
console.log(objPagination.next());
console.log(objPagination.current().values());
console.log(objPagination.cursor);
objPagination.reset();
console.log(objPagination.current().values());*/

//Task19
/*
Вывести в консоль по 4 значения из переданного массива с интервалом в 2 секунды.
*/

const showArrayByParts = (arr, limit, time) => {
  let pagination = Collection.paginate(arr, limit);
  let count = 1;
  let timerId = setInterval(function run() {
    if (count == 1) {
      console.log(pagination.current().values());
      count++;
    } else {
      pagination.next();
      console.log(pagination.current().values());
      if (pagination.cursor == pagination.count()) {
        clearInterval(timerId);
      }
    }
  }, time);
};

let arr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  "Vasya",
  "|",
  "123",
  9,
  10,
  11,
  12,
  13,
  14,
  15,
];

//showArrayByParts(arr, 4, 2000);

//Task20
/*
20 (1 бал)
С помощью коллекции преобразовать данные testData4 в следующий вид
["Rafshan", "Misha", "Vasya", "Dima", "Colya", "Ashan"]
*/

//console.log(Collection.sortBy(testData4, "age").pluck("name").values());

//Task21
/*
На основании данных testData3 вывести последовательно в консоль имена программистов сгруппированных и отсортированных по их навыкам:
*/

function showNamesSortBySkills(arr) {
  let collectionOfNames = Collection.normalize(arr, { name: "string" });
  let collectionOfSkills = Collection.pluck(arr, "skills");
  let arrayOfSkills = ["php", "js", "madness", "rage"];
  for (let i = 0; i < collectionOfNames.values().length; i++) {
    Object.assign(
      collectionOfNames.values()[i],
      collectionOfSkills.values()[i]
    );
  }
  arrayOfSkills.forEach((item) => {
    console.log("--------------------------------------------");
    console.log(item.toUpperCase() + ":");
    console.log("--------------------------------------------");
    Collection.sortByDesc(collectionOfNames.values(), item)
      .pluck("name")
      .values()
      .forEach((item) => console.log(item));
  });
}

//showNamesSortBySkills(testData3);

//Task22
/*
Сделать функцию которая будет возвращать объект прототипа Pagination при любых переданных ему данных.
*/

function toPagination(data, limit) {
  let initialValue = [];
  if (data instanceof Collection) {
    initialValue = data.data;
  }
  if (Array.isArray(data)) {
    initialValue = data;
  } else {
    for (let i = 0; i < arguments.length - 1; i++) {
      initialValue.push(arguments[i]);
      limit = arguments[i + 1];
    }
  }
  return new Pagination(new Collection(initialValue), limit);
}

/*
console.log(toPagination([1, 2], 1).first().toJSON());
console.log(
  toPagination(Collection.make([1, 2]), 1)
    .first()
    .toJSON()
);
console.log(toPagination(false, 1).first().toJSON());
console.log(toPagination(false, true, 1, 2, 10).first().toJSON());*/
