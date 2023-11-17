/* eslint-disable no-unreachable */
module.exports = {
  greet (names = [], language) {
    let greetLanguage = []

    if (arguments.length > 2) return 'Select only one language.'

    if (!language || language === null) {
      greetLanguage.push('Hello, ', ' and ')
    } else {
      greetLanguage = this.greetWithLanguageSelection(language)
      if (greetLanguage.length === 1) return greetLanguage[0]
    }

    if (!names || !names[0]) { return greetLanguage[0] + 'my friend' }

    return this.greetWithUpperAndLowerCase(names, greetLanguage)
  },

  greetWithUpperAndLowerCase (names = [], greetLanguage = []) {
    const upperNames = []
    const lowerNames = []

    if (names.length === 1) {
      if (names[0] === names[0].toUpperCase()) return greetLanguage[0].toUpperCase() + names[0] + '!'
      return greetLanguage[0] + names + '.'
    }

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
    lowerText = lowerText.slice(0, -2) + greetLanguage[1] + last + '.'

    let upperText = ''
    if (upperNames.length === 1) {
      upperText = upperNames[0]
    } else {
      last = upperNames.pop()
      for (let i = 0; i < upperNames.length; i++) {
        upperText += upperNames[i] + ', '
      }
      upperText = upperText.slice(0, -2) + greetLanguage[1].toUpperCase() + last
    }

    if (lowerNames.length === 0) return greetLanguage[0].toUpperCase() + upperText + '!'
    if (upperNames.length === 0) return greetLanguage[0] + lowerText

    return greetLanguage[0] + lowerText + greetLanguage[1].toUpperCase() + greetLanguage[0].toUpperCase() + upperText + ' !'
  },

  greetWithLanguageSelection (language) {
    if (language === 'fr') {
      return ['Bonjour, ', ' et ']
    } else if (language === 'nl') {
      return ['Hallo, ', ' en ']
    } else if (language === 'en' || language === undefined) {
      return ['Hello, ', ' and ']
    } else {
      return ['wrong language, select between fr, nl or en.']
    }
  }
}
