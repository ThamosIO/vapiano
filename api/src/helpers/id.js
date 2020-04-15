const { ObjectId } = require('mongodb');
const uniqid = require('uniqid');

function objectIdToTimestamp(id) {
  return new Date(ObjectId(id).getTimestamp()).getTime() / 1000;
}

function uniqueName(name) {
  return uniqid(`${name}-`);
}

module.exports = {
  objectIdToTimestamp,
  uniqueName,
};
