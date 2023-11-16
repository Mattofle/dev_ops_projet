/* eslint-disable no-undef */
const greet = require('../greet')

describe('A suite of test for greet', function () {
  it('greeting returns given hello, + Bob', function () {
    const result = greet.greet('Bob')

    expect(result).toBe('Hello, Bob')
  })
  it('greeting with null returns "Hello, my friend"', function () {
    const result = greet.greet(null)

    expect(result).toBe('Hello, my friend')
  })
  it('greeeting with undefined returns "Hello, my friend', function () {
    const result = greet.greet()

    expect(result).toBe('Hello, my friend')
  })
  it('greeeting with empty string returns "Hello, my friend', function () {
    const result = greet.greet('')

    expect(result).toBe('Hello, my friend')
  })
  it('greeeting with full uppercase name return "HELLO, "NAME"!', function () {
    const result = greet.greet('JERRY')

    expect(result).toBe('HELLO, JERRY!')
  })
})
