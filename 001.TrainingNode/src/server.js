const express = require('express');
const app = express();
const PORT = 4000;
const routes = require('./routes');
const connection = require('./connection');

// app.use(express.static('public'))
app.use(express.json());

connection.authenticate()
  .then(()=> console.log('Success!'))
  .catch((msgErro)=> console.log(msgErro))

app.use(routes);

app.listen(PORT, ()=> console.log(`Server running ${PORT}...`));