import https from 'https';
import fs from 'fs';

const options = {
    hostname: 'www.viu.ca',
    method: 'get',
    port: 443
}

const myRequest = https.request(options, res => {
    let resBody = '';
    res.setEncoding('UTF-8');

    res.on('data', chunk => {
        console.log(`Chunk received: ${chunk.length}`);
        resBody += chunk;
    });

    res.on('end', () => {
        fs.writeFile('./viu.html', resBody, err => {
            if (err) throw err;
            console.log('File written');
        })
    });
});

myRequest.end();