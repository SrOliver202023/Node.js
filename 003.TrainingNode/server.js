const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const socketIO = require('socket.io');

app.use(express.json());
app.use(userRoutes);

const { messagesController } = require('./controllers/messagesController');


messagesController.server = messagesController.initServer(app).listen(3000, () => console.log('listening on 3000'));
messagesController.sendMessage();
