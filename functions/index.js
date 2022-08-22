import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import { getDogs, testApi} from './src/dogs.js';


const app = express() //sets up express app
app.use(cors()); //tells it to allow cross=origin sharing 

app.use(express.json()) // allows post with JSON

//now we set up routes

app.get('/dogs', getDogs);
app.get('/test', testApi);


//instead of app.listen to a port, we 1 create a cloud function and 2 point it to "app"
//app.listen(port())

// must match json name easier to continue to use 'api'

export const api = functions.https.onRequest(app);





