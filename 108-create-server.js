const http = require('http');

const server = http.createServer((req, res) => {
  res.write('welcome to our home page')
  res.end()
})


server.listen(5000)  //The server port 5000, 5001, 5002, 5003, 5004, 5005