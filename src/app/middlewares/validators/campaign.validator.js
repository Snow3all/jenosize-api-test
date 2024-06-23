const Joi = require('joi');

const campaignSchema = Joi.object({
  name: Joi.string().required(),
  subject: Joi.string().required(),
  content: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  createBy: Joi.string().required(),
});

exports.campaignValidate = (data) => {
  try {
    const value = campaignSchema.validate(data);
    if(!value.error) {
      return value;
    } else {
      return value.error;
    }
  } catch (e) {
    return e
  }
};
