const { STATUS_CODES } = require('http');

class HttpError extends Error {
  constructor(status = 400, message = 'Bad request') {
    super(STATUS_CODES[status]);
    this.status = status;
    this.message = message;
  }
}

module.exports = HttpError;
