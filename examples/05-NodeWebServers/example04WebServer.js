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
const EXTENSIONS = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.json': 'application/json',
    '.txt': 'text/plain',
    '.webp': 'image/webp'
}

const getFile = (res, filename, ext, status) => {
    fs.readFile(filename, (err, content) => {
        if (!err) {
            res.writeHead(status, {
                "Content-Type": ext,
                "Content-Length": content.length
            });
            res.end(content);
        } else {
            console.log(`Server Error`);
            res.writeHead(500, {
                'Content-Type': 'text/plain'
            });
            res.end("Major error occured on server, please contact support.");
            process.exit(1);
        }
    });
}


http.createServer((req, res) => {


// TODO: 1. Get file from a path
    let urlObj = url.parse(req.url, true);
    let pathObj = path.parse(urlObj.pathname);
    let pathName = "";
    let fileName = "";
    let ext = "";

    if (pathObj.ext === "") {
        //substring(1) removes leading /
        pathName = path.join(pathObj.dir, pathObj.base).substring(1);
        console.log(pathName);
        pathObj.base = '';
    } else {
        pathName = pathObj.dir.substring(1);
    }
    fileName = pathObj.base || DEFAULT_FILE;
    ext = pathObj.ext || DEFAULT_EXT;

    if (EXTENSIONS[ext]) {
        let localPath = path.join(WEBROOT, pathName, fileName);
        fs.access(localPath, fs.F_OK, err => {
            if (err) {
                let errorPath = path.join(ERRROOT, "404.html");
                getFile(res, errorPath, 'text/html', 404);
            } else {
                console.log(`Getting this file ${localPath}`);
                getFile(res, localPath, EXTENSIONS[ext], 200);
            }
        });
    } else {
        let errorPath = path.join(ERRROOT, "415.html");
        getFile(res, errorPath, 'text/html', 415);
    }

}).listen(PORT);

console.log(`Listening on port ${PORT}`);


// TODO: 4. Logging actions
