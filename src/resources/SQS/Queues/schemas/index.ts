import * as Joi from 'joi'

export const createQueueSchema = Joi.object({
  name: Joi.string().required(),
  tags: Joi.object().pattern(Joi.string, Joi.string()).default({})
})


export const deleteQueueSchema = Joi.object({
  url: Joi.string().required()
})


export const findOneQueueParamsSchema = Joi.object({
  queueUrl: Joi.string().uri().required()
})
