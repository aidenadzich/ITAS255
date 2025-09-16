const fs = require('fs');

fs.readdir('C:/', (err, data) => {
    console.log(`User Contains: ${data}\n\n`)
});

fs.readdir('C:/Users/aiden.adzich/Documents/Mindbox', (err, data) => {
    console.log(`Folder Contains: ${data}\n\n`)
});


console.log(`


this comes after the readdir calls


`);