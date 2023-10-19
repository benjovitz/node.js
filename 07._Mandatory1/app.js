import express from 'express';

import mountainController from './controllers/mountainController.js';
import simpleApiController from './controllers/simpleController.js';
import htmlController from './controllers/htmlController.js';
import signInController from './controllers/signInController.js';

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use('/', htmlController);
app.use('/api', mountainController);
app.use('/api', simpleApiController);
app.use('/api', signInController);

app.listen(process.env.PORT || 3000);
