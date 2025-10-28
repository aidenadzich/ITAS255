import http from 'node:http';
import url from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const PORT = 8888;
const WEBROOT = path.join(__dirname, "public");
const TESTROOT = path.join(__dirname, "info")
const ERRROOT = path.join(__dirname, "errorpages");
const DEFAULT_FILE = 'base.txt';
const DEFAULT_EXT = '.txt';
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
const LOGFILE = path.join(__dirname, "logs/weblog.log");

const logEvent = (msg) => {
    let logTime = new Date();
    let logString = `${logTime.toLocaleString()}\t${msg}\n`;
    fs.appendFile(LOGFILE, logString, err => {
        if (err) {
            console.error("Could not write to log fileL", err);
        }
    });
}


const getFile = (res, filename, ext, status) => {
    fs.readFile(filename, (err, content) => {
        if (!err) {
            res.setHeader("Content-Type", ext)
            res.writeHead(status, {
                "Content-Length": content.length,
                "ServerName": "Aiden Adzich",
                "ReasonWhy": "ITAS 255 - Lab 3"
            });
            res.end(content);
            logEvent(`Response: ${JSON.stringify(res.getHeaders())}`);
        } else {
            console.error(`Server Error: could not read file ${filename}`);
            res.writeHead(500, {
                'Content-Type': 'text/plain'
            });
            res.end("Major error occured on server, please contact support.");
        }
        
    });
}


http.createServer((req, res) => {
    logEvent(`Request: ${req.method} ${req.url} Headers: ${JSON.stringify(req.headers)}`);

    let urlObj = url.parse(req.url, true);
    let pathObj = path.parse(urlObj.pathname);
    let pathName = "";
    let fileName = "";
    let ext = "";

    if (pathObj.ext === "") {
        pathName = path.join(pathObj.dir, pathObj.base).substring(1);
        console.log(pathName);
        pathObj.base = '';
    } else {
        pathName = pathObj.dir.substring(1);
    }
    fileName = pathObj.base || DEFAULT_FILE;
    ext = pathObj.ext || DEFAULT_EXT;

    

    if (EXTENSIONS[ext]) {
        if (pathName === "testing") {
            let DEFAULT_TEST = 'testfile.html';
            let DEFAULT_TEST_EXT = '.html';
            fileName = pathObj.base || DEFAULT_TEST;
            ext = pathObj.ext || DEFAULT_TEST_EXT;

            let testPath = path.join(TESTROOT, fileName)
            getFile(res, testPath, EXTENSIONS[ext], 200);
            return;
        }
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
