import express from 'express';
import path from 'node:path';
import logger from './logger.js';
import data from './data/people.js';
import { fileURLToPath } from 'node:url';

const app = express();
const PORT = 8765;
const WWWDIR = 'public';
const ERRDIR = 'errorpages';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

data.sort((a, b) => a.id - b.id);
const idMap = new Map(data.map(obj => [obj.id, obj]));
const lastNameMap = new Map();
data.forEach(person => {
    const key = person.lastName.toLowerCase();
    if (!lastNameMap.has(key)) lastNameMap.set(key, []);
    lastNameMap.get(key).push(person);
});

const OPTIONS = {
    'index': 'form.html',
    'etag': false,
    'lastModified': false,
    'cacheControl': false,
    'setHeaders': (res, path, stat) => {
        res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    }
}

app.use(express.static(WWWDIR, OPTIONS));
app.use(express.json());

app.get('/favicon.ico', (req, res) => {
    res.status(204);
});

app.get('/persons{/:id}', (req, res) => {
    console.log(req.params);
    if (req.params.id === undefined) {
        res.json(data);
    } else {
        let userId = Number(req.params.id);
        if (idMap.get(userId) === undefined) {
            res.status(416).sendFile(path.join(__dirname, ERRDIR, '416.html'));
            logger.error(`Person ID ${req.params.id} not found`);
        } else {
            logger.info(`Successfully got Person with ID: ${req.params.id}`);
            res.json(idMap.get(userId));
        }

    }
});

app.get('/names{/:lastName}', (req, res) => {;
    if (req.params.lastName === undefined) {
        res.json(data);
    } else {
        let lastName = String(req.params.lastName).trim().toLowerCase();
        if (lastNameMap.get(lastName) === undefined) {
            res.status(416).sendFile(path.join(__dirname, ERRDIR, '416.html'));
            logger.error(`Last name ${req.params.lastName} not found`);
        } else {
            logger.info(`Successfully got Person(s) with last name: ${req.params.lastName}`);
            res.json(lastNameMap.get(lastName));
        }

    }
});

app.put('/sendfetch', (req, res) => {

    const num = Number(req.body.num);
    if (Number.isNaN(num)) {
        const result = {
            square: -1,
            cube: -1,
            double: -1
        };

        res.json(result);
        logger.error(`${req.body.num} is not a number`)
    } else {
        const result = {
            square: num * num,
            cube: num * num * num,
            double: num * 2
        };
        
        res.json(result);
        logger.info(`Successfully calculated ${num}`)
    }
});

app.use((req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(400).sendFile(path.join(__dirname, ERRDIR, '400.html'))
    logger.error(`Error 400 sent for file ${req.url}`);
});

app.listen(PORT, () => {
    logger.info(`Server Listening on Port ${PORT}`);
});