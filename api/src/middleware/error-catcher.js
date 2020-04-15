// Wraps all function with a try/catch
// Allows us to catch every error
function errorCatcher(fn) {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (e) {
      return next(e);
    }
  };
}

module.exports = errorCatcher;
