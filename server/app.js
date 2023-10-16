const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketIO(server);
require('dotenv').config();

io.on('connection', (socket) => {


  console.log('Bir istemci bağlandı.');
  socket.on('mesaj', (data) => {
    console.log(`İstemciden gelen mesaj: ${data}`);
    io.emit('mesaj', data);
  });

  socket.on('disconnect', () => {
    console.log('Bir istemci ayrıldı.');
  });
});


const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Sunucu ${port} numaralı port üzerinden dinleniyor.`);
});
