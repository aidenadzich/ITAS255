//const newMath = require('./modules/mathAsync.js');


import maths from './modules/mathAsyncModule.js';
const mathOps = maths();

mathOps.sum(5, 3, (err, results) => {
    if (err) {
        console.log(`Error`)
    } else {
    console.log(`The sum is ${results}`);
    }
});

mathOps.diff(5, 3, (err, results) => {
    if (err) {
        console.log(`Error`)
    } else {
    console.log(`The diff is ${results}`);
    }
});

mathOps.product(5, 3, (err, results) => {
    if (err) {
        console.log(`Error`)
    } else {
    console.log(`The product is ${results}`);
    }
});

