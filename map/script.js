'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    },
};

const userMap = new Map(Object.entries(user));
console.log(userMap);

const newUserObject = Object.fromEntries(userMap);
console.log(newUserObject);

const shops = [{ rice: 500 }, { oil: 200 }, { bread: 50 }, { milk: 30 }];

const budget = [5000, 15000, 25000, 35000];

const map = new Map([[{ paper: 400 }, 8000]]); // Массив массивов

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});

console.log(map);

// TODO: Map methods
// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
// map.size;
// map.keys();

// map.set(shops[0], 5000)
//     .set(shops[1], 15000)
//     .set(shops[2], 25000)
//     .set(shops[3], 35000);

// TODO: 1 - ый способ - ['paper', 'rice', 'oil', 'bread', 'milk']
// const goods = [];

// for (let shop of map.keys()) {
//     goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);

// TODO: 2 - ый способ - [400, 500, 200, 50, 30]
// const allGoodsPrices = [];

// for (let price of map.keys()) {
//     allGoodsPrices.push(Object.values(price)[0]);
// }
// console.log(allGoodsPrices);

// TODO: 3 - ый способ - [8000, 5000, 15000, 25000, 35000]
// const allPrices = [];

// for (let price of map.values()) {
//     allPrices.push(price);
// }
// console.log(allPrices);

// TODO: 4 - ый способ - {paper: 400} 8000 ,...
// for (let [shop, price] of map.entries()) {
//     console.log(shop, price);
// }

// TODO: 5 - ый способ
// map.forEach((value, key, map) => {
//     console.log(key, value);
// });
