const fs = require('fs');

let file;
let buf = new Buffer.alloc(100000);
fs.open(
    'lorem.txt', 'r', function (err, handle) {
    if (err) {
        console.log(`An error occured on open: ${err}`);
        return;
    }
        file = handle;
        fs.read(file, buf, 0, 100000, null, 
            function(err, length) {
                if (err) {
                    console.log(`An error occured on read: ${err}`);
                    return;
                }
                console.log(buf.toString('utf8', 0, length));
                fs.close(file, err => {
                    if (err) {
                        console.log(`An error occured on close: ${err}`)
                    }
                });
            });
    });
    
