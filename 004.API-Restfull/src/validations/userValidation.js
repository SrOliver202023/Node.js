const Joi = require('@hapi/joi');

module.exports = {
    registerValidate: (data)=>{
        const schema = Joi.object({
            name: Joi.string().required().min(4).max(50),
            midleName: Joi.string().required().min(4).max(50),
            age: Joi.number().required().min(2).greater(12),
            city: Joi.string().required().min(3).max(50),
            uf: Joi.string().required().min(2).max(50),
            email: Joi.string().required().min(14).max(100),
            password: Joi.string().required().min(8).max(200),
        })
        return schema.validate(data);
    },
    loginValidate: (data)=>{
        const schema = Joi.object({
            email: Joi.string().required().min(14).max(100),
            password: Joi.string().required().min(8).max(200),
        })
        return schema.validate(data);
    }
}