import https from 'https';

const TESTURLS = ['www.cbc.ca', 'www.cnn.com', 'www.tsn.ca', 'www.flobikes.com','www.itas.ca','www.google.ca', 'www.ctvnews.ca'];
const MAXLOOPS = 5;

for (let i = 0; i < MAXLOOPS; i++) {
    for (let j = 0; j < TESTURLS.length; j++) {
        let start = new Date();
        https.get({hostname: TESTURLS[j]}, res => {
            res.on('data', _ => {});
            res.on('end', _ => {
                console.log(`End of data received for URL ${TESTURLS[j]} iteration ${i}`);
                let totalTime = new Date() - start;
                console.log(`${TESTURLS[j]} took ${totalTime}ms to respond`);
            });
        });
    }
}