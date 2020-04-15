const MongoDBClient = require('../mongo-client');

const prefix = 'prefix';
const hostname = 'hostname';
const port = 'port';
const db = 'db';

describe('DBController', () => {
  describe('buildURI', () => {
    test('should include the port or not according to shouldUsePort', () => {
      expect(
        MongoDBClient.buildURI(prefix, hostname, port, db, false),
      ).not.toContain(port);
      expect(
        MongoDBClient.buildURI(prefix, hostname, port, db, true),
      ).toContain(port);
    });
    test('should accept strings as shouldUsePort', () => {
      expect(
        MongoDBClient.buildURI(prefix, hostname, port, db, 'false'),
      ).not.toContain(port);
      expect(
        MongoDBClient.buildURI(prefix, hostname, port, db, 'true'),
      ).toContain(port);
    });
    test('should throw if shouldUsePort is not a boolean string', () => {
      expect(() =>
        MongoDBClient.buildURI(prefix, hostname, port, db, 'bite'),
      ).toThrow();
      expect(() =>
        MongoDBClient.buildURI(prefix, hostname, port, db, '{}'),
      ).toThrow();
    });
  });
});
