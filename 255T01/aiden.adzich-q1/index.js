import {add, multiply, divide} from './modules/calculator.js';

const nums = [7, 6, 36, 9, 23, 16, 3, 5, -4, -3, 4, 10, 1001, 0];

//Test Set 1
multiply(nums[0], nums[1], (err, results) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
    console.log(`The result of ${nums[0]} * ${nums[1]} is ${results}`);
    }
});

divide(nums[2], nums[3], (err, results) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
    console.log(`The result of ${nums[2]} / ${nums[3]} is ${results}`);
    }
});

add(nums[4], nums[5], (err, results) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
    console.log(`The result of ${nums[4]} + ${nums[5]} is ${results}`);
    }
});

// ~~-- Could not make this work, needed to move on. --~~

// divide(addResult1, nums[6], (err, results) => {
//     if (err) {
//         console.log(`Error`);
//     } else {
//     console.log(`The result is ${results}`);
//     }
// });

// multiply(divResult1, nums[7], (err, results) => {
//     if (err) {
//         console.log(`Error`);
//     } else {
//     console.log(`The result is ${results}`);
//     }
// });

//Test Set 2
add(nums[6], nums[8], (err, results) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
    console.log(`The result of ${nums[6]} + ${nums[8]} is ${results}`);
    }
});
add(nums[9], nums[10], (err, results) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
    console.log(`The result of ${nums[9]} + ${nums[10]} is ${results}`);
    }
});

multiply(nums[11], nums[12], (err, results) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
    console.log(`The result of ${nums[11]} * ${nums[12]} is ${results}`);
    }
});

multiply(nums[12], nums[11], (err, results) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
    console.log(`The result of ${nums[12]} * ${nums[11]} is ${results}`);
    }
});

divide(nums[13], nums[1], (err, results) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
    console.log(`The result of ${nums[13]} / ${nums[1]} is ${results}`);
    }
});

divide(nums[1], nums[13], (err, results) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
    console.log(`The result of ${nums[1]} / ${nums[13]} is ${results}`);
    }
});



