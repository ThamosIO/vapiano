const winston = require('winston');

const { format } = winston;
const { NODE_ENV } = process.env;

const formats = [winston.format.colorize()];

formats.push(format.timestamp());
formats.push(format.prettyPrint());

const logger = winston.createLogger({
  level: NODE_ENV === 'production' ? 'info' : 'debug',
  format: winston.format.combine(...formats),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

logger.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  }),
);

module.exports = logger;
