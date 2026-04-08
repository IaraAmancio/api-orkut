
const Joi = require('joi');

const postSchema = Joi.object({
    titulo: Joi.string().min(3).required().messages({
        "string.empty": "Título é obrigatório",
        "string.min": "Título deve conter no mínimo 3 caracteres",
        "any.required": "Título é obrigatório"
    }),
    conteudo: Joi.string().min(5).required().messages({
        "string.empty": "Conteúdo é obrigaório",
        "string.min": "Conteúdo deve conter no minímo 5 caracteres",
        "any.required": "Conteúdo é obrigatório"
    }),
});

function validarPost (req, res, next){
    const {error} = postSchema.validate(req.body, {abortEarly: false});
    if(error){
        console.log(error);
        return res.status(400).json({
            erro: error.details.map(e => e.message)
        })
    }
    next();
}

module.exports = {validarPost}