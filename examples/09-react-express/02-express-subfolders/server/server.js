import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import itemsRouter from './src/routes/items.route.js';
import carsRouter from './src/routes/cars.route.js';
import personsRouter from './src/routes/persons.route.js';

const app = express();
dotenv.config();
const MYPORT = process.env.PORT || 8888;

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
});

app.use(cors())
app.use('/item', itemsRouter);
app.use('/car', carsRouter);
app.use('/person', personsRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

app.listen(MYPORT, () => {
    console.log(`Server running on port ${MYPORT}`);
    // console.log(data);

});