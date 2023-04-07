const net = require('net');

const server = net.createServer((socket) => {
  // Handle incoming connections
  console.log('Client connected');
  
  // Set encoding to UTF-8
  socket.setEncoding('utf8');
  
  // Handle incoming data
  socket.on('data', (data) => {
    console.log(`Received data: ${data}`);
  });
  
  // Handle connection errors
  socket.on('error', (err) => {
    console.log(`Error: ${err}`);
  });
  
  // Handle connection end
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

// Start listening on port 8080
server.listen(8080, () => {
  console.log('Server listening on port 8080');
});

// This code creates a new TCP server using the built-in net module in Node.js. The createServer method takes a callback function that will be called every time a new client connects.

// Inside the callback function, we handle the incoming connections by logging a message to the console. We then set the encoding of the socket to utf8, so that incoming data is automatically converted to a string.

// We handle incoming data using the data event. When data is received, we log it to the console.

// We handle errors using the error event, logging the error to the console.

// Finally, we handle the end event, which is emitted when the client disconnects, by logging a message to the console.

// The server is started by calling the listen method, passing in the port number to listen on as the first argument. When a new client connects to this server, it will log a message to the console and handle incoming data, errors, and the disconnection of the client.


// To verify http server running use => nc localhost 8080
