'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(box);
console.log(block);

// if (block) {
//     console.log(block.textContent);
// }

// console.log(block?.textContent);

// console.log(1 + 2);

const userData = {
    name: 'Komron',
    age: null,
    say: function () {
        console.log('Hello');
    },
};

userData.say();
userData.hey?.();
// console.log(userData.skills?.js);
