import { generateKey } from '../generators';

describe('generateKey', () => {
  test('should return a random 9 character string', () => {
    expect(generateKey().length).toBe(9);
  });
});
