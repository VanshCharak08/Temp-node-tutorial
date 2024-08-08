const { readFile, writeFile } = require('fs')
console.log('start')

readFile('./content/text.txt/', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const text = result

  readFile('./content/newFile.txt/', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const newFile = result

    writeFile(
      './content/newFile1.txt/',
      `Here is the result : ${text},${newFile}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('Done with the task')
      }
    )
  })
})
console.log('Starting with the new task')

//Better Approach as in Real world we use Database and multiple users access the file So every user can access the file without waiting for another user As it much time in reading and writing database
