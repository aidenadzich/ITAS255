const numbers = [1, 6, 7, -2, 3, 9, 21, 56];

for (_ in numbers) { let number = numbers[_]; if (number % 2 == 0) { console.log(`${number} is even`); } else { console.log(`${number} is odd`);
}
}

console.log(`All numbers processed`)