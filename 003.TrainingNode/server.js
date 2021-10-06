require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(userRoutes);

app.listen(process.env.PORT, console.log(`Running server in ${process.env.PORT}`));
