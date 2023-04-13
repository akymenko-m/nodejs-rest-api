const Joi = require("joi");

const addSchema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string(),
    email: Joi.string(),
    favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean(),
}).min(1);

module.exports = { addSchema, updateFavoriteSchema };
