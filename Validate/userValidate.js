const Joi = require('@hapi/joi');
const joi = require('@hapi/joi');
const schema = {
    name: Joi.string().min(8).required(),
    email : Joi.string().min().required().email(),
}