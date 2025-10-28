//NOTE: ADD YOUR IMPORTS HERE

// NOTE: Add links to route files here
import examplesRouter from './src/routes/examples.route.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

//NOTE: Add your middleware here


//NOTE: Should have a path to test server health
app.get('/server-up', (req, res) => {
    res.json({'message': 'ok'});
});

//NOTE: Add the path to the router files here in order to call it
app.use('/examples', examplesRouter);
  
// Error handler middleware 
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});

    return;
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})