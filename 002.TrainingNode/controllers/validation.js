const Joi = require('joi');

const registerValidation = (data)=>{
  const schema = Joi.object({
    name: Joi.string().required().min(3).max(50),
    email: Joi.string().required().min(3).max(50),
    password: Joi.string().required().min(8).max(100)
  })
  return schema.validate(data);  
}

const loginValidation = (data)=>{
  const schema = Joi.object({
    email: Joi.string().required().min(3).max(50),
    password: Joi.string().required().min(8).max(100)
  })
  return schema.validate(data);
}

module.exports = {registerValidation, loginValidation};