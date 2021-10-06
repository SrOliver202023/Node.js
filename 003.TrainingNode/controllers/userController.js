const myIO = require('socket.io-client').io;
const socket = myIO('http://localhost:3000/');

const userController = {
  sendMessage: async function(req, res){
    const body = req.body;

    await socket.emit('client', {msg:req.body.msg})

    let value = await`[USER] : ${body.msg}`; 
    // res.send('Welcome');

    await socket.on("msgToclient", async data =>{
      console.log(`${data.msg}`)
      await res.send(`
      <h2>${value}</h2>
      <h2>${data.msg}</h2>
      `)
    })
  }
  

}



module.exports = userController;