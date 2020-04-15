const errorHandler = require('../error-handler');
const HttpError = require('../../helpers/http-error');

/*function errorHandler(err, req, res, next) {
  if (err && !err.status) {
    return res.status(500).send({
      message: 'Internal server error',
    });
  }

  res.status(err.status).send({
    status: err.status,
    message: err.message,
  });
}
*/

const err = new HttpError();
const req = {};
const res = {
  send: jest.fn(),
};
// Allows recursive calls, res.status().send()
res.status = jest.fn().mockReturnValue(res);

const next = () => null;

describe('errorHandler', () => {
  afterEach(() => {
    res.send.mockClear();
    res.status.mockClear();
  });
  test('must send a 500 status with standard message if err has no status', () => {
    errorHandler(null, req, res, next);
    expect(res.send).toHaveBeenCalledWith({
      status: 500,
      message: 'Internal server error',
    });
    expect(res.status).toHaveBeenCalledWith(500);
  });

  test('must send the error status and message if set', () => {
    errorHandler(err, req, res, next);
    expect(res.send).toHaveBeenCalledWith({
      status: 400,
      message: 'Bad request',
    });
    expect(res.status).toHaveBeenCalledWith(400);
  });
});
