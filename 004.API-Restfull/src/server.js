require('dotenv').config();
const express = require('express');
const app = express();

const connection = require('./connection');
connection.then(res => console.log('Success!')).catch(res => console.log('Failed!'))
app.use(express.json());

const userRouter = require('./routes/userRouter');
app.use(userRouter);

app.listen(process.env.PORT, ()=>console.log('Running Server!'));
