import url from 'node:url';
import path from 'node:path';

const adr = 'http://localhost:1357/this/is/the/path/myfile.html?year=1919&month=10#nowhere';

const parsed = url.parse(adr, true);

console.log(parsed);

console.log(parsed.pathname);

let pathInfo = path.parse(parsed.pathname);

console.log(pathInfo);
console.log(pathInfo.base);
console.log(pathInfo.ext);
