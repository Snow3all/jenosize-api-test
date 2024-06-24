const Campaign = require("../../orm/mongoose/models/campaign.model");

exports.getCampaign = async (parameter) => {
  let document = {};
  if (!parameter.id) {
    document = await Campaign.find().lean();
  } else {
    document = await Campaign.findOne({ _id: parameter.id })
      .lean();
  }
  return document;
};

exports.createCampaign = async (data) => {
  const document = await Campaign(data.body).save();
  return document;
};

exports.editCampaign = async (data, parameter) => {
  const param = {
    name: data.body.name,
    subject: data.body.subject,
    content: data.body.content,
    email: data.body.email,
    createBy: data.body.createBy,
  };
  const document = await Campaign.findOneAndUpdate({ _id: parameter.id }, param)
    .select("-_id")
    .lean();
  return document;
};

exports.deleteCampaign = async (parameter) => {
  const document = await Campaign.findOneAndDelete({
    _id: parameter.id,
  }).lean();
  console.log("🚀 ~ exports.deleteCampaign ~ document:", document)
  return document;
};
