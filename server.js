// Imports
const express = require('express');
const socketio = require('socket.io');
const http = require('http');

// Setting up express and socketio servers
const app = express()
const server = http.createServer(app)
const io = socketio(server)

// Port using ENV or 3000
const PORT = process.env.PORT || 3000

// Serve up / with the index template
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

// Boilerplate code to log to the console when someone connects to socketio
io.on('connection', socket => {
  console.log('A new user connected!')
})

// Start the server!
server.listen(PORT, '0.0.0.0', () => {
    const address = server.address()
    console.log(`Listening at ${address.address}:${address.port}`)
})
