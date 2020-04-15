const { MongoClient } = require('mongodb');
const genericPool = require('generic-pool');

const { parseBoolean } = require('../helpers/common');
const logger = require('../../../logger');

const {
  URI_PREFIX: prefix,
  MONGO_HOST: host,
  MONGO_PORT: port,
  MONGO_DB: database,
} = process.env;

class MongoDBClient {
  constructor() {
    const opts = {
      host,
      port,
      db: database,
      max: 100,
      min: 1,
      acquireTimeoutMillis: 100,
    };

    this.uri = MongoDBClient.buildURI(prefix, host, port, database, true);
    this.isMongoUp();

    this.pool = genericPool.createPool(
      {
        create: () =>
          MongoClient.connect(this.uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }),
        destroy: (client) => client.close(),
      },
      opts,
    );
  }

  static buildURI(pre, h, p, db, s) {
    return parseBoolean(s) ? `${pre}://${h}:${p}/${db}` : `${pre}://${h}/${db}`;
  }

  async isMongoUp() {
    const mongo = await MongoClient.connect(this.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongo.close();
  }

  async getClient() {
    try {
      const client = await this.pool.acquire();
      return client;
    } catch ({ message }) {
      logger.log('error', message);
    }
    return null;
  }

  async releaseClient(resource) {
    try {
      if (resource && !resource.isConnected()) {
        await this.pool.destroy(resource);
      } else {
        await this.pool.release(resource);
      }
    } catch ({ message }) {
      logger.log('error', message);
    }
  }
}

module.exports = MongoDBClient;
