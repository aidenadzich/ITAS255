import http from 'node:http';    
import url from 'node:url';
import path from 'node:path';

const PORT = 8047;

http.createServer((req, res) => {

    const urlObject = url.parse(req.url, true);
    let path = urlObject.pathname;

    if (path === '/') {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.write(`

            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <title>Home</title>
                </head>
                
            
        `);
        
        res.write(`
                <body>
                    <h2>This is the home page</h2>
                    <p>Yay I am a server</p>
                </body>
            </html>
        `);

        res.end();
    } else if (path === '/about') {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.write(`

            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <title>About</title>
                </head>
                
            
        `);
        
        res.write(`
                <body>
                    <h2>This is the about page</h2>
                    <p>Yay I am a server</p>
                </body>
            </html>
        `);

        res.end();

    } else if (path === "/redirect") {

        res.writeHead(302, {
            "Location": 'https://www.viu.ca'
        });
        res.end();

    } else {

        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end(`404 - Path not found`);

    }

}).listen(PORT);

console.log(`Listening on port ${PORT}`);
