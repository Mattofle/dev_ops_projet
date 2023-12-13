/* eslint-disable no-unused-expressions */
/* eslint-disable no-void */
;(() => {
  const e = {
    532: (e) => {
      e.exports = {
        greet (e = [], t) {
          let r = []
          if (arguments.length > 2) { return 'Select only one language.' }
          if (t && t !== null) {
            if (
              ((r = this.greetWithLanguageSelection(t)),
              r.length === 1)
            ) { return r[0] }
          } else r.push('Hello, ', ' and ')
          return e && e[0]
            ? this.greetWithUpperAndLowerCase(e, r)
            : r[0] + 'my friend'
        },
        greetWithUpperAndLowerCase (e = [], t = []) {
          const r = []
          const n = []
          if (e.length === 1) {
            return e[0] === e[0].toUpperCase()
              ? t[0].toUpperCase() + e[0] + '!'
              : t[0] + e + '.'
          }
          for (let t = 0; t < e.length; t++) {
            e[t] === e[t].toUpperCase()
              ? r.push(e[t])
              : n.push(e[t])
          }
          let l = ''
          let o = n.pop()
          for (let e = 0; e < n.length; e++) l = l + n[e] + ', '
          l = l.slice(0, -2) + t[1] + o + '.'
          let p = ''
          if (r.length === 1) p = r[0]
          else {
            o = r.pop()
            for (let e = 0; e < r.length; e++) p += r[e] + ', '
            p = p.slice(0, -2) + t[1].toUpperCase() + o
          }
          return n.length === 0
            ? t[0].toUpperCase() + p + '!'
            : r.length === 0
              ? t[0] + l
              : t[0] +
                                l +
                                t[1].toUpperCase() +
                                t[0].toUpperCase() +
                                p +
                                ' !'
        },
        greetWithLanguageSelection: (e) =>
          e === 'fr'
            ? ['Bonjour, ', ' et ']
            : e === 'nl'
              ? ['Hallo, ', ' en ']
              : e === 'en' || void 0 === e
                ? ['Hello, ', ' and ']
                : [
                    'wrong language, select between fr, nl or en.'
                  ]
      }
    }
  }
  const t = {}
  !(function r (n) {
    const l = t[n]
    if (void 0 !== l) return l.exports
    const o = (t[n] = { exports: {} })
    // eslint-disable-next-line no-sequences
    return e[n](o, o.exports, r), o.exports
  })(532)
})()
