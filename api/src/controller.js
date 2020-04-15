const { ObjectId } = require('mongodb');

const HttpError = require('./helpers/http-error');

async function get(req, res) {
  let { id } = req.params;

  if (!id) {
    throw new HttpError(422, 'Unprocessable entity: ID parameter is invalid');
  }

  try {
    id = ObjectId(req.params.id);
  } catch (e) {
    throw new HttpError(422, 'Unprocessable entity: ID parameter is invalid');
  }

  const verb = await req.db.collection('verbs').findOne({ _id: id });

  res.send(verb);
}

async function list(req, res) {
  const verbs = await req.db
    .collection('verbs')
    .find({})
    .project({ verb: 1 })
    .toArray();

  res.send(verbs);
}

module.exports = { get, list };
