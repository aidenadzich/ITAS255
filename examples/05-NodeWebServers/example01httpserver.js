import http from 'node:http';

const PORT = 8047

http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html",
        "My-Header": "Aiden's Awesome Web Server"
    });

    res.end(`
        <!DOCTYPE html>
        <html lang='en'>
            <head>
                <title>255E0501</title>
            </head>
            <body>
                <h2>Hello World<h2>
                <p>This is a response test</p>
            </body>
        </html>    
    `);

}).listen(PORT);

console.log(`Server listening on port ${PORT}`);