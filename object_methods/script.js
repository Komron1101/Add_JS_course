'use strict';

const birthday = Symbol('birthday');

const user = {
    name: 'Alex',
    surname: 'Smith',
    [birthday]: '20/04/2021',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    },
};

console.log(Object.getOwnPropertyDescriptor(user, birthday));
for (let key in user) console.log(key);

Object.defineProperties(user, {
    name: { writable: false },
    surname: { writable: false },
});

// TODO: example, configurable - false
// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

// TODO: enumerable
// Object.defineProperty(user, 'birthday', {
//     value: prompt('Date?'),
//     enumerable: true,
//     configurable: true,
// });
// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));

// TODO: enumerable
// Object.defineProperty(user, 'showMyPublicData', { enumerable: false });
// for (let key in user) console.log(key);

// TODO: writable
// console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// Object.defineProperty(user, 'name', { writable: false });

// TODO: при создании нового значения, все эти свойства по умолчанию будут false
// Object.defineProperty(user, 'gender', { value: 'male' });
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

// TODO:
// writable - чтение и изменение;
// enumerable - чтение при переборе в циклах;
// configurable - значение менять ВООБЩЕ нельзя;

// TODO:
// Object.keys
// Object.values
// Object.entries - [ [ ключ: значение ], [ ... ], [ ... ] ]
