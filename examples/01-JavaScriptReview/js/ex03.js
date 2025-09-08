function sortAlphabetically(a,b) {
    return a.localeCompare(b);
}

let myArr = ["HELLO", "hello", "hEllo", "réservé", "RESERVE", "Reserve", "rezerve"];

let myArr2 = [2, 5, 4, 100, 13, 6, 201, 51];

// myArr.sort();
// console.log(`myArr after regular sort "${myArr}"`);

myArr.sort(sortAlphabetically);
console.log(myArr);

// myArr2.sort();
// console.log(myArr2);

myArr2.sort((a,b) => a - b);
console.log(myArr2);