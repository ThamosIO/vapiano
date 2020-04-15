const { parseBoolean } = require('../common');

describe('common helpers', () => {
  describe('parseBoolean', () => {
    test('should throw if parameter is not parsable as boolean', () => {
      expect(() => parseBoolean('[]')).toThrow();
      expect(() => parseBoolean('{}')).toThrow();
      expect(() => parseBoolean('')).toThrow();
      expect(() => parseBoolean('The dragon looks at you with a fierce fire in his eyes. What do you do ?')).toThrow();
    });
    test('should accept any boolean as parameter', () => {
      expect(parseBoolean(true)).toEqual(true);
      expect(parseBoolean('true')).toEqual(true);
      expect(parseBoolean(1)).toEqual(true);
      expect(parseBoolean(false)).toEqual(false);
      expect(parseBoolean('false')).toEqual(false);
      expect(parseBoolean(0)).toEqual(false);
    });
  });
});
