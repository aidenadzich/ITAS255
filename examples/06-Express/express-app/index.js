import express from 'express';
import data from './data/somedata.js';
import pug from 'pug';
import hbs from 'hbs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import logger from './logger.js';

//NOTE: Add constants at the top
const app = express();
const PORT = 8888;
const WWWDIR = 'public';
const ERRDIR = 'errors';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//todo: 1. Show returning static string

// app.get(`/`, (req, res) => {
//     res.send('Hello there! (General Kenobi...)')
// });

//todo: 10. Show view engines

// app.set('view engine', 'pug');
app.set('view engine', 'hbs');
//todo: 2. Show returning static items 

const OPTIONS = {
    'index': 'index.html',
    'etag': false,
    'lastModified': false,
    'cacheControl': false,
    'setHeaders': (res, path, stat) => {
        res.set('myHeader', 'Aiden');
        res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    }
}

app.use(express.static(WWWDIR, OPTIONS));

//todo: 11. logging using morgan

logger.info('Information Message');
logger.error('Error Message');
logger.warn('Warning Message');
logger.debug('Debug Message');
logger.silly('Silly Message');

//todo: 2a. handling favicon.ico

app.get('/favicon.ico', (req, res) => {
    res.status(204);
});

//todo: 10. templating using pug

// app.get('/about', (req, res) => {
//     res.render('about', {title: 'About', message: ': Do or do not, there is no try'})
// });

app.get('/hbs', (req, res) => {
    res.render('hbs', {title: 'About', message: ': Do or do not, there is no try'})
});

//todo: 3. Show basic routing (need to use postman)

app.get('/items', (req, res) => {
    console.log(req.headers);
    console.log(req.header('host'));
    res.send(`Got GET from url ${req.originalUrl}`);
    logger.info('Sent get from /items');
});

app.post('/items', (req, res) => {
    res.send(`Got POST from url ${req.originalUrl}`);
});

app.put('/items', (req, res) => {
    res.send(`Got PUT from url ${req.originalUrl}`);
});

app.delete('/items', (req, res) => {
    res.send(`Got DELETE from url ${req.originalUrl}`);
});
//todo: 4. Show app.route for middleware and refactoring
app.route('/cars')
    .get((req, res) => {
        res.send(`Got GET from url ${req.originalUrl}`);
    })
    .post((req, res) => {
        res.send(`Got POST from url ${req.originalUrl}`);
    })
    .put((req, res) => {
        res.send(`Got PUT from url ${req.originalUrl}`);
    })
    .delete((req, res) => {
        res.send(`Got DELETE from url ${req.originalUrl}`);
    });

//todo: 5. Show various routing possibilities

// app.get('/persons', (req, res) => {
//     res.json(data);
// });

//todo: 6. Combine routing using optional parameters

app.get('/persons{/:id}', (req, res) => {
    console.log(req.params);
    if (req.params.id === undefined) {
        res.json(data);
    } else {
        let userId = Number(req.params.id);
        console.log(data[userId]);
        res.json(data[userId]);
    }
});

//todo: 7. Show multiple parameters

// app.get('/persons:id/provinces{/:prov}', (req, res) => {
//     console.log(req.params);
//     if (req.params.id === undefined) {
//         res.json(data);
//     } else {
//         let userId = Number(req.params.id);
//         console.log(data[userId]);
//         res.json(data[userId]);
//     }
// });

//todo: 8. Using builtin middleware to access information
app.use(express.json());

app.put('/getjson', (req, res) => {
    console.log(req.body);
    console.log(req.body.a);
    res.send(req.body);
});

//todo: 9. getting information from a form
app.use(express.urlencoded({extended: true}));

app.post('/getencoded', (req, res) => {
    console.log(req.body);
    console.log(req.body.firstName);
    res.send(req.body);
});

//todo: 2b default error

app.use((req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(404).sendFile(path.join(__dirname, ERRDIR, '404.html'))
    logger.error(`Error 404 sent for file ${req.url}`);
});

app.listen(PORT, () => {
    logger.info(`Server Listening on Port ${PORT}`);
});