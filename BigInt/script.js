'use strict';

/*
const bigint = 15641321111654198746513214897461315487931548n;

const sameBigint = BigInt(15641321111654198746513214897461315487931548);

console.log(typeof bigint); // bigint
console.log(typeof sameBigint); // bigint

console.log(1n + 2n); // 3n

console.log(5n / 2n); // 2

console.log(5 > 2n); // true
console.log(5 < 2n); // false

console.log(5 == 5n); // true
console.log(5 === 5n); // false
*/

let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number));
console.log(Number(bigint) + number);

// console.log(+bigint + number); TODO: Ошибка
