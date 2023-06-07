import express from 'express';
import path from 'path';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(
    `Server running on port: ${port} in ${process.env.NODE_ENV} mode`
  );
});

let socketsConnected = new Set();

const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', onConnected);

function onConnected(socket) {
  console.log(socket.id);
  socketsConnected.add(socket.id);
  io.emit('clients-total', socketsConnected.size);

  socket.on('disconnect', () => {
    console.log('socket disconnected', socket.id);
    socketsConnected.delete(socket.id);
    io.emit('clients-total', socketsConnected.size);
  });

  socket.on('message', (data) => {
    console.log(data);
    socket.broadcast.emit('chat-message', data);
  });

  socket.on('feedback', (data) => {
    socket.broadcast.emit('feedback', data);
  });
}
