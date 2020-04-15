const app = require('express')();
const helmet = require('helmet');
const { errorHandler, mongo } = require('./src/middleware');
const verbs = require('./src/routes');

app.use(helmet());

app.use(mongo());

app.use('/verbs', verbs);

app.use(errorHandler);

module.exports = app;
