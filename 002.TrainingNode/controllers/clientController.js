const Client = require('../models/Client');
const BCrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('./validation');

const clientController = {
  consult: async function(req, res){
    const result = await Client.find(); 
    res.send(result.map(item => item.name));
  },
  register: async function (req, res){
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.message);

    const clientSelected = await Client.findOne({email:req.body.email});
    if(clientSelected) return res.status(409).send(`Email already existent!`);
    
    const newClient = new Client({
      name:req.body.name,
      email:req.body.email,
      password: BCrypt.hashSync(req.body.password),
      admin:false
    })

    await newClient.save()
      .then(saved => {
        res.status(200).redirect('/login')
      })
      .catch(error => res.status(400).send(error));
  },
  login: async function(req, res){
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.message);

    const clientSelected = await Client.findOne({email:req.body.email})
    if(!clientSelected) return res.status(404).send('Email or password incorrect!');

    let resultCompare = BCrypt.compareSync(req.body.password, clientSelected.password);
    let token = jwt.sign({
      id:clientSelected._id,
      name:clientSelected.name,
      email:clientSelected.email,
    }, process.env.SECRET)
    
    res.header('authorization', token);

    res.status(200).send(`Welcome ${jwt.decode(token).name} !`);


  }
}

module.exports = clientController;