const net = require('net');

const server = net.createServer((client) => {
  client.setEncoding('utf8');
  console.log('Client connected');

  client.on('data', (data) => {
    console.log(`Received data: ${data}`);
  });

  client.on('end', () => {
    console.log('Client disconnected');
  });

  client.write('220 Connection established\r\n');
});

server.listen(21, () => {
  console.log('FTP server listening on port 21');
});

// This code creates a TCP server listening on port 21, the default FTP port. When a client connects, it sets the encoding of the socket to utf8 and logs a message to the console.

// When data is received from the client, it is logged to the console using the data event. When the client disconnects, the server logs a message using the end event.

// Finally, the server sends a greeting message to the client using the write method, sending the FTP code 220 to indicate a successful connection.

// This example is not a complete implementation of the FTP protocol, and lacks support for many of the features required for a fully-functional FTP server. However, it should give you an idea of the basic structure required for building an FTP server in JavaScript using Node.js.

// To verify http server running use => nc localhost 21
