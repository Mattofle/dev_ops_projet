module.exports = {
  greet (name) {
    if (name == null || name == undefined) return 'Hello, my friend'
    return 'Hello, ' + name
  }
}
