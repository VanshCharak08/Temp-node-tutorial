const http = require('http')

const server = http.createServer((req, res) => {
  //console.log(req) Giant object

  if (req.url === '/') {
    res.end('Welcome to our home page')
  }
  if (req.url === '/about') {
    res.end('Here is our short story')
  }
  // res.write('Welcome to our home page')
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find page you are asking for</p>
  <a href="/"> back home</a>`) //If asked page is not there
})

server.listen(5000)
