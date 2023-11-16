/* eslint-disable no-unreachable */
module.exports = {

  greet (name) {
    if (name == null || name === undefined || name === '') return 'Hello, my friend'
    if (name === name.toUpperCase()) return 'HELLO, ' + name + '!'
    return 'Hello, ' + name
  },

  greetMultiple (names = []) {
    return 'Hello, ' + names[0] + ' and ' + names[1]
  },

  greetMultiples (names = []) {
    let text = ''
    for (let i = 0; i < names.length - 1; i++) {
      if (i === names.length - 2) {
        // let newText = text.slice(0,-2)
        // newText += ' and ' + names[i]
        text += names[i] + ' and '
      } else {
        text += names[i] + ', '
      }
    }
    return 'Hello, ' + text + names[names.length - 1]
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
    lowerText = lowerText.slice(0, -2) + ' and ' + last + '. '

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

    return 'Hello, ' + lowerText + 'AND HELLO ' + upperText + ' !'
  }
}
