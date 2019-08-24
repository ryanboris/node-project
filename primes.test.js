const primes = require('./primes.js')

describe('primes', () => {
  it('returns an array of prime numbers between 0 and 100', () => {
    expect(primes()).toEqual([
      2,
      3,
      5,
      7,
      11,
      13,
      17,
      19,
      23,
      29,
      31,
      37,
      41,
      43,
      47,
      53,
      59,
      61,
      67,
      71,
      73,
      79,
      83,
      89,
      97
    ])
  })
})
