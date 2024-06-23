const Campaign = require('../../orm/mongoose/models/campaign.model');

exports.getCampaign = async (parameter) => {
  let document = {};
  if (!parameter) {
    document = await Campaign.find().lean();
  } else {
    document = await Campaign.findOne({ _id: parameter.id }).lean();
  }
  return document;
};

exports.createCampaign = async (data) => {
  const document = await Campaign(data.body).save();
  return document;
};
