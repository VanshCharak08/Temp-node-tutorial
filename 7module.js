//Modules

//CommonJS ,every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

// const {vansh} = require('./3-names') Direct destructuring
// const {charak} = require('./3-names')
const names = require('./3-names')
const sayHi = require('./4-utils')
const { singlePerson } = require('./5-AlternativeApproach')

// console.log(names);

// sayHi('Jerry');
// sayHi(names.vansh);
// sayHi(names.charak);

// sayHi(vansh);
// sayHi(charak);

const data = require('./5-AlternativeApproach')
console.log(data)
// console.log(data.items[0])
// console.log(singlePerson.name)

require('./6-mindGrenade')
