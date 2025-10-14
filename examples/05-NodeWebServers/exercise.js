// Below is an HTTP server running on port 9000
// The user accesses this server and specifies an query string with the month like localhost:9000/?theMonth=3
// The server must return:
//          winter if the month is 1, 2 or 3
//          spring if the month is 4, 5 or 6
//          summer if the month is 7, 8 or 9
//          fall if the month is 10, 11 or 12
//          hell freezing over if the month <=0
//          error for all other returns
//      You must include the month passed as a header with the key "theMonth" and the data the value of the month passed in the response object
//
//      You will need to use the url and the parsed query string portion of the url to get the value
//      You do not need to require any other modules than the ones given

import url from 'node:url';
import http from 'node:http';

const PORT = 8047;

http.createServer((req, res) => {

    const parsed = url.parse(req.url, true);
    let season = "";
    let theMonth = parsed.query.theMonth;
    let hasError = false;

    if (theMonth <= 0) {
        console.log("hell freezing over");
        season = "hell freezing over";
    } else if (theMonth >= 1 && theMonth <= 3) {
        console.log("winter");
        season = "winter"
    } else if (theMonth >= 4 && theMonth <= 6) {
        console.log("spring");
        season = "spring";
    } else if (theMonth >= 7 && theMonth <= 9) {
        console.log("summer");
        season = "summer";
    } else if (theMonth >= 10 && theMonth <= 12) {
        console.log("fall");
        season = "fall";
    } else {
        console.log("error");
        theMonth = "error";
        season = "An error has occurred - Invalid month";
        hasError = true;
    }

    if (hasError === true) {

        res.writeHead(416, {
            "Content-Type": "text/html",
            "theMonth": theMonth,
            "season": season
        });

    } else {

        res.writeHead(200, {
            "Content-Type": "text/html",
            "theMonth": theMonth,
            "season": season
        });

    }

    res.end(`
        <!DOCTYPE html>
        <html lang='en'>
            <head>
                <title>255E0501</title>
            </head>
            <body>
                <h2>The current month is: ${theMonth}</h2>
                <h2>The current season is: ${season}</h2>
            </body>
        </html>    
    `);

}).listen(PORT);