require('dotenv').config();
const express = require('express');
const app = express();

const connection = require('./connection');
connection.then(res => console.log('Success!')).catch(error => console.log(error));
app.use(express.json());

const userRouter = require('./routes/userRouter');
const postRouter = require('./routes/postRouter');

app.use(userRouter);
app.use(postRouter);

app.listen(process.env.PORT, ()=>console.log('Running Server!'));
