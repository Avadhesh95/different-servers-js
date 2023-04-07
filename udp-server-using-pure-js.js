const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(8080);

// This code creates a new UDP server using the built-in dgram module in Node.js. The createSocket method takes an argument specifying the type of socket to create, in this case udp4 for IPv4 UDP.

// The server listens for three events: error, message, and listening. If an error occurs, it is logged to the console and the server is closed. If a message is received, it is logged to the console along with the sender's IP address and port. When the server starts listening, its address is logged to the console.

// Finally, the server is bound to port 8080 using the bind method. When a message is received on this port, the message event is emitted and the message is logged to the console.


// To verify udp server running use => nc localhost 8080
