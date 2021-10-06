const express = require('express');
const Router = express.Router();
const { Server } = require('socket.io');
const io = new Server({ /* options */ });

io.on("connection", (socket) => {
  // ...
});

io.listen(3000);

// Router.get('/', (req,res)=> res.send('Hello User!'));
// Router.get('/message', (req, res)=>{
//   socket.onopen = () => {
//     socket.send("Hello!");
//   };
  
//   socket.onmessage = (data) => {
//     console.log(data);
//   };

// })










module.exports = Router;