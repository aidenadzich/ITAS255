import http from 'node:http';
import url from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const PORT = 9099;
const WEBROOT = path.join(__dirname, "public/images");
const ERRROOT = path.join(__dirname, "errors");
const EXTENSIONS = {
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
}



const getFile = (res, filename, ext, status) => {
    fs.readFile(filename, (err, content) => {
        if (!err) {
            res.writeHead(status, {
                "Content-Type": ext,
                "Content-Length": content.length,
                "255Test": "node server"
            });
            res.end(content);
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

    let urlObj = url.parse(req.url, true);
    let pathObj = path.parse(urlObj.pathname);
    let pathName = "";
    let fileName = "";
    let ext = "";


    fileName = pathObj.base;
    ext = pathObj.ext;

    if (EXTENSIONS[ext]) {
        let localPath = path.join(WEBROOT, pathName, fileName);
        fs.access(localPath, fs.F_OK, err => {
            if ((ext in EXTENSIONS) && err && ext != "") {
                console.log(ext);
                let errorPath = path.join(ERRROOT, "error-404.png");
                getFile(res, errorPath, 'image/png', 404);
            } else {
                console.log(`Getting this file ${localPath}`);
                getFile(res, localPath, EXTENSIONS[ext], 200);
            }
        });
    } else {
        let errorPath = path.join(ERRROOT, "error-415.png");
        getFile(res, errorPath, 'image/png', 415);
    }

}).listen(PORT);

console.log(`Listening on port ${PORT}`);
