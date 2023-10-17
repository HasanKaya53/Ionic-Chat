const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketIO(server);
require('dotenv').config();
const cors = require('cors');


app.use(cors());



app.post('/register',(req,res)=>{
  let json = {
    status: 'success',
    message: 'Register'
  };
  console.log(json);
  res.status(200).send(json);
});

app.post('/login',(req,res)=>{
  let json = {
    status: true,
    message: 'Login',
    token: "token token"
  };
  console.log(json);
  res.status(200).send(json);
});



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
