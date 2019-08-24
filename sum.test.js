const sum = require('./sum.js')

describe('sum function', () => {
  it('returns the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
