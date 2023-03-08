const StringLength = require('./StringLength');

describe('StringLength', () => {
  test('returns length of string if length is less than or equal to 10', () => {
    expect(StringLength('hello')).toBe(5);
  });

  test('returns "fail" if length of string is greater than 10', () => {
    expect(StringLength('abcdefghijklmnopqrstuvwxyz')).toBe('String lenght is zero');
  });

});
