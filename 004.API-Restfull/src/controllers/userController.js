const BCrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
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

    const userInDataBase = await User.findOne({email:user.email});
    if(userInDataBase) return res.status(400).send('User Already Exists!');

    await User.create(user)
      .then(success =>res.status(200).send("You have been registered!"))
      .catch(error =>res.status(400).send("Error account doesn't created! "));
  },
  login: async function(req, res){
    
    const user = { email: req.body.email,password: req.body.password };

    const userInDataBase = await User.findOne({email:user.email});
    if(!userInDataBase) return res.status(400).send('Email or password incorrect!');

    const checkIfPasswordIsCorrect = BCrypt.compareSync(user.password, userInDataBase.password)

    if(!checkIfPasswordIsCorrect) return res.status(400).send('Email or password incorrect!');

    const userToken = JWT.sign({
      id: userInDataBase._id,
      name: userInDataBase.name,
      email: userInDataBase.email

    }, process.env.SECRET);
    // , { expiresIn: 1 }
    // testToken(userToken);
    res.header("authorization", userToken);
    
    const loggedUser = JWT.decode(req.header("authorization"), process.env.SECRET)

    console.log(loggedUser);
    res.send(`Welcome "${loggedUser.name}"`);  
  },
  feed: async function(req, res){
  }
}










const testToken = (getToken)=>{
  let timeCheck = setInterval(() => {
    try{
      console.log(JWT.verify(getToken, process.env.SECRET));
    }catch(err){
      clearInterval(timeCheck);
      console.log(`Token Expired!`);
    };
  }, 5);
}