const players = require('../mocks/players');
const { get, list } = require('../controller');

const req = {
  params: '44',
  players,
};

const res = {
  send: jest.fn(),
};

describe('Controller', () => {
  describe('get', () => {
    test('must throw if no id is passed', async () => {
      expect(() => get({ params: {} }, res)).toThrow();
    });

    test('must throw if id param is not a number', () => {
      expect(() =>
        get({ params: { id: 'Hello guys, is this code cool or what?' } }, res),
      ).toThrow();
    });

    test('must return the right player', async () => {
      await get({ ...req, params: { id: 44 } }, res);
      expect(res.send).toHaveBeenCalledWith({ id: 44, name: 'Fedal' });
    });

    test("must throw 404 if player doesn't exist", () => {
      expect(() => get({ ...req, params: { id: 404 } }, res)).toThrow();
    });
  });

  describe('list', () => {
    test('must sort players by id', () => {});

    test('must return an empty array if players is not defined', async () => {
      await list({}, res);
      expect(res.send).toHaveBeenCalledWith([]);
    });

    test('must return a single player', async () => {
      await list(req, res);
      expect(res.send).toHaveBeenCalledWith(players);
    });
  });
});
