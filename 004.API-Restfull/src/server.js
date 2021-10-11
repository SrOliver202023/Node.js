require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');

app.use(userRouter);

app.use(express.json());

app.listen(process.env.PORT)
