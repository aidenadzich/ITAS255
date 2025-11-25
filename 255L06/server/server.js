import express from 'express';
import cors from 'cors';
import path from 'path'
import {promises as fs} from 'fs'

const app = express();
const PORT = 5555;

app.use(cors());
app.use(express.json());

const DATA_DIR = '../data';

async function readJson(filename) {
    const full = path.join(DATA_DIR, filename);
    const contents = await fs.readFile(full, 'utf-8');
    return JSON.parse(contents);
}

app.get('/games', async (req, res) => {
    try {
        const data = await readJson('games.json');
        let values = data;

        values.sort((a, b) => {
            a = a.game.toLowerCase();
            b = b.game.toLowerCase();

            return a < b ? -1 : a > b ? 1 : 0;
        })
        return res.json(values);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Failed to read games.json"});
    }
});

app.get('/person', async (req, res) => {
    try {
        const data = await readJson('persons.json');
        let values = data;

        values.sort((a, b) => {
            a = a.last_name.toLowerCase();
            b = b.last_name.toLowerCase();

            return a < b ? -1 : a > b ? 1 : 0;
        })
        return res.json(values);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Failed to read persons.json"});
    }
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});