'use strict';

// const arr = [1, 1, 2, 2, 4, 5, 6, 5];

// const set = new Set(arr);

// console.log(set);

const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];

// TODO: Метод фильтрации
function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(arr));

// const set = new Set(arr);

// set.add('Ivan')
//     .add('Oleg')
//     .add('Flex')
//     .add('Pack')
//     .add('Pack')
//     .add('Pack')
//     .add('Mike');

// console.log(set);

// TODO: Set methods
// set.add(value);
// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// TODO: 1 - ый способ перебора
// for (let value of set) console.log(value);

// TODO: 2 - ый способ перебора
// set.forEach((value, valueAgaing, set) => {
//     console.log(value, valueAgaing);
// });

// TODO: Методы Set
// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());
