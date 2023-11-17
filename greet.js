/* eslint-disable no-unreachable */
module.exports = {
  greet (names = []) {
    if (names == null || names[0] === undefined || names[0] === '') { return 'Hello, my friend' }
    if (names.length === 1) {
      if (names[0] === names[0].toUpperCase()) return 'HELLO, ' + names[0] + '!'
      return 'Hello, ' + names
    } else {
      return this.greetWithUpperAndLowerCase(names)
    }
  },

  greetWithUpperAndLowerCase (names = []) {
    const upperNames = []
    const lowerNames = []

    for (let i = 0; i < names.length; i++) {
      if (names[i] === names[i].toUpperCase()) {
        upperNames.push(names[i])
      } else {
        lowerNames.push(names[i])
      }
    }

    let lowerText = ''
    let last = lowerNames.pop()
    for (let i = 0; i < lowerNames.length; i++) {
      lowerText = lowerText + lowerNames[i] + ', '
    }
    lowerText = lowerText.slice(0, -2) + ' and ' + last + '.'

    let upperText = ''
    if (upperNames.length === 1) {
      upperText = upperNames[0]
    } else {
      last = upperNames.pop()
      for (let i = 0; i < upperNames.length; i++) {
        upperText += upperNames[i] + ', '
      }
      upperText = upperText.slice(0, -2) + ' AND ' + last + '. '
    }
    if (lowerNames.length === 0) return 'HELLO, ' + upperText + '!'
    if (upperNames.length === 0) return 'Hello, ' + lowerText
    return 'Hello, ' + lowerText + ' AND HELLO ' + upperText + ' !'
  },

  greetWithLanguageSelection (names, language) {
    if (arguments.length > 2) return 'Select only one language.'
    if (language === 'fr') {
      return 'Bonjour, ' + names + '.'
    } else if (language === 'nl') {
      return 'Hallo,' + names + '.'
    } else if (language === 'en' || !language) {
      return 'Hello, ' + names + '.'
    } else {
      return 'wrong language, select between fr, nl or en.'
    }
  }
}
