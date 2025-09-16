const myModule = require('./modules/mod1.js');
const myModule2 = require('./modules/mod2.js');

console.log(myModule.myText);
console.log(myModule.myOtherText);

console.log(myModule2.addNum());
console.log(myModule2.addNum2(4, 19));