const Calculator = require('./Calculator');

describe('Calculator Function', () => {
    //add the values
test('Add your values', () => {
    expect(Calculator.add(3,2)).toBe(5);
});

// substract the values
test('Substract your values', () => {
    expect(Calculator.subtract(3,3)).toBe(0);
});

//divide the values
test('divide your values', () => {
    expect(Calculator.divide(5,5)).toBe(1);
});

//multiply the values
test('multiply your values', () => {
    expect(Calculator.multiply(5,5)).toBe(25);
});

});