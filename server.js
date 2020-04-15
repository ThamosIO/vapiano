'use strict';

const app = require('./index.js');

const panic = (err) => {
  process.stderr.write(`${err.stack}\n`);
  process.exit(1);
};

process.on('uncaughtException', panic);
process.on('unhandledRejection', panic);

app.listen(8080, (err) => {
  if (err) {
    throw err;
  }

  process.stderr.write('Server started on http://localhost:8080\n');
});
