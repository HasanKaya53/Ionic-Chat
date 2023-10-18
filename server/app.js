const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketIO(server);
require('dotenv').config();
const cors = require('cors');


app.use(cors());
app.use(express.json());



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
    token: "token token",
    username: req.body.username
  };
  console.log(json);
  res.status(200).send(json);
});

app.post('/rooms',(req,res)=>{
  let json = [
    {RoomID: 1, Name: 'Room 1'},
    {RoomID: 2, Name: 'Room 2'},
    {RoomID: 3, Name: 'Room 3'},
    {RoomID: 4, Name: 'Room 4'},
    {RoomID: 5, Name: 'Room 5'},
    {RoomID: 6, Name: 'Room 6'},

  ]
  console.log(json);
  res.status(200).send(json);
});





io.on('connection', (socket) => {


  console.log('Bir istemci bağlandı.');
  socket.on('mesaj', (data) => {
    console.log(`İstemciden gelen mesaj: `);
    console.log(data);
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
