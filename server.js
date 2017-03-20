const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

io.on('connection', socket => {
  console.log('A new user connected!')
})

server.listen(PORT, '0.0.0.0', () => {
    const address = server.address()
    console.log(`Listening at ${address.address}:${address.port}`)
})
