function parseBoolean(value) {
  let bool = JSON.parse(value);

  if ([0, 1].indexOf(bool) !== -1) {
    bool = Boolean(bool);
  }
  if (!(typeof bool === 'boolean')) {
    throw new Error('parseBoolean::Parameter must be parsable as boolean or string.');
  }

  return Boolean(bool);
}

module.exports = { parseBoolean };
