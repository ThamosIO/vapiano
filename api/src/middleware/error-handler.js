const logger = require('../helpers/logger');

function errorHandler(err, req, res, next) {
  const basicMessage = 'Internal server error';
  logger.log('error', err.message || basicMessage);
  if (!err || !err.status) {
    return res.status(500).send({
      status: 500,
      message: err.message || basicMessage,
    });
  }

  res.status(err.status).send({
    status: err.status,
    message: err.message,
  });
}

module.exports = errorHandler;
