module.exports = {

  greet (name) {
    if (name == null || name === undefined || name === '') return 'Hello, my friend'
    if (name === name.toUpperCase()) return 'HELLO, ' + name + '!'
    return 'Hello, ' + name
  },

  greetMultiple (names = []) {
    return 'Hello, ' + names[0] + ' and ' + names[1]
  }
}
