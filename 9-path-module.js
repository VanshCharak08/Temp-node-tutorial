const path = require('path')

console.log(path.sep)

const filepath = path.join('/content/', 'subFolder', 'test.txt') //Gives Normalized path
console.log(filepath)

const base = path.basename(filepath)
console.log(base) //base ka naam

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
