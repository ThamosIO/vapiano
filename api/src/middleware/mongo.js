const MongoDBClient = require('../helpers/mongo-client');

const { MONGO_DB: DB } = process.env;

function mongo() {
  const client = new MongoDBClient();

  return async (req, res, next) => {
    req.mongo = await client.getClient();
    req.db = req.mongo.db(DB);

    try {
      await next();
    } finally {
      await client.releaseClient(req.mongo);
    }
  };
}

module.exports = mongo;
