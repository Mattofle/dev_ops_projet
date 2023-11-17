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
  it('greeting with two names return "Hello, Jill and Jane"', function () {
    const result = greet.greetMultiple(['Jill', 'Jane'])

    expect(result).toBe('Hello, Jill and Jane')
  })
  it('greeting with more than two names should return "Hello, Amy, Brian and Charlotte"', function () {
    const result = greet.greetMultiples(['Amy', 'Brian', 'Charlotte'])

    expect(result).toBe('Hello, Amy, Brian and Charlotte')
  })
  it('greeting with more than two names should return "Hello, Amy, Brian, Charlotte, Matteo and Teodor"', function () {
    const result = greet.greetMultiples(['Amy', 'Brian', 'Charlotte', 'Matteo', 'Teodor'])

    expect(result).toBe('Hello, Amy, Brian, Charlotte, Matteo and Teodor')
  })
  it('greeting with upper and lower case names should return "Hello, Amy and Charlotte. AND HELLO BRIAN !"', function () {
    const result = greet.greetWithUpperAndLowerCase(['Amy', 'BRIAN', 'Charlotte'])

    expect(result).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN !')
  })
  it('greeting with language selection in params should return "Bonjour, Marie"', function () {
    const result = greet.greetWithLanguageSelection('Marie', 'fr')

    expect(result).toBe('Bonjour, Marie.')
  })
  it('greeting with wrong language selection in params should return "wrong language, select between fr, nl or en."', function () {
    const result = greet.greetWithLanguageSelection('Marie', 'de')

    expect(result).toBe('wrong language, select between fr, nl or en.')
  })
  it('greeting with wrong language selection in params should return "wrong language, select between fr, nl or en."', function () {
    const result = greet.greetWithLanguageSelection('Marie', 'nl', 'fr')

    expect(result).toBe('Select only one language.')
  })
  it('greeting without language selection in params should return "Hello, Marie."', function () {
    const result = greet.greetWithLanguageSelection('Marie', '')

    expect(result).toBe('Hello, Marie.')
  })
  it('greeting language undefined should return "Hello, Marie."', function () {
    const result = greet.greetWithLanguageSelection('Marie', undefined)

    expect(result).toBe('Hello, Marie.')
  })
})
