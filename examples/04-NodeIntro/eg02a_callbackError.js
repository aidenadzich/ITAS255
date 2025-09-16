const fs = require('fs');

let file;
let buf = new Buffer.alloc(100000);
fs.open(
	'lorem.txt', 'r', function (err, handle) {

		file = handle;
		fs.read(file, buf, 0, 100000, null, 
			function(err, length) {
				console.log(buf.toString('utf8', 0, length));
				file.close(file, function() { /* don't care */ });
			});
	});
	
