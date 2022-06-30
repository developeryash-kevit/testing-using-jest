const factorial = require('./factorial')
test('calculate the factorial perfectly', () => {
    expect(factorial(5)).toBe(120)
})