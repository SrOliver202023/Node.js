const mongoose = require('mongoose');

const connection = mongoose.connect(process.env.CONNECTION, {
  useNewUrlParser:true,
  useUnifiedTopology:true
});

//useCreateIndex:true,
module.exports = connection;