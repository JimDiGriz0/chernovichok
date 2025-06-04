import _ from 'lodash';
import crc32 from 'crc-32';
import fs from 'node:fs';
import path from 'node:path';

// console.log("hello");
// const join = (first, second, connector = "") => `${first}${connector}${second}`;

// // const testins = (first, second, options) => {
// //   console.log(`${first} и ${second} и опять ${options}`);
// // };

// // testins("первое", "вторе", "третье");

// let x = "первое";
// let y = "второе";
// let z = "третье";

// function action1(first, second, options) {
//   // BEGIN (write your solution here)
//   console.log(join(first, second, options));
//   // END
// }

// action1(x, y, z);
// const devivers = (_num) => {
//   const result = [];
//   for (let i = 1; i <= _num; i += 1) {
//     if (_num % i === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// };
// let y = 'sdadasd';
// let x = 12;

// console.log(devivers(x));

// const test = {
//   name: 'Vasya',
//   age: 26,
//   worker: true,
//   married: false,
// };

// console.log(test.name, test.worker, test['worker']);
// let testVar = 'married';
// console.log(1, test);

// const lesson = { name: 'intro', description: 'about Something' };

// const normalize = (obj) => {
//   obj.name = _.capitalize(obj.name);
//   obj.description = obj.description.toLowerCase();
//   return obj;
// };

// const company = {};
// company.name = 'Hexlet';
// const ext = 'jpg';
// const filename = 'hexlet';

// const info1 = { filename, ext };
// const info2 = { ext, filename };
// console.log(1, y);

// let x = 'https://hexlet.io';

// let y = x.split('//');

// const example = 'yandex.ru';
// const example2 = 'http://hexlet.io';

// const getDomainInfo = (url) => {
//   let scheme;
//   let urlName;
//   const currentUrl = url.split('://');
//   if (currentUrl.length === 1) {
//     scheme = 'https';
//     urlName = currentUrl[0];
//   } else {
//     scheme = currentUrl[0];
//     urlName = currentUrl[1];
//   }
//   const result = { scheme, urlName };
//   console.log(1, result);
//   return result;
// };

// getDomainInfo(example2);

// const fruits = ['banan1', 'apple', 'pinapple', 'orange', 'мандарин'];

// const x = 1;
// const y = 2;
// const z = 3;

// const numbers = [z, y];

// console.log(numbers);

// const items = { test: 'test' };

// const countWords = (text) => {
//     const textArr = _.words(text.toLowerCase());
//     console.log(1, textArr)

//     const result = {};
//     for (const word of textArr) {
//         result[word] = (result[word] ?? 0) + 1;
//         console.log(2, result)
//     }

//     return result;
// };

// countWords('');

// const course = { name: 'JS: React', slug: 'js-react'};
// for (const prop in course) {
//     console.log(`course.${prop} = ${course[prop]}`);
// }

// const course = { name: 'JS: React', slug: 'js-react'};
// const keys = Object.keys(course);
// console.log('keys:', keys)

// const keys1 = Object.entries(course);
// console.log('keys1:', keys1)
// for (const [key, value] of keys1) {
//     console.log(key);
//     console.log(value);
// }

// console.log(Object.values(course));

// const pick = (obj, namesColl) => {
//     const result = {};
//     const names = Object.keys(obj)
// for (const key of namesColl) {
//     if (names.includes(key)) {
//         result[key] = obj[key];
//     }
// }
// return result;
// };

// const data = {
//     user: 'ubuntu',
//     cores: 4,
//     os: 'linux',
// };

// console.log(pick(data, ['user', 'cores']));

// const cities = ["Москва", "Лондон", "Париж", "Берлин", "Рим", "Мадрид", "Нью-Йорк", "Токио", "Сидней", "Дубай"];
// const fruits = ["Яблоко", "Банан", "Апельсин", "Груша", "Персик", "Киви", "Манго", "Ананас", "Виноград", "Кокос"];

// const [moscow, london] = cities;
// console.log('moscow:', moscow)

// const new1 = [ moscow, ...fruits, london, ...cities];
// console.log('new:', new1);

// const user = { name: 'Vasya' };
// user.friends = ['Kolya', 'Petya'];
// user.children = [
//   { name: 'Milam', age: 1 },
//   { name: 'Petr', age: 10 },
// ];
// console.log('user:', user);
// user.company = { name: 'Hexlet' };
// console.log('company:', user.company);

// user.friends[1]; // 'Petya'
// user.children[0].name; // 'Mila'
// console.log('1_user:', user.children[0]);
// user.company.name; // 'Hexlet'

// // Или через квадратные скобки
// user['children'][0]['name']; // 'Mi

// get(data, ['undefined']); // null
// get(data, ['user']); // 'ubuntu'
// get(data, ['user', 'ubuntu']); // null
// get(data, ['hosts', 1, 'name']); // 'web2'
// get(data, ['hosts', 0]); // { name: 'web1' }
// get(data, ['hosts', 1, null]); // 3

// console.log('obj:', obj);
// console.log(JSON.stringify(obj, null, '  '));

// const getFileInfo = (filepath) => {
//   const parts = filepath.split('/');
//   console.log(1, parts);
//   const filename = _.last(parts);
//   const extension = _.last(filename.split('.'));

//   // В значения вместо переменных подставятся нужные значения
//   const info = { filename: filename, extension: extension };

//   return info;
// };

// const filepath = '/path/to/index.js';

// // console.log(getFileInfo(filepath));

// const user = { name: 'Vasya', married: true, age: 25 };

// // Добавим свойство friends со списком друзей
// user.friends = ['Kolya', 'Petya'];

// // Добавим свойство children со списком детей,
// // каждый ребёнок представлен отдельным объектом
// user.children = [
//   { name: 'Mila', age: 1 },
//   { name: 'Petr', age: 10 },
// ];

// Добавим вложенный объект
// user.company = { name: 'Hexlet' };

// console.log(user); // =>
// // {
//   name: 'Vasya',
//   married: true,
//   age: 25,
//   friends: [ 'Kolya', 'Petya' ],
//   children: [ { name: 'Mila', age: 1 }, { name: 'Petr', age: 10 }],
//   company: { name: 'Hexlet' }
// }

// const obj = {
//   a: { b: { c: { key: 'value' }, e: [1, 2] } },
// };

// const get = (obj, keysCol) => {
//   let result = obj;
//   for (const key of keysCol) {
//     if (Object.hasOwn(result, key)) {
//       result = result[key]; // Переходим на следующий уровень вложенности
//       console.log('1', result);
//     } else {
//       return null; // Если ключ не найден, возвращаем undefined
//     }
//   }
//   return result;
// };

// // let x = data['hosts']['1']?.['name'];
// console.log(x);

// const get = (obj, keys) => {
//   let result = obj;

//   for (const key of keys) {
//     if (result?.[key] !== undefined) {
//       result = result[key]; // Переходим на следующий уровень вложенности
//       console.log(1, result);
//     } else {
//       return undefined; // Если ключ не найден, возвращаем undefined
//     }
//   }

//   return result;
// };

// const data = {
//   user: 'ubuntu',
//   hosts: {
//     0: {
//       name: 'web1',
//     },
//     1: {
//       name: 'web2',
//       null: 3,
//       active: false,
//     },
// //   },
// // };

// // const x = get(data, ['hosts', 1, 'name']); // 'web2'

// const data = {
//   key2: 'value3',
//   key3: 'val',
//   key4: 'boom!',
//   key: 'another value',
// };

// const object = {
//   key: 'value',
//   key2: 'value2',
// };

// const object2 = Object.assign({}, object);

// console.log('===', object2.key === object.key);
// console.log('==', object2 === object);
// console.log('object2:', object2);

// object.key = 'valik';

// console.log('izmenen', object.key);

// console.log('izmenen', object.key);

// console.log('===', object2.key === object.key);
// // const fill = (company, keys, data) => {
// //   data = _.pick(data, keys);
// //   company = _.merge(company, data);
// //   return company;
// // };

// // console.log(fill(object, ['key2'], data));

// const sourceObj = {
//   a: 'test1',
//   b: {
//     c: () => console.log('hello'),
//   },
// };

// const clonedObj = _.cloneDeep(sourceObj);

// console.log(clonedObj);

// const cloneShallow = (data) => {
//   const cloneShallow = Object.assign({}, data);
//   return cloneShallow;
// };

// const data = {
//   key: 'value',
//   key2: {
//     key: 'innerValue',
//     innerKey: {
//       anotherKey: 'anotherValue',
//     },
//   },
// };

// // result имеет такую же структуру, как и data
// const result = cloneShallow(data);
// console.log(result);
// console.log(data.key === result.key);
// console.log(result === data);

// const data = {
//   key: 'value',
//   key2: {
//     key: 'innerValue',
//     innerKey: {
//       anotherKey: 'anotherValue',
//     },
//   },
// };

// const getObjectClone = (obj) => {
//   const result = {};
//   const entries = Object.entries(obj);
//   for (const [key, value] of entries) {
//     result[key] = value;
//   }
//   return result;
// };

// const result = { ...data };

// console.log(result === data);

// console.log(result.key === data.key);
// result.key = 'Валик';
// console.log(result.key, data.key);

// result.key2.innerKey.anotherKey = 'newValue';
// console.log(data.key2.innerKey.anotherKey);
//

// const x = getObjectClone(data);
// console.log('x:', x);

// const user = { name: 'Tirion', email: 'support@hexlet.io', age: 44 };
// const data = { name: 'Tirion 2', age: 33 };

// // Новый объект с данными user дополненными данными из data
// // const copyOfUser = Object.assign({}, user, data);
// // console.log('copyOfUser:', copyOfUser);

// const user = { name: 'Vasya', age: 11 };

// console.log('user:', user);
// const newUser = { ...user, name: 'Vitalya', married: true, age: 25 };
// // Возраст поменялся
// console.log(newUser);
// console.log('user:', user);
// console.log(user === newUser);
// console.log(newUser);

// console.log(Date.now());

// const make = (name, obj = {}) => {
//   const defValues = { state: 'moderating', createdAt: Date.now() };
//   const result = { name, ...defValues, ...obj };
//   console.log(result);
//   return result;
// };

// make('Hexlet', {});

// const users = [
//   { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
//   { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
//   { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
//   { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
// ];

// const funct = (obj) => {
//   const result = [];
//   for (const item of obj) {
//     const { name, ...rest } = item;
//     result.push(name);
//   }
//   console.log(result);
//   return result.sort();
// };

// funct(users);

// const user = { name: 'Vasya', married: true, age: 25 };
// const name = 'age';
// user[name] = 'Inna';

// console.log(user); // ?

// const filepath = '/path/to/index.js';
// const parts = filepath.split('/');
// console.log(' parts:', parts);
// const fileName = _.last(parts);
// console.log(' fileName:', fileName);
// const extension = _.last(fileName.split('.'));
// console.log(' extension:', extension);

// const test = 'https://google.com';
// const test2 = 'yandex.ru';

// const getDomainInfo = (domain) => {
//   let scheme = '';
//   if (domain.startsWith('https://')) {
//     scheme = 'https';
//     // else if другие протоколы
//   } else {
//     scheme = 'http';
//   }

//   const name = domain.replace(`${scheme}://`, 'лох');

//   console.log(' getDomainInfo name:', name);
//   return { scheme, name };
// };

// getDomainInfo(test);

// let newList = [1, 2, 3].push(3);
// console.log(' newList:', newList);

// const data = {
//   user: 'ubuntu',
//   os: 'linux',
//   virtual: false,
// };

// const pick = (obj, prop) => {
//   const result = {};

//   const entries = Object.entries(obj);
//   console.log(' pick entries:', entries);

//   for (const [key, value] of entries) {
//     if (prop.includes(key)) {
//       result[key] = value;
//     }
//   }
//   return result;
// };

// pick(data, ['user', 'os']);

// const obj = {
//   a: 1,
//   b: {
//     c: 2,
//     d: 4,
//     e: {
//       f: 6,
//     },
//   },
// };

// console.log(obj.n?.c);

// const company = { name: 'Hexlet' };
// const user = { company };
// console.log(user);

// const data = {
//   user: 'ubuntu',
//   hosts: {
//     0: {
//       name: 'web1',
//     },
//     1: {
//       name: 'web2',
//       null: 3,
//       active: false,
//     },
//   },
// };

// const get = (obj, keys) => {
//   let current = obj;
//   for (const key of keys) {
//     const hasProperty = Object.hasOwn(current, key);
//     if (!hasProperty) {
//       return null;
//     }
//     current = current[key];
//     console.log(' get current:', current);
//   }

//   return current;
// };

// get(data, ['hosts', 1, 'name']);

// const data = {
//   key: 'value',
//   key2: {
//     key: 'innerValue',
//     innerKey: {
//       anotherKey: 'anotherValue',
//     },
//   },
// };

// const cloneShallow = (object) => {
//   const result = {};
//   const entries = Object.entries(object);
//   console.log(' cloneShallow entries:', entries);
//   for (const [key, value] of entries) {
//     result[key] = value;
//   }

//   return result;
// };
// const x = cloneShallow(data);
// console.log(x.key2.key === data.key2.innerKey);

// const user = { name: 'Vasya', age: 11, married: false };
// const newUser = { age: 25, married: true, ...user };

// console.log(' newUser:', newUser);

// const make = (name, objData = {}) => {
//   const result = {};
//   result.name = name;
//   console.log(result);
// };

// make('Hexlet');

// const getSortedNames = (obj) => {
//   const result = [];
//   for (const { name, ...rest } of obj) {
//     result.push(name);
//   }

// };

// const users = [
//   { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
//   { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
//   { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
//   { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
// ];

// getSortedNames(users);

// const make = () => [];

// const set = (map, key, value = 3) => {
//   const hash = crc32.str(key);
//   const index = Math.abs(hash) % 1000;
//   if (map[index] !== undefined && map[index][0] === key) {
//     map[index][1] = value;
//     return true;
//   }

//   if (map[index] === undefined) {
//     map[index] = [key, value];
//     return true;
//   }

//   return false;
// };

// const get = (map, key, defaultValue = null) => {
//   const hash = crc32.str(key);
//   const index = Math.abs(hash) % 1000;
//   return map[index] !== undefined && map[index][0] === key
//     ? map[index][1]
//     : defaultValue;
// };

// let map1 = make();
// const result = get(map1, 'key', 'value');
// console.log(result);

// const result2 = set(map1, 'key2', 'value2');
// console.log(result2);

// const test1 = ['username', 'john'];
// const [user, username] = test1;
// console.log(' username:', username);
// console.log(' user:', user);

// const fromPairs = (arr) => {
//   const result = {};
//   for (const [key, value] of arr) {
//     result[key] = value;
//   }
//   console.log(result);
//   return result;
// };

// const x = [
//   ['fred', 30],
//   ['barney', 40],
// ];

// fromPairs(x);

// const dnaToRna = (dna) => {
//   let rna = '';
//   const dnaArr = dna.split('');
//   for (const letter of dnaArr) {
//     switch (letter) {
//       case 'G':
//         rna += 'C';
//         break;
//       case 'C':
//         rna += 'G';
//         break;
//       case 'T':
//         rna += 'A';
//         break;
//       case 'A':
//         rna += 'U';
//         break;
//       case '':
//         return '';
//       default:
//         return null;
//     }
//   }
//   console.log(rna);
//   return rna;
// };

// const x = 'ACNTG';

// dnaToRna(x);

// const buildQueryString = (obj) => {
//   let result = '';
//   const queryArr = Object.entries(obj).sort();
//   console.log(' buildQueryString queryArr:', queryArr);
//   if (queryArr.length === 0) {
//     return '';
//   }

//   for (const [key, value] of queryArr) {
//     result += `${key}=${value}&`;
//   }

//   return result.slice(0, -1);
// };

// const bqs = {};
// const bqs = {
//   a: 10,
//   s: 'Wow',
//   d: 3.2,
//   z: '89',
// };

// const buildQueryString = (params) => {
//   const keys = Object.keys(params).sort();
//   console.log(' buildQueryString keys:', keys);
//   const result = [];

//   for (const key of keys) {
//     result.push(`${key}=${params[key]}`);
//   }

//   return result.join('&');
// };

// buildQueryString(bqs);

// const cloneDeep = (obj) => {
//   const result = {};
//   const entries = Object.entries(obj);
//   for (const [key, value] of entries) {
//     result[key] = value;
//     console.log(1, result);
//   }
//   console.log(3, obj.key);
//   console.log(4, result.key);
//   console.log(4, result.key === obj.key);
//   // console.log(2, result);
// };

// const data = {
//   key: 'value',
//   key2: {
//     key: 'innerValue',
//     innerKey: {
//       anotherKey: 'anotherValue',
//     },
//   },
// };

// console.log(cloneDeep(data));

// const x = Object.entries('world');
// console.log(' x:', x);
// const stack = 'Java'.toLowerCase().split('');
// console.log(' stack:', stack);

// const isLetterInWord = (wordArr, letter) => wordArr.includes(letter);

// const scrabble = (letters, word) => {
//   if (letters.length < word.length) {
//     return false;
//   }

//   const stack = word.toLowerCase().split('').sort();
//   console.log(' scrabble stack:', stack);
//   const lettersArr = letters.toLowerCase().split('').sort();
//   const length = lettersArr.length;
//   console.log(' scrabble lettersArr:', lettersArr);

//   for (let i = 0; i < length; i += 1) {
//     console.log(i, 'stack', stack);
//     console.log(i, 'текущая буква', lettersArr[length - 1 - i]);
//     if (isLetterInWord(stack, lettersArr[length - 1 - i])) {
//       stack.pop();
//       console.log(i, stack);
//     }
//   }
//   return stack.length === 0;
// };

// const x = ['javaSprint', 'javascript'];

// console.log(scrabble('katas', 'steak'));

// const countByChars = (str) => {
//   const chars = {};

//   for (const char of str) {
//     const count = _.get(chars, char, 0);
//     console.log(' countByChars count:', count);
//     chars[char] = count + 1;
//     console.log(' countByChars chars:', chars);
//   }

//   return chars;
// };

// export default (str, word) => {
//   const countsChars = countByChars(str);

//   for (const char of word.toLowerCase()) {
//     const count = _.get(countsChars, char, 0);
//     if (count === 0) {
//       return false;
//     }
//     countsChars[char] -= 1;
//   }

//   return true;
// };

// console.log(countByChars('javascript'));

// let x = {};
// const str = 'hello';

// countByChars(str);

// const filter = (arr, arr2) => {
//   const result = [];
//   for (item of arr) {
//     if (item === value) {
//       result.push(item);
//     }
//   }
//   return result;
// };

// const filterAdd = (arr1, arr2) => {
//   const result = [];

//   for (const item of arr2) {
//     if (!arr1.includes(item)) {
//       result.push(item);
//     }
//   }

//   return result;
// };

// const filterDen = (arr1, arr2) => {
//   const result = [];

//   for (const item of arr1) {
//     if (!arr2.includes(item)) {
//       result.push(item);
//     }
//   }

//   return result;
// };

// const filterChang = (obj1, obj2) => {
//   const result = [];

//   for (const key in obj1) {
//     if (Object.hasOwn(obj2, key) && obj1[key] !== obj2[key]) {
//       result.push(key); // ключ уже строка, ничего преобразовывать не нужно
//     }
//   }

//   return result;
// };

// const filterUnChang = (obj1, obj2) => {
//   const result = [];

//   for (const key in obj1) {
//     if (Object.hasOwn(obj2, key) && obj1[key] === obj2[key]) {
//       result.push(key); // ключ уже строка, ничего преобразовывать не нужно
//     }
//   }

//   return result;
// };

// const addKeysWithLabel = (target, keys, label) => {
//   for (const key of keys) {
//     target[key] = label;
//   }
// };

// const genDif = (ver1, ver2) => {
//   const keysStart = Object.keys(ver1);
//   const keysEnd = Object.keys(ver2);

//   const added = filterAdd(keysStart, keysEnd);
//   console.log(' genDif added:', added);
//   const denied = filterDen(keysStart, keysEnd);
//   console.log(' genDif denied:', denied);
//   const changed = filterChang(ver1, ver2);
//   console.log(' genDif changed:', changed);
//   const unChanged = filterUnChang(ver1, ver2);
//   console.log(' genDif unChanged:', unChanged);

//   const result = {};
//   addKeysWithLabel(result, added, 'added');
//   addKeysWithLabel(result, changed, 'changed');
//   addKeysWithLabel(result, denied, 'delited');
//   addKeysWithLabel(result, unChanged, 'unchanged');
//   console.log(' genDif result:', result);
//   return result;
// };

// const x = { one: 'eon', two: 'two', four: true };
// const e = { two: 'own', zero: 4, four: true };

// genDif(x, e);

// const x = ['a', '2', 3];
// console.log(isNaN(x[0]));

// console.log([1, 2] + [1, 2] === '1212');

// const x = [1, 2] + [1, 2];
// console.log(' x:', x);
// console.log(typeof x);
// console.log(14 + 1);

// const arab = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
// const roman = [
//   'I',
//   'IV',
//   'V',
//   'IX',
//   'X',
//   'XL',
//   'L',
//   'XC',
//   'C',
//   'CD',
//   'D',
//   'CM',
//   'M',
// ];

// const toRoman = (num) => {
//   if (!num) {
//     return '';
//   }

//   let result = '';
//   let i = arab.length - 1;
//   console.log(' toRoman i:', i);
//   while (num > 0) {
//     if (num >= arab[i]) {
//       result += roman[i];
//       num -= arab[i];
//     } else {
//       i -= 1;
//     }
//   }
//   return result;
// };

// const toArab = (str) => {
//   str = str.toUpperCase();

//   let result = 0;
//   let i = arab.length - 1;
//   let pos = 0;

//   while (i >= 0 && pos < str.length) {
//     if (str.substr(pos, roman[i].length) == roman[i]) {
//       result += arab[i];
//       pos += roman[i].length;
//     } else {
//       i -= 1;
//     }
//   }
//   return result;
// };

// console.log(toRoman(390));
// console.log(toArab('XXX'));

// const numerals = {
//   M: 1000,
//   CM: 900,
//   D: 500,
//   CD: 400,
//   C: 100,
//   XC: 90,
//   L: 50,
//   XL: 40,
//   X: 10,
//   IX: 9,
//   V: 5,
//   IV: 4,
//   I: 1,
// };

// const sortedNumerals = Object.entries(numerals).sort(
//   ([, arabic1], [, arabic2]) => Math.sign(arabic2 - arabic1)
// );

// export const toRoman = (number) => {
//   let digit = number;
//   const result = [];
//   for (const [roman, arabic] of sortedNumerals) {
//     const repetitionsCount = Math.floor(digit / arabic);
//     if (repetitionsCount > 0) {
//       digit -= repetitionsCount * arabic;
//       result.push(roman.repeat(repetitionsCount));
//     }
//   }

//   return result.join('');
// };

// export const toArabic = (romanNumber) => {
//   let result = 0;
//   let currentLine = romanNumber;
//   for (const [roman, arabic] of sortedNumerals) {
//     while (currentLine.indexOf(roman) === 0) {
//       result += arabic;
//       currentLine = currentLine.slice(roman.length);
//     }
//   }

//   if (toRoman(result) !== romanNumber) {
//     return false;
//   }

//   return result;
// };
// END

// const numerals = {
//   M: 1000,
//   CM: 900,
//   D: 500,
//   CD: 400,
//   C: 100,
//   XC: 90,
//   L: 50,
//   XL: 40,
//   X: 10,
//   IX: 9,
//   V: 5,
//   IV: 4,
//   I: 1,
// };

// const x = Object.entries(numerals).sort(([, arabic1], [, arabic2]) =>
//   Math.sign(arabic2 - arabic1)
// );
// console.log(' x:', x);

// const findWhere = (arrObj, targetObj) => {
//   const keys = Object.keys(targetObj);
//   for (const obj of arrObj) {
//     let isMatch = true;

//     for (let key of keys) {
//       if (!Object.hasOwn(obj, key) || obj[key] !== targetObj[key]) {
//         isMatch = false;
//         break;
//       }
//     }
//     if (isMatch) {
//       return obj;
//     }
//   }
//   return null;
// };

// const x = [
//   { title: 'Book of Fooos', author: 'FooBar', year: 1111 },
//   { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
//   { title: 'The Tempest', author: 'Shakespeare', year: 1611 },
//   { title: 'Book of Foos Barrrs', author: 'FooBar', year: 2222 },
//   { title: 'Still foooing', author: 'FooBar', year: 3333 },
//   { title: 'Happy Foo', author: 'FooBar', year: 4444 },
// ];

// const y = { title: 'Cymbeline', author: 'Shakespeare', year: 1611 };
// const w = Object.entries(y);
// console.log(Object.keys(y));

// console.log(x[1]['title'] === y['title']);

// console.log(Date.now());

// const prime = (num) => {
//   if (num < 2) return false;

//   for (let i = 2; i <= Math.sqrt(num); i += 1) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(prime(4));

// const x = 'asdadasdasdm,m.lk';
// console.log(x[1 - 1]);

// const createPrint = () => {
//   const name = 'King';

//   const printName = () => {
//     console.log(name);
//   };

//   return printName;
// };

// const myPrint = createPrint();
// myPrint(); // King
// console.log(myPrint);

// const createCounter = () => {
//     let count = 0;

//     const addOne = () => {
//         count += 1;
//     }
//     return addOne
// };

// const func = (a, b, ...params) => {
//   // параметр 'a' содержит первый аргумент
//   console.log(`a -> ${a}`);
//   // параметр 'b' содержит второй аргумент
//   console.log(`b -> ${b}`);
//   // params содержит все остальные аргументы
//   console.log(params);
// };

// func(9, 4);
// function sum(a, b, c) {
//   return a + b + c;
// }

// const values = [1, 2, 3];
// console.log(sum(values)); // передаёт 1, 2, 3 как аргументы

// console.log(new Date(2013, 1, 12));
// const arr1 = ['Sat Apr 24 1993', 'Fri Sep 12 1997', 'Sun Nov 18 2001'];

// const convert = (dates) => {
//   const result = [];
//   for (const date of dates) {
//     result.push(new Date(date).toDateString());
//   }
//   console.log(result);
//   return result;
// };

// const x = convert(arr1);
// // console.log(new Date('Sat Apr 24 1993').toDateString());
// const d = ['one', 'two', 'three'];
// const [one, ...rest] = d;
// console.log(' one:', one);
// console.log(rest);

// const users = [
//   { name: 'Igor', age: 19 },
//   { name: 'Danil', age: 1 },
//   { name: 'Vovan', age: 4 },
//   { name: 'Matvey', age: 16 },
// ];

// const result = [];
// const ages = [];
// for (const { name, age } of users) {
//   result.push(name);
//   ages.push(age);
// }
// console.log(result);
// console.log(ages);

// const users = [
//   {
//     name: 'Tirion',
//     children: [{ name: 'Mira', birthday: '1983-03-23' }],
//   },
//   { name: 'Bronn', children: [] },
//   {
//     name: 'Sam',
//     children: [
//       { name: 'Aria', birthday: '2012-11-03' },
//       { name: 'Keit', birthday: '1933-05-14' },
//     ],
//   },
//   {
//     name: 'Rob',
//     children: [{ name: 'Tisha', birthday: '2012-11-03' }],
//   },
// ];

// const getChildren = (coll) => {
//   const result = [];
//   for (const item of coll) {
//     if (item.children && item.children.length > 0) {
//       result.push(item);
//     }
//   }
//   return result;
// };

// const test = users.map((item) => item['children'].flat(2));
// const test = users[0].children.flat(2);
// console.log(test);

// const getChildren = (coll) => {
//   const result = [];

//   for (const user of coll) {
//     if (user.children && user.children.length > 0) {
//       result.push(...user.children);
//     }
//   }

//   return result;
// };

// const test = [...users.children];

// console.log(test);

// console.log(getChildren(users));

// const sum = (...nums) => {
//   const result = 0;
//   for (const num of nums) {
//     result += num;
//   }
//   return result;
// };

// const getChildren = (users) => {
//   const childrenOfUsers = users.map(({ children }) => children);
//   console.log(' getChildren childrenOfUsers:', childrenOfUsers.flat());
//   return childrenOfUsers.flat();
// };

// const users = [
//   {
//     name: 'Tirion',
//     children: [{ name: 'Mira', birthday: '1983-03-23' }],
//   },
//   { name: 'Bronn', children: [] },
//   {
//     name: 'Sam',
//     children: [
//       { name: 'Aria', birthday: '2012-11-03' },
//       { name: 'Keit', birthday: '1933-05-14' },
//     ],
//   },
//   {
//     name: 'Rob',
//     children: [{ name: 'Tisha', birthday: '2012-11-03' }],
//   },
// ];

// getChildren(users);

// const books = [
//   { title: 'The Hobbit', author: 'Tolkien', genres: ['Fantasy', 'Adventure'] },
//   { title: '1984', author: 'Orwell', genres: ['Dystopia', 'Science Fiction'] },
//   {
//     title: 'Clean Code',
//     author: 'Robert C. Martin',
//     genres: ['Programming', 'Best Practices'],
//   },
// ];

// const getAllGenres = (arr) => {
//   const allGenres = arr.map(({ genres }) => genres);
//   console.log(allGenres.flat());
// };

// getAllGenres(books);

// function sum(a, b, ...rest) {
//   console.log(a, b);
//   console.log(rest);
// }

// sum(1, 2, 3, 4, 5, 6);

// function multiply(first, ...rest) {
//   let result = first;
//   for (const num of rest) {
//     result *= num;
//   }
//   console.log(' multiply result:', result);
//   return result;
// }

// multiply(2, 3, 4); // Должно вернуть 2 * 3 * 4 = 24
// multiply(5, 2);

// const user = { name: 'Alex' };
// const details = { age: 25, job: 'Developer' };

// // Должно получиться { name: "Alex", age: 25, job: "Developer" }

// const allInOne = { ...user, ...details };

// console.log(' allInOne:', allInOne);

// Дан массив ["HTML", "CSS", "JavaScript", "React"].
// Извлеки первые два элемента, а остальные собери в массив other.

// const [first, second, ...other] = ['HTML', 'CSS', 'JavaScript', 'React'];
// console.log(first, second, other);

// const fruits = ['apple', 'banana'];

// const newFruits = [...fruits];
// console.log(' newFruits:', newFruits);
// fruits[0] = 'pear';
// console.log(' fruits:', fruits);
// console.log(' newFruits:', newFruits);

// const books = [
//   { title: 'The Hobbit', pages: 310 },
//   { title: '1984', pages: 328 },
//   { title: 'Dune', pages: 412 },
// ];

// const titles = books.map((book) => ` ${book.title} pages: ${book.pages}`);

// console.log(' titles:', titles);

// const users = [
//   {
//     name: 'Tirion',
//     friends: [
//       { name: 'Mira', gender: 'female' },
//       { name: 'Ramsey', gender: 'male' },
//     ],
//   },
//   { name: 'Bronn', friends: [] },
//   {
//     name: 'Sam',
//     friends: [
//       { name: 'Aria', gender: 'female' },
//       { name: 'Keit', gender: 'female' },
//     ],
//   },
//   {
//     name: 'Rob',
//     friends: [{ name: 'Taywin', gender: 'male' }],
//   },
// ];

// const getGirlFriends = (users) => {
//   const friends = users.map(({ friends }) => friends).flat();
//   return friends.filter(({ gender }) => gender === 'female');
// };

// getGirlFriends(users);

// const x = {};
// x.age = 1;
// console.log(x);

// const courses = [
//   {
//     name: 'Arrays',
//     lessons: [{ name: 'One' }, { name: 'Two' }],
//   },
//   {
//     name: 'Objects',
//     lessons: [{ name: 'Lala' }, { name: 'One' }, { name: 'Two' }],
//   },
// ];

// const students = [
//   { name: 'Tirion', class: 'B', mark: 3 },
//   { name: 'Keit', class: 'A', mark: 3 },
//   { name: 'Ramsey', class: 'A', mark: 4 },
// ];

// const cb = (acc, student) => {
//   if (!Object.hasOwn(acc, student.group)) {
//     acc[student.group] = [];
//   }
//   acc[student.group].push(student);
//   return acc;
// };

// const groupBy = (students, group) => {
//   const result = students.reduce(cb, {});
//   console.log(' groupBy result:', result);
//   return result;
// };

// const groupBy = (students, key) => {
//   const result = students.reduce((acc, student) => {
//     const groupName = student[key];
//     if (!Object.hasOwn(acc, groupName)) {
//       acc[groupName] = [];
//     }
//     acc[groupName].push(student);
//     return acc;
//   }, {});

//   console.log(' groupBy result:', result);
//   return result;
// };

// groupBy(students, 'mark');

// const groupBy = students.reduce((acc, student) => {
//   if (!Object.hasOwn(acc, student.mark)) {
//     acc[student.mark] = [];
//   }
//   acc[student.mark].push(student.mark);
//   console.log('acc:', acc);
//   return acc;
// }, {});

// const test = students.reduce(cb, {});
// console.log(test);

// const numbers = [1, 2, 3, 4, 5];

// const numbersMulty = numbers.map((number) => number * 2);
// console.log(' numbersMulty:', numbersMulty);

// const books = [
//   { title: '1984', author: 'George Orwell' },
//   { title: 'Dune', author: 'Frank Herbert' },
//   { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
// ];

// const newBooks = books.map((book) => {
//   return { ...book, isRead: true };
// });
// console.log(' newBooks:', newBooks);

// const getJsFileNames = (paths) =>
//   paths
//     // отбираем реально существующие файлы
//     .filter((filepath) => fs.existsSync(filepath))
//     // отбор по типу файла
//     .filter((filepath) => fs.lstatSync(filepath).isFile())
//     // отбор по расширению
//     .filter((filepath) => path.extname(filepath).toLowerCase() === '.js')
//     // отображаем в имена (нам нужен массив с именами)
//     .map((filepath) => path.basename(filepath.toLowerCase(), '.js'));

// const names = getJsFileNames([
//   'index.js',
//   'wop.JS',
//   'nonexists',
//   'node_modules',
// ]);
// console.log(names); // => [index, wop]

// const numbers = [10, 20, 52, 105, 56, 89, 96];

// const max = numbers.reduce(
//   (acc, number) => (number > acc ? number : acc),
//   numbers[0]
// );

// console.log(max);

// const sequenceSum = (begin, end) => {
//   // BEGIN (write your solution here)
//   if (end === begin) {
//     return end;
//   }
//   return end + sequenceSum(begin, end - 1);
//   // END
// };

// console.log(sequenceSum(-1, -1));
// export default sequenceSum;

// const factorial = (n) => {
//   if (n === 0) {
//     return 1;
//   }

//   const iter = (counter, acc) => {
//     if (counter === 1) {

//       return acc;
//     }
//     return iter(counter - 1, counter * acc);
//   };

//   return iter(n, 1);
// };

// console.log(factorial(5));

// const smallestDivisor = (number) => {
//   if (number === 1) {
//     return 1;
//   }

//   const iter = (number, divisor) => {
//     if (number % divisor === 0) {
//       return divisor;
//     }
//     return iter(number, divisor + 1);
//   };
//   return iter(number, 2);
// };

// console.log(smallestDivisor(17));

const x = [-1, 0, 1, -3, 10, -2];

const sameParity = (arr) => {
  const parity = Math.abs(arr[0] % 2);
  const result = arr.filter((num) => Math.abs(num % 2) === parity);
  console.log(result);
  return result;
};

sameParity(x);
