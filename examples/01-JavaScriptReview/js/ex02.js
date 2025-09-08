function isBelowThreshold(currentValue) {
    return currentValue < 5;
}

let array1 = [1, 30, 39, 29, 20, 13];
let everyArr = [1, 2, 3, 4, 10, 21];
let array2 = [1, 2, 3, 4, 5];

let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present','fries'];

let array3 = [1, 4, 9, 16];

const numbers = [65, 44, 12, 4];

//External Function
console.log(everyArr.some(isBelowThreshold));

//Fat Arrow Functions
console.log(everyArr.every(currentValue => currentValue < 5));

console.log(everyArr.every(_ => _ < 25));

let filtered_arr = words.filter(_ => _.length <= 5);
console.log(filtered_arr);

//Inline Function
let mapped_arr = array3.map(function(value) { return value * 2; });
console.log(mapped_arr);


