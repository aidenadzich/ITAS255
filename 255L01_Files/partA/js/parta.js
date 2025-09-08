let arrayOne = [6, 8, 100, 1, 10, 1000, 13, 24, 5, 8, 0, -15, 77, 770];
let arrayTwo = [13, 47, 32, 23, 22, 28, 19, 20];
let arrayThree = ['furniture', 'school', 'week', 'cause', 'Week', 'POKER', 'turkey', 'wEEk', 'three', 'football', 'horse'];

evenArray = arrayOne.every(_ => _ % 2);
console.log(`Is every number in arrayOne even? ${evenArray}`);

console.log(`Is every number in arrayTwo greater than 10? ${arrayTwo.every(_ => _ > 10)}`);

console.log(`Can any values in arrayTwo be divided by 3? ${arrayTwo.some(_ => _ % 3)}`);

console.log(`Are there any values in arrayThree with a length of 4? ${arrayThree.some(_ => _.length == 4)}`);

singleDigit = arrayOne.filter(_ => _ <= 9 && _ >= 0);
console.log(`Single digit numbers in arrayOne: ${singleDigit}`);

fiveLetters = arrayThree.filter(_ => _.length == 5);
console.log(`Values in arrayThree with a length of 5: ${fiveLetters}`);

subtractTen = arrayTwo.map(_ => _ - 10);
console.log(`Every value in arrayTwo subtracted by 10: ${subtractTen}`);

arrayOneSorted = arrayOne.sort((a,b) => b - a);
console.log(`arrayOne sorted in descending order: ${arrayOneSorted}`)
arrayOneSorted.forEach(_ => {
    console.log(`${arrayOneSorted.indexOf(_)+1}. ${_}`);
});

arrayThreeSorted = arrayThree.sort((a,b) => a.localeCompare(b));
console.log(`arrayThree sorted alphanumerically in ascending order: ${arrayThreeSorted}`);
arrayThreeSorted.forEach(_ => {
    console.log(`${arrayThreeSorted.indexOf(_)+1}. ${_}`)
});

