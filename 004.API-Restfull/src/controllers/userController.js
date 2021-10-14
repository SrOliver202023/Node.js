const BCrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const User = require('../model/User');
const { registerValidate, loginValidate } = require('../validations/userValidation');

module.exports = {
  register: async function(req, res){

    const { error } = registerValidate(req.body);
    if(error) return res.status(400).json({msgClient: error.message});

    const user ={
      name: req.body.name,
      midleName: req.body.midleName,
      age: req.body.age,
      city: req.body.city,
      uf: req.body.uf,
      email: req.body.email,
      password: BCrypt.hashSync(req.body.password)
    } 

    const userInDataBase = await User.findOne({email:user.email});
    if(userInDataBase) return res.status(400).send('User Already Exists!');

    await User.create(user)
      .then(success =>res.status(200).send("You have been registered!"))
      .catch(error =>res.status(400).send("Error account doesn't created! "));
  },
  login: async function(req, res){

    const { error } = loginValidate(req.body);
    if(error) return res.status(400).json({msgClient: error.message});

    const user = { email: req.body.email,password: req.body.password };

    const userInDataBase = await User.findOne({email:user.email});
    if(!userInDataBase) return res.status(400).send('Email or password incorrect!');

    const checkIfPasswordIsCorrect = BCrypt.compareSync(user.password, userInDataBase.password)

    if(!checkIfPasswordIsCorrect) return res.status(400).send('Email or password incorrect!');

    const userToken = JWT.sign({
      id: userInDataBase._id,
      name: userInDataBase.name,
      email: userInDataBase.email
      
    }, process.env.SECRET, { expiresIn: parseInt(process.env.EXPIRATION_TIME) })
    res.header("authorization", userToken);
    console.log(userToken);

    res.status(200).send(`Welcome "${userInDataBase.name}"`);  
  }

}
