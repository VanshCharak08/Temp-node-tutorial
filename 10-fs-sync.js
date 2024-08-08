//Interaction with file system
const { readFileSync, writeFileSync } = require('fs')
console.log('start')

// const fs = require('fs')
// fs.read

const text = readFileSync('./content/text.txt', 'utf-8')
console.log(text)

const test = readFileSync('./content/subFolder/test.txt', 'utf-8')
console.log(test)

// writeFileSync('./content/newFile.txt',`The new result is ${text}, ${test}`)

// writeFileSync('./content/text.txt','This content just overwrites the text file')

//For append
writeFileSync('./content/newFile.txt', `The new result is ${text}, ${test}`, {
  flag: 'a',
})

console.log('Task is done')
console.log('Starting the task')

/*Synchronous Task 
Problem ek user file ko Read and Write krega synchronously isse time khayega heavy task so jam hojayega ek hi user ki request process krne me

Asynchronous better Approach*/
