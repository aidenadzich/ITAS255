function greeting(theName) {
    console.log(`Hello, ${theName}!`)
}

let greeting2 = (theName) => {
    console.log(`Bonjour, ${theName}!`)
}

let greeting3 = () => {
    console.log('Canada beat Scotland this Saturday');
}

function processUserInput(callbackFunction) {
    let nameInput = prompt('Please enter your name: ');
    callbackFunction(nameInput);
}

processUserInput(greeting);
processUserInput(greeting2);
processUserInput((theName) => {
    console.log(`Hola, ${theName}!`);
});
processUserInput(greeting3);