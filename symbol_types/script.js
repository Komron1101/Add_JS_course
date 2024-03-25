'use strict';

// const obj = {
//     name: 'Test',
//     [Symbol('id')]: 1,
//     getId: function () {
//         return this[id];
//     },
// };

// // let id = Symbol('id');
// // let id2 = Symbol('id2');

// // console.log(id == id2);

// // obj[id] = 1;
// // obj[id2] = 1;

// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);
// console.log(obj.gitId());

// for (let value in obj) console.log(value);

const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol.for('id')]: 123,
};

// Сторонний код библиотеки

myAwesomeDB.id = '32323323';

console.log(myAwesomeDB[Symbol.for('id')]);
console.log(myAwesomeDB);

