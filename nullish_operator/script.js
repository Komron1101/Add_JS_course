'use strict';

const box = document.querySelector('.box');

const newHeight = 200;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);

let userName = NaN;
let userKey;
console.log(userName ?? userKey ?? 'User');

// TODO: Почему нельзя комбинировать ?? c && или ||?
// console.log(userName && userKey ?? 'User');
