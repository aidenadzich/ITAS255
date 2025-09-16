import https from 'https';

const TESTURLS = ['www.cbc.ca', 'www.cnn.com', 'www.tsn.ca', 'www.flobikes.com','www.itas.ca','www.google.ca', 'www.ctvnews.ca'];
const MAXLOOPS = 5;

const getResponseTime = (url) => {
    return new Promise((resolve, reject) => {
        let startTime = new Date();
        https.get({hostname: url}, res => {
            res.on('data', _ => {});
            res.on('end', _ => {
                console.log(`Got response from ${url}`);
                let totalTime = new Date() - startTime;
                console.log(`${url} took ${totalTime}ms to respond.`);
                resolve({url, totalTime});
            });
        }).on('error', e => reject(`Error fetch url ${url}, ${e.message}`));
    });
}

async function compareResponseTimes(urls) {
    const results = [];

    for (let i = 0; i < MAXLOOPS; i++) {
        for (const url of urls) {
            try {
                const responseTime = await getResponseTime(url);
                results.push(responseTime);
                console.log(`${url}: ${responseTime.totalTime}ms`);
            } catch(error) {
                console.error(`Error fetching ${url}: ${error.message}`);
            }
        }
    }
}

compareResponseTimes(TESTURLS);