const HttpError = require('../http-error');

describe('HttpError', () => {
  test('must inherit Error', () => {
    expect(new HttpError()).toBeInstanceOf(Error);
  });

  test('defaults to 400 with standard message', () => {
    const err = new HttpError();
    expect(err.status).toBe(400);
    expect(err.message).toBe('Bad request');
  });

  test('sets proper status and message', () => {
    const err = new HttpError(404, 'Player not found');
    expect(err.status).toBe(404);
    expect(err.message).toBe('Player not found');
  });
});
