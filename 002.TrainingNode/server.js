require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const clientRouter = require('./routes/clientRouter');

mongoose.connect(process.env.CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('Connected!'))
  .catch((error)=> console.log('Failed!'))



app.use('/client', express.json(), clientRouter);

app.get('/test', (req,res)=>{
  res.send('Hello TEST')
})


app.listen(process.env.PORT, ()=>console.log(`Server running in ${process.env.PORT}`));