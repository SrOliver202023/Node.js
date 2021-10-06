const connection = require('../connection');
const User = require('../models/User');
const { Sequelize } = require('sequelize');
const data = require('../datafake');

connection.showAllSchemas().then(item => item.map(table => {
  console.log(table.Tables_in_workplace === "users"? "users OK": User.sync({ force:true }));
}));

const HomeMain = async (req, res)=>{

  // let registers = await listToRegister(doc => User.create({ doc })) 

  // await data.map((item, index) => User.create({ name:item.name, age:item.age }).then(`[${index}] - OK`))
  // .then(`[${index}] - OK`)

  // let result = await User.findAll()
  //   .then(resp => resp.map(item => item.age))
  // res.send(`HI!\n${result}`);

  res.send('HI!');
}

module.exports = { HomeMain }