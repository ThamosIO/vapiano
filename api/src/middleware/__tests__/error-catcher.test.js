const errorCatcher = require('../error-catcher');

const req = {};
const res = {};
const next = jest.fn();

const iThrow = () => {
  throw new Error('bad');
};

const imOkay = jest.fn();

describe('errorCatcher', () => {
  test('must call next with error if fn throws', async () => {
    errorCatcher(iThrow)(req, res, next);
    expect(next).toHaveBeenCalledWith(new Error('bad'));
  });

  test('must execute fn with arg req, res, next', async () => {
    errorCatcher(imOkay)(req, res, next);
    expect(imOkay).toHaveBeenCalledWith(req, res, next);
  });
});
