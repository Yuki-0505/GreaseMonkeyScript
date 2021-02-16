const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, './template.js'), 'utf8', (err, data) => {
  if (err) return console.log('error reading.')
  fs.writeFile(path.join(__dirname, './result.js'), replace(data), err => {
    if (err) return console.log('error writing.')
  })
})

function replace(data) {
  let result = data.replace(/\n+/g, `\n`).replace(/\n\s{2}/g, `\n\\t`)
  while (/\n(\\t)+\s{2}/g.test(result)) {
    result = result.replace(/\\t\s{2}/g, `\\t\\t`)
  }
  result = `"` + result.replace(/\n/g, `",\n"`).replace(/,\n"$/g, ``)
  return result
}
