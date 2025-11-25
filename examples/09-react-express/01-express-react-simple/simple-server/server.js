import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

let sportList = {sports: ['hockey', 'ballroom dancing', 'bowling', 'darts']};

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
    res.send('Server is alive and running');
})

app.get('/cities', (_, res) => {
    let cityList = {cities: ['Ottawa', 'Montreal', 'Toronto', 'Quebec']};
    res.json(cityList);
});

app.use(express.urlencoded({'extended': true}));
app.route('/sports')
    .get((_, res) => res.json(sportList))
    .post((req, res) => {
        sportList.sports.push(req.body.newSport);
        res.json("Success");
    });

app.listen(PORT, () => 
    console.log(`Express listening on port ${PORT}`)
);