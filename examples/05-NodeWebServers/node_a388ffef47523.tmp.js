import http from 'node:http';
import url from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
// TODO: 0. Create web server

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const PORT = 8047;
const WEBROOT = path.join(__dirname, "public");
const ERRROOT = path.join(__dirname, "errorpages");
const DEFAULT_FILE = 'index.html';
const DEFAULT_EXT = '.html';


http.createServer((req, res) => {



// TODO: 1. Get file from a path
    let urlObj = url.parse(req.url, true);
    let pathObj = path.parse(urlObj.pathname);
    let pathName = pathObj.dir;
    let fileName = pathObj.base;
    let ext = pathObj.ext;

    if (ext === DEFAULT_EXT) {

        let localPath = path.join(WEBROOT, pathName, fileName);
        console.log(`Getting this file ${localPath}`);
        fs.readFile(localPath, (err, content) => {
            if (!err) {
                res.writeHead(200, {
                    "Content-Type": "text/html",
                    "Content-Length": content.length
                });
                res.end(content);
            } else {
                console.log(`Server Error`);
                res.writeHead(500);
                res.end();
            }
        });

    } else {
        res.writeHead(415);
        res.end("non-html file requested");
        console.log("Non-HTML file requested");
    }

}).listen(PORT);

console.log(`Listening on port ${PORT}`);
// TODO: 1b. Handle file errors

// TODO: 1c. We will need to refactor (well at least we should)

// TODO: 2. handling default files if no file specified

// TODO: 3. Handling extensions/other types of files

// TODO: 4. Logging actions
