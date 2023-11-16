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
      if (i == names.length - 2) {
        // let newText = text.slice(0,-2)
        // newText += ' and ' + names[i]
        text += names[i] + ' and '
      } else {
        text += names[i] + ', '
      }
    }
    return 'Hello, ' + text + names[names.length - 1]
  }
}
