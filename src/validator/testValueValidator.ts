import * as Joi from 'joi'

export const tesValueValidator = Joi.object().keys({
    question: Joi.string().required(),
    answers: Joi.array().items(
        Joi.object({
            value: Joi.string().required(),
            correct: Joi.boolean().required()
        })
    ).required(),
    level: Joi.string().required(),
    subject: Joi.string().max(255).required(),
    group: Joi.string().max(255).required(),
    tags: Joi.array().items(Joi.string())
});
