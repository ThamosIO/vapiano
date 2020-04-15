const { objectIdToTimestamp, uniqueName } = require('../id');

describe('id helpers', () => {
  describe('objectIdToTimestamp', () => {
    test('should return a timestamp', () => {
      expect(objectIdToTimestamp('5c2673e0c279a64ced440480')).toBe(1546023904);
    });

    test('should throw if the ObjectId is invalid', () => {
      expect(() => objectIdToTimestamp('dragonborn')).toThrow();
    });
  });

  describe('uniqueName', () => {
    test('should contain the name of the file in the string', () => {
      expect(uniqueName('gnome')).toContain('gnome-');
    });
  });
});
