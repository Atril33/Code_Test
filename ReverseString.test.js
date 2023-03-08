const  ReverseString = require('./ReverseString');

describe('ReverseString function', () => {
  test('should return the reversed string', () => {
    expect(ReverseString('hello')).toBe('olleh');
  });
});
 