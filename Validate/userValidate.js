const Joi = require('@hapi/joi');

const userValidSchema = {
    name: Joi.string().min(8).max(50).required(),
    email : Joi.string().min(11).required().email(),
    password : Joi.string().min(8).required()
}

module.exports = userValidSchema;

