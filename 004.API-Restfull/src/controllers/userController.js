const BCrypt = require('bcryptjs');
const User = require('../model/User');
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

    const checkIfUserExists = await User.findOne({email:user.email});
    if(checkIfUserExists) return res.status(400).send('User Already Exists!');

    await User.create(user)
      .then(success =>res.status(200).send("You have been registered!"))
      .catch(error =>res.status(400).send("Error account doesn't created! "));
  },
  login: async function(req, res){
    console.log();
  }
}