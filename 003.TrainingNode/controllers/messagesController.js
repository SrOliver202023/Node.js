const messagesController = {
  server: undefined,
  initServer : function(app){
    return require('http').createServer(app);
  },
  sendMessage: function(){
    const io = require('socket.io')(this.server);
    io.on('connection', (socket)=>{
      socket.on('client', async data => {
        await socket.emit('msgToclient', {msg:`[SERVER] : ${data.msg}`})

      })
    })
  }
}

module.exports = { messagesController };