const MongoDBClient = require('../src/helpers/mongo-client');
const verbs = require('./scrapped-verbs.json');

const { MONGO_DB: DB } = process.env;

async function insertData() {
  const MongoClient = new MongoDBClient();
  const client = await MongoClient.getClient();
  const database = client.db(DB);

  const result = await database.collection('verbs').insertMany(verbs);
  return result;
}

insertData();
