const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, './template.js'), 'utf8', (err, data) => {
  if (err) return console.log('error reading.')
  fs.writeFile(path.join(__dirname, './result.js'), replace(data), err => {
    if (err) return console.log('error writing.')
  })
})

function replace(data) {
  let result = data.replace(/\n+/g, `\n`)
  while (/(\n\s+)/g.test(result)) {
    result = result.replace(RegExp.$1, `\n` + `\\t`.repeat(RegExp.$1.length/2))
  }
  result = `"` + result.replace(/"/g, `\\"`).replace(/\n/g, `",\n"`).replace(/,\n"$/g, ``)
  return result
}
