const app = require('express')();
const helmet = require('helmet');
const logger = require('./src/helpers/logger');
const { errorHandler, mongo } = require('./src/middleware');
const verbs = require('./src/routes');

const { PORT: port, HOST: host } = process.env;

app.use(helmet());

app.use(mongo());

app.use('/verbs', verbs);

app.use(errorHandler);

app.listen(port, host, function () {
  logger.log('info', `✅ API available on ${host}:${port}`);
});
