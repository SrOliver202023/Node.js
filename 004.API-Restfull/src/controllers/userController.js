const BCrypt = require('bcryptjs');
const User = require('../controllers/userController');
module.exports = {
  register: async function(req, res){

    const user ={
      name: req.body.name,
      age: req.body.age,
      city: req.body.city,
      uf: req.body.uf,
      email: req.body.email,
      password: BCrypt.hashSync(req.body.password)
    }

    res.send("Hello World!");
  },
  login: async function(req, res){
    console.log();
  }
}