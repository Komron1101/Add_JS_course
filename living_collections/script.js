'use strict';
document.addEventListener('DOMContentLoaded', function () {
    const boxesQuery = document.querySelectorAll('.box');
    const boxesGet = document.getElementsByClassName('box');

    boxesQuery.forEach((box) => {
        if (box.matches('.this')) console.log(box);
    });

    console.log(boxesQuery[0].closest('.wrapper'));

    // boxesQuery[0].remove();
    // boxesGet[0].remove();

    // for (let i = 0; i < 5; i++) {
    //     const div = document.createElement('div');
    //     div.classList.add('box');
    //     div.textContent = `Box ${i + 1}`;
    //     document.body.append(div);
    //     // boxesGet[boxesGet.length] = div; TODO: Ошибка, так не работает!
    // }

    // console.log(boxesQuery);
    console.log(boxesGet);
    // // console.log(document.body.children);

    // console.log(Array.from(boxesGet));
});
