const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.end('Hello, world!');
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server running on port 3000');
});

// To verify http server running use => curl http://localhost:3000
