const Joi = require('@hapi/joi');

module.exports = {
    createValidate: (data)=>{
        const schema = Joi.object({
            title: Joi.string().required().min(4).max(30),
            description: Joi.string().required().min(1)
        })
    }
}